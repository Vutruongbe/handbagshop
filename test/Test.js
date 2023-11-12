// Khai báo biến để lưu trữ giỏ hàng, tổng giá trị và số lượng sản phẩm
const cart = [];
let total = 0;
let itemCount = 0;

// Lấy danh sách sản phẩm
const products = document.querySelectorAll('.product');

// Lấy danh sách giỏ hàng
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');

// Thêm sự kiện click cho nút "Thêm vào giỏ hàng" trên từng sản phẩm
products.forEach((product, index) => {
    const addToCartButton = product.querySelector('.add-to-cart');
    addToCartButton.addEventListener('click', () => {
        // Lấy thông tin sản phẩm
        console.log(product);
        const productName = product.querySelector('h2').textContent;
        const productPrice = parseFloat(product.querySelector('p').textContent.replace('$', ''));
        console.log(productPrice);
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingItem = cart.find(item => item.name === productName);

        if (existingItem) {
            // Sản phẩm đã tồn tại, tăng số lượng và cập nhật giá
            existingItem.quantity++;
            existingItem.price += productPrice;
        } else {
            // Sản phẩm chưa tồn tại, thêm sản phẩm vào giỏ hàng
            cart.push({ name: productName, price: productPrice, quantity: 1 });
        }

        // Cập nhật danh sách giỏ hàng
        updateCart();

        // Cập nhật tổng giá trị
        total += productPrice;
        itemCount++;
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = itemCount;
    });
});

// Cập nhật danh sách giỏ hàng
function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Số lượng: ${item.quantity}, Giá: $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Xóa';
        removeButton.addEventListener('click', () => {
            // Xóa sản phẩm khỏi giỏ hàng
            total -= item.price;
            itemCount -= item.quantity;
            cart.splice(index, 1);
            updateCart();
            cartTotal.textContent = total.toFixed(2);
            cartCount.textContent = itemCount;
        });
        li.appendChild(removeButton);
        const removeButton1 = document.createElement('button');
        removeButton1.textContent = 'Sửa';
        removeButton1.addEventListener('click', () => {
            // Xóa sản phẩm khỏi giỏ hàng
            total -= item.price;
            itemCount -= item.quantity;
            cart.splice(index, 1);
            updateCart();
            cartTotal.textContent = total.toFixed(2);
            cartCount.textContent = itemCount;
        });
        li.appendChild(removeButton1);
        cartItems.appendChild(li);
    });
}
