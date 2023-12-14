function MoTimKiem(x){
    document.getElementById(x).style.opacity = 1;
    document.getElementById(x).style.width="100%";
}

function DongTimKiem(x){
    document.getElementById(x).style.opacity = 0;
    document.getElementById(x).style.width="0px";
    dataList.innerHTML = '';
}


 window.addEventListener('scroll',function(){    
    document.getElementById('NenTimKiem').style.opacity = 0;
    document.getElementById('NenTimKiem').style.width="0px";   
},false)

const dataTimKiem = document.getElementById('DataTimKiem');
const dataList = document.getElementById('DataList');
let SanPham = [
    {   
        ten: "Túi xách Origen", gia: 800000, hinhAnh: "images/DM1.jpg", mauSac: "đen", 
        thuongHieu: "Carit & Kotyim", vatLieu: "Vải canvas/cotton", kieuDang: "cầm tay",
        phongCach: "hiện đại", trangThai: "hot"
    },
    {   
        ten: "Túi xách Positen", gia: 650000, hinhAnh: "images/DM2.jpg", mauSac: "đỏ", 
        thuongHieu: "CAEISL & KCIEL", vatLieu: "Da", kieuDang: "balo",
        phongCach: "cổ điển", trangThai: "hot"
    },
    {   
        ten: "Túi xách Pipomi", gia: 690000, hinhAnh: "images/DM3.jpg", mauSac: "vàng", 
        thuongHieu: "URNVÔ REBAN", vatLieu: "Nhựa", kieuDang: "xách tay",
        phongCach: "cổ điển", trangThai: "bán chạy"
    },
    {   
        ten: "Túi xách Omizen", gia: 450000, hinhAnh: "images/DM4.jpg", mauSac: "xanh", 
        thuongHieu: "CAEISL & KCIEL", vatLieu: "Vải canvas/cotton", kieuDang: "cầm tay",
        phongCach: "thời trang", trangThai: ""
    },
    {   
        ten: "Túi xách Bustity", gia: 720000, hinhAnh: "images/DM5.jpg", mauSac: "tím", 
        thuongHieu: "Carit & Kotyim", vatLieu: "Vải canvas/cotton", kieuDang: "xách tay",
        phongCach: "hiện đại", trangThai: "giảm giá"
    },
    {   
        ten: "Túi xách Bustity", gia: 720000, hinhAnh: "images/DM5.jpg", mauSac: "tím", 
        thuongHieu: "Carit & Kotyim", vatLieu: "Vải canvas/cotton", kieuDang: "xách tay",
        phongCach: "hiện đại", trangThai: "giảm giá"
    },
    {   
        ten: "Túi xách Omizen", gia: 450000, hinhAnh: "images/DM4.jpg", mauSac: "xanh", 
        thuongHieu: "CAEISL & KCIEL", vatLieu: "Vải canvas/cotton", kieuDang: "cầm tay",
        phongCach: "thời trang", trangThai: ""
    },
    {   
        ten: "Túi xách Bustity", gia: 720000, hinhAnh: "images/DM5.jpg", mauSac: "tím", 
        thuongHieu: "Carit & Kotyim", vatLieu: "Vải canvas/cotton", kieuDang: "xách tay",
        phongCach: "hiện đại", trangThai: "giảm giá"
    },
    {   
        ten: "Túi xách Bustity", gia: 720000, hinhAnh: "images/DM5.jpg", mauSac: "tím", 
        thuongHieu: "Carit & Kotyim", vatLieu: "Vải canvas/cotton", kieuDang: "xách tay",
        phongCach: "hiện đại", trangThai: "giảm giá"
    },
    {   
        ten: "Túi xách Bustity", gia: 720000, hinhAnh: "images/DM5.jpg", mauSac: "tím", 
        thuongHieu: "Carit & Kotyim", vatLieu: "Vải canvas/cotton", kieuDang: "xách tay",
        phongCach: "hiện đại", trangThai: "giảm giá"
    },
];

dataTimKiem.addEventListener('input', function() {
    const data = dataTimKiem.value.toLowerCase();

    dataList.innerHTML = '';

    if (!data.trim()) {
        return; 
    }

    console.log(data);

    const filteredData = SanPham.filter(item => 
        item.ten.toLowerCase().includes(data) || 
        item.gia.toString().includes(data) ||
        item.mauSac.toLowerCase().includes(data) ||
        item.thuongHieu.toLowerCase().includes(data) ||
        item.vatLieu.toLowerCase().includes(data) ||
        item.kieuDang.toLowerCase().includes(data) ||
        item.phongCach.toLowerCase().includes(data) ||
        item.trangThai.toLowerCase().includes(data) 
    );
    
    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.title="Xem sản phẩm: "+`${item.ten}`;
        li.style.marginLeft="20px"
        li.style.width="16%"
        li.style.float="left"

        const anhSP = document.createElement('img');
        anhSP.style.float="left"
        anhSP.style.width="160px"
        anhSP.style.marginLeft="10px"
        anhSP.style.marginRight="20px"
        anhSP.src = item.hinhAnh;

        const tenSP = document.createElement('span');
        tenSP.style.float="left"
        tenSP.style.marginTop="20px"
        tenSP.style.marginLeft="30px"
        tenSP.textContent = `${item.ten}`;

        
        const giaSP = document.createElement('span');
        giaSP.style.float="left"
        giaSP.style.marginLeft="5px"
        giaSP.style.marginTop="20px"
        giaSP.style.marginLeft="35px"
        giaSP.textContent = `Giá: ${item.gia}đ`;

        const mauSP = document.createElement('span');
        mauSP.style.float="left"
        mauSP.style.marginLeft="50px"
        mauSP.style.marginTop="20px"
        mauSP.textContent = `Màu: ${item.mauSac}`;

        const thSP = document.createElement('span');
        thSP.style.float="left"
        thSP.style.marginLeft="10px"
        thSP.style.marginTop="20px"
        thSP.textContent = `Nhà: ${item.thuongHieu}`;

        // const kieuSP = document.createElement('span');
        // kieuSP.style.float="left"
        // kieuSP.style.marginLeft="5px"
        // kieuSP.style.marginTop="20px"
        // kieuSP.textContent = `Kiểu: ${item.kieuDang} ,`;

        // const pkSP = document.createElement('button');
        // pkSP.style.float="left"
        // pkSP.style.marginLeft="40px"
        // pkSP.style.marginTop="20px"
        // pkSP.textContent = `Xem Sản Phẩm`;

        // const mmSP = document.createElement('button');
        // mmSP.style.float="left"
        // mmSP.style.marginLeft="10px"
        // mmSP.style.marginTop="20px"

        li.appendChild(anhSP);
        li.appendChild(tenSP);
        li.appendChild(giaSP);
        li.appendChild(mauSP);
        li.appendChild(thSP);
        // li.appendChild(mmSP);
        // li.appendChild(kieuSP);
        // li.appendChild(pkSP);
    
        li.addEventListener('click', function() {
            navigateToProductDetail(item);
        });
    
        dataList.appendChild(li);
    });
    
});

function navigateToProductDetail(product) {
    const url = `indexProducts.html?ten=${encodeURIComponent(product.ten)}&gia=${encodeURIComponent(product.gia)}&anh=${encodeURIComponent(product.hinhAnh)}&thuonghieu=${encodeURIComponent(product.thuongHieu)}`;
    window.location.href = url;
}
