const gulp = require('gulp');
const { init } = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass')); // Adionado para compila sass
const sourcemaps = require('gulp-sourcemaps'); // Adicionado para o sourcemaps

function compilaSass() {
    return gulp.src('./source/estilos/*.scss') // Adionado para compila sass
    .pipe(sourcemaps.init())  // Adicionado para o sourcemaps
        .pipe(sass({ // Adionado para compila sass
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps')) // Adicionado para o sourcemaps
        .pipe(gulp.dest('./build/styles')); // Adionado para compila sass
}

function funcaoPadrao(callback) {
    setTimeout(function(){
        console.log("\n\x1b[33mEssa tarefa só inicia apos 4 segundos\x1b[37m \n");
        callback();

    }, 3992);
}

function digaOi(callback) {
        setTimeout(function(){
    console.log("\n\x1b[0m\x1b[33m Essa é a segunda tarefa junto com a primeira\x1b[37m");
    digaTchau();
    callback();
    }, 991);

}
function digaTchau(){
    console.log("\x1b[0m\x1b[33m Essa é a terceira tarefa junto com a segunda\x1b[37m \n");
}

exports.default = gulp.parallel (funcaoPadrao, digaOi);
exports.digaOi = digaOi;
exports.sass = compilaSass; // Adionado para compila sass
exports.watch = function() { // Adicionado para o watch
    gulp.watch('./source/estilos/*.scss', gulp.series(compilaSass)); // Adicionado para o watch
}