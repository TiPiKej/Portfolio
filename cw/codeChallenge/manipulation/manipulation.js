// Write a function to manipulate the provided string

const wynik = document.querySelector('#wynik');


// 1. Padded Number
wynik.innerHTML += `1. Padded Number<br>`;
// Pad given single numbers in array to look like "10", "05", "16", "02"
const nums = ['2', '4', '25', '10', '3']
const paddedNum = text => {
//   Insert function
	text.forEach((el, nr) => {
		if(el < 10) text[nr] = String(`0${el}`);
	})


	wynik.innerHTML += `${text.join(', ')}<br>`;
}
paddedNum(nums)


// 2. Camel-to-Title
wynik.innerHTML += `<br>2. Camel-to-Title<br>`;
// Convert a given sentence from camelCase to Title Case
const camelCase = {
	title: "passage",
	content: "the simplestThings in LIFE are alwaysThe best"
}
const titleCase = text => {
//   Insert function
	const toNormalCases = string => {
		let wordsWrap = string.split(' ');

		Array.from(wordsWrap).forEach((word, nr) => {
			if(word[0] !== word[0].toUpperCase()){
				Array.from(word).forEach(letter => {
					if(letter === letter.toUpperCase()){
						word = word.split(letter).join(` ${letter.toLowerCase()}`)
					}
				})
			}

			wordsWrap[nr] = word
		})

		return wordsWrap.join(' ')
	}
	wynik.innerHTML += `${toNormalCases(text)}<br>`;
}
titleCase(camelCase.content)


// 3. Title-to-Camel
wynik.innerHTML += `<br>3. Title-to-Camel<br>`;
// Convert the Title Case back to camelCase
const newTitle = {
	title: "passage",
	content: "These Words Should Go In Pairs"
}
const newCamel = text => {
//   Insert function
  text = text.split(' ').join('');

	wynik.innerHTML += `${text}<br>`;
}
newCamel(newTitle.content)


// 4. Passage Counter
wynik.innerHTML += `<br>4. Passage Counter<br>`;
// How many seconds will it tke to read the provided text? 
// If it goes past 60 seconds, quote in minutes!
const passage = {
	title: "passage",
	content: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk.`
}

const howMany = ({title, content}) => { 
//   Insert function
  const speedPerMinute = 200; // words per minutes
  const speedPerSecond = speedPerMinute / 60; // words per seconds
	const words = content.split(' ');

	let timeOfReadingThis = Math.floor(words.length * speedPerSecond);

	if(timeOfReadingThis > 60){
		timeOfReadingThis /= 60;
		const minutes = Math.floor(timeOfReadingThis);
		const seconds = Math.floor((timeOfReadingThis - minutes) * 60);

		timeOfReadingThis = `${minutes} min ${seconds} sec`;
	}else timeOfReadingThis = `${timeOfReadingThis} sec`;

	wynik.innerHTML += `${title} - ${timeOfReadingThis}<br>`;
}
howMany(camelCase);
howMany(newTitle);
howMany(passage);


// 5. Pig Latin
wynik.innerHTML += `<br>5. Pig Latin<br>`;
// Convert any word to Pig Latin, see how to convert here => https://en.wikipedia.org/wiki/Pig_Latin
const word = {
	title: "passage",
	content: "hamlet"
}
const pigLatin = text => {
//   Insert function
	const consonant = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'X', 'Z'];
	if(consonant.indexOf(text[0].toUpperCase()) !== -1){
		let string = Array.from(text);
		if(consonant.indexOf(text[1].toUpperCase()) !== -1){
			string.shift()
			string.shift()
			text = `${string.join('')}${text[0] + text[1]}ay`;
		}else{
			string.shift()
			text = `${string.join('')}${text[0]}ay`;
		}
	}else{
		text += `ay`;
	}


	wynik.innerHTML += `${text}<br>`;
}
pigLatin(word.content);