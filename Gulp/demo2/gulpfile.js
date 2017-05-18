var gulp = require("gulp");
var rename = require("gulp-rename");

gulp.task('rename1',function(){
	gulp.src('src/a.js')
		.pipe(rename('js/aaa.js'))
		.pipe(gulp.dest('dist'));// dist/js/aaa.js
})

gulp.task('rename2',function(){
	gulp.src('src/c.txt')
		.pipe(rename('js/ccc.js'))
		.pipe(gulp.dest('dist'));// dist/js/ccc/js
})

gulp.task('rename3',function(){
	gulp.src('src/c.txt')
		.pipe(rename(function(path){
			path.dirname += '/js';
			path.basename += '-new';
			path.extname = '.js';
		}))
		.pipe(gulp.dest('dist'));// dist/js/c-new.js
})


gulp.task('rename4',function(){
	gulp.src('src/a.js')
	  	.pipe(rename({
	    	dirname: "js",
	   	 	basename: "a",
	    	prefix: "sss-",
	    	suffix: ".min",
	    	extname: ".js"
	  	}))
  		.pipe(gulp.dest("dist"));// dist/js/sss-a.min.js
})