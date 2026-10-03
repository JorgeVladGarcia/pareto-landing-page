(function(){
document.documentElement.classList.add('js');
var els=[].slice.call(document.querySelectorAll('.rv'));
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12,rootMargin:'0px 0px -6% 0px'});els.forEach(function(e){io.observe(e)});}
var hdr=document.getElementById('hdr'),secs=[].slice.call(document.querySelectorAll('section')),last=null;
function tint(){var y=hdr.offsetHeight+2,cur=secs[0];secs.forEach(function(s){if(s.getBoundingClientRect().top<=y)cur=s});
if(cur!==last){last=cur;var cs=getComputedStyle(cur);hdr.style.backgroundColor=cs.backgroundColor;hdr.style.color=cs.color;
var m=cs.color.match(/\d+/g);hdr.classList.toggle('on-dark',!!m&&(+m[0]*299+ +m[1]*587+ +m[2]*114)/1000>140)}}
window.addEventListener('scroll',tint,{passive:true});window.addEventListener('resize',tint);tint();
var boxes=document.querySelectorAll('.chk input'),res=document.getElementById('res');
var T=[['','' ],['Mostly out of the trap','A Right Hand keeps the loops closed before they pile up.'],['The trap has a hold','Delegating the first few tasks would change your week.'],['Your business runs on you','This is the strongest case for a Right Hand.'],['Your business runs on you','This is the strongest case for a Right Hand.']];
function upd(){var n=0;boxes.forEach(function(b){if(b.checked)n++});
if(!n){res.innerHTML='<b>Try it</b>Check the statements that sound like you.';return}
var t=T[n];res.innerHTML='<b>'+n+' checked: '+t[0]+'</b>'+t[1];}
boxes.forEach(function(b){b.addEventListener('change',upd)});
})();
