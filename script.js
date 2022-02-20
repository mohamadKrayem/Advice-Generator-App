
async function getApi (url) {
	const response = await fetch(url)
	const data = await response.json();
	console.log(data.slip)
	document.querySelector('.id').textContent = "Advice #"+data.slip.id
	document.querySelector('.quote').innerHTML= `"${data.slip.advice}"`;
}

getApi('https://api.adviceslip.com/advice')