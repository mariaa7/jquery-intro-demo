/* app.js
* main script file for our little application
* */

"use strict";

//select all navigation links
var allNavLinks = $('nav a');

//select all imgs
var allImgs = $('img');

//select all sections
var allSections = $('section');

function onReady() {

	//$('nav').slideUp(2000);
	//$('nav').slideDown();
	//add attribute of target with value blank to each nav link
	//allNavLinks.attr('target', '_blank');
	//allNavLinks.addClass('awesomesauce');
	allSections.hide();

	
}

$('#exit-button').dblclick(function() {
	//show the modal to the world
	$('#confirm-exit-modal').modal();
});

$('#confirm-exit-button').click(function() {
	window.location.href = "http://courses.washington.edu/info343/morris";
});

allImgs.hover(function() {
	console.log($(this));
	$(this).addClass('awesomesauce');
});

allImgs.mouseout(function() {
	$(this).removeClass('awesomesauce');
});

allNavLinks.click(function() {

	$(this).addClass('awesomesauce');

	allSections.hide();
	$($(this).attr('href')).fadeToggle(1000).addClass('awesomesauce');
});

$(onReady);