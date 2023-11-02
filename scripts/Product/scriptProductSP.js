function plus(x)
{
    a = parseInt(document.getElementById(x).value);
    a += 1;
    document.getElementById(x).value = a;
};

function sub(x)
{
    a = parseInt(document.getElementById(x).value);
    if(a > 1)
    {
        a -= 1;
    }
    else{
        if(a=1){
            a-=0;
        }
    }
    document.getElementById(x).value = a;
};

function plus1(x,y) 
{
    a = parseInt(document.getElementById(x).value);
    b = parseInt(document.getElementById(y).value);
    b += a;
    document.getElementById(y).value = b;
}

var giohang = new Array();

var tongTien = new Array();
var stt = 0;
var tongSL=0;
var SoLuongTatCa=0;
var SoLuongTatCaChuaThayDoi;

function themvaogiohang(x,y,z,k,m){
    stt+=1;
    document.getElementById(m).style.width="730px";
    var bx = document.getElementById(x).parentElement.children;
    var by = document.getElementById(y).parentElement.children;
    var bz = document.getElementById(z).parentElement.children;
    var hinh=bx[0].src;
    var ten=by[0].innerText;
    var gia=by[1].children[1].innerText;
    var soluong=bz[2].value;
    var item = [hinh, ten, gia, soluong, stt];
    if (giohang.length < 1){
        giohang.push(item);
        tongSL+=parseInt(item[3], 10);
        console.log(parseInt(tongSL));
    }
    else{
        for (let j = 0; j < giohang.length; j++) {
            if (item[1]==giohang[j][1]){
                console.log(tongSL);
                tongSL+=parseInt(item[3], 10);
                giohang[j][3]=tongSL;
            }
        }
    }
    
    sessionStorage.setItem("giohang",JSON.stringify(giohang));
}


function showgiohang() {
    var gh = sessionStorage.getItem("giohang");
    var giohang = JSON.parse(gh);

    var gp = sessionStorage.getItem("guidigiohang");
    let DuLieuNhanDo = JSON.parse(gp);
    
    let ttgh="";
    let tong=0;
    for(let i=0; i< giohang.length; i++){
        let tt= parseFloat(giohang[i][2])*parseInt(giohang[i][3]);
        tong+=tt;
        SoLuongTatCa+=0;
        let j=i+1;
        let hinhsp = "<img src='"+ giohang[i][0] +"' width='100px'>";
        let tensp= giohang[i][1];
        let dGia= giohang[i][2];
        let Sl= giohang[i][3];
        if(Sl=parseFloat(DuLieuNhanDo)){
            Sl = parseFloat(DuLieuNhanDo);
            tt= parseFloat(giohang[i][2])*parseInt(Sl);
        }else{
            Sl = giohang[i][3];
            tt= parseFloat(giohang[i][2])*parseInt(giohang[i][3]);
        }
        
        ttgh += "<tr>";
        ttgh += "<td>"+j+"</td>";
        ttgh += "<td>"+hinhsp+"</td>";
        ttgh += "<td>"+tensp+"</td>";
        ttgh += "<td>"+dGia+"</td>";
        ttgh += "<td>"+Sl+"</td>";
        ttgh += "<td>"+tt+"</td>";
        ttgh += "<td><input type='button' value='Sửa' style='width: 60px;height: 30px;' onclick='Sua(this,"+i+")'></td>";
        ttgh += "<td><input type='button' value='Xóa' style='width: 60px;height: 30px;' onclick='Xoa(this)'></td>";
        ttgh += "<tr>";
        
        tongTien.push(tt);
        SoLuongTatCaChuaThayDoi = Sl
        
    }
    document.getElementById('chitietgiohang').innerHTML=ttgh;
    thanhTien();
    console.log(giohang);

}

//hoàn thiện
function thanhTien(){
    let thanhTienAll = 0;
    for (let z = 0; z< tongTien.length; z++){
        thanhTienAll+=tongTien[z];
    }
    document.getElementById('tamTinhTien').innerHTML=thanhTienAll+'đ';
    document.getElementById('tienNe').innerHTML=thanhTienAll+'đ';
}

let truTien = 0;
let capnhaptien = 0;
function Xoa(x){
    var ty=x.parentElement.parentElement;
    truTien-=parseInt(capnhaptien, 10);
    document.getElementById('tamTinhTien').innerHTML=truTien+'đ';
    document.getElementById('tienNe').innerHTML=truTien+'đ';
    ty.remove();   
}

function XoaTatCa() {
    let tienXoaALL = 0;
    document.getElementById('chitietgiohang').innerHTML="";
    document.getElementById('tamTinhTien').innerHTML=tienXoaALL+'đ';
    document.getElementById('tienNe').innerHTML=tienXoaALL+'đ';
}

function Sua(x,i){
    var tn=x.parentElement.parentElement.children;
    var donGiaSP = tn[3].innerHTML;
    tn[4].innerHTML= CanSua;
    var TongTien = parseInt(donGiaSP)*parseInt(CanSua);
    tn[5].innerHTML= TongTien;
    capnhaptien = TongTien;
    truTien = TongTien;
    document.getElementById('tamTinhTien').innerHTML=TongTien+'đ';
    document.getElementById('tienNe').innerHTML=TongTien+'đ';
    SoLuongTatCa = CanSua;
    //qtrong lam tiep thanh toan
    console.log(document.getElementById('chitietgiohang').innerHTML);
    //
}

let CanSua;
function SuaSoLuong(x,y) {
    var slsua = document.getElementById(x).value;
    CanSua = slsua;
    document.getElementById(y).style.opacity = 0 ;
}

function CapNhap(x){
    document.getElementById(x).style.opacity = 1 ;
}

function HuySua(x){
    document.getElementById(x).style.opacity = 0 ;
}

function QuayLaiVaTruyenDuLieu(){
    if(SoLuongTatCa==0){
        sessionStorage.setItem("guilaigiohang",JSON.stringify(SoLuongTatCaChuaThayDoi));
    }else{
        sessionStorage.setItem("guilaigiohang",JSON.stringify(SoLuongTatCa));
    }
}

function NhanDuLieuGuiVe(){
    var gg = sessionStorage.getItem("guilaigiohang");
    let DuLieuNhanVe = JSON.parse(gg);
    if(DuLieuNhanVe == null){
        document.getElementById('sohanggiohang1').value = 0;
    }
    else{
        document.getElementById('sohanggiohang1').value = parseFloat(DuLieuNhanVe);
        console.log(DuLieuNhanVe);
        sessionStorage.setItem("guidigiohang",JSON.stringify(DuLieuNhanVe));
    }
}


















// function showcart(x,y){
//     var bx=document.getElementById(x);
//     if (bx.style.display=="none"){
//         bx.style.display="block";
//     }else{
//         bx.style.display="none";
//     }
// }



// var giohang = new Array();

// function themvaogiohang(x,y,z,k,m){
//     document.getElementById(m).style.width="730px";
//     var bx = document.getElementById(x).parentElement.children;
//     var by = document.getElementById(y).parentElement.children;
//     var bz = document.getElementById(z).parentElement.children;
//     var hinh=bx[0].src;
//     var ten=by[0].innerText;
//     var gia=by[1].children[1].innerText;
//     var soluong=bz[2].value;
//     var item = [hinh, ten, gia, soluong];
//     // let ttgh="";
//     // let tong=0;
//     giohang.push(item);
//     alert(giohang);
//     // for(let i=0; i< giohang.length; i++){
//     //     let tt= parseFloat(giohang[i][2])*parseInt(giohang[i][3]);
//     //     tong+=tt;
//     //     let j=i+1;
//     //     let hinhsp = "<img style='width: 80px; hight: 20px ;padding:0 0 0 30px' src='"+ giohang[i][0] +"'>";
//     //     let tensp= giohang[i][1];
//     //     let dGia= giohang[i][2];
//     //     let Sl= giohang[i][3];

//     //     ttgh += "<tr>";
//     //     ttgh += "<td>"+j+"</td>";
//     //     ttgh += "<td>"+hinhsp+"</td>";
//     //     ttgh += "<td style='padding:0 0 0 40px'>"+tensp+"</td>";
//     //     ttgh += "<td style='padding:0 0 0 22px'>"+dGia+"đ</td>";
//     //     ttgh += "<td style='padding:0 0 0 45px'>"+Sl+"</td>";
//     //     ttgh += "<td style='padding:0 0 0 20px'>"+tt+".000đ</td>";
//     //     ttgh += "<td style='padding:0 0 0 12px'><button style='width: 20px; hight: 20px ;padding:10px' onclick='Xoa(this)'></button></td>";
//     //     ttgh += "<tr>";

//     //     document.getElementById(k).innerHTML=ttgh;
//     // }
//     // ttgh +="<tr>";
//     // ttgh +="<th colspan='5' style='padding-left: 420px;'>Tổng đơn hàng:</th>";
//     // ttgh +="<th>" + tong + "<span>.000đ</span></th>";
//     // ttgh +="</tr>";
//     // // alert(giohang
//     // document.getElementById(k).innerHTML=ttgh;
//     // alert(
//     // document.getElementById(k).innerHTML
//     // )

//     sessionStorage.setItem("giohang",JSON.stringify(giohang));
// }