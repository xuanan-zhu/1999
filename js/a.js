var num = -1;
function changePic() {
        num = ((num+1)%7)+1;
        var ps = document.getElementById("photoshow");
        ps.src = "./img/pic"+num+".jpg";
}
function toggleSound() {
    var music = document.getElementById("music");//获取ID
    if (!music.paused) {
        return;
    }
    music.paused = false;
    music.play();
}
var wp = document.getElementById("left_write");
wp.onclick = function () {
    var w_img = document.getElementById("writeshow");
    w_img.src = "./img/lettershow.jpg";
    setInterval(changePic,5000);
    setInterval("toggleSound()",100);
};

