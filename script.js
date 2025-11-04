// Small demo script: show a greeting based on time
(function(){
  const h = new Date().getHours();
  const greeting = h<12 ? 'Good morning' : h<18 ? 'Good afternoon' : 'Good evening';
  const el = document.createElement('div');
  el.textContent = greeting + ' — enjoy the demo site!';
  el.style.marginTop = '8px';
  document.querySelector('.hero').appendChild(el);
})();
