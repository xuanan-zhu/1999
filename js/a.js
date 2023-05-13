setInterval(changePic,5000);
var num = -1;
function changePic() {
    num = ((num+1)%7)+1;
    var ps = document.getElementById("photoshow");
    ps.src = "./img/pic"+num+".jpg"
}
var audio = document.getElementsByTagName("audio");