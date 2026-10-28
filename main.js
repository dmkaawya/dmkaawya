const navToggle=document.querySelector('.hamb');
const links=document.querySelector('.links');
if(navToggle&&links){navToggle.setAttribute('aria-expanded','false');navToggle.addEventListener('click',()=>{const open=links.classList.toggle('open');navToggle.setAttribute('aria-expanded',String(open));});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');navToggle.setAttribute('aria-expanded','false');}));}
const modal=document.querySelector('#verified-modal');
const verifyButton=document.querySelector('.verified');
const closeButton=document.querySelector('.verify-close');
function openVerify(){if(!modal)return;modal.hidden=false;document.body.classList.add('modal-open');closeButton?.focus();}
function closeVerify(){if(!modal)return;modal.hidden=true;document.body.classList.remove('modal-open');verifyButton?.focus();}
verifyButton?.addEventListener('click',openVerify);
closeButton?.addEventListener('click',closeVerify);
modal?.addEventListener('click',event=>{if(event.target===modal)closeVerify();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&modal&&!modal.hidden)closeVerify();});
