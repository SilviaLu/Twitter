window.onload = inicio;
// window.addEventListener('load', inicio);

function inicio (){
	var tweetArea = document.getElementById('tweet-area');
	var tweetBtn = document.getElementById('tweet-btn');
	var messages = document.getElementById('messages');
	var count = document.getElementById('count');
	var MAXCHARACTERS = 140;