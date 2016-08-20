module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactImages',
      externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-addons-css-transition-group': 'Transition'
      }
    }
  }
}
