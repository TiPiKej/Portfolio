const timer = {
	var: {
		title: document.getElementsByClassName('title')[0],
		minutes: document.getElementById('minutes'),
		seconds: document.getElementById('seconds'),
		start: document.getElementById('start'),
		pause: document.getElementById('stop'),
		reset: document.getElementById('reset'),
		to: ""
	},

	inicjuj: () => {
		timer.var.pause.style.display = 'none';
		timer.var.reset.style.display = 'none';

		timer.var.start.onclick = () => timer.start();
		timer.var.reset.onclick = () => timer.reset();
	},

	start: cnowy => {
		if(cnowy != 'wznow'){
			timer.var.minutes.innerText = 25;
			timer.var.seconds.innerText = '00';
		}

		timer.var.title.innerText = `Minutnik wystartował!!`;

		timer.sekundnik();
	},

	pause: () => {
		clearTimeout(timer.var.to);
		timer.var.start.style.display = 'unset';
		timer.var.pause.style.display = 'none';
		timer.var.start.onclick = () => timer.start('wznow');

		timer.var.title.innerText = `Minutnik zapauzował!!`;
	},

	reset: () => {
		timer.var.start.style.display = 'unset';
		timer.var.pause.style.display = 'none';
		timer.var.reset.style.display = 'none';
		timer.var.minutes.innerText = 25;
		timer.var.seconds.innerText = '00';
		clearTimeout(timer.var.to);

		timer.var.title.innerText = `Rozpocznij odliczanie!!`;
	},

	sekundnik: e => {
		if(e != 'pause'){}
		if(timer.var.seconds.innerText == 0){
			timer.var.minutes.innerText -= 1;
			timer.var.seconds.innerText = 59;
		}else if(timer.var.seconds.innerText <= 10){
			timer.var.seconds.innerText = '0'+parseInt(timer.var.seconds.innerText - 1);
		}else timer.var.seconds.innerText -= 1;

		timer.var.start.style.display = 'none';
		timer.var.pause.style.display = 'unset';
		timer.var.pause.onclick = () => timer.pause();
		timer.var.reset.style.display = 'unset';

		if(timer.var.seconds.innerText == 0 && timer.var.minutes.innerText == 0){}
		else timer.var.to = setTimeout(() => timer.sekundnik(), 1000);
	}
}