'use strict';

function openNav() {
	document.getElementById('hidden-nav').style.width = '14em';
	document.getElementById('main-content').style.marginRight = '14em';
}

function closeNav() {
	document.getElementById('hidden-nav').style.width = '0';
	document.getElementById('main-content').style.marginRight = '0';
}