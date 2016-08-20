'use strict';

exports.__esModule = true;

var _theme = require('../theme');

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
	container: {
		alignItems: 'center',
		backgroundColor: _theme2.default.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: _theme2.default.container.gutter.vertical,
		paddingLeft: _theme2.default.container.gutter.horizontal,
		paddingRight: _theme2.default.container.gutter.horizontal,
		paddingTop: _theme2.default.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: _theme2.default.container.zIndex
	},

	content: {
		position: 'relative'
	},

	// IMAGES
	image: {
		display: 'block', // removes browser default gutter beneath
		height: 'auto',
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'

	},
	figure: {
		// minHeight: 200,
		// minWidth: 300,
		margin: 0 }
};

exports.default = styles;
module.exports = exports['default'];