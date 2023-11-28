var arrSP = new Array();
var arrHD = new Array();

function GuiDuLieuThanhToan(){
    // Thanh Toan
    var tenCells = document.querySelectorAll('#chitietgiohang td:nth-child(3)');
    var soLuongCells = document.querySelectorAll('#chitietgiohang td:nth-child(5)');
    var thanhTienCells = document.querySelectorAll('#chitietgiohang td:nth-child(6)');
    var hinhCells = document.querySelectorAll('#chitietgiohang td:nth-child(2)');
    for (let i = 0; i < tenCells.length; i++) {
        
        var itemSP = [i+1, tenCells[i].innerHTML, soLuongCells[i].innerHTML , thanhTienCells[i].innerHTML];
        arrSP.push(itemSP);
        var itemHD = [i+1, hinhCells[i].innerHTML, tenCells[i].innerHTML, soLuongCells[i].innerHTML , thanhTienCells[i].innerHTML];
        arrHD.push(itemHD);
    }

    sessionStorage.setItem("arrSP",JSON.stringify(arrSP));
    var nhanTien = document.getElementById('tamTinhTien').innerHTML;
    sessionStorage.setItem("nhanTienSP",nhanTien);

    sessionStorage.setItem("arrHD",JSON.stringify(arrHD));
    sessionStorage.setItem("nhanTienHD",nhanTien);
}

function showgiohangThanhToan() {
    var gp = sessionStorage.getItem("arrSP");
    var thanhtoan = JSON.parse(gp);

    var gk = sessionStorage.getItem("nhanTienSP");

    let ttghtt="";
    for(let i=0; i< thanhtoan.length; i++){
        let stt = thanhtoan[i][0];
        let tentt = thanhtoan[i][1];
        let sltt = thanhtoan[i][2];
        let ttsp = thanhtoan[i][3];
        var ttMoi = chuyenDoi(ttsp);
        ttsp = ttMoi;
   
        ttghtt += "<tr>";
        ttghtt += "<td>"+stt+"</td>";
        ttghtt += "<td>"+tentt+"</td>";
        ttghtt += "<td>"+sltt+"</td>";
        ttghtt += "<td>"+ttsp+"</td>";
        ttghtt += "<tr>";
    }
    var chuoiChuyenDoi = gk;
    var chuoiMoi = chuyenDoi(chuoiChuyenDoi);

    document.getElementById('chitietthanhtoan').innerHTML=ttghtt;
    document.getElementById('nhanThanhTien').innerHTML=chuoiMoi;

}

function chuyenDoi(x) {
    var num = x.replace(/[^\d]/g, '');
    var arr = num.split("");
    for (var i = arr.length - 3; i > 0; i -= 3) {
        arr.splice(i, 0, ".");
    }
    var ketqua = arr.join("") + "đ";
    return ketqua;
}

function showHoaDon() {
    var gp = sessionStorage.getItem("arrHD");
    var hoadon = JSON.parse(gp);
    var gk = sessionStorage.getItem("nhanTienHD");

    let ttghtt="";
    for(let i=0; i< hoadon.length; i++){
        let stt = hoadon[i][0];
        let hinhtt = hoadon[i][1];
        let tentt = hoadon[i][2];
        let sltt = hoadon[i][3];
        let ttsp = hoadon[i][4];
        var ttMoi = chuyenDoi(ttsp);
        ttsp = ttMoi;
   
        ttghtt += "<tr>";
        ttghtt += "<td style='border: 1px solid;text-align: center;'>"+stt+"</td>";
        ttghtt += "<td style='border: 1px solid;text-align: center;'>"+hinhtt+"</td>";
        ttghtt += "<td style='border: 1px solid;text-align: center;'>"+tentt+"</td>";
        ttghtt += "<td style='border: 1px solid;text-align: center;'>"+sltt+"</td>";
        ttghtt += "<td style='border: 1px solid;text-align: center;'>"+ttsp+"</td>";
        ttghtt += "<tr>";
    }
    var chuoiChuyenDoi = gk;
    var chuoiMoi = chuyenDoi(chuoiChuyenDoi);

    // alert(ttghtt)
    document.getElementById('chitiethoadon').innerHTML=ttghtt;
    document.getElementById('nhanThanhTienHoaDon').innerHTML=chuoiMoi;

}

