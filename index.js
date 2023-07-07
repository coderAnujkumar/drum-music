var numberofdrum=document.querySelectorAll(".drum").length;
for(var i=0; i<numberofdrum;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

        var innerbutton=this.innerHTML;
       makesound(innerbutton);
       animation(innerbutton);
        });
}
  

document.addEventListener("keypress",function(event) {
    makesound(event.key);
    animation(event.key);
    
});


function makesound(key){
    switch (key) {
        case "A":
            var audio=new Audio("sounds/Aaj-Ke-Baad.mp3");
             audio.play();
            break;
        
            case "B":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "C":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "D":
            var audio=new Audio("sounds/Dil Todeya Akaal 128 Kbps.mp3");
            audio.play();
            break;
            case "E":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "F":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "G":
            var audio=new Audio("sounds/Gujju Pataka Satyaprem Ki Katha 128 Kbps.mp3");
            audio.play();
            break;
            case "H":
            var audio=new Audio("sounds/Hungama Ho Gaya Hungama 2 128 Kbps.mp3");
            audio.play();
            break;
            case "I":
            var audio=new Audio("sounds/Ishq Hua Xcuse Me 128 Kbps.mp3");
            audio.play();
            break;
            case "J":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "K":
            var audio=new Audio("sounds/Kahani Laal Singh Chaddha 128 Kbps.mp3");
            audio.play();
            break;
            case "L":
            var audio=new Audio("sounds/Loveyatri Mashup Loveyatri A Journey Of Love 128 Kbps.mp3");
            audio.play();
            break;
            case "M":
            var audio=new Audio("sounds/Mohabbat Amaal Mallik 128 Kbps.mp3");
            audio.play();
            break;
            case "N":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "O":
            var audio=new Audio("sounds/Oh-Mahiya-Mainu-Yaad-Aave(PagalWorlld.Com).mp3");
            audio.play();
            break;
            case "P":
            var audio=new Audio("sounds/Pehli Baarish Mein Jubin Nautiyal 128 Kbps.mp3");
            audio.play();
            break;
            case "Q":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "R":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "S":
            var audio=new Audio("sounds/Saanjha Zara Hatke Zara Bachke 128 Kbps.mp3");
            audio.play();
            break;
            case "T":
            var audio=new Audio("sounds/Tere Vaaste Zara Hatke Zara Bachke 128 Kbps.mp3");
            audio.play();
            break;
            case "U":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "V":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "W":
            var audio=new Audio("sounds/Barsaat-Aa-Gayi.mp3");
            audio.play();
            break;
            case "X":
            var audio=new Audio("sounds/Xcuse Me Xcuse Me 128 Kbps.mp3");
            audio.play();
            break;
            case "Y":
            var audio=new Audio("sounds/yadav-brand.mp3");
            audio.play();
            break;
            case "Z":
            var audio=new Audio("sounds/Zihaal E Miskin Vishal Mishra 128 Kbps.mp3");
            audio.play();
            break;

        default: 
           break; 
    }
}

function animation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },10000)


}
 