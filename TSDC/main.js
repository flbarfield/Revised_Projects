'use strict';

var xhr;

if (window.XMLHttpRequest) {
	xhr = new XMLHttpRequest();
} else if (window.ActiveXObject) {
	xhr = new ActiveXObject('MSXM12.XMLHTTP');
} else {
	throw new Error('Ajax is not supported by your browser');
}

xhr.onreadystatechange = function () {
	if (xhr.readyState < 4) {
		document.getElementById('updatable-content').innerHTML = 'Loading...';
	} else if (xhr.readyState === 4) {
		if (xhr.status === 200 && xhr.status < 300) {
			document.getElementById('updatable-content').innerHTML = xhr.responseText;
		}
	}
};


//xhr.onload = function () {
//	$('#updatable-content').load('pages/front.html');
//};

$('#about').click(function (e) {
	$('#updatable-content').load('pages/front.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
	}
	e.preventDefault();
});

$('#contact').click(function (e) {
	$('#updatable-content').load('pages/locate_contact.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
	}
	e.preventDefault();
});

$('#membership').click(function (e) {
	$('#updatable-content').load('pages/membership.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
	}
	e.preventDefault();
});

$('#resources').click(function (e) {
	$('#updatable-content').load('pages/resources.html');
	if (!$(this).hasClass('active')) {
		$('ul.nav > li').removeClass('active');
		$(this).addClass('active');
	}
	e.preventDefault();
});