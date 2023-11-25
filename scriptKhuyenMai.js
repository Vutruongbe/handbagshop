function XoaM(x){
    let a = x.parentElement.parentElement;
    alert('Xóa thành công.')
    a.remove();
}

function MoThemKhuyenMai(x,y){
    document.getElementById(y).style.opacity=0;
    document.getElementById(y).style.height="0px";

    document.getElementById(x).style.opacity=1;
    document.getElementById(x).style.height="150px";
}

function ThemKhuyenMai(){
    var ip1 = document.getElementById('sttTK');
    var ip2 = document.getElementById('maTK');
    var ip3 = document.getElementById('tk');
    var ip4 = document.getElementById('mk');
    var ip5 = document.getElementById('pQ');
    var ip6 = document.getElementById('ttTK');


    var table = document.querySelector('.TableKM');
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
                XoaKM(this);
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

function SuaKM(x){
    let b = x.parentElement.parentElement;
    let a = x.parentElement.parentElement.children;
    document.getElementById('sttTKa').value = a[0].innerHTML;
    document.getElementById('maTKa').value = a[1].innerHTML;
    document.getElementById('tka').value = a[2].innerHTML;
    document.getElementById('mka').value = a[3].innerHTML;
    document.getElementById('pQa').value = a[4].innerHTML;
    document.getElementById('ttTKa').value = a[5].innerHTML;

    cKM = b;
}
let cKM;
function SuaKhuyenMai(){
    var ip1 = document.getElementById('sttTKa');
    var ip2 = document.getElementById('maTKa');
    var ip3 = document.getElementById('tka');
    var ip4 = document.getElementById('mka');
    var ip5 = document.getElementById('pQa');
    var ip6 = document.getElementById('ttTKa');


    var table = document.querySelector('.TableKM');
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
                XoaKM(this);
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

        cKM.remove();
}

function XoaTatCaKM(){
    var table = document.getElementById("TableKM");
    var rows = table.getElementsByTagName("tr");
    for (var i = rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    document.getElementById('row-SuaKM').style.opacity=0;
    document.getElementById('row-SuaKM').style.height="0px";

    document.getElementById('row-ThemKM').style.opacity=0;
    document.getElementById('row-ThemKM').style.height="0px";
}

function Huy(x){
    document.getElementById(x).style.opacity=0;
    document.getElementById(x).style.height="0px";
}