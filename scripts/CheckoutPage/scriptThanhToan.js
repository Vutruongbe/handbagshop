function ThanhToanNe() {
    var ktraHo = document.getElementById("textFistName").value;
    var ktraTen = document.getElementById("textLastName").value;
    var ktraQuocGia = document.getElementById("textCountry").value;
    var ktraDiaChi = document.getElementById("textAddress").value;
    var ktraThanhPho = document.getElementById("textTownCity").value;
    var ktraSoDienThoai = document.getElementById("textPhone").value;
    var ktraEmail = document.getElementById("textEmail").value;

    if (ktraHo === "") {
        alert("Bạn chưa nhập họ!");
    } else if (ktraTen === "") {
        alert("Bạn chưa nhập tên!");
    } else if (ktraQuocGia === "") {
        alert("Bạn chưa nhập tên quốc gia!");
    } else if (ktraDiaChi === "") {
        alert("Bạn chưa nhập địa chỉ!");
    } else if (ktraThanhPho === "") {
        alert("Bạn chưa nhập tên thành phố!");
    } else if (ktraSoDienThoai === "") {
        alert("Bạn chưa nhập số điện thoại!");
    } else if (ktraEmail === "") {
        alert("Bạn chưa nhập Email!");
    } else{
        alert('Đặt hàng thành công');
        document.getElementById("chitietthanhtoan").innerHTML = '';
        document.getElementById("nhanThanhTien").innerHTML = '0đ';

        document.getElementById("textFistName").value = '';
        document.getElementById("textLastName").value = '';
        document.getElementById("textCountry").value = '';
        document.getElementById("textAddress").value = '';
        document.getElementById("textTownCity").value = '';
        document.getElementById("textPhone").value = '';
        document.getElementById("textEmail").value = '';
    }
}
