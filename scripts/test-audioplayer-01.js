

var audio_info = document.getElementById('audio1');
var audio_info2 = document.getElementById('audio2');
var x = document.getElementsByClassName("a");
document.createAttribute("song");

document.getElementById('play').addEventListener('click', function(){
	audio_info.play();
}, false);

document.getElementById('pause').addEventListener('click', function(){
	audio_info.pause();
}, false);
document.getElementsByClassName("a").onclick = function(){
	document.getElementById("audio1").setAttribute("src", song);
	audio_info.play();
};

audio_info2.addEventListener('playing', function(e){
	console.log('Audio playback has started ...');
	console.log('Playback started at : '+ e.target.currentTime +" seconds");
}, false);
audio_info2.addEventListener('pause', function(e){
	console.log('Audio playback has been paused ...');
	console.log('Playback paused at : '+ e.target.volume +" seconds");
}, false);

audio_info2.addEventListener('ended', function(e){
	console.log('Playback has ended');
}, false);
audio_info2.addEventListener('volumechange', function(e){
	console.log("Volume has changed ...");
	console.log("Volume is now "+ e.target.volume);
}, false);


var path = "https://ia800604.us.archive.org/11/items/KayrayReadsToYou2/";
var playlist = document.getElementsByClassName("playlist");

var track = path + song;


