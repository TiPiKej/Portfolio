(() => {
const 	eyes = document.querySelector('.eyes'),
		ufo = document.querySelector('.ufo');

eyes.style.justifyContent = 'center';

let toDegrees = angle => angle * (180 / Math.PI);

ufo.addEventListener('mousemove', ruchOka);

function ruchOka(e){
	let middle_point = {
			x: document.querySelector('.monster').offsetLeft + (document.querySelector('.monster').offsetWidth / 2),
			y: document.querySelector('.monster').offsetTop + (document.querySelector('.monster').offsetHeight / 2)
		};

	let kat = Math.atan2(e.clientY - middle_point.y, e.clientX - middle_point.x);
	
	eyes.style.transform = `rotate(${kat + 1.4}rad)`;
}

})();