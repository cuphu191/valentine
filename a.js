
window.addEventListener('scroll', function () {
    const scroll = window.scrollY;
    if(scroll >= 200 && scroll < 680){
        document.getElementById('g1').style.display = "none";
        document.getElementById('t1').style.display = "block";
    }
    else if( scroll < 200 ){
        document.getElementById('t1').style.display = "none";
        document.getElementById('g1').style.display = "block";
    }
    else if(scroll >= 750 && scroll < 1200){
        document.getElementById('g2').style.display = "none";
        document.getElementById('t2').style.display = "block";
    }
    else if( scroll > 650 && scroll < 850){
        document.getElementById('t2').style.display = "none";
        document.getElementById('g2').style.display = "block";
    }
    else if(scroll >= 1273 && scroll < 1720){
        document.getElementById('g3').style.display = "none";
        document.getElementById('t3').style.display = "block";
    }
    else if( scroll > 1200 && scroll < 1400){
        document.getElementById('t3').style.display = "none";
        document.getElementById('g3').style.display = "block";
    }
    else if(scroll >= 1773){
        document.getElementById('g4').style.display = "none";
        document.getElementById('t4').style.display = "block";
    }
    else if( scroll > 1720 && scroll < 1773){
        document.getElementById('t4').style.display = "none";
        document.getElementById('g4').style.display = "block";
    }
    console.log(scroll)
})



