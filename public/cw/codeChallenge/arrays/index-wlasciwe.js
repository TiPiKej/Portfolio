(() => {
	
	const wypisz = document.querySelector('#wypisz');

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



	title('Array: texasss', 'h1');

	title('Part 1 - Find all users older than 24');

	texasss.filter(el => {
		if(el.age > 24) paragraph(el.name)
	})

	title('Part 2 - Find the total age of all users');

	paragraph(
		texasss.reduce((total, el) => {
			return total + el.age
		}, 0)
	)

	title('Part 3 - List all female coders');

	texasss.filter(el => {
		if(el.gender === 'f') paragraph(el.name)
	})



	title('Array: newieyork', 'h1');

	title('Part 1 - List all users in the US in ascending order')

	newieyork.sort((a,b) => a.name > b.name);
	newieyork.filter(el => {
		// if(el.us) paragraph(el.name)
		paragraph(el.us? el.name:null)
		return el.us
	})

	title('Part 2 - Sort all users by age')
	
	newieyork.sort((a,b) => a.age < b.age);
	newieyork.forEach(el => {
		paragraph(`${el.name} - ${el.age}`)
	})


	title('Part 3 - List all female coders')

	newieyork.forEach(el => {
		el.gender === 'f'? paragraph(el.name): null;
	})


	title('Array: newieyork', 'h1');

	title('Part 1 - Find the total age of male coders under 25');
	
	paragraph(
		newieyork.reduce((total, el) => {
			(el.gender === 'm' && el.age < 25)? total += el.age: null;

			return total
		},0)
	)


	title('Part 2 - List all male coders over 30');
	
	newieyork.forEach(el => {
		(el.gender === 'm' && el.age > 30)? paragraph(el.name) :false;
	})


	title('Part 3 - Find the total age of everyone in texasss, newieyork and vegzas combined.');

	let allArrays = texasss.concat(newieyork).concat(vegzas);

	paragraph(
		allArrays.reduce((total, el) => {
			return total += el.age
		}, 0)
	)


})();