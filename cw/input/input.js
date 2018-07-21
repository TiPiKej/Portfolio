(()=>{
	const form = document.querySelectorAll('form');
	form.forEach(formElement => {
		formElement.onsubmit = event => {

			const nazwaKlasy = 'inNumber';
			const pole = document.querySelectorAll(`.${nazwaKlasy}`);

			pole.forEach( el => {
				const tekst = el.value;

				if(!/^[0-9]{1,}$/.test(tekst)){
					event.preventDefault();

					const tooltip = document.createElement('div');
								tooltip.innerHTML = 'Proszę wpisać tu tylko liczbe!';
								tooltip.style.position = 'absolute';
								tooltip.style.top = `${el.offsetTop}px`;
								tooltip.style.left = `${el.offsetLeft + el.offsetWidth + 10}px`;
								tooltip.style.background = 'var(--secondary_color_second_way)';
								tooltip.style.padding = '10px';
								tooltip.style.borderRadius = '6px';
								setTimeout(() => tooltip.remove(), 1000);
								console.log(el)
					document.querySelector('body').appendChild(tooltip);
					// console.log(el);
				}
			});
		}
	})
})();