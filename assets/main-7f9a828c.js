(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();new Swiper(".mySwiper",{slidesPerView:"auto",spaceBetween:-20,centeredSlides:!0,loop:!0,freeMode:!0,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:3e3,disableOnInteraction:!1}});document.addEventListener("DOMContentLoaded",function(){new Swiper(".mySwiper",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".coChairSwiper",{slidesPerView:3,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})});document.getElementById("login-tab").addEventListener("click",function(){window.location.href="memberOrder.html"});document.getElementById("searchButton").addEventListener("click",function(){let r=document.getElementById("searchBox");r.classList.contains("show")||new bootstrap.Collapse(r,{toggle:!0})});document.getElementById("closeSearchBox").addEventListener("click",function(){let r=document.getElementById("searchBox");new bootstrap.Collapse(r,{toggle:!0})});
