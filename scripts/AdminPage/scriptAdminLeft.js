var HeThong = false;
function MoHeThong(x,y,z){
    if(HeThong==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="45px";
    
        document.getElementById(y).style.opacity=1;
        document.getElementById(y).style.height="45px";

        document.getElementById(z).style.opacity=1;
        document.getElementById(z).style.height="45px";
        HeThong = true;
    }
    else if(HeThong==true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
    
        document.getElementById(y).style.opacity=0;
        document.getElementById(y).style.height="0px";

        document.getElementById(z).style.opacity=0;
        document.getElementById(z).style.height="0px";
        HeThong = false;
    }
}

var SanPham = false;
function MoSanPham(x,y,z,m,n){
    if(SanPham==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="45px";
    
        document.getElementById(y).style.opacity=1;
        document.getElementById(y).style.height="45px";

        document.getElementById(z).style.opacity=1;
        document.getElementById(z).style.height="45px";

        document.getElementById(m).style.opacity=1;
        document.getElementById(m).style.height="45px";

        document.getElementById(n).style.opacity=1;
        document.getElementById(n).style.height="45px";
        SanPham = true;
    }
    else if(SanPham==true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
    
        document.getElementById(y).style.opacity=0;
        document.getElementById(y).style.height="0px";

        document.getElementById(z).style.opacity=0;
        document.getElementById(z).style.height="0px";

        document.getElementById(m).style.opacity=0;
        document.getElementById(m).style.height="0px";

        document.getElementById(n).style.opacity=0;
        document.getElementById(n).style.height="0px";
        SanPham = false;
    }
}

var DonHang = false;
function MoDonHang(x,y,z){
    if(DonHang==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="45px";
    
        document.getElementById(y).style.opacity=1;
        document.getElementById(y).style.height="45px";

        document.getElementById(z).style.opacity=1;
        document.getElementById(z).style.height="45px";
        DonHang = true;
    }
    else if(DonHang==true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
    
        document.getElementById(y).style.opacity=0;
        document.getElementById(y).style.height="0px";

        document.getElementById(z).style.opacity=0;
        document.getElementById(z).style.height="0px";
        DonHang = false;
    }
}

var ThongKe = false;
function MoThongKe(x){
    if(ThongKe==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="45px";
        ThongKe = true;
    }
    else if(ThongKe==true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
        ThongKe = false;
    }
}

var HoaDon = false;
function MoHoaDon(x,y,z,m){
    if(HoaDon==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="45px";
    
        document.getElementById(y).style.opacity=1;
        document.getElementById(y).style.height="45px";

        document.getElementById(z).style.opacity=1;
        document.getElementById(z).style.height="45px";

        document.getElementById(m).style.opacity=1;
        document.getElementById(m).style.height="45px";
        HoaDon = true;
    }
    else if(HoaDon==true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
    
        document.getElementById(y).style.opacity=0;
        document.getElementById(y).style.height="0px";

        document.getElementById(z).style.opacity=0;
        document.getElementById(z).style.height="0px";

        document.getElementById(m).style.opacity=0;
        document.getElementById(m).style.height="0px";
        HoaDon = false;
    }
}