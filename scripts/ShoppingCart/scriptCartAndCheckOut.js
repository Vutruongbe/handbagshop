var arrSP = new Array();
var arrHD = new Array();

function GuiDuLieuThanhToan(){
    // Thanh Toan
    var tenCells = document.querySelectorAll('#chitietgiohang td:nth-child(3)');
    var soLuongCells = document.querySelectorAll('#chitietgiohang td:nth-child(5)');
    var thanhTienCells = document.querySelectorAll('#chitietgiohang td:nth-child(6)');
    var hinhCells = document.querySelectorAll('#chitietgiohang td:nth-child(2)');
    var dongiaCells = document.querySelectorAll('#chitietgiohang td:nth-child(4)');
    for (let i = 0; i < tenCells.length; i++) {
        
        var itemSP = [i+1, tenCells[i].innerHTML, soLuongCells[i].innerHTML , thanhTienCells[i].innerHTML, hinhCells[i].innerHTML];
        arrSP.push(itemSP);
        var itemHD = [i+1, hinhCells[i].innerHTML, tenCells[i].innerHTML, soLuongCells[i].innerHTML , thanhTienCells[i].innerHTML, dongiaCells[i].innerHTML];
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


function showChoXacNhan() {
    var gp = sessionStorage.getItem("arrSP");
    var thanhtoan = JSON.parse(gp);

    let choxn="";
    for(let i=0; i< thanhtoan.length; i++){
        let tentt = thanhtoan[i][1];
        let sltt = thanhtoan[i][2];
        let ttsp = thanhtoan[i][3];
        var ttMoi = chuyenDoi(ttsp);
        ttsp = ttMoi;
        let imgsp = thanhtoan[i][4];

   
        choxn += "<tr>";
        choxn += "<td>"+tentt+"</td>";
        choxn += "<td>"+imgsp+"</td>";
        choxn += "<td>"+sltt+"</td>";
        choxn += "<td>"+ttsp+"</td>";
        choxn += "<td style='color: blue;'>Chờ xác nhận</td>";
        choxn += "<tr>";
    }
    document.getElementById('chitietchoxacnhan').innerHTML=choxn;
}

function showDonHangAdmin() {
    var gp = sessionStorage.getItem("arrHD");
    var hoadon = JSON.parse(gp);
    var gk = sessionStorage.getItem("nhanTienHD");

    let TongDoooo = 0;

    for (let i = 0; i < hoadon.length; i++) {
        TongDoooo = parseInt(TongDoooo) + parseInt(hoadon[i][3]);
    }

    var chuoiChuyenDoi = gk;
    var chuoiMoi = chuyenDoi(chuoiChuyenDoi);
    // alert(TongDoooo + "-" +gk);

    // Đơn hàng
    var table = document.querySelector('.TableDH');
    var newRow = document.createElement('tr');
    var cell1 = document.createElement('td');
        cell1.textContent = '1'; 
        cell1.style.fontWeight = 'Bold'
    var cell2 = document.createElement('td');
        cell2.textContent = 'ĐH1';
        cell2.style.fontWeight = 'Bold'
    var cell3 = document.createElement('td');
        cell3.textContent = 'KH1';
        cell3.style.fontWeight = 'Bold'
    var cell4 = document.createElement('td');
        cell4.textContent = TongDoooo;
        cell4.style.fontWeight = 'Bold'
    var cell5 = document.createElement('td');
        cell5.textContent = chuoiMoi;
        cell5.style.fontWeight = 'Bold'
    var cell6 = document.createElement('td');
        cell6.textContent = 'Chờ xác nhận';
        cell6.style.fontWeight = 'Bold'
        cell6.style.color = 'blue'
                        
    var editCell = document.createElement('td');
    var editButton = document.createElement('button');
    editButton.type = 'button';
    editButton.innerHTML = '<i class="fa-solid fa-pen" style="color: #005eff;"></i>';
    editCell.appendChild(editButton);
    var deleteCell = document.createElement('td');
    var deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: rgb(245, 45, 0);"></i>';
    deleteButton.addEventListener('click', function() {
        XoaLSP(this);
    });
    deleteCell.appendChild(deleteButton);

    newRow.appendChild(cell1);
    newRow.appendChild(cell2);
    newRow.appendChild(cell3);
    newRow.appendChild(cell4);
    newRow.appendChild(cell5);
    newRow.appendChild(cell6);
    newRow.appendChild(editCell);
    newRow.appendChild(deleteCell);
    table.appendChild(newRow);


    // CT Đơn hàng
    for (let i = 0; i < hoadon.length; i++) {
        
        var tableb = document.querySelector('.TableCTDH');
        var newRowb = document.createElement('tr');
        var cell1b = document.createElement('td');
            cell1b.textContent = i+1; 
            cell1b.style.fontWeight = 'Bold'
        var cell2b = document.createElement('td');
            cell2b.textContent = 'ĐH1';
            cell2b.style.fontWeight = 'Bold'
        var cell3b = document.createElement('td');
            cell3b.textContent = hoadon[i][2];
            cell3b.style.fontWeight = 'Bold'
        var cell4b = document.createElement('td');
            cell4b.innerHTML = hoadon[i][1];
            cell4b.style.fontWeight = 'Bold'
        var cell5b = document.createElement('td');
            cell5b.textContent = hoadon[i][3];
            cell5b.style.fontWeight = 'Bold'
        var cell6b = document.createElement('td');
            cell6b.textContent = chuyenDoi(hoadon[i][5]);
            cell6b.style.fontWeight = 'Bold'
        var cell7b = document.createElement('td');
            cell7b.textContent = chuyenDoi(hoadon[i][4]);
            cell7b.style.fontWeight = 'Bold'
    
        newRowb.appendChild(cell1b);
        newRowb.appendChild(cell2b);
        newRowb.appendChild(cell3b);
        newRowb.appendChild(cell4b);
        newRowb.appendChild(cell5b);
        newRowb.appendChild(cell6b);
        newRowb.appendChild(cell7b);
        tableb.appendChild(newRowb);
    }
}