'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Portal = function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		var _this = _possibleConstructorReturn(this, _Component.call(this));

		_this.portalElement = null;
		return _this;
	}

	Portal.prototype.componentDidMount = function componentDidMount() {
		var p = document.createElement('div');
		document.body.appendChild(p);
		this.portalElement = p;
		this.componentDidUpdate();
	};

	Portal.prototype.componentDidUpdate = function componentDidUpdate() {
		var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity 200ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity 200ms; }\n\t\t';
		(0, _reactDom.render)(_react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'style',
				null,
				styles
			),
			_react2.default.createElement(_reactAddonsCssTransitionGroup2.default, _extends({
				transitionName: 'fade',
				transitionEnterTimeout: 200,
				transitionLeaveTimeout: 200
			}, this.props))
		), this.portalElement);
	};

	Portal.prototype.componentWillUnmount = function componentWillUnmount() {
		document.body.removeChild(this.portalElement);
	};

	Portal.prototype.render = function render() {
		return null;
	};

	return Portal;
}(_react.Component);

exports.default = Portal;
module.exports = exports['default'];