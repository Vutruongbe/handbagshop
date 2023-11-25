function XoaTH(x){
    let a = x.parentElement.parentElement;
    alert('Xóa thành công.')
    a.remove();
}

function MoThemThuongHieu(x,y){
    document.getElementById(y).style.opacity=0;
    document.getElementById(y).style.height="0px";

    document.getElementById(x).style.opacity=1;
    document.getElementById(x).style.height="150px";
}

function ThemThuongHieu(){
    var ip1 = document.getElementById('sttTH');
    var ip2 = document.getElementById('maTH');
    var ip3 = document.getElementById('tenTH');
    var ip4 = document.getElementById('dcTH');
    var ip5 = document.getElementById('dateTH');
    var ip6 = document.getElementById('ttTH');


    var table = document.querySelector('.TableTH');
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
            var cell6 = document.createElement('td');
                cell6.textContent = ip6.value;
                cell6.style.fontWeight = 'Bold'
            if(ip6.value == 'khóa'){
                cell6.style.color = 'red';    
            }else{
                cell6.style.color = 'rgb(110, 241, 110)';    
            }
                        
            var checkboxCell = document.createElement('td');
            var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
            checkboxCell.appendChild(checkbox);

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
                XoaTH(this);
            });
            deleteCell.appendChild(deleteButton);

        // newRow.appendChild(checkboxCell);
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

function SuaTH(x){
    let b = x.parentElement.parentElement;
    let a = x.parentElement.parentElement.children;
    document.getElementById('sttTHa').value = a[0].innerHTML;
    document.getElementById('maTHa').value = a[1].innerHTML;
    document.getElementById('tenTHa').value = a[2].innerHTML;
    document.getElementById('dcTHa').value = a[3].innerHTML;
    document.getElementById('dateTHa').value = a[4].innerHTML;
    document.getElementById('ttTHa').value = a[5].innerHTML;

    cTH = b;
}
let cTH;
function SuaThuongHieu(){
    var ip1 = document.getElementById('sttTHa');
    var ip2 = document.getElementById('maTHa');
    var ip3 = document.getElementById('tenTHa');
    var ip4 = document.getElementById('dcTHa');
    var ip5 = document.getElementById('dateTHa');
    var ip6 = document.getElementById('ttTHa');


    var table = document.querySelector('.TableTH');
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
            var cell6 = document.createElement('td');
                cell6.textContent = ip6.value;
                cell6.style.fontWeight = 'Bold'
            if(ip6.value == 'khóa'){
                cell6.style.color = 'red';    
            }else{
                cell6.style.color = 'rgb(110, 241, 110)';    
            }
                        
            var checkboxCell = document.createElement('td');
            var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
            checkboxCell.appendChild(checkbox);

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
                XoaTH(this);
            });
            deleteCell.appendChild(deleteButton);

        // newRow.appendChild(checkboxCell);
        newRow.appendChild(cell1);
        newRow.appendChild(cell2);
        newRow.appendChild(cell3);
        newRow.appendChild(cell4);
        newRow.appendChild(cell5);
        newRow.appendChild(cell6);
        newRow.appendChild(editCell);
        newRow.appendChild(deleteCell);
        table.appendChild(newRow);

        c.remove();
}

function XoaTatCaTH(){
    var table = document.getElementById("TableTK");
    var rows = table.getElementsByTagName("tr");
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    document.getElementById('row-SuaTH').style.opacity=0;
    document.getElementById('row-SuaTH').style.height="0px";

    document.getElementById('row-ThemTH').style.opacity=0;
    document.getElementById('row-ThemTH').style.height="0px";
}

function Huy(x){
    document.getElementById(x).style.opacity=0;
    document.getElementById(x).style.height="0px";
}