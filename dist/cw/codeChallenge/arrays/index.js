(() => {
	
	const wypisz = document.querySelector('#wypisz');

	const array1 = {
		name: 'texasss', 
		keys: texasss
	};

	const array2 = {
		name: 'newieyork', 
		keys: newieyork
	};

	const array3 = {
		name: 'vegzas', 
		keys: vegzas
	};

	const allArray = {
		name: 'All',
		keys: array1['keys'].concat(array2['keys']).concat(array3['keys'])
	}

	const title = (text, type = 'h3') => {
		let title = document.createElement(type);
				title.innerText = text;
		wypisz.appendChild(title);
	}

	const paragraph = text => {
		let para = document.createElement('p');
				para.innerText = text;
				wypisz.appendChild(para);
	}

	const total = (titleText, array, condition = false) => {
		title(`${titleText}`);

		let suma = 0;
		array.keys.forEach( el => {
			if(eval(condition)) suma += el.age
		});
		paragraph(suma);
	}

	const list = (titleText, array, condition = false, order = false) => {
		if(order == 'alf') array.keys.sort((a,b) => a.name[0] > b.name[0]);
		else if(order == 'dealf') array.keys.sort((a,b) => a.name[0] < b.name[0]);
		else if(order == 'age') array.keys.sort((a,b) => a.age - b.age);

		title(`${titleText}`);

		array.keys.forEach(el => {
			if(eval(condition)) paragraph(el.name);
		});
	}



	title(`Array: ${array1.name}`, 'h1');
	
	list('Part 1 - Find all users older than 24', array1, 'el.age > 24');

	total('Part 2 - Find the total age of all users', array1, true);

	list('Part 3 - List all female coders', array1, 'el.gender === "f"');



	title(`Array: ${array2.name}`, 'h1');

	list('Part 1 - List all users in the US in ascending order', array2, 'el.us', 'alf');

	list('Part 2 - Sort all users by age', array2, true, 'age');
	
	list('Part 3 - List all female coders', array2, 'el.gender === "f"');



	title(`Array: ${array3.name}`, 'h1');

	total('Part 1 - Find the total age of male coders under 25', array3, 'el.age < 25 && el.gender == "m"');

	list('Part 2 - List all male coders over 30', array3, 'el.age > 30 && el.gender == "m"');

	total('Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined', allArray, true);




})();