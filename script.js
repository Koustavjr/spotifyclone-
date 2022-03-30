var index=0;
var masterPlay = document.getElementById('masterPlay');
var myProgressBar = document.getElementById('myProgressBar');
var gif = document.getElementById('gif');
var masterSongName = document.getElementById('masterSongName');
var songItem = Array.from(document.getElementsByClassName('songItem'));
let audio = new Audio("0.mp3");
var songs = [
    {songName:"Junoon",filePath:"1.mp3",coverPath:"covers/1.jpg"},
    {songName:"kabhi na kabhi",filePath:"songs/2.mp31.mp3",coverPath:"covers/2.jpg"},
    {songName:"tera chehra",filePath:"songs/3.mp31.mp3",coverPath:"covers/3.jpg"},
    {songName:"Worthy",filePath:"songs/4.mp31.mp3",coverPath:"covers/4.jpg"}
]
songItem.forEach((element ,i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    
});

//audio.play();
masterPlay.addEventListener('click',()=>{
    if(audio.paused||audio.currentTime<=0)
    {
        audio.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity= 1;
    }
    else{
        audio.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity= 0;
    }

});

audio.addEventListener('timeupdate',()=>{
    var progress = parseInt((audio.currentTime/audio.duration)*100);
    myProgressBar.value=progress;

}
);
myProgressBar.addEventListener('change',()=>{
    audio.currentTime = (myProgressBar.value*audio.duration)/100;
});
const makeAllPlay =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[index].songName;
  
   audio.src="songs/"+(index+1)+".mp3";
   audio.currentTime=0;
   audio.play();
   gif.style.opacity=1;
   masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=3)
    {
        index=0;
    }
    else{
        index++;
    }
    audio.src="songs/"+(index+1)+".mp3";
    masterSongName.innerText=songs[index].songName;
   audio.currentTime=0;
   audio.play();
   masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

})
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0)
    {
        index=0;
    }
    else{
        index--;
    }
    audio.src="songs/"+(index+1)+".mp3";
    masterSongName.innerText=songs[index].songName;
   audio.currentTime=0;
   audio.play();
   masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

})