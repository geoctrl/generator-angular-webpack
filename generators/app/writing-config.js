var _kebabCase = require('lodash/kebabCase');
var _camelCase = require('lodash/camelCase');

module.exports = function(self) {
	
	// package.json
	self.fs.copyTpl(
			self.templatePath('package.json'),
			self.destinationPath('package.json'), {
				appName: _kebabCase(self.props.appName),
				bitbucketUrl: self.props.bitbucketUrl
			}
	);

	// readme.md
	self.fs.copyTpl(
			self.templatePath('readme.md'),
			self.destinationPath('readme.md'), {
				appName: self.props.appName
			}
	);

	// webpack.config.js
	self.fs.copyTpl(
			self.templatePath('webpack.config.js'),
			self.destinationPath('webpack.config.js'), {
				appName: _camelCase(self.props.appName),
				baseHref: self.props.baseHref ? ('/' + self.props.baseHref) : ''
			}
	);
	
	// .gitignore
	self.fs.copyTpl(
			self.templatePath('.gitignore'),
			self.destinationPath('.gitignore')
	);

	// dev-server/server.js
	self.fs.copyTpl(
			self.templatePath('dev-server/server.js'),
			self.destinationPath('dev-server/server.js')
	);
	
	// dev-server/resources/test.js
	self.fs.copyTpl(
			self.templatePath('dev-server/resources/test.js'),
			self.destinationPath('dev-server/resources/test.js')
	);
	
	// app/components/index.js
	self.fs.copyTpl(
			self.templatePath('app/components/index.js'),
			self.destinationPath('app/components/index.js')
	);

	// app/core/api.js
	self.fs.copyTpl(
			self.templatePath('app/core/api.js'),
			self.destinationPath('app/core/api.js')
	);

	// app/core/index.js
	self.fs.copyTpl(
			self.templatePath('app/core/index.js'),
			self.destinationPath('app/core/index.js')
	);

	// app/core/app-config.js
	self.fs.copyTpl(
			self.templatePath('app/core/app-config.js'),
			self.destinationPath('app/core/app-config.js'), {
				appName: _camelCase(self.props.appName)
			}
	);

	// app/core/app-run.js
	self.fs.copyTpl(
			self.templatePath('app/core/app-run.js'),
			self.destinationPath('app/core/app-run.js')
	);

	// app/filters/index.js
	self.fs.copyTpl(
			self.templatePath('app/filters/index.js'),
			self.destinationPath('app/filters/index.js')
	);

	// app/pages/index.js
	self.fs.copyTpl(
			self.templatePath('app/pages/index.js'),
			self.destinationPath('app/pages/index.js')
	);

	// app/services/index.js
	self.fs.copyTpl(
			self.templatePath('app/services/index.js'),
			self.destinationPath('app/services/index.js')
	);

	// app/sass/main.scss
	self.fs.copyTpl(
			self.templatePath('app/sass/main.scss'),
			self.destinationPath('app/sass/main.scss')
	);

	// app/app.js
	self.fs.copyTpl(
			self.templatePath('app/app.js'),
			self.destinationPath('app/app.js'), {
				appName: _camelCase(self.props.appName)
			}
	);

	// app/index.ejs
	self.fs.copyTpl(
			self.templatePath('app/index.ejs'),
			self.destinationPath('app/index.ejs')
	);
};