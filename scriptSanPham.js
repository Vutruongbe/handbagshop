var TestSanPhamThem = false;
function SanPhamThem(x){
    if(TestSanPhamThem==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="150px";
        TestSanPhamThem = true;
    }
    else if(TestSanPhamThem==true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
        TestSanPhamThem = false;
    }
}

var TestSanPhamSua = false;
function SanPhamSua(x){
    if(TestSanPhamSua==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="150px";
        TestSanPhamSua = true;
    }
    else if(TestSanPhamSua=true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
        TestSanPhamSua = false;
    }
}

var TestSanPhamXoa = false;
function SanPhamXoa(x){
    if(TestSanPhamXoa==false){
        document.getElementById(x).style.opacity=1;
        document.getElementById(x).style.height="150px";
        TestSanPhamXoa = true;
    }
    else if(TestSanPhamXoa=true){
        document.getElementById(x).style.opacity=0;
        document.getElementById(x).style.height="0px";
        TestSanPhamXoa = false;
    }
}

// Thêm sản phẩm
function ThemSP() {
    var input0 = document.querySelector('a.So1');
    var input1 = document.getElementById('tenSP');
    var input2 = document.getElementById('maGia');
    var input3 = document.getElementById('anhSP');
    var input4 = document.getElementById('tTSP');
    var input5 = document.getElementById('nDSP');
    var input6 = document.getElementById('maLoai');
    var input7 = document.getElementById('maThuongHieu');
    var input8 = document.getElementById('trangThai');

    var table = document.getElementById('Table');
    var newRow = table.insertRow(table.rows.length);
    var cell0 = newRow.insertCell(0);
    var cell1 = newRow.insertCell(1);
    var cell2 = newRow.insertCell(2);
    var cell3 = newRow.insertCell(3);
    var cell4 = newRow.insertCell(4);
    var cell5 = newRow.insertCell(5);
    var cell6 = newRow.insertCell(6);
    var cell7 = newRow.insertCell(7);
    var cell8 = newRow.insertCell(8);


    var newText0 = document.createTextNode(input0.textContent);
    var newText1 = document.createTextNode(input1.value);
    var newText2 = document.createTextNode(input2.value);
    var newText3 = document.createTextNode(input3.value);
    var newText4 = document.createTextNode(input4.value);
    var newText5 = document.createTextNode(input5.value);
    var newText6 = document.createTextNode(input6.value);
    var newText7 = document.createTextNode(input7.value);
    var newText8 = document.createTextNode(input8.value);

    cell0.appendChild(newText0)
    cell1.appendChild(newText1);
    cell2.appendChild(newText2);
    cell3.appendChild(newText3);
    cell4.appendChild(newText4);
    cell5.appendChild(newText5);
    cell6.appendChild(newText6);
    cell7.appendChild(newText7);
    cell8.appendChild(newText8);
}

function TuCong(){
    const anchorElement = document.querySelector('a.So1');
    const content = anchorElement.textContent;
    const number = parseInt(content) + 1;
    anchorElement.textContent=number;
}