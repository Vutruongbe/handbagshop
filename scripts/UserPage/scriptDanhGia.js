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

function DanhGiaNe(x){
    let a = document.getElementById(x).id;
    if(a=='sao1'){
        document.getElementById(x).style.color='yellow';
        document.getElementById('sao2').style.color='rgb(141, 136, 136)';
        document.getElementById('sao3').style.color='rgb(141, 136, 136)';
        document.getElementById('sao4').style.color='rgb(141, 136, 136)';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao2'){
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='rgb(141, 136, 136)';
        document.getElementById('sao4').style.color='rgb(141, 136, 136)';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao3'){
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='yellow';
        document.getElementById('sao4').style.color='rgb(141, 136, 136)';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao4'){
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='yellow';
        document.getElementById('sao4').style.color='yellow';
        document.getElementById('sao5').style.color='rgb(141, 136, 136)';
    }
    else if(a=='sao5'){
        document.getElementById('sao1').style.color='yellow';
        document.getElementById('sao2').style.color='yellow';
        document.getElementById('sao3').style.color='yellow';
        document.getElementById('sao4').style.color='yellow';
        document.getElementById('sao5').style.color='yellow';
    }
}