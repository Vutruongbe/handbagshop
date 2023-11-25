function XoaG(x){
    let a = x.parentElement.parentElement;
    alert('Xóa thành công.')
    a.remove();
}

function MoThemGia(x,y){
    document.getElementById(y).style.opacity=0;
    document.getElementById(y).style.height="0px";

    document.getElementById(x).style.opacity=1;
    document.getElementById(x).style.height="150px";
}

function ThemGia(){
    var ip1 = document.getElementById('sttG');
    var ip2 = document.getElementById('maG');
    var ip3 = document.getElementById('tenG');
    var ip4 = document.getElementById('giaG');
    var ip5 = document.getElementById('dateAddG');
    var ip6 = document.getElementById('ttG');


    var table = document.querySelector('.TableG');
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
                XoaG(this);
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

function SuaG(x){
    let b = x.parentElement.parentElement;
    let a = x.parentElement.parentElement.children;
    document.getElementById('sttGa').value = a[0].innerHTML;
    document.getElementById('maGa').value = a[1].innerHTML;
    document.getElementById('tenGa').value = a[2].innerHTML;
    document.getElementById('giaGa').value = a[3].innerHTML;
    document.getElementById('dateAddGa').value = a[4].innerHTML;
    document.getElementById('ttGa').value = a[5].innerHTML;

    cGia = b;
}
let cGia;
function SuaGia(){
    var ip1 = document.getElementById('sttGa');
    var ip2 = document.getElementById('maGa');
    var ip3 = document.getElementById('tenGa');
    var ip4 = document.getElementById('giaGa');
    var ip5 = document.getElementById('dateAddGa');
    var ip6 = document.getElementById('ttGa');


    var table = document.querySelector('.TableG');
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
                XoaG(this);
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

        cGia.remove();
}

function XoaTatCaG(){
    var table = document.getElementById("TableG");
    var rows = table.getElementsByTagName("tr");
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    document.getElementById('row-SuaG').style.opacity=0;
    document.getElementById('row-SuaG').style.height="0px";

    document.getElementById('row-ThemG').style.opacity=0;
    document.getElementById('row-ThemG').style.height="0px";
}

function Huy(x){
    document.getElementById(x).style.opacity=0;
    document.getElementById(x).style.height="0px";
}