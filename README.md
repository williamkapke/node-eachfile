eachfile
========

Iterate the files of a directory.

```javascript
var eachfile = require("eachfile");

eachfile.in('.', function(stats, next){
	console.log(stats.name, stats.isFile());
	next();
});
```

Used with the [eachline](https://github.com/williamkapke/node-eachline) module:

```javascript
var eachfile = require("eachfile");
var eachline = require("eachline");

eachfile.in('./data/', function(stats, next){

	process.stdout.write(stats.fullpath);

	eachline.in(stats.fullpath, function(line, i){
		if(!line) return;
		//do something
	})
	.on('finish', function () {
		console.log(' ..done');
		next();
	});

})
.on('error', function (err) {
	console.trace(err)
});
```

### Install
```
npm install eachfile
```

###  license
MIT
