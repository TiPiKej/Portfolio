(() => {
	opcje = {
		root: null,
	  rootMargin: '0px',
	  threshold: 0.1
	};

	const zmiana = (el) => {
		el.target.src = el.target.dataset.src;
	}

	const zmianaWrap = (ent, observer) => {
		ent.forEach( el => {
			if(el.intersectionRatio > 0) zmiana(el);
		});
	}

	const observer = new IntersectionObserver( zmianaWrap, opcje );


	const images = document.querySelectorAll('.image img');
	images.forEach( (el, nr) => observer.observe(el) );
})();