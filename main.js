import './assets/scss/all.scss';

// banner swiper
const swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto', // 自動根據 CSS 的寬度調整
    spaceBetween: -16, // Slide 之間的距離
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

});
// co-chair swiper
const coChairSwiper = new Swiper('.coChairSwiper', {
    slidesPerView: 3, // 顯示3個slide
    // spaceBetween: 30, // Slide之間的距離
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 登入頁面跳轉
// 在 DOM 完全載入後才添加事件監聽器
document.addEventListener('DOMContentLoaded', function() {
    // 登入按鈕監聽
    document.querySelector('#login button[type="submit"]').addEventListener('click', function(event) {
        event.preventDefault(); // 防止默認表單提交行為
        window.location.href = 'memberOrder.html'; // 將頁面跳轉到 memberOrder.html
    });
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

document.getElementById('subscribeBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('error-message');
    const emailValue = emailInput.value.trim();

    // Email 格式驗證的正則表達式
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue) {
        errorMessage.textContent = 'Email 為必填欄位';
        errorMessage.style.display = 'block';
    } else if (!emailPattern.test(emailValue)) {
        errorMessage.textContent = '您的 Email 填寫格式未完整 / 須為有效的 Email';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // 顯示成功訂閱的提示彈窗
        showSuccessModal();
    }
});

function showSuccessModal() {
    // 創建彈窗的 HTML 結構
    const modalHtml = `
        <div class="modal fade" id="subscribeSuccessModal" tabindex="-1" aria-labelledby="subscribeSuccessModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered"> <!-- 增加 modal-dialog-centered 使彈窗在視窗內垂直置中 -->
                <div class="modal-content custom-modal-content pt-8 pb-8">
                    <div class="modal-header position-relative border-bottom-0">
                        <h5 class="modal-title w-100 text-center fs-4 fw-bold mb-6" id="subscribeSuccessModalLabel">您已成功訂閱電子報</h5>
                        <button type="button" class="btn-close position-absolute top-0 end-0 me-1" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        未來將不定期寄送活動最新訊息及優惠資訊給您
                    </div>
                    <div class="modal-footer border-top-0 d-flex justify-content-center">
                        <button type="button" class="btn text-neutral-50 custom-confirm-button" data-bs-dismiss="modal">確定</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // 將彈窗的 HTML 加入到頁面中
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // 顯示彈窗
    const subscribeSuccessModal = new bootstrap.Modal(document.getElementById('subscribeSuccessModal'));
    subscribeSuccessModal.show();
}