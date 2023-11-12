function testRadio(){
    // Lấy các input radio
    const radio1 = document.getElementById('radioSanPham');
    const radio2 = document.getElementById('radioLoaiSanPham');

    // Kiểm tra xem radio nào đang được chọn
    if(radio1.checked) {
        var a = document.getElementById('row-Right-Mid-SanPham');
        a.style.width = "920px";
        a.style.opacity = 1;
        a.style.transition = "0.2s"
    } 
    else if(radio2.checked) {
        var a = document.getElementById('row-Right-Mid-SanPham');
        a.style.width = "0px";
        a.style.opacity = 0;
        a.style.transition = "0s";
    } 
}