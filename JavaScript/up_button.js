
window.onscroll = function() {
    
    if (document.documentElement.scrollTop > 300) {
        document.getElementById("up_button").style.display = "block";
    } else {
        document.getElementById("up_button").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}