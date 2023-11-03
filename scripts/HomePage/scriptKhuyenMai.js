document.addEventListener('DOMContentLoaded',function(){

    var loadSPkm1 = document.querySelector('.cd-SPkm1');
    var loadSPkm2 = document.querySelector('.cd-SPkm2');
    var loadSPkm3 = document.querySelector('.cd-SPkm3');
    var loadSPkm4 = document.querySelector('.cd-SPkm4');
    var trangthaiSPkm = "duoi";

    var Show1a = document.querySelector('.cd-SPshowH1a');
    var Show1b = document.querySelector('.cd-SPshowH1b');
    Show1a.classList.add('SPshowRH1a');
    Show1b.classList.add('SPshowLH1b');
    Show1a.classList.remove('SPshowLH1a');
    Show1b.classList.remove('SPshowRH1b');

    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 2000 ){
            console.log(this.window.pageYOffset);
            if(trangthaiSPkm=='duoi'){
                trangthaiSPkm='tren';
                loadSPkm1.classList.add('KMALLLeft1');
                loadSPkm1.classList.remove('KMALLLRIGHT1');

                loadSPkm2.classList.add('KMALLLeft2');
                loadSPkm2.classList.remove('KMALLLRIGHT2');

                loadSPkm3.classList.add('KMALLLeft3');
                loadSPkm3.classList.remove('KMALLLRIGHT3');

                loadSPkm4.classList.add('KMALLLeft4');
                loadSPkm4.classList.remove('KMALLLRIGHT4');
            }
        }
        else if(window.pageYOffset < 2400 ){
            if(trangthaiSPkm=='tren'){
                trangthaiSPkm='duoi';

                loadSPkm1.classList.add('KMALLLRIGHT1');
                loadSPkm1.classList.remove('KMALLLeft1');

                loadSPkm2.classList.add('KMALLLRIGHT2');
                loadSPkm2.classList.remove('KMALLLeft2');

                loadSPkm3.classList.add('KMALLLRIGHT3');
                loadSPkm3.classList.remove('KMALLLeft3');

                loadSPkm4.classList.add('KMALLLRIGHT4');
                loadSPkm4.classList.remove('KMALLLeft4');
            }
        }
    },false)
},false)