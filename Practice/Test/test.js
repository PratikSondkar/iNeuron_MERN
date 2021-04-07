function light(sw){
    var pic;
    if (sw==1){
        pic = "pic_bulbon.gif";
    }
    else{
        pic = "pic_bulboff copy.gif"
    }
    document.getElementById("myimage").src=pic;
}