var gulp = require('gulp');

// gulp.task('default', function() {
// 	console.log('hello world');
// });

gulp.task('one',function(){
	// one 是一个异步执行任务
	setTimeout(function(){
		console.log('one is done');
	},5000);
});

//two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
gulp.task('two',['one'],function(){
	console.log('two is done');
});