module.exports = function(appName) {
  return [
    {
      type: 'input',
      name: 'appName',
      message: 'Application Name',
      default: 'New Project'
    },
    {
      type: 'input',
      name: 'bitbucketUrl',
      message: 'Bitbucket url for this project'
    },
	  {
		  type: 'input',
		  name: 'baseHref',
		  message: 'Base url - your.domain/your-base/ (blank for none)'
	  }
  ];
};
