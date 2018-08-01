(() => {
	const clip = document.querySelectorAll('.clipboard');
	console.log(clip)

	Array.from(clip).forEach(el => el.onclick = () => {
		el.style.position = 'relative';
		const text = el.dataset.clipboardText;

		const area = document.createElement('textarea');
					area.innerText = text;
					area.style.opacity = 0;
					area.style.height = 0;
					area.style.width = 0;
					area.style.position = 'absolute';
					area.style.top = 0;
					area.style.left = 0;

		el.appendChild(area)
		area.select()
		document.execCommand('copy')
		setTimeout(() => area.remove(), 1000)
	});

})();