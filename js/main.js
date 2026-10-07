(function(){
var d=document,root=d.documentElement;root.classList.add('js');
var els=[].slice.call(d.querySelectorAll('.rv'));
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)});}
var still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var get=d.getElementById('get');
function toGet(){if(!get)return;get.scrollIntoView({behavior:still?'auto':'smooth',block:'start'});if(history.pushState)history.pushState(null,'','#get')}
[].forEach.call(d.querySelectorAll('a[href="#get"]:not([data-form])'),function(a){a.addEventListener('click',function(e){e.preventDefault();toGet()})});

// Form fallback: if no message arrives from the form's origin within 4s, the form is likely blocked.
var formOk=false,org=null;
var panels=[].map.call(d.querySelectorAll('.formpanel'),function(p){var fr=p.querySelector('iframe');if(!org)org=new URL(fr.src).origin;return {fr:fr,fb:p.querySelector('.form-fb')}});
window.addEventListener('message',function(e){if(e.origin===org){formOk=true;panels.forEach(function(p){p.fb.hidden=true;p.fr.classList.remove('gone')})}});
function watch(p){setTimeout(function(){if(!formOk){p.fb.hidden=false;p.fr.classList.add('gone')}},4000)}
panels.forEach(function(p){if(!p.fr.closest('dialog'))watch(p)});

// Pop-up form
var dlg=d.getElementById('form-modal');
if(dlg&&dlg.showModal){
var dp=panels.filter(function(p){return dlg.contains(p.fr)})[0],watched=false;
// form_embed.js hides each form iframe until it reports ready; some browsers never un-hide the pop-up copy. Once the iframe has posted a message, make sure it's visible.
var dpReady=false;window.addEventListener('message',function(e){if(dp&&e.source===dp.fr.contentWindow)dpReady=true});
function reveal(){var f=dp&&dp.fr,n=0,iv=setInterval(function(){if(!dlg.open||++n>40){clearInterval(iv);return}
if((dpReady||formOk)&&f.style.visibility==='hidden'){f.style.opacity='1';f.style.visibility='visible';f.style.pointerEvents='auto';f.style.position='relative';f.style.left='';clearInterval(iv)}},250)}
[].forEach.call(d.querySelectorAll('[data-form]'),function(b){b.addEventListener('click',function(e){e.preventDefault();dlg.showModal();root.classList.add('modal-open');reveal();if(dp&&!watched){watched=true;watch(dp)}})});
dlg.querySelector('[data-close]').addEventListener('click',function(){dlg.close()});
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
dlg.addEventListener('close',function(){root.classList.remove('modal-open')});
}else{[].forEach.call(d.querySelectorAll('[data-form]'),function(b){b.addEventListener('click',function(e){e.preventDefault();toGet()})});}

// Carousel: advance every 5s, pause on hover or when the tab is hidden
[].forEach.call(d.querySelectorAll('.car'),function(c){
var s=c.querySelectorAll('.car-slide'),i=0,held=false;
if(s.length<2)return;
function show(k){s[i].classList.remove('on');s[i].setAttribute('aria-hidden','true');i=k%s.length;s[i].classList.add('on');s[i].removeAttribute('aria-hidden')}
[].forEach.call(s,function(sl,k){if(k)sl.setAttribute('aria-hidden','true')});
c.addEventListener('mouseenter',function(){held=true});c.addEventListener('mouseleave',function(){held=false});
setInterval(function(){if(!held&&!d.hidden)show(i+1)},5000);
});
})();
