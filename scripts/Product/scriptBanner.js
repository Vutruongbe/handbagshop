document.addEventListener('DOMContentLoaded',function(){

    var load1 = document.querySelector('.cd-LR');
    var load2 = document.querySelector('.cd-BtT');
    var load3 = document.querySelector('.cd-RL');
    var load4 = document.querySelector('.Ok-cd');
    var load5 = document.querySelector('.Ok1-cd');
    var trangthais3 = "duoi";

    if(trangthais3=='duoi'){
        trangthais3='tren';

        load1.classList.add('sangRight');
        load2.classList.add('lenTop');
        load3.classList.add('sangLeft');
        load4.classList.add('sangLeft9');
        load5.classList.add('sangLeft10');
    }
},false)
