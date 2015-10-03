var fs = require('fs');
var path = require('path');
var glob = require("glob");

var argumentPaths = {};

function parsePaths(){
	var inputvalue = []
	process.argv.forEach(function(val, index, array) {
		inputvalue.push(val);
	});
	argumentPaths.f1 = inputvalue[process.argv.length -2];
	argumentPaths.f2 = inputvalue[process.argv.length -1];	
}

function readFile() {
	fs.readFile(argumentPaths.f2, 'utf8', function(err, data) {
	  if (err) throw err;
	  fs.appendFile(argumentPaths.f1, data, function (err, data) {
	  	  if(err) throw err;
	  	  fs.readFile(argumentPaths.f1, 'utf8', function(err, data) {
			makeCompareArrays(data)
		  });
	  });
	});
}

function makeCompareArrays(data) {
	var stringArr = data.split('//');
	var master = stringArr[0].split(',');
	var versioned = stringArr[1].split(',');
	var errorLog = []	
  	errorLog = versioned.filter(function(item){
		return !~master.indexOf(item); 
	});
	fs.writeFile(__dirname + 'output.txt', errorLog, function(err) {
	    if(err) {
	        return console.log(err);
	    }
    	console.log("The file was saved!");
	});
}

(function main(){
	parsePaths();
	readFile();
})();