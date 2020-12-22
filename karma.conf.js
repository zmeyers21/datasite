// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getEnvBrowserType(){
  if(process.env.ENV == null){
    return 'ChromeHeadless';
  } else {
    return 'Safari';
  }
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        timeoutInterval: 20000
      }
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), reports: [ 'html', 'lcovonly', 'cobertura', 'text', 'text-summary' ],
      fixWebpackSourcePaths: true,
      emitWarning: false,
      thresholds: {
        global: {
          statements: 70,
          lines: 50,
          branches: 80,
          functions: 50
        },
        each: {
          statements: 0,
          lines: 0,
          branches: 0,
          functions: 0,
        }
      },
    },
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=' + randomIntFromInterval(9222,10222)
        ]
      }
    },
    htmlReporter: {
      outputFile: 'tests/units.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: 'datasite-tests',
      groupSuites: true,
      useCompactStyle: true,
      useLegacyStyle: true
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [getEnvBrowserType()],
    singleRun: false
  });
};
