!function(){window.innerHeight;let e,t,n=document.getElementById("nav");function i(){let e=[];for(let t=1;t<=5;t++){let n=t/5;e.push(n)}return e.push(0),e}function s(t,i){t.forEach((t=>{t.isIntersecting&&t.boundingClientRect.y<0?(t.target.classList.add("active-section"),e.classList.contains("active-section")?n.classList.remove("fixed-nav"):n.classList.add("fixed-nav"),document.querySelectorAll(".nav-link").forEach((e=>{let t=e.getAttribute("href"),n=t.slice(1,t.length);document.getElementById(`${n}`).classList.contains("active-section")?e.classList.add("active-link"):e.classList.remove("active-link")}))):t.target.classList.remove("active-section")}))}window.addEventListener("load",(n=>{e=document.getElementById("top"),t=document.querySelectorAll("section"),function(){let n,c={root:null,rootMargin:"0px",threshold:i()};n=new IntersectionObserver(s,c),n.observe(e),t.forEach((e=>{n.observe(e)}))}()}),!1)}();
//# sourceMappingURL=index.88cc6d13.js.map
