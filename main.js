import './assets/scss/all.scss';

// banner swiper
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
// co-chair swiper
document.addEventListener('DOMContentLoaded', function() {
    // 初始化 Banner 區域的 Swiper
    var bannerSwiper = new Swiper('.mySwiper', {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // 初始化 Co-Chair 區域的 Swiper
    var coChairSwiper = new Swiper('.coChairSwiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
// 登入頁面跳轉
document.getElementById('login-tab').addEventListener('click', function() {
    window.location.href = 'memberOrder.html'; // 這裡替換為你想跳轉的頁面 URL
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