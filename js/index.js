const message = `Hi, I'm Thomas Orozco. I have a knowledge of Java ♨️, PHP and MySQL 🔥 technologies. I am passionate about learning and innovating mainly in the fun world of Minecraft 🌎.`;

const container = document.querySelector('#target');
let n;

function rerun() {
	container.textContent = '';
	n = 0;
	typist(message, container);
};

rerun();

function interval(letter) {
	console.log(letter);
	if(letter == ';' || letter == '.' || letter == ',') {
		return Math.floor((Math.random() * 500) + 500);
	} else {
		return Math.floor((Math.random() * 130) + 5);
	}
}

function typist(text, target) {
	if(typeof(text[n]) != 'undefined') {
		target.textContent += text[n];
	}
	n++;
	if(n < text.length) {
		setTimeout(function() {
			typist(text, target)
		}, interval(text[n - 1]));
	} 
}
