import './assets/scss/all.scss';

console.log("Hello world!");
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto', // 自動根據 CSS 的寬度調整
    spaceBetween: -20, // Slide 之間的距離
    centeredSlides: true, // 中心對齊
    loop: true, // 循環播放
    freeMode: true, // 自由模式
    pagination: {
        el: '.swiper-pagination', // 分頁點容器
        clickable: true, // 允許點擊分頁點
    },
    autoplay: { // 自動播放（如果需要）
        delay: 3000,
        disableOnInteraction: false,
    },
});

// 搜尋框
document.getElementById('searchButton').addEventListener('click', function() {
    let searchBox = document.getElementById('searchBox');
    let isCollapsed = searchBox.classList.contains('show');
    if (!isCollapsed) {
        new bootstrap.Collapse(searchBox, { toggle: true });
    }
});

document.getElementById('closeSearchBox').addEventListener('click', function() {
    let searchBox = document.getElementById('searchBox');
    new bootstrap.Collapse(searchBox, { toggle: true });
});