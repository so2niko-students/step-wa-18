//https://habr.com/post/256027/  -- работа с буфером обмена

(function(){
  let span1 = document.createElement('span'),
      span2 = document.createElement('span'),
      span3 = document.createElement('span');
      span1.classList.add('coors');
      span2.classList.add('x');
      span3.classList.add('y');

      span1.appendChild(span2);
      span1.appendChild(span3);

      document.body.appendChild(span1);
})();

document.body.addEventListener("click", function(ev){
  document.querySelector('.x').innerHTML = ev.clientX + ",";
  document.querySelector('.y').innerHTML = ev.clientY;
  let r1 = document.createRange();
  r1.selectNode(document.querySelector('.coors'));
  window.getSelection().addRange(r1);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
});
