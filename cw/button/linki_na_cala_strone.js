$('a').on({
	'click': e => {
		let effect = document.createElement('div');
		    effect.className = 'effect_window';

		let width = 'vw', 
			height = 'vh';
		if(window.top.innerWidth > window.top.innerHeight) height = width;
		else width = height;

		$(effect).css({
			'top': `calc(-55${height} + ${e.originalEvent.y}px)`,
			'left': `calc(-55${width} + ${e.originalEvent.x}px)`,
			'height': `110${height}`,
			'width': `110${width}`
		});

		$('body').append(effect);

		setTimeout(() => {
			$('.effect_window').css({
				'animation: ': 'effect_window_close 1s ease',
				'-webkit-animation': 'effect_window_close 1s ease'
			});
			setTimeout( () => {
				$(effect).remove();
			},1000);
		}, 5000);
	}
});