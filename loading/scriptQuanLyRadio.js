function testRadio(){
    // Lấy các input radio
    //SanPham
    const radio1 = document.getElementById('radioSanPham');
    const radio2 = document.getElementById('radioLoaiSanPham');
    // ThongKe
    const radio3 = document.getElementById('radioBieuDoanhThu');

    // Kiểm tra xem radio nào đang được chọn
    if(radio1.checked) {
         // phụ
        var b = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        b.style.width = "0px";
        b.style.opacity = 0;
        b.style.transition = "0s";
        
        // chính
        var a = document.getElementById('row-Right-Mid-SanPham');
        a.style.width = "920px";
        a.style.opacity = 1;
        a.style.transition = "0.2s"
    } 
    else if(radio2.checked) {
        // phụ
        var c = document.getElementById('row-Right-Mid-SanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var d = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s"

    }
    else if(radio3.checked) {
        // phụ
        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        // chính
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "920px";
        h.style.opacity = 1;
        h.style.transition = "0.2s"
    }  
}