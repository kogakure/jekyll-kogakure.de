var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        // We're serving the src folder as well
        // for the sass sourcemap linking
        baseDir: [development, build, src]
      },
      port: 8888,
      ui: {
        port: 8887,
        weinre: {
          port: 8886
        }
      },
      open: false,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 8887,
      open: false
    }
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },
  sass: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      lineNumbers: true,
      sourcemapPath: '../../_assets/scss'
    }
  },
  css: {
    src: developmentAssets + '/css/*.css'
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    thumbnails: srcAssets + '/images/kaufempfehlungen/fullsize/**/*',
    svg:     'vectors/*.svg',
    loadcss: src + '/_bower_components/loadcss/loadCSS.js',
    criticalcss: developmentAssets + '/css/critical.css'
  },
  scripts: {
    src:  srcAssets + '/javascripts/application.js',
    dest: developmentAssets + '/js'
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  thumbnails: {
    src: srcAssets + '/images/kaufempfehlungen/fullsize/**/*.{jpg,jpeg,png}',
    dest: srcAssets + '/images/kaufempfehlungen/thumbs/',
    changed: {
      src: srcAssets + '/images/kaufempfehlungen/thumbs/'
    },
    options: {
      width: 100
    }
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {}
  },
  combinemediaqueries: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets+ '/css/',
    options: {
      log: true
    }
  },
  svg: {
    src: 'vectors/*.svg',
    dest: src + '/_includes',
    options: {
      mode: {
        symbol: {
          dest: 'svg',
          sprite: 'icons.svg'
        }
      },
      svg: {
        xmlDeclaration: false,
        doctypeDeclaration: false
      }
    }
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  developmentAssets + '/fonts/*',
      dest: productionAssets + '/fonts'
    }
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
    ],
    options: {
      bundleExec: true
    }
  },
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/feed.xml'
    ],
    dest: production
  },
  delete: {
    src: [developmentAssets]
  },
  loadcss: {
    src: src + '/_bower_components/loadcss/loadCSS.js',
    dest: src + '/_includes/critical/',
    options: {}
  },
  criticalcss: {
    src: developmentAssets + '/css/critical.css',
    dest: src + '/_includes/critical/',
    options: {
      keepSpecialComments: 0
    }
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true,
        processScripts: ['text/mustache']
      }
    }
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/javascripts/application.js',
      dest:       developmentAssets + '/js',
      outputName: 'application.js'
    }, {
      entries:    './' + srcAssets + '/javascripts/vendor/jquery.js',
      dest:       developmentAssets + '/js',
      outputName: 'jquery.js'
    }]
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: '<~/to/my/website/>',
      root: production,
      hostname: '<hostname>',
      username: '<username>',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  }
};
