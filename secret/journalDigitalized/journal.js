const searchParams = new URLSearchParams(window.location.search);
var page = searchParams.get('page');

function getPageText()
{
	var pageContents = "";
	const req = new XMLHttpRequest();
	var data;
	const dataReq = new XMLHttpRequest();
	req.open("GET", `https://api.github.com/repos/Cheese-Curd/journalPages/contents/${page}.txt`, false); // most recent data
	req.send(null);
	if (req.status === 200)
		data = JSON.parse(req.responseText);
	if (data == null)
		return;
	dataReq.open("GET", data.download_url, false); // Get the content
	dataReq.send(null);
	if (dataReq.status === 200)
		pageContents = dataReq.responseText; // Get text
	
	if (pageContents == "")
		return;
	
	const leftPage = pageContents.split('#right')[0];
	const rightPage = pageContents.split('#right')[1];

	document.getElementById("leftPage").innerHTML = marked.parse(leftPage);
	document.getElementById("rightPage").innerHTML = marked.parse(rightPage);
}

function setupPages()
{
	var pageN = parseInt(page);

	document.getElementById("prevPage").href = `./journal.html?page=${pageN - 1}`;
	document.getElementById("nextPage").href = `./journal.html?page=${pageN + 1}`;

	if (pageN - 1 == 0)
		document.getElementById("prevPage").href = "./";
}

getPageText();
setupPages();