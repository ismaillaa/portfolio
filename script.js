// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href').slice(1);
    const el=document.getElementById(id);
    if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth',block:'start'}); }
  });
});

// Theme toggle with localStorage
const root=document.documentElement;
const toggle=document.getElementById('themeToggle');
function setTheme(mode){
  if(mode==='light'){ root.classList.add('light'); }
  else { root.classList.remove('light'); }
  localStorage.setItem('theme', mode);
}
const preferred = localStorage.getItem('theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(preferred);
if(toggle){ toggle.addEventListener('click', ()=> setTheme(root.classList.contains('light') ? 'dark' : 'light')); }

// Year
document.getElementById('year').textContent = new Date().getFullYear();
