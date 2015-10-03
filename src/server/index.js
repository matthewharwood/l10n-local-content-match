"use strict";
var fs = require('fs');
var path = require('path');
var glob = require("glob");
var argumentPaths = {}


function parseInputValues(lastIdx){
	var inputvalue = []
	process.argv.forEach(function(val, index, array) {
		inputvalue.push(val);
	});
	if(lastIdx){
		argumentPaths.filePath = inputvalue[process.argv.length -2] + '/**/*{.png,.jpg,.gif}';
		console.log(argumentPaths.filePath);
		argumentPaths.outputName = inputvalue[process.argv.length -1];
		return argumentPaths;
	} else {
		console.log(inputvalue + '**/*')
		return inputvalue + '**/*';
	}
}

// function splitToLastPath(file) {
// 		var fileArr = file.split('/');
// 		fileArr.pop();
// 		return fileArr.join('/');
// }

function makeTxt(fileData){
	
	fs.writeFile(__dirname + argumentPaths.outputName +'.txt', fileData, function(err) {
	    if(err) {
	        return console.log(err);
	    }
    	console.log("The file was saved!");
	});
}

function traverseDirectories() {
	var things;
	glob(parseInputValues(true).filePath, function (er, files) {
		if(er) return er;
		makeTxt(files)
	})
	
	
};

(function main(){
	traverseDirectories();
})();
