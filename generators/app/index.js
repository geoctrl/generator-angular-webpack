'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

var Generator = yeoman.Base.extend({
  prompting: function() {
    var done = this.async();
    this.prompt(require('./prompts')(this.appname), function(answers) {
      this.props = answers;
      done();
    }.bind(this));
  },

  writing: {
		config: function() {
			require('./writing-config')(this);
		}
  },

	install: function() {
		// install prod dependencies
		this.npmInstall([
			'lodash',
			'angular',
			'angular-ui-router',
			'angular-local-storage',
			'axios',
			'path',
			'es6-promise'
		], {'save': true});

		// install dev dependencies
		this.npmInstall([
			'autoprefixer',
			'babel-core',
			'babel-loader',
			'babel-preset-es2015',
			'bogus-api',
			'expose-loader',
			'extract-text-webpack-plugin',
			'ng-annotate-loader',
			'node-sass',
			'postcss-loader',
			'raw-loader',
			'css-loader',
			'sass-loader',
			'script-loader',
			'style-loader',
			'svg-inline-loader',
			'webpack',
			'webpack-dev-server',
			'html-webpack-plugin'
		], {'saveDev': true});

		
	}

});

module.exports = Generator;
