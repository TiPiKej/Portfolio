(() =>{
  let button = document.querySelectorAll('button');
  
  Array.from(button).forEach((el, nr) => {
    el.addEventListener('mousedown', e => {
      let x = (e.offsetX == undefined) ? e.layerX : e.offsetX,
          y = (e.offsetY == undefined) ? e.layerY : e.offsetY;

      let effect = document.createElement('div');
          effect.className = 'effect';
          effect.style.top = y + 'px';
          effect.style.left = x + 'px';

      e.target.appendChild(effect);

      setTimeout(() => {
        e.target.removeChild(effect);
      }, 1100);
    });

  });
}
)();