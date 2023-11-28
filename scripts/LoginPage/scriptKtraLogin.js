function KtraLogin(){
    // alert('Bạn phải đăng nhập để thanh toán')
    // window.location.href='indexLoginPage.html';

    let tk = document.getElementById('tk').value;
    let mk = document.getElementById('mk').value;

    if(tk == ''){
        alert('Tài khoản không được bỏ trống!')
    }else if (mk == ''){
        alert('Mật khẩu không được bỏ trống!')
    }
    else{ 
        if(tk == 'admin' && mk == 1){
            alert('Đăng nhập vào trang quản trị thành công!')
            window.location.href='indexAdminPage.html';
        }else if(tk == 'user' && mk == 1){
            alert('Đăng nhập vào thành công!')
            window.location.href='indexCheckoutPage.html';
        }else{
            alert('Tài khoản hoặc mật khẩu không đúng, mời bạn nhập lại');
            document.getElementById('tk').value = '';
            document.getElementById('mk').value = ''; 
        }
    }
}

