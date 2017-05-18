//确保数组里面的任务完成之后，再运行serve任务  
gulp.task("serve", ["less", "js-watch", "html","css"], function() {  
    plugins.browserSync.init({  
        server : "./"  
    });  
    gulp.watch(path.LESS, ["less"]); //监听哪个目录的任务  
    gulp.watch(path.JS, ["js-watch"]);  
    gulp.watch(path.HTML, ["html"]);  
    gulp.watch(path.CSS, ["css"]);  
    /* gulp.watch(path.HTML).on("change", function() { //当文件变化时，自动刷新  
     // browserSync.reload;  
     });*/  
});  