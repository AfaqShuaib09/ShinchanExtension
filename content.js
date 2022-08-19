var IMAGE_URL = "https://swall.teahub.io/photos/small/64-648236_shinchan-hd-wallpaper-for-pc.png";

var jQueryScript = document.createElement('script');  
jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
document.head.appendChild(jQueryScript);

function ReplaceImage(){
    document.querySelectorAll("img")
    .forEach(img => {
      img.src = IMAGE_URL;
    })
  }
 

// ReplaceImage function is called when the page is loaded    

ReplaceImage();

setInterval(() => {
ReplaceImage();
}, 500);
