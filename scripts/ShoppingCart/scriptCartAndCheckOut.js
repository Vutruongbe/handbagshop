var arrSP = new Array();
var arrHD = new Array();
var arrXuLySuaDonHang = new Array();

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

    document.getElementById('chitiethoadon').innerHTML=ttghtt;
    document.getElementById('nhanThanhTienHoaDon').innerHTML=chuoiMoi;
}

function showChoXacNhan() {
    var gp = sessionStorage.getItem("arrSP");
    var thanhtoan = JSON.parse(gp);
    
    //session
    var pp = sessionStorage.getItem("nhanTrangThaiDonHang");
    var tenLogic = sessionStorage.getItem("tenLogic");
    var soluongLogic = sessionStorage.getItem("soluongLogic");
    var tienLogic = sessionStorage.getItem("tienLogic");
    if(pp=="Đã giao hàng"){
        document.getElementById("divDanhGia").style.opacity='1';
    }
    if(pp==null){
        let choxn="";
        for(let i=0; i< thanhtoan.length; i++){
            let tentt = thanhtoan[i][1];
            let sltt;
            let ttsp;
            if(tenLogic==null){
                sltt = thanhtoan[i][2];
                ttsp = thanhtoan[i][3];
            }else{
                if(thanhtoan[i][1]==tenLogic){
                    sltt = soluongLogic;
                    ttsp = tienLogic;
                }
                else{
                    sltt = thanhtoan[i][2];
                    ttsp = thanhtoan[i][3];
                }
            }
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
        sessionStorage.setItem("GuiLaiTen",tenLogic);
        sessionStorage.setItem("GuiLaiSL",soluongLogic);
        sessionStorage.setItem("GuiLaiTienX",tienLogic);
    }
    else{
        let choxn="";
        for(let i=0; i< thanhtoan.length; i++){
            let tentt = thanhtoan[i][1];
            let sltt;
            let ttsp;
            if(tenLogic==null){
                sltt = thanhtoan[i][2];
                ttsp = thanhtoan[i][3];
            }else{
                if(thanhtoan[i][1]==tenLogic){
                    sltt = soluongLogic;
                    ttsp = tienLogic;
                }
                else{
                    sltt = thanhtoan[i][2];
                    ttsp = thanhtoan[i][3];
                }
            }
            var ttMoi = chuyenDoi(ttsp);
            ttsp = ttMoi;
            let imgsp = thanhtoan[i][4];
    
            choxn += "<tr>";
            choxn += "<td>"+tentt+"</td>";
            choxn += "<td>"+imgsp+"</td>";
            choxn += "<td>"+sltt+"</td>";
            choxn += "<td>"+ttsp+"</td>";
            choxn += "<td style='color: blue;' class='allSPn'>"+pp+"</td>";
            choxn += "<tr>";
        }
        document.getElementById('chitietchoxacnhan').innerHTML=choxn;
        sessionStorage.setItem("showDonHang",pp);
    }

}

function showDonHangAdmin() {
    var gp = sessionStorage.getItem("arrHD");
    var hoadon = JSON.parse(gp);
    var gk = sessionStorage.getItem("nhanTienHD");

    //session DonHang
    var ktrshow = sessionStorage.getItem("showDonHang");


    //session CTDonHang
    var GuiLaiTen = sessionStorage.getItem("GuiLaiTen");
    var GuiLaiSL = sessionStorage.getItem("GuiLaiSL");
    var GuiLaiTienX = sessionStorage.getItem("GuiLaiTienX");


    if(ktrshow==null){
        let TongDoooo = 0;

        for (let i = 0; i < hoadon.length; i++) {
            TongDoooo = parseInt(TongDoooo) + parseInt(hoadon[i][3]);
        }

        var chuoiChuyenDoi = gk;
        var chuoiMoi = chuyenDoi(chuoiChuyenDoi);

        // Đơn hàng
        var table = document.querySelector('.TableDH');
        var newRow = document.createElement('tr');
        var cell0 = document.createElement('td');
            cell0.innerHTML = '<th><input type="checkbox" name="" id=""></th>'; 
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
        editButton.addEventListener('click', function() {
            document.getElementById('SuaDonHang').style.width="600px";
            document.getElementById('SuaDonHang').style.height="170px";
            document.getElementById('SuaDonHang').style.padding="10px";
            var DataMaDH = document.querySelectorAll('#TableDH td:nth-child(3)');
            var DataMaKH = document.querySelectorAll('#TableDH td:nth-child(4)');
            var DataSoLuong = document.querySelectorAll('#TableDH td:nth-child(5)');
            var DataTongTien = document.querySelectorAll('#TableDH td:nth-child(6)');

            document.getElementById('mDHs').value=DataMaDH[0].innerHTML;
            document.getElementById('mKHs').value=DataMaKH[0].innerHTML;
            document.getElementById('SLs').innerHTML=DataSoLuong[0].innerHTML;
            document.getElementById('TgTs').innerHTML=DataTongTien[0].innerHTML;

        });
        editCell.appendChild(editButton);
        var deleteCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: rgb(245, 45, 0);"></i>';
        deleteButton.addEventListener('click', function() {
            XoaLSP(this);
        });
        deleteCell.appendChild(deleteButton);

        newRow.appendChild(cell0);
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);
        newRow.appendChild(editCell);
        newRow.appendChild(deleteCell);
        table.appendChild(newRow);
    }
    else{
        let TongDoooo = 0;

        for (let i = 0; i < hoadon.length; i++) {
            TongDoooo = parseInt(TongDoooo) + parseInt(hoadon[i][3]);
        }

        var chuoiChuyenDoi = gk;
        var chuoiMoi = chuyenDoi(chuoiChuyenDoi);

        // Đơn hàng
        var table = document.querySelector('.TableDH');
        var newRow = document.createElement('tr');
        var cell0 = document.createElement('td');
            cell0.innerHTML = '<th><input type="checkbox" name="" id=""></th>'; 
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
            cell6.textContent = ktrshow;
            cell6.style.fontWeight = 'Bold'
            cell6.style.color = 'blue'
                            
        var editCell = document.createElement('td');
        var editButton = document.createElement('button');
        editButton.type = 'button';
        editButton.innerHTML = '<i class="fa-solid fa-pen" style="color: #005eff;"></i>';
        editButton.addEventListener('click', function() {
            document.getElementById('SuaDonHang').style.width="600px";
            document.getElementById('SuaDonHang').style.height="170px";
            document.getElementById('SuaDonHang').style.padding="10px";
            var DataMaDH = document.querySelectorAll('#TableDH td:nth-child(3)');
            var DataMaKH = document.querySelectorAll('#TableDH td:nth-child(4)');
            var DataSoLuong = document.querySelectorAll('#TableDH td:nth-child(5)');
            var DataTongTien = document.querySelectorAll('#TableDH td:nth-child(6)');

            document.getElementById('mDHs').value=DataMaDH[0].innerHTML;
            document.getElementById('mKHs').value=DataMaKH[0].innerHTML;
            document.getElementById('SLs').innerHTML=DataSoLuong[0].innerHTML;
            document.getElementById('TgTs').innerHTML=DataTongTien[0].innerHTML;

        });
        editCell.appendChild(editButton);
        var deleteCell = document.createElement('td');
        var deleteButton = document.createElement('button');
        deleteButton.type = 'button';
        deleteButton.innerHTML = '<i class="fa-solid fa-trash" style="color: rgb(245, 45, 0);"></i>';
        deleteButton.addEventListener('click', function() {
            XoaLSP(this);
        });
        deleteCell.appendChild(deleteButton);

        newRow.appendChild(cell0);
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);
        newRow.appendChild(editCell);
        newRow.appendChild(deleteCell);
        table.appendChild(newRow);
    }


    // CT Đơn hàng
    if(GuiLaiTen==null){
        for (let i = 0; i < hoadon.length; i++) {
            
            var tableb = document.querySelector('.TableCTDH');
            var newRowb = document.createElement('tr');
            var cell0b = document.createElement('td');
                cell0b.innerHTML = '<th><input type="checkbox" name="" id=""></th>'; 
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
        
            var editCellb = document.createElement('td');
            var editButtonb = document.createElement('button');
            editButtonb.type = 'button';
            editButtonb.innerHTML = '<i class="fa-solid fa-pen" style="color: #005eff;"></i>';
            editButtonb.addEventListener('click', function() {
                document.getElementById('SuaCTDonHang').style.width="600px";
                document.getElementById('SuaCTDonHang').style.height="150px";
                document.getElementById('SuaCTDonHang').style.padding="10px";
    
                var DataCTMaDH = document.querySelectorAll('#TableCTDH td:nth-child(3)');
                var DataCTtenSP = document.querySelectorAll('#TableCTDH td:nth-child(4)');
                var DataCTsoLuong = document.querySelectorAll('#TableCTDH td:nth-child(6)');
                var DataCTthanhTien = document.querySelectorAll('#TableCTDH td:nth-child(8)');
    
                document.getElementById('mDHct').innerHTML=DataCTMaDH[i].innerHTML;
                document.getElementById('tenSPct').innerHTML=DataCTtenSP[i].innerHTML;
                document.getElementById('SLct').value=DataCTsoLuong[i].innerHTML;
                document.getElementById('ThanhTienSP').innerHTML=DataCTthanhTien[i].innerHTML;
    
    
            });
            editCellb.appendChild(editButtonb);
            var deleteCellb = document.createElement('td');
            var deleteButtonb = document.createElement('button');
            deleteButtonb.type = 'button';
            deleteButtonb.innerHTML = '<i class="fa-solid fa-trash" style="color: rgb(245, 45, 0);"></i>';
            deleteButtonb.addEventListener('click', function() {
                XoaLSP(this);
            });
            deleteCellb.appendChild(deleteButtonb);
    
            newRowb.appendChild(cell0b);
            newRowb.appendChild(cell1b);
            newRowb.appendChild(cell2b);
            newRowb.appendChild(cell3b);
            newRowb.appendChild(cell4b);
            newRowb.appendChild(cell5b);
            newRowb.appendChild(cell6b);
            newRowb.appendChild(cell7b);
            newRowb.appendChild(editCellb);
            newRowb.appendChild(deleteCellb);
            tableb.appendChild(newRowb);
        }
    }
    else{
        for (let i = 0; i < hoadon.length; i++) {
            
            var tableb = document.querySelector('.TableCTDH');
            var newRowb = document.createElement('tr');
            var cell0b = document.createElement('td');
                cell0b.innerHTML = '<th><input type="checkbox" name="" id=""></th>'; 
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
                if(GuiLaiTen==hoadon[i][2]){
                    cell5b.textContent = GuiLaiSL;
                    cell5b.style.fontWeight = 'Bold'
                }
                else{
                    cell5b.textContent = hoadon[i][3];
                    cell5b.style.fontWeight = 'Bold'
                }
            var cell6b = document.createElement('td');
                cell6b.textContent = chuyenDoi(hoadon[i][5]);
                cell6b.style.fontWeight = 'Bold'
            var cell7b = document.createElement('td');
                if(GuiLaiTen==hoadon[i][2]){
                    cell7b.textContent = GuiLaiTienX;
                }
                else{
                    cell7b.textContent = chuyenDoi(hoadon[i][4]);
                }
                cell7b.style.fontWeight = 'Bold'
        
            var editCellb = document.createElement('td');
            var editButtonb = document.createElement('button');
            editButtonb.type = 'button';
            editButtonb.innerHTML = '<i class="fa-solid fa-pen" style="color: #005eff;"></i>';
            editButtonb.addEventListener('click', function() {
                document.getElementById('SuaCTDonHang').style.width="600px";
                document.getElementById('SuaCTDonHang').style.height="150px";
                document.getElementById('SuaCTDonHang').style.padding="10px";
    
                var DataCTMaDH = document.querySelectorAll('#TableCTDH td:nth-child(3)');
                var DataCTtenSP = document.querySelectorAll('#TableCTDH td:nth-child(4)');
                var DataCTsoLuong = document.querySelectorAll('#TableCTDH td:nth-child(6)');
                var DataCTthanhTien = document.querySelectorAll('#TableCTDH td:nth-child(8)');
    
                document.getElementById('mDHct').innerHTML=DataCTMaDH[i].innerHTML;
                document.getElementById('tenSPct').innerHTML=DataCTtenSP[i].innerHTML;
                document.getElementById('SLct').value=DataCTsoLuong[i].innerHTML;
                document.getElementById('ThanhTienSP').innerHTML=DataCTthanhTien[i].innerHTML;
    
    
            });
            editCellb.appendChild(editButtonb);
            var deleteCellb = document.createElement('td');
            var deleteButtonb = document.createElement('button');
            deleteButtonb.type = 'button';
            deleteButtonb.innerHTML = '<i class="fa-solid fa-trash" style="color: rgb(245, 45, 0);"></i>';
            deleteButtonb.addEventListener('click', function() {
                XoaLSP(this);
            });
            deleteCellb.appendChild(deleteButtonb);
    
            newRowb.appendChild(cell0b);
            newRowb.appendChild(cell1b);
            newRowb.appendChild(cell2b);
            newRowb.appendChild(cell3b);
            newRowb.appendChild(cell4b);
            newRowb.appendChild(cell5b);
            newRowb.appendChild(cell6b);
            newRowb.appendChild(cell7b);
            newRowb.appendChild(editCellb);
            newRowb.appendChild(deleteCellb);
            tableb.appendChild(newRowb);
        }
    }
}

function HuySuaDonHang(){
    document.getElementById('SuaDonHang').style.width="0px";
    document.getElementById('SuaDonHang').style.height="0px";
    document.getElementById('SuaDonHang').style.padding="0px";
}

function XacNhanSuaDonHang(){
    document.querySelectorAll('#TableDH td:nth-child(3)')[0].innerHTML=document.getElementById('mDHs').value;
    document.querySelectorAll('#TableDH td:nth-child(4)')[0].innerHTML=document.getElementById('mKHs').value;
    document.querySelectorAll('#TableDH td:nth-child(5)')[0].innerHTML=document.getElementById('SLs').innerHTML;
    document.querySelectorAll('#TableDH td:nth-child(6)')[0].innerHTML=document.getElementById('TgTs').innerHTML;
    document.querySelectorAll('#TableDH td:nth-child(7)')[0].innerHTML=document.getElementById('TTs').value;

    for(let i = 0; i < document.querySelectorAll('#TableCTDH td:nth-child(3)').length; i++) {
        document.querySelectorAll('#TableCTDH td:nth-child(3)')[i].innerHTML=document.getElementById('mDHs').value;
    }

    //session
    let a = document.querySelectorAll('#TableDH td:nth-child(7)')[0].innerHTML;
    sessionStorage.setItem("nhanTrangThaiDonHang",a);

    document.getElementById('SuaDonHang').style.width="0px";
    document.getElementById('SuaDonHang').style.height="0px";
    document.getElementById('SuaDonHang').style.padding="0px";
}


function HuySuaCTDonHang(){
    document.getElementById('SuaCTDonHang').style.width="0px";
    document.getElementById('SuaCTDonHang').style.height="0px";
    document.getElementById('SuaCTDonHang').style.padding="0px";
}

function XacNhanSuaCTDonHang(x){
    var tz=x.parentElement.children;
    let TongSLthaydoi=0;
    let TongTienthaydoi=0;
    for (let i = 0; i < document.querySelectorAll('#TableCTDH td:nth-child(4)').length; i++) {
        if(tz[3].innerHTML == document.querySelectorAll('#TableCTDH td:nth-child(4)')[i].innerHTML){
            if(tz[5].value != document.querySelectorAll('#TableCTDH td:nth-child(6)')[i].innerHTML){
                let tenLogic = tz[3].innerHTML;
                sessionStorage.setItem("tenLogic",tenLogic);
                let soluongLogic = parseInt(tz[5].value);
                sessionStorage.setItem("soluongLogic",soluongLogic);
                
                document.querySelectorAll('#TableCTDH td:nth-child(6)')[i].innerHTML=tz[5].value;
                const a= document.querySelectorAll('#TableCTDH td:nth-child(7)')[i].innerHTML;
                const thaydoi = convertCurrencyStringToNumber(a);
                let TinhTien = parseInt(document.querySelectorAll('#TableCTDH td:nth-child(6)')[i].innerHTML)*parseInt(thaydoi);
                const KetQuaThanhTien = formatNumberToCurrency(TinhTien);
                document.querySelectorAll('#TableCTDH td:nth-child(8)')[i].innerHTML=KetQuaThanhTien;

                let tienLogic = KetQuaThanhTien;
                sessionStorage.setItem("tienLogic",tienLogic);
            }
        }
        TongSLthaydoi+=parseInt(document.querySelectorAll('#TableCTDH td:nth-child(6)')[i].innerHTML);
        const thaydoi = document.querySelectorAll('#TableCTDH td:nth-child(8)')[i].innerHTML;
        TongTienthaydoi+=convertCurrencyStringToNumber(thaydoi);
    }
    

    const KetQuaTongTien = formatNumberToCurrency(TongTienthaydoi);
    document.querySelectorAll('#TableDH td:nth-child(5)')[0].innerHTML=TongSLthaydoi;
    document.querySelectorAll('#TableDH td:nth-child(6)')[0].innerHTML=KetQuaTongTien;

    document.getElementById('SuaCTDonHang').style.width="0px";
    document.getElementById('SuaCTDonHang').style.height="0px";
    document.getElementById('SuaCTDonHang').style.padding="0px";
}




//chuyển đổi
function convertCurrencyStringToNumber(currencyString) {
    const cleanedString = currencyString.replace(/\./g, '').replace('đ', '');
    const result = parseInt(cleanedString, 10);
    return result;
}
function formatNumberToCurrency(number) {
    const formattedNumber = number.toLocaleString('vi-VN');
    const result = formattedNumber + 'đ';
    return result;
}


var layALLCheckDonHangCheckbox = document.getElementById("layALLCheckDonHang");

layALLCheckDonHangCheckbox.addEventListener("change", function() {
    if (layALLCheckDonHangCheckbox.checked) {
        document.querySelectorAll('#TableDH td:nth-child(1)')[0].children[0].checked = true;
    } else {
        document.querySelectorAll('#TableDH td:nth-child(1)')[0].children[0].checked = false;
    }
});

function xuLyThayDoi() {
    if(document.getElementById("layALLCheckDonHang").checked == true){
        var value = document.getElementById("TTs1").value;
        document.querySelectorAll('#TableDH td:nth-child(7)')[0].innerHTML= value;

        let a = document.querySelectorAll('#TableDH td:nth-child(7)')[0].innerHTML;
        sessionStorage.setItem("nhanTrangThaiDonHang",a);
    }
}

function XacNhanDaNhan(){
    var table = document.getElementById("chitietchoxacnhan1");
    var a = table.querySelectorAll("#chitietchoxacnhan td:nth-child(1)").length;
    for (let i = 0; i < a; i++) {
        table.querySelectorAll("#chitietchoxacnhan td:nth-child(5)")[i].innerHTML = "Đã nhận hàng"
    }

    document.getElementById('p2').style.backgroundColor='rgb(201, 194, 192)';
    document.getElementById('p1').style.backgroundColor='orangered';

    sessionStorage.setItem("showDonHang",table.querySelectorAll("#chitietchoxacnhan td:nth-child(5)")[i].innerHTML);
}