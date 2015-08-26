module.exports = function (grunt) {

    "use strict";

    // this saves us having to load each plugin individually
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        less: {
            development: {
                options: {
                    strictMath: true,
                    strictUnits: true,
                    cleancss: true,
                    sourceMap: true,
                    sourceMapFilename: "style.map"
                },
                files: {
                    "style.css": "styles/style.less"
                }
            }
        },

        autoprefixer: {
            single_file: {
                options: {
                    browsers: ["last 2 version"]
                },
                src: "style.css",
                dest: "style.css"
            },
        },

        csslint: {
            options: {
                csslintrc: ".csslintrc"
            },
            strict: {
                src: ["style.css"]
            }
        },

        cssmin: {
            minify: {
                src: "style.css",
                dest: "style.css"
            }
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc"
            },
            all: [
                ".jshintrc",
                "Gruntfile.js",
                "js/project.js"
            ]
        },

        modernizr: {
            dist: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile" : "js/bower/modernizr/modernizr.js",

                // [REQUIRED] Path to save out the built file.
                "outputFile" : "js/modernizr-custom.js",

                // Based on default settings on http://modernizr.com/download/
                "extra" : {
                    "shiv" : false,
                    "printshiv" : false,
                    "load" : false,
                    "mq" : false,
                    "cssclasses" : false
                },

                // By default, source is uglified before saving
                "uglify" : false,

                // By default, this task will crawl your project for references to Modernizr tests.
                "parseFiles" : true,

                // File to parse
                "files" : {
                    "src": ["js/project.js"]
                }
            }
        },

        concat: {
            dist: {
                src: [
                    "js/modernizr-custom.js",
                    "js/bower/jquery/dist/jquery.js",
                    "js/bower/underscore/underscore.js",
                    "js/project.js"
                ],
                dest: "js/production.js"
            }
        },

        uglify: {
            my_target: {
                files: {
                    "js/production.js": ["js/production.js"]
                }
            }
        },

        hashres: {
            options: {
                fileNameFormat: "${name}.${ext}?${hash}",
                renameFiles: false
            },
            prod: {
                src: [
                    "js/production.js",
                    "style.css"
                ],
                dest: "index.php",
            }
        },


        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: "img/",
                    src: ["*.{png,jpg,gif}", "favicons/*.{png,jpg,gif}"],
                    dest: "img/"
                }]
            }
        },

        watch: {
            options: {
                livereload: true
            },
            images: {
                files: ["img/**/*.{png,jpg,jpeg,gif}"],
                tasks: "buildimg"
            },
            css: {
                files: "styles/*.less",
                tasks: "buildcss"
            },
            scripts: {
                files: ["js/project.js", "Gruntfile.js"],
                tasks: "buildjs"
            }
        },

        notify: {
            notify_hooks: {
                options: {
                    enabled: true,
                    max_jshint_notifications: 5,
                }
            },
            js: {
                options: {
                    title: "Back of the net!",
                    message: "Javascript build successful!"
                }
            },
            less: {
                options: {
                    title: "Cashback!",
                    message: "LESS build successful!"
                }
            },
            img: {
                options: {
                    title: "Jurassic Park!",
                    message: "Image minify successful!"
                }
            },
            build: {
                options: {
                    title: "LYNNNNNNN",
                    message: "Build successful!"
                }
            }
        }

    });

    // List of available tasks
    grunt.registerTask("default", []);
    grunt.registerTask("buildcss", ["less", "autoprefixer", "csslint", "cssmin", "notify:less"]);
    grunt.registerTask("buildjs", ["jshint", "modernizr", "concat", "uglify", "notify:js"]);
    grunt.registerTask("buildimg", ["imagemin", "notify:img"]);
    grunt.registerTask("build", ["buildcss", "buildjs", "buildimg", "hashres:prod", "notify:build"]);
};
