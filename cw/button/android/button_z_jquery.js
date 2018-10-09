let buttons = $('button');

buttons.on({
	'mousedown': e => {
		let effect = document.createElement('div');
		    effect.className = 'effect';

		$(effect).css({
			'top': `${e.originalEvent.layerY}px`,
			'left': `${e.originalEvent.layerX}px`
		});

		e.target.append(effect);

		setTimeout( () => {
			$(effect).remove();
		},1000 );

	}
});