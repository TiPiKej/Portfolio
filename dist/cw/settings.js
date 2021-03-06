const pokaz_zakladki = () => {
	const strony = [
		{"name": "Ustawienia","directory": "ustawienia"},
		{"name": "Code Challenge", "list": true, "nameoflist": "codechallenge",
			"elements": [
				{"name": "Jiggle Button","directory": "codeChallenge/jiggle_button", "nr": 1},
				{"name": "Kalkulator","directory": "codeChallenge/calc", "nr": 2},
				{"name": "Checkbox","directory": "codeChallenge/check", "nr": 3},
				{"name": "Monster","directory": "codeChallenge/monster", "nr": 4},
				{"name": "Videos block","directory": "codeChallenge/videos", "nr": 5},
				{"name": "Timer","directory": "codeChallenge/timer", "nr": 6},
				{"name": "Search bar","directory": "codeChallenge/search_bar", "nr": 8},
				{"name": "Scroll-Spy Navbar","directory": "codeChallenge/nav", "nr": 9},
				{"name": "Lazy Loading Animal Memes","directory": "codeChallenge/lazyLoading", "nr": 10},
				{"name": "Arrays","directory": "codeChallenge/arrays", "nr": 11},
				
				{"name": "Manipulation","directory": "codeChallenge/manipulation", "nr": 12}
			]
		},
		{"name": "Loaders","directory": "loaders"},
		{"name": "Buttony", "list": true, "nameoflist": "buttons",
			"elements": [
				{"name": "Android buttons", "directory": "button/android"},
				{"name": "Button to copying to clipboard", "directory": "button/clipboard"},
				{"name": "Input","directory": "button/input"}
			]
		},
		{"name": "Powrót do strony głównej","directory": ""}
	];

	const wrapper = document.querySelector('#wrapper');

	strony.forEach(el => {
		const p = document.createElement('p');

		const a = document.createElement('a');
					if(!el['list']) a.href = `${el['directory']}/`;
					else{
						a.href = "#";
						a.className = "lista";
						a.onclick = name => {

							if(name.target.className.indexOf('active') >= 0){
								name.target.className = name.target.className.split('active')[0] + name.target.className.split('active')[1];
								document.querySelectorAll(`.elementsOf${el['nameoflist']}`).forEach(el => {
									el.style.height = 0;
									setTimeout(() => el.remove(), 500);
								});
							}else{
								name.target.className += " active";
								el['elements'].forEach( (element, orderNr) => {
									const p = document.createElement('p');
												p.className = `elementsOf${el['nameoflist']}`;
												p.style.height = 0;
												p.style.opacity = 0;
												setTimeout(() => {
													p.style.height = '3.5em';
													p.style.opacity = 1;
												}, 500 * (orderNr + 1));
									const a = document.createElement('a');
												a.href = `${element['directory']}/`;
									const button = document.createElement('button');
												button.innerText = element['nr'] !== undefined? (
													`#${element['nr']} ${element['name']}`
												):(
													`${element['name']}`
												);

									a.appendChild(button);
									p.appendChild(a);
									document.querySelector(`#${el['nameoflist']}`).appendChild(p);
								});
							}
						}
					}

		const button = document.createElement('button');
					button.innerText = `${el['name']}`;

		a.appendChild(button);
		p.appendChild(a);
		wrapper.appendChild(p);
		if(el['list']){
			const div = document.createElement('div');
						div.id = el['nameoflist'];
			wrapper.appendChild(div);
		}
	});
}

(() => {
$LAB
	.script('https://code.jquery.com/jquery-3.2.1.min.js')
		.wait(
			() => {
				pokaz_zakladki();
			}
		)
	.script('button/android/button_z_jquery.js')
	.script('host.js')
})();