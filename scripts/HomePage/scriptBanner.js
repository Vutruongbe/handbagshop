document.addEventListener('DOMContentLoaded',function(){

    var load1 = document.querySelector('.cd-LR');
    var load2 = document.querySelector('.cd-BtT');
    var load3 = document.querySelector('.cd-RL');
    // var load4 = document.querySelector('.cd-T');
    var load5 = document.querySelector('.cd-RL2');

    // var load6 = document.querySelector('.cd-A');
    var trangthais3 = "duoi";

    if(trangthais3=='duoi'){
        trangthais3='tren';

        load1.classList.add('sangRight');
        load2.classList.add('lenTop');
        load3.classList.add('sangLeft');
        // load4.classList.add('sangT');
        load5.classList.add('sangLeft2');

        // load6.classList.add('AcdRight');
    }
},false)

// $(function(){
//     $('lentren').click(function(){
//         $('body').animate({scrollTo:0})
//     })
// })
 