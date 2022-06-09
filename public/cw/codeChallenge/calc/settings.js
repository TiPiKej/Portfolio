(() => {
$LAB
	.script('https://code.jquery.com/jquery-3.2.1.min.js')
		.wait()
	.script('calc.js')
		.wait(
			() => {
				document.addEventListener('click', (e) => {
					if(window.top.innerWidth - e.clientX > 340){
						document.getElementsByClassName('calc')[0].style.left = e.clientX+'px';
						document.getElementsByClassName('calc')[0].style.right = 'unset';
					}
					else if(e.clientX >  document.getElementsByClassName('calc')[0].offsetWidth){
						document.getElementsByClassName('calc')[0].style.left = 'unset';
						document.getElementsByClassName('calc')[0].style.right = window.top.innerWidth - e.clientX+'px';
					}
					else{
						document.getElementsByClassName('calc')[0].style.left = '0';
						document.getElementsByClassName('calc')[0].style.right = 'unset';
					}
					
					if(window.top.innerHeight - e.clientY > 400){
						document.getElementsByClassName('calc')[0].style.top = e.clientY+'px';
						document.getElementsByClassName('calc')[0].style.bottom = 'unset';
					}
					else if(e.clientY >  document.getElementsByClassName('calc')[0].offsetHeight){
						document.getElementsByClassName('calc')[0].style.top = 'unset';
						document.getElementsByClassName('calc')[0].style.bottom = window.top.innerHeight - e.clientY+'px';
					}
					else{
						document.getElementsByClassName('calc')[0].style.top = 'unset';
						document.getElementsByClassName('calc')[0].style.bottom = '0';
					}
					// console.log(e.clientX, e.clientY);
				});
				document.getElementsByClassName('calc')[0].addEventListener('click', (e) => {
					e.stopPropagation();
				});
			}
		)
	.script('../../host.js')
})();