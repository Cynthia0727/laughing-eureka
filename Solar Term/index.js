// JavaScript Document
let bird = document.getElementById('bird');
let mountain1 = document.getElementById('mountain1');
let mountain2 = document.getElementById('mountain2');
let tree = document.getElementById('tree');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
	let value = window.scrollY;
	bird.style.top = value * 1.05 + 'px';
	mountain1.style.left = value * 0.25 + 'px';
	mountain2.style.left = value * 0.25 + 'px';
	tree.style.left = value * 0.25 + 'px';
	text.style.marginRight = value * 4 + 'px';
	text.style.marginTop = value * 0.25 + 'px';
	btn.style.marginTop = value * 0.25 + 'px';
})