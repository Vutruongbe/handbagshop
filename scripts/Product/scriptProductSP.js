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
        ttgh += "<td  id='sl"+ i +"'>"+Sl+"</td>";
        ttgh += "<td>"+tt+"</td>";
        ttgh += "<td><input type='button' value='Xóa' style='width: 60px;height: 30px; cursor: pointer;' onclick='Xoa(this);'></td>";
        ttgh += "<td><input onclick='Tru(this);' style='position: absolute;margin-top: -13px;margin-left: -325px;padding: 5px 10px 5px 10px; cursor: pointer;' type='button' value='-'></td>";
        ttgh += "<td><input onclick='Cong(this);' style='position: absolute;margin-top: -13px;margin-left: -263px;padding: 5px 8px 5px 8px; cursor: pointer;' type='button' value='+'></input></td>";
        ttgh += "<tr>";
                  
        tongTien.push(tt);
        SoLuongTatCaChuaThayDoi = Sl
        
    }
    document.getElementById('chitietgiohang').innerHTML=ttgh;
    thanhTien();
    console.log(giohang);
    huhu = ttgh;
    
}
var huhu;
var huhu1;

function Tru(x){
    let a; 
    var tz=x.parentElement.parentElement;
    var ty=x.parentElement.parentElement.children;
    if(parseInt(ty[4].innerHTML) < 1){
        // tz.remove();
        ty[4].innerHTML = 0;
        a = 0;

    }
    else{
        let soLuongCong = parseInt(ty[4].innerHTML) - 1;
        ty[4].innerHTML = soLuongCong;
        a = ty[3].innerHTML;
    }
    let thanhTienCong = parseInt(ty[4].innerHTML) * parseInt(ty[3].innerHTML);
    ty[5].innerText = thanhTienCong;

    TinhTienNhieuSanPhamNutTru(a);
}

function Cong(x){
    var ty=x.parentElement.parentElement.children;
    let soLuongCong = parseInt(ty[4].innerHTML) + 1;
    ty[4].innerHTML = soLuongCong;
    let thanhTienCong = parseInt(ty[4].innerHTML) * parseInt(ty[3].innerHTML);
    ty[5].innerText = thanhTienCong;
    let a = ty[3].innerHTML;

    TinhTienNhieuSanPhamNutCong(a);
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
    var tz=x.parentElement.parentElement;
    var ty=x.parentElement.parentElement.children;
    let thanhTienCong = parseInt(ty[4].innerHTML) * parseInt(ty[3].innerHTML);
    TinhTienNhieuSanPhamNutTru(thanhTienCong)
    tz.remove();   
    console.log(giohang2);;
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

// Thêm nhiều sản phẩm
var giohang1 = new Array();
var giohang2 = new Array();
var soThuTu = 1;
function themNhieu(x){
    // console.log(huhu);
    
    var zAnh = document.getElementById(x).parentElement.parentElement.children;
    var hinh = zAnh[0].src;
    // console.log(hinh);
    
    var zTen = document.getElementById(x).parentElement.children;
    var ten1 = zTen[0].innerHTML;
    // console.log(ten);
    
    var zDonGia = document.getElementById(x).parentElement.children;
    var gia = zDonGia[2].innerHTML;
    // console.log(gia);
    
    var zSoLuong = document.getElementById(x).parentElement.children;
    var soluong = zSoLuong[4].innerHTML;
    // console.log(soluong);

    if(giohang1.length<1){
        soThuTu=soThuTu+1;
        var item = [hinh,ten1,gia,parseInt(soluong),soThuTu];
        Cong1 = item[2];
        giohang1.push(item);
    }
    else{
        for (let i = 0; i< giohang1.length; i++) {
            if(ten1==giohang1[i][1]){
                giohang1[i][3]= parseInt(giohang1[i][3])+1;
                giohang1 = giohang1.slice(0, 3);
            }
            else if(ten1!=giohang1[i][1]){
                soThuTu = soThuTu + 1;
                soluong = soluong - 1;
                var item = [hinh,ten1,gia,soluong,soThuTu];
                giohang1.push(item);
                giohang2 = giohang1.slice(0, 3);
                
            }
        }
    }

    let ttgh1="";
    let tong1=0;
    for(let i=0; i< giohang1.length; i++){
        let tt1 = parseFloat(giohang1[i][2]) * parseInt(giohang1[i][3]);
        tong1 = tong1 + tt1;
        let hinhsp1 = "<img src='"+ giohang1[i][0] +"' width='100px'>";
        let tensp1= giohang1[i][1];
        let dGia1= giohang1[i][2];
        let Sl1= giohang1[i][3];
        let stt1 = giohang1[i][4];
        ttgh1 += "<tr>";
        ttgh1 += "<td>"+stt1+"</td>";
        ttgh1 += "<td>"+hinhsp1+"</td>";
        ttgh1 += "<td>"+tensp1+"</td>";
        ttgh1 += "<td>"+dGia1+"</td>";
        ttgh1 += "<td  id='sl"+ stt1 +"'>"+Sl1+"</td>";
        ttgh1 += "<td>"+tt1+"</td>";
        ttgh1 += "<td><input type='button' value='Xóa' style='width: 60px;height: 30px; cursor: pointer;' onclick='Xoa(this);'></td>";
        ttgh1 += "<td><input onclick='Tru(this);' style='position: absolute;margin-top: -13px;margin-left: -325px;padding: 5px 10px 5px 10px; cursor: pointer;' type='button' value='-'></td>";
        ttgh1 += "<td><input onclick='Cong(this);' style='position: absolute;margin-top: -13px;margin-left: -263px;padding: 5px 8px 5px 8px; cursor: pointer;' type='button' value='+'></input></td>";
        ttgh1 += "<tr>";
    }
    document.getElementById('chitietgiohang').innerHTML="";
    document.getElementById('chitietgiohang').innerHTML=document.getElementById('chitietgiohang').innerHTML+huhu+ttgh1;    
}


function TinhTienNhieuSanPham(x){
    var a = document.getElementById('tamTinhTien').innerHTML;
    let newA = a.replace("đ", '');
    let b = document.getElementById(x).innerHTML;
    var c = parseInt(newA) + parseInt(b);
    document.getElementById('tamTinhTien').innerHTML = c + 'đ';
    document.getElementById('tienNe').innerHTML = c + 'đ';
}

function TinhTienNhieuSanPhamNutCong(x){
    var a = document.getElementById('tamTinhTien').innerHTML;
    let newA = a.replace("đ", '');
    var c = parseInt(newA) + parseInt(x);
    document.getElementById('tamTinhTien').innerHTML = c + 'đ';
    document.getElementById('tienNe').innerHTML = c + 'đ';
}

function TinhTienNhieuSanPhamNutTru(x){
    var a = document.getElementById('tamTinhTien').innerHTML;
    let newA = a.replace("đ", '');
    var c = parseInt(newA) - parseInt(x);
    document.getElementById('tamTinhTien').innerHTML = c + 'đ';
    document.getElementById('tienNe').innerHTML = c + 'đ';
}
