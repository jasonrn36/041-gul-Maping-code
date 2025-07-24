const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass() {
    return gulp.src('./source/estilos/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
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
exports.sass = compilaSass;