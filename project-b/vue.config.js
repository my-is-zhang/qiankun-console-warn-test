
module.exports = {
  devServer: {
    host: '0.0.0.0',
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: 'project-b_[name]',
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_project-b`
    }
  }
}