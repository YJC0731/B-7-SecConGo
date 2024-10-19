(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:-16,centeredSlides:!0,loop:!0,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1}});document.addEventListener("DOMContentLoaded",function(){new Swiper(".mySwiper",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});new Swiper(".coChairSwiper",{slidesPerView:3,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",function(){document.querySelector('#login button[type="submit"]').addEventListener("click",function(t){t.preventDefault(),window.location.href="memberOrder.html"})});document.getElementById("searchButton").addEventListener("click",function(){let t=document.getElementById("searchBox");t.classList.contains("show")||new bootstrap.Collapse(t,{toggle:!0})});document.getElementById("closeSearchBox").addEventListener("click",function(){let t=document.getElementById("searchBox");new bootstrap.Collapse(t,{toggle:!0})});document.getElementById("subscribeBtn").addEventListener("click",function(){const t=document.getElementById("emailInput"),o=document.getElementById("error-message"),s=t.value.trim();s?/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(s)?(o.style.display="none",r()):(o.textContent="您的 Email 填寫格式未完整 / 須為有效的 Email",o.style.display="block"):(o.textContent="Email 為必填欄位",o.style.display="block")});function r(){const t=`
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
    `;document.body.insertAdjacentHTML("beforeend",t),new bootstrap.Modal(document.getElementById("subscribeSuccessModal")).show()}
