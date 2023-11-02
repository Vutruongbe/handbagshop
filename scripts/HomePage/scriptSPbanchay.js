document.addEventListener('DOMContentLoaded',function(){

    var loadSPbc1 = document.querySelector('.cd-SPbc1');
    var loadSPbc2 = document.querySelector('.cd-SPbc2');
    var loadSPbc3 = document.querySelector('.cd-SPbc3');
    var trangthaiSPbc = "duoi";
    var vitrispbc = loadSPbc1.offsetTop+550;



    window.addEventListener('scroll',function(){
        if(window.pageYOffset > vitrispbc ){
            if(trangthaiSPbc=='duoi'){
                trangthaiSPbc='tren';

                loadSPbc1.classList.add('BCALLRight');
                loadSPbc1.classList.remove('BCALLLeft');
                loadSPbc2.classList.add('BCALLRight2');
                loadSPbc2.classList.remove('BCALLLeft2');
                loadSPbc3.classList.add('BCALLRight3');
                loadSPbc3.classList.remove('BCALLLeft3');
            }
        }
        else if(window.pageYOffset < vitrispbc ){
            if(trangthaiSPbc=='tren'){
                trangthaiSPbc='duoi';

                loadSPbc1.classList.add('BCALLLeft');
                loadSPbc1.classList.remove('BCALLRight');
                loadSPbc2.classList.add('BCALLLeft2');
                loadSPbc2.classList.remove('BCALLRight2');
                loadSPbc3.classList.add('BCALLLeft3');
                loadSPbc3.classList.remove('BCALLRight3');
            }
        }
    },false)
},false)

function ClickTim(x){
    if(document.getElementById(x).style.color != 'red'){
        document.getElementById(x).style.color = 'red';
        console.log(document.getElementById(x).style.color);
    }
    else if(document.getElementById(x).style.color != '#bdb8b8'){
        document.getElementById(x).style.color = '#bdb8b8';
        console.log(document.getElementById(x).style.color);
    }
}