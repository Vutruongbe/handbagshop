document.addEventListener('DOMContentLoaded', function() {
    const tenElement = document.getElementById('SPtieude');
    const giaElement = document.getElementById('new');
    const anhElement = document.getElementById('AnhDo');
    const thuonghieuElement = document.getElementById('ThuongHieuDo');

    const anh1Element = document.getElementById('Anh1');
    const anh2Element = document.getElementById('Anh2');
    const anh3Element = document.getElementById('Anh3');
    const anh4Element = document.getElementById('Anh4');
    const anh5Element = document.getElementById('Anh5');
    const anh6Element = document.getElementById('Anh6');
    const anh7Element = document.getElementById('Anh7');
    const anh8Element = document.getElementById('Anh8');
    const anh9Element = document.getElementById('Anh9');
    const anh10Element = document.getElementById('Anh10');

    const urlParams = new URLSearchParams(window.location.search);
    const ten = urlParams.get('ten');
    const gia = urlParams.get('gia');
    const anh = urlParams.get('anh');
    const thuonghieu = urlParams.get('thuonghieu');

    tenElement.textContent = ten;
    giaElement.textContent = `${gia}`;
    anhElement.src = `${anh}`;
    thuonghieuElement.textContent = `Của nhà ${thuonghieu}`;

    anh1Element.src = `${anh}`;
    anh2Element.src = `${anh}`;
    anh3Element.src = `${anh}`;
    anh4Element.src = `${anh}`;
    anh5Element.src = `${anh}`;
    anh6Element.src = `${anh}`;
    anh7Element.src = `${anh}`;
    anh8Element.src = `${anh}`;
    anh9Element.src = `${anh}`;
    anh10Element.src = `${anh}`;
});
