//The Mortgage Calculator

var t;
var ai;
var i = ai / 12;
var n;
var d = (Math.pow(1 + i, n)-1)/(i * Math.pow(1 + i, n));
var mp = t / d;
var ti = mp * n - t;
var calcSubmit = document.getElementById("calcSubmit");
var results = document.getElementById("results");

calcSubmit.addEventListener('click', calculate);

function calculate(){
    
    var t = document.getElementById("totalPrinciple").value;
    var ai = document.getElementById("interestRate").value / 100;
    var n = document.getElementById("loanTerm").value;
    var i = ai / 12;
    var d = (Math.pow(1 + i, n)-1)/(i * Math.pow(1 + i, n));
    var mp = t / d;
    var ti = mp * n - t;
    var tp  = mp * n;
    if(t == "" || ai == ""){
        alert("Please fill out all fields");
        return false;
    }
    
    document.getElementById("monthlyPayment").innerHTML = "Your monthly payment is: " +"$"+ mp.toFixed(2);
    document.getElementById("totalInterest").innerHTML = "Your lifetime interest is: " + "$"+ti.toFixed(2);
    document.getElementById("totalPayments").innerHTML = "Your total payments are: " + "$"+tp.toFixed(2);
    results.style.border = "3px yellow solid";
    results.style.height = "100%";
    results.style.transitionDuration = "1s";
    console.log("Your total Interest is " + ti  + "\nYour monthly payment is " + mp);
}


//The Music Playlist

var player = document.getElementById('player');
var audioSrc = document.getElementById('audioSrc');
var audioPlayer = document.getElementById('audio_player');
var playlist = document.getElementsByClassName('btn');
var title = document.getElementById('title');

var playTrack = document.getElementById('play');
var pauseTrack = document.getElementById('pause');
/*
btn1.addEventListener('click', play);
btn2.addEventListener('click', play);
*/
for(i = 0; i < playlist.length; i++){
    playlist[i].innerHTML = playlist[i].value;
    playlist[i].addEventListener('click', play);

}

console.log(playlist.length);



function play(){
    audioSrc.src = this.value;
    console.log(audioSrc.src);
    title.innerHTML = this.value;
    audioPlayer.load();
    audioPlayer.play();
}

playTrack.addEventListener('click', function(){
    audioPlayer.play();
});

pauseTrack.addEventListener('click', function(){
    audioPlayer.pause();
});





