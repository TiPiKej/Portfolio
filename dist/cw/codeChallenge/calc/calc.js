(()=>{
	let textarea = document.getElementsByClassName('number_box');
	
	
	let przyciski = [
		document.getElementsByClassName('calc_cancel'),
		document.getElementsByClassName('calc_divide'),
		document.getElementsByClassName('calc_seven'),
		document.getElementsByClassName('calc_eight'),
		document.getElementsByClassName('calc_nine'),
		document.getElementsByClassName('calc_x'),
		document.getElementsByClassName('calc_four'),
		document.getElementsByClassName('calc_five'),
		document.getElementsByClassName('calc_six'),
		document.getElementsByClassName('calc_minus'),
		document.getElementsByClassName('calc_one'),
		document.getElementsByClassName('calc_two'),
		document.getElementsByClassName('calc_three'),
		document.getElementsByClassName('calc_plus'),
		document.getElementsByClassName('calc_zero'),
		document.getElementsByClassName('calc_equal')
	];
	// console.log(przyciski)

	// przycisk do usuniecia danych

	reset_danych = () => {
		Array.from(textarea).forEach((e) => {
			e.value = '';
		});
	}

	// dodawanie liczb do inputa

	dodawanie_cyfr = (vob) => {
		Array.from(textarea).forEach((e)=>{
			e.value = e.value.toString() + parseInt(vob);
		});
	} 

	// operacje na danych

	operacje_na_danych = (co) => {
		Array.from(textarea).forEach((e) => {
			e.value = e.value.toString() + co;
		});
	}

	//wykonanie

	wykonaj = () => {
		Array.from(textarea).forEach((e) => {
			if(e.value.indexOf('/0') >= 0) e.value = 'Nie dziel przez zero!!';
			else e.value = parseInt(eval(e.value)*100)/100;
		});
	}

	reset_danych();

	Array.from(przyciski).forEach((e)=> {
		Array.from(e).forEach((e) => {
			e.addEventListener('click', () => {
					if(e.innerHTML === 'C') reset_danych();
					else if(e.innerHTML === '=') wykonaj();
					else if(e.innerHTML === '/') operacje_na_danych('/');
					else if(e.innerHTML === 'x') operacje_na_danych('*');
					else if(e.innerHTML === '-') operacje_na_danych('-');
					else if(e.innerHTML === '+') operacje_na_danych('+');
					else dodawanie_cyfr(e.innerHTML);
				}
			)
		})
	});
})();