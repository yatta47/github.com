(()=>{class c{constructor(e,t=1){this.items=[];if(window.PhotoSwipe==null||window.PhotoSwipeUI_Default==null){console.error("PhotoSwipe lib not loaded.");return}this.galleryUID=t,c.createGallery(e),this.loadItems(e),this.bindClick()}loadItems(e){this.items=[];const t=e.querySelectorAll("figure");for(const r of t){const o=r.querySelector("figcaption"),i=r.querySelector("img");let n={w:parseInt(i.getAttribute("width")),h:parseInt(i.getAttribute("height")),src:i.src,msrc:i.getAttribute("data-thumb")||i.src,el:r};o&&(n.title=o.innerHTML),this.items.push(n)}}static createGallery(e){const t=e.querySelectorAll("figure");let r=[];for(const o of t)r.length?o.previousElementSibling===r[r.length-1]?r.push(o):r.length&&(c.wrap(r),r=[o]):r=[o];r.length>0&&c.wrap(r)}static wrap(e){const t=document.createElement("div");t.className="gallery";const r=e[0].parentNode,o=e[0];r.insertBefore(t,o);for(const i of e)t.appendChild(i)}open(e){const t=document.querySelector(".pswp"),r=new window.PhotoSwipe(t,window.PhotoSwipeUI_Default,this.items,{index:e,galleryUID:this.galleryUID,getThumbBoundsFn:o=>{const i=this.items[o].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,a=i.getBoundingClientRect();return{x:a.left,y:a.top+n,w:a.width}}});r.init()}bindClick(){for(const[e,t]of this.items.entries()){const r=t.el.querySelector("a");r.addEventListener("click",o=>{o.preventDefault(),this.open(e)})}}}var h=c;let s={};if(localStorage.hasOwnProperty("StackColorsCache"))try{s=JSON.parse(localStorage.getItem("StackColorsCache"))}catch(e){s={}}async function u(e,t,r){if(!e)return await Vibrant.from(r).getPalette();if(!s.hasOwnProperty(e)||s[e].hash!==t){const o=await Vibrant.from(r).getPalette();s[e]={hash:t,Vibrant:{hex:o.Vibrant.hex,rgb:o.Vibrant.rgb,bodyTextColor:o.Vibrant.bodyTextColor},DarkMuted:{hex:o.DarkMuted.hex,rgb:o.DarkMuted.rgb,bodyTextColor:o.DarkMuted.bodyTextColor}},localStorage.setItem("StackColorsCache",JSON.stringify(s))}return s[e]}let k=(e,t=500)=>{e.classList.add("transiting"),e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=e.offsetHeight+"px",e.offsetHeight,e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",window.setTimeout(()=>{e.classList.remove("show"),e.style.removeProperty("height"),e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},P=(e,t=500)=>{e.classList.add("transiting"),e.style.removeProperty("display"),e.classList.add("show");let r=e.offsetHeight;e.style.overflow="hidden",e.style.height="0",e.style.paddingTop="0",e.style.paddingBottom="0",e.style.marginTop="0",e.style.marginBottom="0",e.offsetHeight,e.style.transitionProperty="height, margin, padding",e.style.transitionDuration=t+"ms",e.style.height=r+"px",e.style.removeProperty("padding-top"),e.style.removeProperty("padding-bottom"),e.style.removeProperty("margin-top"),e.style.removeProperty("margin-bottom"),window.setTimeout(()=>{e.style.removeProperty("height"),e.style.removeProperty("overflow"),e.style.removeProperty("transition-duration"),e.style.removeProperty("transition-property"),e.classList.remove("transiting")},t)},E=(e,t=500)=>window.getComputedStyle(e).display==="none"?P(e,t):k(e,t);function y(){const e=document.getElementById("toggle-menu");e&&e.addEventListener("click",()=>{if(document.getElementById("main-menu").classList.contains("transiting"))return;document.body.classList.toggle("show-menu"),E(document.getElementById("main-menu"),300),e.classList.toggle("is-active")})}function C(e,t,r){var o=document.createElement(e);for(let i in t)if(i&&t.hasOwnProperty(i)){let n=t[i];i=="dangerouslySetInnerHTML"?o.innerHTML=n.__html:n===!0?o.setAttribute(i,i):n!==!1&&n!=null&&o.setAttribute(i,n.toString())}for(let i=2;i<arguments.length;i++){let n=arguments[i];n&&o.appendChild(n.nodeType==null?document.createTextNode(n.toString()):n)}return o}var p=C;class T{constructor(e){this.localStorageKey="StackColorScheme";this.bindMatchMedia(),this.currentScheme=this.getSavedScheme(),e&&this.bindClick(e),document.body.style.transition==""&&document.body.style.setProperty("transition","background-color .3s ease")}saveScheme(){localStorage.setItem(this.localStorageKey,this.currentScheme)}bindClick(e){e.addEventListener("click",t=>{this.isDark()?this.currentScheme="light":this.currentScheme="dark",this.setBodyClass(),this.currentScheme==this.systemPreferScheme&&(this.currentScheme="auto"),this.saveScheme()})}isDark(){return this.currentScheme=="dark"||this.currentScheme=="auto"&&this.systemPreferScheme=="dark"}dispatchEvent(e){const t=new CustomEvent("onColorSchemeChange",{detail:e});window.dispatchEvent(t)}setBodyClass(){this.isDark()?document.body.dataset.scheme="dark":document.body.dataset.scheme="light",this.dispatchEvent(document.body.dataset.scheme)}getSavedScheme(){const e=localStorage.getItem(this.localStorageKey);return e=="light"||e=="dark"||e=="auto"?e:"auto"}bindMatchMedia(){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?this.systemPreferScheme="dark":this.systemPreferScheme="light",this.setBodyClass()})}}var g=T;let f={init:()=>{y();const e=document.querySelector(".article-content");e&&new h(e);const t=document.querySelector(".article-list--tile");if(t){let r=new IntersectionObserver(async(o,i)=>{o.forEach(n=>{if(!n.isIntersecting)return;i.unobserve(n.target);const a=n.target.querySelectorAll("article.has-image");a.forEach(async d=>{const m=d.querySelector("img"),S=m.src,b=m.getAttribute("data-key"),v=m.getAttribute("data-hash"),w=d.querySelector(".article-details"),l=await u(b,v,S);w.style.background=`
                        linear-gradient(0deg, 
                            rgba(${l.DarkMuted.rgb[0]}, ${l.DarkMuted.rgb[1]}, ${l.DarkMuted.rgb[2]}, 0.5) 0%, 
                            rgba(${l.Vibrant.rgb[0]}, ${l.Vibrant.rgb[1]}, ${l.Vibrant.rgb[2]}, 0.75) 100%)`})})});r.observe(t)}new g(document.getElementById("dark-mode-toggle"))}};window.addEventListener("load",()=>{setTimeout(function(){f.init()},0)});window.Stack=f;window.createElement=p;})();
/*!
*   Hugo Theme Stack
*
*   @author: Jimmy Cai
*   @website: https://jimmycai.com
*   @link: https://github.com/CaiJimmy/hugo-theme-stack
*/
