var gulp = require('gulp');

// gulp.task('default', function() {
// 	console.log('hello world');
// });

// gulp.task('one',function(){
// 	// one 是一个异步执行任务
// 	setTimeout(function(){
// 		console.log('one is done');
// 	},5000);
// });

// //two任务虽然依赖于one任务,但并不会等到one任务中的异步操作完成后再执行
// gulp.task('two',['one'],function(){
// 	console.log('two is done');
// });


// // 第一种方法
// gulp.task('one',function(cb){ //cb为任务函数提供的回调，用来通知任务已经完成
//   //one是一个异步执行的任务
//   setTimeout(function(){
//     console.log('one is done');
//     cb();  //执行回调，表示这个异步任务已经完成
//   },5000);
// });

// //这时two任务会在one任务中的异步操作完成后再执行
// gulp.task('two',['one'],function(){
//   console.log('two is done');
// });


// 第三种方法
var Q = require('q'); //一个著名的异步处理的库 https://github.com/kriskowal/q
gulp.task('one',function(cb){
  var deferred = Q.defer();
  // 做一些异步操作
  setTimeout(function() {
     deferred.resolve();
  }, 5000);
  return deferred.promise;
});

gulp.task('two',['one'],function(){
  console.log('two is done');
});