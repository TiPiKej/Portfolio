(() => {
	const menu = document.querySelectorAll('.block > .title');
	let toNavbar = null;

	const menunavbar = event => {
		menu.forEach( (el, nr) => {
			const para = document.querySelector(`#${el.id}`);
			const nav = document.querySelectorAll('.navbar-item');

			if(window.scrollY + window.top.innerHeight * .1 > para.offsetTop) nav.forEach(navel => navel.className = navel.className.split(' active')[0]);
			
			if(window.scrollY + window.top.innerHeight * .1 > para.offsetTop){
				nav[nr].className += ' active';
				history.pushState(null, null, `#${el.id}`);
				console.log(el.hash)
			}

			// console.log(/*window.top.innerHeight + */window.scrollY > para.offsetTop);

		});
	}

	const windowTo = event => {
		if(toNavbar) clearTimeout(toNavbar);
		toNavbar = setTimeout(menunavbar, 200);
	}


	window.addEventListener('scroll', windowTo);
})();