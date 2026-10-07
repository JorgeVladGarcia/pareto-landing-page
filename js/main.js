(function(){
var d=document;d.documentElement.classList.add('js');
var els=[].slice.call(d.querySelectorAll('.rv'));
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)});}
var still=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var get=d.getElementById('get');
if(get){[].forEach.call(d.querySelectorAll('a[href="#get"]'),function(a){a.addEventListener('click',function(e){e.preventDefault();get.scrollIntoView({behavior:still?'auto':'smooth',block:'start'});if(history.pushState)history.pushState(null,'','#get')})});}
var fr=d.querySelector('.formpanel iframe'),fb=d.querySelector('.form-fb');
if(fr&&fb){var ok=false,org=new URL(fr.src).origin;
window.addEventListener('message',function(e){if(e.origin===org){ok=true;fb.hidden=true;fr.classList.remove('gone')}});
setTimeout(function(){if(!ok){fb.hidden=false;fr.classList.add('gone')}},4000);}
})();
