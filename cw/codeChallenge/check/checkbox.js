(() => {
	const sound_checked = document.querySelectorAll('#background_checkbox > label > input[type="checkbox"]');

	sound_checked.forEach( e => e.addEventListener('change', play_sound));

	function play_sound(e){
		const isOn = e.target.checked;
		if(isOn){
			const 	dzwiek = document.createElement('audio');
					dzwiek.src = 'lightsaber.wav';
					dzwiek.play();
		}
	}

})();