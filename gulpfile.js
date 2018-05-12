/*
* @Author: ljgoh
* @Date:   2018-05-08 13:43:50
* @Last Modified by:   ljgoh
* @Last Modified time: 2018-05-12 10:38:09
*/
const dist = 'dist';//目标目录
const src = 'src';//编译目录
var gulp = require("gulp"),
    sass =  require("gulp-sass"),
    cleanCss = require("gulp-clean-css"),
    minifyCSS = require("gulp-minify-css"),
    htmlmin = require("gulp-htmlmin"),
    rename = require("gulp-rename"),
    minifyJS = require("gulp-minify"),
    connect = require("gulp-connect");

//将sass转译为css,并压缩
gulp.task("pro-sass",function() {
	gulp.src(src+"/css/**/*.scss")
		.pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCss())
		.pipe(gulp.dest( dist + "/css"))
        .pipe(connect.reload());
});

gulp.task("pro-sasss",function() {
    gulp.src(src+"/css/fontcss/*.scss")
        .pipe(sass())
        .pipe(rename({suffix: '.min'}))
        .pipe(cleanCss())
        .pipe(gulp.dest( dist + "/css"))
        .pipe(connect.reload());
});

//压缩js
gulp.task("pro-minifyJS",function() {
    gulp.src("src/js/**/*.js")
        .pipe(minifyJS())
        // .pipe(rename({fuffix: '.min'}))
        .pipe(gulp.dest(dist + "/js"))
        .pipe(connect.reload());
});

//压缩html
gulp.task("pro-htmlmin",function() {
	var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src(src+'/*.html')
        .pipe(htmlmin(options))
        // .pipe(rename({fuffix: '.min'}))
        .pipe(gulp.dest(dist))
        .pipe(connect.reload());
});

//定义livereload任务
gulp.task("connect",function() {
	connect.server({
        port: 8080,
		livereload: true
	});
});

//克隆php和font文件到dist目录下
gulp.task("copyFont",function() {
     return gulp.src(src+'/fonts/*')
                .pipe(gulp.dest(dist+'/fonts'))
});
gulp.task("copyPhp",function() {
     return gulp.src(src+'/php/*')
                .pipe(gulp.dest(dist+'/php'))
});
gulp.task("copyImg",function() {
     return gulp.src(src+'/img/*')
                .pipe(gulp.dest(dist+'/img'))
});

gulp.task("copy",["copyFont","copyPhp","copyImg"]);

//定义看守任务
gulp.task("watch",function() {
	gulp.watch(src+"/css/**/*",['pro-sasss','pro-sass']);

	gulp.watch(src+"/*.html",['pro-htmlmin']);

	gulp.watch(src+"/js/**/*.js",['pro-minifyJS']);

    gulp.watch(src+"/fonts/*",['copyFont']);

    gulp.watch(src+"/php/*",['copyPhp']);

    gulp.watch(src+"/img/*",['copyImg']);
});


gulp.task("default",["pro-sasss","pro-sass","pro-minifyJS","pro-htmlmin","connect","copy","watch"],function() {
    console.log("Gulp 启动成功！")
})