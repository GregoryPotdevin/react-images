'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _noImportant = require('aphrodite/no-important');

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _Arrow = require('./Arrow');

var _Arrow2 = _interopRequireDefault(_Arrow);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Thumbnails = require('./Thumbnails');

var _Thumbnails2 = _interopRequireDefault(_Thumbnails);

var _PaginatedThumbnails = require('./PaginatedThumbnails');

var _PaginatedThumbnails2 = _interopRequireDefault(_PaginatedThumbnails);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _default = require('./styles/default');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import Swipeable from 'react-swipeable';

var PropTypes = _react2.default.PropTypes;

var classes = _noImportant.StyleSheet.create(_default2.default);

var Lightbox = function (_React$Component) {
	_inherits(Lightbox, _React$Component);

	Lightbox.theme = function theme(themeStyles) {
		var extStyles = Object.assign({}, _default2.default);
		for (var key in extStyles) {
			if (key in themeStyles) {
				extStyles[key] = Object.assign({}, _default2.default[key], themeStyles[key]);
			}
		}
		return extStyles;
	};

	function Lightbox() {
		_classCallCheck(this, Lightbox);

		var _this = _possibleConstructorReturn(this, _React$Component.call(this));

		_utils2.default.bindFunctions.call(_this, ['gotoNext', 'gotoPrev', 'handleKeyboardInput']);
		return _this;
	}

	Lightbox.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
		if (!_utils2.default.canUseDom) return;

		// preload images
		if (nextProps.preloadNextImage) {
			var currentIndex = this.props.currentImage;
			var nextIndex = nextProps.currentImage + 1;
			var prevIndex = nextProps.currentImage - 1;
			var preloadIndex = void 0;

			if (currentIndex && nextProps.currentImage > currentIndex) {
				preloadIndex = nextIndex;
			} else if (currentIndex && nextProps.currentImage < currentIndex) {
				preloadIndex = prevIndex;
			}

			// if we know the user's direction just get one image
			// otherwise, to be safe, we need to grab one in each direction
			if (preloadIndex) {
				this.preloadImage(preloadIndex);
			} else {
				this.preloadImage(prevIndex);
				this.preloadImage(nextIndex);
			}
		}

		// add event listeners
		if (nextProps.enableKeyboardInput) {
			window.addEventListener('keydown', this.handleKeyboardInput);
		} else {
			window.removeEventListener('keydown', this.handleKeyboardInput);
		}

		// handle body scroll
		if (nextProps.isOpen) {
			_utils2.default.bodyScroll.blockScroll();
		} else {
			_utils2.default.bodyScroll.allowScroll();
		}
	};

	// ==============================
	// METHODS
	// ==============================

	Lightbox.prototype.preloadImage = function preloadImage(idx) {
		var image = this.props.images[idx];

		if (!image) return;

		var img = new Image();

		img.src = image.src;

		if (image.srcset) {
			img.srcset = image.srcset.join();
		}
	};

	Lightbox.prototype.gotoNext = function gotoNext(event) {
		if (this.props.currentImage === this.props.images.length - 1) return;
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.props.onClickNext();
	};

	Lightbox.prototype.gotoPrev = function gotoPrev(event) {
		if (this.props.currentImage === 0) return;
		if (event) {
			event.preventDefault();
			event.stopPropagation();
		}
		this.props.onClickPrev();
	};

	Lightbox.prototype.handleKeyboardInput = function handleKeyboardInput(event) {
		if (event.keyCode === 37) {
			this.gotoPrev(event);
			return true;
		} else if (event.keyCode === 39) {
			this.gotoNext(event);
			return true;
		} else if (event.keyCode === 27) {
			this.props.onClose();
			return true;
		}
		return false;
	};

	// ==============================
	// RENDERERS
	// ==============================

	Lightbox.prototype.renderArrowPrev = function renderArrowPrev() {
		if (this.props.currentImage === 0) return null;

		return _react2.default.createElement(_Arrow2.default, {
			direction: 'left',
			icon: 'arrowLeft',
			onClick: this.gotoPrev,
			title: 'Previous (Left arrow key)',
			type: 'button'
		});
	};

	Lightbox.prototype.renderArrowNext = function renderArrowNext() {
		if (this.props.currentImage === this.props.images.length - 1) return null;

		return _react2.default.createElement(_Arrow2.default, {
			direction: 'right',
			icon: 'arrowRight',
			onClick: this.gotoNext,
			title: 'Previous (Right arrow key)',
			type: 'button'
		});
	};

	Lightbox.prototype.renderDialog = function renderDialog() {
		var _props = this.props;
		var backdropClosesModal = _props.backdropClosesModal;
		var customControls = _props.customControls;
		var isOpen = _props.isOpen;
		var onClose = _props.onClose;
		var showCloseButton = _props.showCloseButton;
		var thumbnails = _props.thumbnails;


		if (!isOpen) return null;

		return _react2.default.createElement(
			'div',
			{
				key: 'dialog',
				className: (0, _noImportant.css)(classes.container),
				onClick: !!backdropClosesModal && onClose,
				onTouchEnd: !!backdropClosesModal && onClose
			},
			_react2.default.createElement(
				'div',
				{ className: (0, _noImportant.css)(classes.content), style: {
						maxWidth: this.props.width,
						marginBottom: thumbnails ? _theme2.default.thumbnails.height : 0
					} },
				_react2.default.createElement(_Header2.default, {
					customControls: customControls,
					onClose: onClose,
					showCloseButton: showCloseButton
				}),
				this.renderImages()
			),
			this.renderArrowPrev(),
			this.renderArrowNext(),
			this.renderThumbnails()
		);
	};

	Lightbox.prototype.renderImages = function renderImages() {
		var _props2 = this.props;
		var currentImage = _props2.currentImage;
		var images = _props2.images;
		var imageCountSeparator = _props2.imageCountSeparator;
		var onClickImage = _props2.onClickImage;
		var showImageCount = _props2.showImageCount;
		var thumbnails = _props2.thumbnails;


		if (!images || !images.length) return null;

		var image = images[currentImage];

		var srcset = void 0;
		var sizes = void 0;
		var width = void 0;

		if (image.srcset) {
			srcset = image.srcset.join();
			sizes = '100vw';
		}

		var thumbnailsSize = thumbnails ? _theme2.default.thumbnails.height : 0;

		return _react2.default.createElement(
			'figure',
			{ className: (0, _noImportant.css)(classes.figure), style: { width: width } },
			_react2.default.createElement('img', {
				className: (0, _noImportant.css)(classes.image),
				onClick: !!onClickImage && onClickImage,
				sizes: sizes,
				src: image.src,
				srcSet: srcset,
				style: {
					cursor: this.props.onClickImage ? 'pointer' : 'auto',
					maxHeight: 'calc(100vh - ' + (_theme2.default.header.height + _theme2.default.footer.height + thumbnailsSize) + 'px)'
				}
			}),
			_react2.default.createElement(_Footer2.default, {
				caption: images[currentImage].caption,
				countCurrent: currentImage + 1,
				countSeparator: imageCountSeparator,
				countTotal: images.length,
				showCount: showImageCount
			})
		);
	};

	Lightbox.prototype.renderThumbnails = function renderThumbnails() {
		var _props3 = this.props;
		var images = _props3.images;
		var currentImage = _props3.currentImage;
		var onClickThumbnail = _props3.onClickThumbnail;
		var ThumbnailsComponent = _props3.thumbnails;

		if (!ThumbnailsComponent) return null;
		return _react2.default.createElement(ThumbnailsComponent, { images: images,
			currentImage: currentImage,
			onClickThumbnail: onClickThumbnail });
	};

	Lightbox.prototype.render = function render() {
		return _react2.default.createElement(
			_Portal2.default,
			null,
			this.renderDialog()
		);
	};

	return Lightbox;
}(_react2.default.Component);

Lightbox.displayName = 'Lightbox';

process.env.NODE_ENV !== "production" ? Lightbox.propTypes = {
	backdropClosesModal: PropTypes.bool,
	currentImage: PropTypes.number,
	customControls: PropTypes.arrayOf(PropTypes.node),
	enableKeyboardInput: PropTypes.bool,
	imageCountSeparator: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string.isRequired,
		srcset: PropTypes.array,
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
	})).isRequired,
	isOpen: PropTypes.bool,
	onClickImage: PropTypes.func,
	onClickNext: PropTypes.func,
	onClickPrev: PropTypes.func,
	onClose: PropTypes.func.isRequired,
	preloadNextImage: PropTypes.bool,
	sheet: PropTypes.object,
	showCloseButton: PropTypes.bool,
	showImageCount: PropTypes.bool,
	width: PropTypes.number
} : void 0;

Lightbox.defaultProps = {
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	onClickShowNextImage: true,
	preloadNextImage: true,
	showCloseButton: true,
	showImageCount: true,
	width: 1024,
	thumbnails: _Thumbnails2.default
};

Lightbox.Thumbnails = _Thumbnails2.default;
Lightbox.PaginatedThumbnails = _PaginatedThumbnails2.default;

exports.default = Lightbox;
module.exports = exports['default'];