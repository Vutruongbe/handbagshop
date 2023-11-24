function testRadio(){
    // Lấy các input radio
    // HeThong
    const radio10 = document.getElementById('radioTaiKhoan');
    const radio11 = document.getElementById('radioTinTuc');
    const radio12 = document.getElementById('radioDanhGiaSanPham');

    // SanPham
    const radio1 = document.getElementById('radioSanPham');
    const radio2 = document.getElementById('radioLoaiSanPham');
    const radio4 = document.getElementById('radioThuongHieu');
    const radio5 = document.getElementById('radioGia');
    const radio6 = document.getElementById('radioKhuyenMai');

    // DonHang
    const radio7 = document.getElementById('radioDonHang');
    const radio8 = document.getElementById('radioCTDonHang');
    const radio9 = document.getElementById('radioThanhToan');

    // ThongKe
    const radio3 = document.getElementById('radioBieuDoanhThu');

    if(radio1.checked) {
        // chính
        var a = document.getElementById('row-Right-Mid-SanPham');
        a.style.width = "920px";
        a.style.opacity = 1;
        a.style.transition = "0.2s"

         // phụ
        var b = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        b.style.width = "0px";
        b.style.opacity = 0;
        b.style.transition = "0s";

        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";

        var g = document.getElementById('row-Right-Mid-Gia');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    } 
    else if(radio2.checked) {
        //chính
        var a = document.getElementById('row-Right-Mid-LoaiSanPham');
        a.style.width = "920px";
        a.style.opacity = 1;
        a.style.transition = "0.2s"

        // phụ
        var b = document.getElementById('row-Right-Mid-SanPham');
        b.style.width = "0px";
        b.style.opacity = 0;
        b.style.transition = "0s";

        var c = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s"

        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";

        var g = document.getElementById('row-Right-Mid-Gia');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }
    else if(radio3.checked) {
        // chính
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "920px";
        h.style.opacity = 1;
        h.style.transition = "0.2s"

        // phụ
        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";

        var g = document.getElementById('row-Right-Mid-Gia');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio4.checked) {
        // chính
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "920px";
        d.style.opacity = 1;
        d.style.transition = "0.2s";

        // phụ
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio5.checked) {
        // chính
        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "920px";
        z.style.opacity = 1;
        z.style.transition = "0.2s";
        
        // phụ
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";

        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";

        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio6.checked) {
        // chính
        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "920px";
        f.style.opacity = 1;
        f.style.transition = "0.2s";
        
        // phụ
        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";
        
        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }
    else if(radio7.checked) {
        // chính
        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "920px";
        q.style.opacity = 1;
        q.style.transition = "0.2s";

        // phụ
        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";
        
        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio8.checked) {
        // chính
        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "920px";
        k.style.opacity = 1;
        k.style.transition = "0.2s";
        
        // phụ
        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio9.checked) {
        // chính
        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "920px";
        LSThanhToan.style.opacity = 1;
        LSThanhToan.style.transition = "0.2s";
        
        // phụ
        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio10.checked) {
        // chính
        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "920px";
        TaiKhoan.style.opacity = 1;
        TaiKhoan.style.transition = "0.2s";
        

        // phụ
        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio11.checked) {
        // chính
        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "920px";
        TinTuc.style.opacity = 1;
        TinTuc.style.transition = "0.2s";
                
        // phụ
        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";
        
        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";

        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "0px";
        DGBaiViet.style.opacity = 0;
        DGBaiViet.style.transition = "0s";
    }  
    else if(radio12.checked) {
        // chính
        var DGBaiViet = document.getElementById('row-Right-Mid-DGBaiViet');
        DGBaiViet.style.width = "920px";
        DGBaiViet.style.opacity = 1;
        DGBaiViet.style.transition = "0.2s";
        
        // phụ
        var TinTuc = document.getElementById('row-Right-Mid-TinTuc');
        TinTuc.style.width = "0px";
        TinTuc.style.opacity = 0;
        TinTuc.style.transition = "0s";

        var TaiKhoan = document.getElementById('row-Right-Mid-TaiKhoan');
        TaiKhoan.style.width = "0px";
        TaiKhoan.style.opacity = 0;
        TaiKhoan.style.transition = "0s";
        
        var LSThanhToan = document.getElementById('row-Right-Mid-LSThanhToan');
        LSThanhToan.style.width = "0px";
        LSThanhToan.style.opacity = 0;
        LSThanhToan.style.transition = "0s";

        var k = document.getElementById('row-Right-Mid-CTDonHang');
        k.style.width = "0px";
        k.style.opacity = 0;
        k.style.transition = "0s";

        var q = document.getElementById('row-Right-Mid-DonHang');
        q.style.width = "0px";
        q.style.opacity = 0;
        q.style.transition = "0s";

        var f = document.getElementById('row-Right-Mid-KhuyenMai');
        f.style.width = "0px";
        f.style.opacity = 0;
        f.style.transition = "0s";

        var z = document.getElementById('row-Right-Mid-Gia');
        z.style.width = "0px";
        z.style.opacity = 0;
        z.style.transition = "0s";
        
        var d = document.getElementById('row-Right-Mid-ThuongHieu');
        d.style.width = "0px";
        d.style.opacity = 0;
        d.style.transition = "0s";
        
        var h = document.getElementById('row-Right-Mid-BieuDoDoanhThu');
        h.style.width = "0x";
        h.style.opacity = 0;
        h.style.transition = "0s"

        var g = document.getElementById('row-Right-Mid-SanPham');
        g.style.width = "0px";
        g.style.opacity = 0;
        g.style.transition = "0s";
        
        var c = document.getElementById('row-Right-Mid-LoaiSanPham');
        c.style.width = "0px";
        c.style.opacity = 0;
        c.style.transition = "0s";
    }  
}

