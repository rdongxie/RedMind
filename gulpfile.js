var gulp = require('gulp');
var concat = require('gulp-concat');//文件合并
var uglify = require('gulp-uglify');//js压缩
var rename = require('gulp-rename');//文件更名
var notify = require('gulp-notify');//提示信息
var order  = require('gulp-order');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log(1);
});

gulp.task('build', ['build-js', 'build-css', 'build-html'],function() {
  // 将你的默认的任务代码放在这
  console.log(1);
});

gulp.task('build-js', function() {
  // 将你的默认的任务代码放在这
  gulp.src(['src/js/mm.js','src/js/promise.js','src/js/promise-addons.js','src/js/repo.js','src/js/item.js','src/js/map.js','src/js/keyboard.js','src/js/tip.js','src/js/action.js','src/js/clipboard.js','src/js/menu.js','src/js/command.js','src/js/command.edit.js','src/js/command.select.js','src/js/layout.js','src/js/layout.graph.js','src/js/layout.tree.js','src/js/layout.map.js','src/js/shape.js','src/js/shape.underline.js','src/js/shape.box.js','src/js/shape.ellipse.js','src/js/format.js','src/js/format.json.js','src/js/format.freemind.js','src/js/format.mma.js','src/js/format.mup.js','src/js/format.plaintext.js','src/js/backend.js','src/js/backend.local.js','src/js/backend.webdav.js','src/js/backend.image.js','src/js/backend.file.js','src/js/backend.firebase.js','src/js/backend.gdrive.js','src/js/ui.js','src/js/ui.layout.js','src/js/ui.shape.js','src/js/ui.value.js','src/js/ui.status.js','src/js/ui.color.js','src/js/ui.help.js','src/js/ui.io.js','src/js/ui.backend.js','src/js/ui.backend.file.js','src/js/ui.backend.webdav.js','src/js/ui.backend.image.js','src/js/ui.backend.local.js','src/js/ui.backend.firebase.js','src/js/ui.backend.gdrive.js','src/js/mouse.js','src/js/app.js'])
  .pipe(concat('redmind.js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js'));
});

gulp.task('build-css', function() {
	gulp.src('src/css/*.css')
	.pipe(concat('redmind.css'))
	.pipe(gulp.dest('dist/css'))
});

gulp.task('build-html', function() {
	gulp.src('src/html/*.html')
	.pipe(gulp.dest('dist/html'))
});