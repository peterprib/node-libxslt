// Mostly to run for debugging purposes
var fs = require('fs');
var libxmljs = require("libxmljs");
var libxslt = require('./index');

var stylesheetSource = fs.readFileSync('./test/resources/cd.xsl', 'utf8');
var docSource = fs.readFileSync('./test/resources/cd.xml', 'utf8');

var stylesheet = libxslt.stylesheet(stylesheetSource);
//var result = stylesheet.apply(docSource);

//console.log(result);


stylesheet.apply(docSource, function(err, result){
	console.log(result);	
});