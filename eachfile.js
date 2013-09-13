var fs = require("fs");
var resolve = require("path").resolve;
var EventEmitter = require("events").EventEmitter;

module.exports = {
	in: function(dir, cb){

		var ev = new EventEmitter();
		fs.readdir(dir, function(err, files){
			if(err) return ev.emit('error', err);

			function next(){
				var filename = files.shift();
				if(!filename){
					ev.emit('finish');
				}
				else if(cb) {
					var fullpath = resolve(dir, filename);
					fs.stat(fullpath, function (err, stats) {
						stats.name = filename;
						stats.fullpath = fullpath;
						cb(stats, next);
					})

				}
			}
			next();
		});

		return ev;
	}
}
