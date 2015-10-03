function splitLastPath(file) {
		var fileArr = file.split('/');
		fileArr.pop();
		return fileArr.join('/');
}
(function(){
	var thing = splitLastPath('/Users/mharwood/projects/labs/2015-oct/l10n-local-content-match/src');
	console.log(thing);
})();