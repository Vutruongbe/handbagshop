document.addEventListener('DOMContentLoaded',function(){

    var phantuload = document.querySelector('.cd-DM1');
    var trangthais1 = "duoi";
    var vitris1 = phantuload.offsetTop+1100;

    var phantuload2 = document.querySelector('.cd-DM2');
    var trangthais2 = "duoi";
    var vitris2 = phantuload2.offsetTop+1000;

    var phantuload3 = document.querySelector('.cd-DM3');
    var trangthais3 = "duoi";
    var vitris3 = phantuload3.offsetTop+1000;

    var phantuload4 = document.querySelector('.cd-DM4');
    var trangthais4 = "duoi";
    var vitris4 = phantuload4.offsetTop+900;

    window.addEventListener('scroll',function(){
        //item1
        if(window.pageYOffset > vitris1 ){
            if(trangthais1=='duoi'){
                trangthais1='tren';

                phantuload.classList.add('DMRight');
                phantuload.classList.remove('DMLeft');
            }
        }
        else if(window.pageYOffset < vitris1-50 ){
            if(trangthais1=='tren'){
                trangthais1='duoi';

                phantuload.classList.add('DMLeft');
                phantuload.classList.remove('DMRight');
            }
        }

        //item2
        if(window.pageYOffset > vitris2 ){
            if(trangthais2=='duoi'){
                trangthais2='tren';

                phantuload2.classList.add('DMbLeft');
                phantuload2.classList.remove('DMbRight');
            }
        }
        else if(window.pageYOffset < vitris2-50 ){
            if(trangthais2=='tren'){
                trangthais2='duoi';

                phantuload2.classList.add('DMbRight');
                phantuload2.classList.remove('DMbLeft');
            }
        }

        //item3
        if(window.pageYOffset > vitris3 ){
            if(trangthais3=='duoi'){
                trangthais3='tren';

                phantuload3.classList.add('DMcRight');
                phantuload3.classList.remove('DMcLeft');
            }
        }
        else if(window.pageYOffset < vitris3-30 ){
            if(trangthais3=='tren'){
                trangthais3='duoi';

                phantuload3.classList.add('DMcLeft');
                phantuload3.classList.remove('DMcRight');
            }
        }

        //item4
        if(window.pageYOffset > vitris4 ){
            if(trangthais4=='duoi'){
                trangthais4='tren';

                phantuload4.classList.add('DMdLeft');
                phantuload4.classList.remove('DMdRight');
            }
        }
        else if(window.pageYOffset < vitris4 ){
            if(trangthais4=='tren'){
                trangthais4='duoi';

                phantuload4.classList.add('DMdRight');
                phantuload4.classList.remove('DMdLeft');
            }
        }
    },false)
},false)