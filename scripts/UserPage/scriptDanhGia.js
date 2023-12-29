function moDanhGia(){
    document.getElementById('okdayNha').style.opacity='0';
    document.getElementById('okdayNha').style.width='0px';
    document.getElementById('okdayNha').style.height='0px';
    document.getElementById('divDanhGia').style.opacity='0';
    document.getElementById('divDanhGia').style.width='0px';
    document.getElementById('divDanhGia').style.height='0px';

    document.getElementById('okdayNha1').style.opacity='1';

    document.getAnimations('tx1').style.position= 'fixed';
}

var mm;
function DanhGiaNe(x){
    let a = document.getElementById(x).id;
    if(a=='sao1'){
        mm=1;
        document.getElementById(x).style.color='yellow';
        document.getElementById('sao2').style.color='rgb(141, 136, 136)';
        document.getElementById('sao3').style.color='rgb(141, 136, 136)';
        document.getElementById('sao4').style.color='rgb(141, 136, 136)';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao2'){
        mm=2;
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='rgb(141, 136, 136)';
        document.getElementById('sao4').style.color='rgb(141, 136, 136)';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao3'){
        mm=3;
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='yellow';
        document.getElementById('sao4').style.color='rgb(141, 136, 136)';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao4'){
        mm=4;
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='yellow';
        document.getElementById('sao4').style.color='yellow';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao5'){
        mm=5;
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='yellow';
        document.getElementById('sao4').style.color='yellow';
        document.getElementById('sao5').style.color='yellow';
    }
}

function DanhGiaHoanTatMua(){
    alert(mm)
    sessionStorage.setItem('sosao19',mm);
    sessionStorage.setItem('danhgia19',document.getElementById('doan-van').value)
    window.location.href='indexProduct.html';
}

function showDanhGiaaa(){
    let danhs="";
    var a = sessionStorage.getItem("sosao19");
    var b = sessionStorage.getItem("danhgia19");
    if(a==1){
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 10px;'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
    }
    else if(a==2){
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 10px;'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
    }
    else if(a==3){
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 10px;'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
    }
    else if(a==4){
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 10px;'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='color: rgb(141, 136, 136);margin-left: 5px'></i>";
    }
    else if(a==5){
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 10px;'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
        danhs+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 5px'></i>";
    }

    let danhgia="";
    if(a==null){}
    else{
        danhgia+="<div class='DGKhachHang'>";
        danhgia+="<hr>";
        danhgia+="<div class='KH'>";
        danhgia+="<div class='imgKH'>";
        danhgia+="<img src='images/KH1.jpg'>";
        danhgia+="</div>"
        danhgia+="<div class='tenKH'>"
        danhgia+="<a>v*****6</a>"
        danhgia+="</div>";
        danhgia+="<div class='soSaoKH'>";
        danhgia+=danhs;
        // danhgia+="<i class='fa-sharp fa-solid fa-star' style='margin-left: 10px;'></i>";
        // danhgia+="<i class='fa-sharp fa-solid fa-star'></i>";
        // danhgia+="<i class='fa-sharp fa-solid fa-star'></i>";
        // danhgia+="<i class='fa-sharp fa-solid fa-star'></i>";
        // danhgia+="<i class='fa-sharp fa-solid fa-star'></i>";
        danhgia+="</div>";
        danhgia+="<div class='NDKH'>";
        danhgia+="<a>"+b+"</a>";
        danhgia+="</div>";
        danhgia+="</div>";
        danhgia+="</div>;"
        let r = document.getElementById('TatCaDanhGia').innerHTML;
        document.getElementById('TatCaDanhGia').innerHTML="";
        document.getElementById('TatCaDanhGia').style.marginTop="-50px";
        document.getElementById('divDanhGia').innerHTML+=danhgia;
        // document.getElementById('divDanhGia').innerHTML+=r;
    }
}