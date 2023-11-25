function XoaLSP(x){
    let a = x.parentElement.parentElement;
    alert('Xóa thành công.')
    a.remove();
}

function MoThemLoaiSanPham(x,y){
    document.getElementById(y).style.opacity=0;
    document.getElementById(y).style.height="0px";

    document.getElementById(x).style.opacity=1;
    document.getElementById(x).style.height="150px";
}

function ThemLoaiSanPham(){
    var ip1 = document.getElementById('sttLSP');
    var ip2 = document.getElementById('maLSP');
    var ip3 = document.getElementById('tenLSP');
    var ip4 = document.getElementById('nsLSP');
    var ip5 = document.getElementById('ttLSP');

    var table = document.querySelector('.TableLSP');
    var newRow = document.createElement('tr');
    var cell1 = document.createElement('td');
        cell1.textContent = ip1.value; 
        cell1.style.fontWeight = 'Bold'
    var cell2 = document.createElement('td');
        cell2.textContent = ip2.value;
        cell2.style.fontWeight = 'Bold'
    var cell3 = document.createElement('td');
        cell3.textContent = ip3.value;
        cell3.style.fontWeight = 'Bold'
    var cell4 = document.createElement('td');
        cell4.textContent = ip4.value;
        cell4.style.fontWeight = 'Bold'
    var cell5 = document.createElement('td');
        cell5.textContent = ip5.value;
        cell5.style.fontWeight = 'Bold'
    if(ip5.value == 'khóa'){
        cell5.style.color = 'red';    
    }else{
        cell5.style.color = 'rgb(110, 241, 110)';    
    }
                        
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
    newRow.appendChild(editCell);
    newRow.appendChild(deleteCell);
    table.appendChild(newRow);
}

function SuaLSP(x){
    let b = x.parentElement.parentElement;
    let a = x.parentElement.parentElement.children;
    document.getElementById('sttLSPa').value = a[0].innerHTML;
    document.getElementById('maLSPa').value = a[1].innerHTML;
    document.getElementById('tenLSPa').value = a[2].innerHTML;
    document.getElementById('nsLSPa').value = a[3].innerHTML;
    document.getElementById('ttLSPa').value = a[4].innerHTML;

    dLSP = b;
}

let dLSP;
function SuaLoaiSanPham(){
    var ip1 = document.getElementById('sttLSPa');
    var ip2 = document.getElementById('maLSPa');
    var ip3 = document.getElementById('tenLSPa');
    var ip4 = document.getElementById('nsLSPa');
    var ip5 = document.getElementById('ttLSPa');


    var table = document.querySelector('.TableLSP');
    var newRow = document.createElement('tr');
    var cell1 = document.createElement('td');
        cell1.textContent = ip1.value; 
        cell1.style.fontWeight = 'Bold'
    var cell2 = document.createElement('td');
        cell2.textContent = ip2.value;
        cell2.style.fontWeight = 'Bold'
    var cell3 = document.createElement('td');
        cell3.textContent = ip3.value;
        cell3.style.fontWeight = 'Bold'
    var cell4 = document.createElement('td');
        cell4.textContent = ip4.value;
        cell4.style.fontWeight = 'Bold'
    var cell5 = document.createElement('td');
        cell5.textContent = ip5.value;
        cell5.style.fontWeight = 'Bold'
    if(ip5.value == 'khóa'){
        cell5.style.color = 'red';    
    }else{
        cell5.style.color = 'rgb(110, 241, 110)';    
    }

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
    newRow.appendChild(editCell);
    newRow.appendChild(deleteCell);
    table.appendChild(newRow);
    alert(table)

    dLSP.remove();
}

function XoaTatCaLSP(){
    var table = document.getElementById("TableLSP");
    var rows = table.getElementsByTagName("tr");
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    document.getElementById('row-SuaLSP').style.opacity=0;
    document.getElementById('row-SuaLSP').style.height="0px";

    document.getElementById('row-ThemLSP').style.opacity=0;
    document.getElementById('row-ThemLSP').style.height="0px";
}

