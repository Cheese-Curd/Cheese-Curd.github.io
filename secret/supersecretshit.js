// angel was here fuckers
let list = document.querySelector('#list');

// automatic back insertion
let back = document.createElement('div');
back.className = 'back';
back.innerText = '../';
list.prepend(back);

list.querySelectorAll('*').forEach(elem =>
{
	let a = document.createElement('a');
	a.className = 'no-underline';
	a.href = elem.innerText + (elem.classList.contains('folder') || elem.classList.contains('back') ? (elem.classList.contains('folder') ? '/' : '') + 'index.html' : '');
	a.appendChild(elem);
	list.appendChild(a);
	console.log('logged: ' + elem.innerText);
});