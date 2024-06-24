song= new Audio();
song.src= "de hielo.mp3";

function preload(){
    song =loadSound("de hielo.mp3");
}

function play(){
    song.play();
}

function stop(){
    song.pause();
}