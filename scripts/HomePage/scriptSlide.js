document.addEventListener('DOMContentLoaded',function(){

    var nut = document.querySelectorAll('.chuyenslide ul li');
    var slides = document.querySelectorAll('.cacslide ul li');
    var thoigian = setInterval(function ok(){
        var vitrislide = 0;
        var slidehienthi = document.querySelector('.cacslide ul li.active');
        // 
        for (vitrislide = 0; slidehienthi = slidehienthi.previousElementSibling; vitrislide++) {}
        // 
        if(vitrislide < slides.length-1){
            for (let i = 0; i < slides.length; i++){
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            slides[vitrislide].nextElementSibling.classList.add('active');
            nut[vitrislide].nextElementSibling.classList.add('kichhoat');
        }
        else{
            for (let i = 0; i < slides.length; i++){
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            slides[0].classList.add('active');
            nut[0].classList.add('kichhoat');
        }
    },4000);

    for (let i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click',function(){
            //hủy tự chuyển động
            clearInterval(thoigian);

            //nút
            for (let i = 0; i < nut.length; i++) {
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');

            //xử lý phần tính vị trí
            var nutkichhoat = this;
            var vitrinut = 0;

            for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}

            //cho tất cả slide an di
            for (let m = 0; m < slides.length; m++) {
                slides[m].classList.remove('active');
                slides[vitrinut].classList.add('active');
            }
        })
    }
},)