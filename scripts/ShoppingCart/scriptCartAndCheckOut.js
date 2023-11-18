var arrSP = new Array();

function GuiDuLieuThanhToan(){
    var tenCells = document.querySelectorAll('#chitietgiohang td:nth-child(3)');
    var soLuongCells = document.querySelectorAll('#chitietgiohang td:nth-child(5)');
    var thanhTienCells = document.querySelectorAll('#chitietgiohang td:nth-child(6)');
    for (let i = 0; i < tenCells.length; i++) {
        
        var itemSP = [i+1, tenCells[i].innerHTML, soLuongCells[i].innerHTML , thanhTienCells[i].innerHTML];
        arrSP.push(itemSP);
    }

    sessionStorage.setItem("arrSP",JSON.stringify(arrSP));
    var nhanTien = document.getElementById('tamTinhTien').innerHTML;
    sessionStorage.setItem("nhanTienSP",nhanTien);
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



