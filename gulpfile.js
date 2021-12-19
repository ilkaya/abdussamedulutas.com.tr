let zip = require("gulp-zip");
let exec = require("gulp-exec");
let {src,dest,series,task} = require("gulp");
let moment = require("moment");

function copysrc(){
	return src('src/*')
		.pipe(zip(moment().format("YYYY.MM.DD HH.mm.ss.zip"),{
            compress: true,
            modifiedTime: new Date()
        }))
		.pipe(dest('copysrc'))
}

exports.copysrc = copysrc;