(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();(()=>{const n={openModalBtn:document.querySelector("[data-menu-open]"),closeModalBtn:document.querySelector("[data-menu-close]"),modal:document.querySelector("[data-menu]")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){n.modal.classList.toggle("is-open"),document.body.classList.toggle("no-scroll")}})();document.querySelector(".feedback_form").addEventListener("submit",function(n){const o=document.querySelector('input[name="name"]'),c=document.querySelector('input[name="tel"]'),r=/^[A-Za-zА-Яа-яЁёІіЇїЄє' -]+$/,e=/^\+?[0-9\s()-]{7,15}$/;r.test(o.value)||(alert("The name should contain only letters."),n.preventDefault()),e.test(c.value)||(alert("Please enter a valid phone number."),n.preventDefault())});
//# sourceMappingURL=index.js.map
