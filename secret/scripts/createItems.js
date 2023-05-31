var main = document.getElementById("content"); // Has to be var to change it every time it switches page

var iconPath = "icons/";

document.getElementById("headerTitle").innerText = document.title;

function setPath(iPath) { iconPath = iPath; }

function createBack()
{
	// Item
	var item = document.createElement("a");
	item.className = "item";
	main.appendChild(item); // Append Item to Main

	// Image
	var itemChild = document.createElement("img");
	itemChild.src = `${iconPath}back.svg`;
	item.appendChild(itemChild); // Append Image to Item

	// Text
	item.href = "../index.html";
	item.innerHTML += "../"; // I'm doing this weirdly, but it works!

	var breaker = document.createElement("hr");
	main.appendChild(breaker) // Append Break to Main

	main.appendChild(document.createComment(" Start of Items ")) // Quick comment :3
}

function getData(path = '') // I hate HTTP requests
{
	/*
	  I know this is deprecated! (https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#synchronous_request)
  
	  I hate Async stuff, and dealing with Fetch's Async stuff is annoying.  
	*/

	const request = new XMLHttpRequest();
	request.open("GET", "https://api.github.com/repos/Cheese-Curd/Cheese-Curd.github.io/contents/secret/" + path, false); // most recent data
	request.send(null);
	if (request.status === 200)
		return JSON.parse(request.responseText); // Return final json
	return false;
}

function createItems(path)
{
	var data = getData(path);
	if (data == false) return false;

	for (var itemData of data)
	{
		var itemIcon = undefined;
		if (itemData.type == "dir")
			itemIcon = "folder";
		else
			itemIcon = "file"; // It's a file, but what type?

		if (itemIcon == "file")
		{
			const split = itemData.name.split('.');
			switch (split[split.length - 1].toLowerCase()) {
				case "mp3": // all audio ._.
				case "ogg":
				case "oga":
				case "mogg":
				case "wav":
				case "flac":
				case "mp3":
					itemIcon = "audio";
					break;

				case "mp4":
				case "webm":
				case "wmv":
				case "mov":
				case "avi":
					itemIcon = "video";
					break;

				case "zip":
					itemIcon = "zip";
					break;
				case "7z":
					itemIcon = "zip";
					break;
				case "rar":
					itemIcon = "zip";
					break;

				case "php":
					itemIcon = "site";
					break;
				case "html":
					itemIcon = "site";
					break;
				case "htm":
					itemIcon = "site";
					break;

				default:
					console.warn("- Unknown File Icon -")
					itemIcon = "file"
			}
		}

		createItem(itemIcon, itemData.name)
	}
}

function createItem(iconType, title)
{
	var item = document.createElement("a");
	item.className = "item"
	var icon = document.createElement("img");
	icon.src = `${iconPath}${iconType}.svg`;
	item.href = `./${title}`

	main.appendChild(item); // Append the item to the main elem
	item.appendChild(icon); // Append the icon to the item elem
	item.innerHTML += title; // Set the text of the item elem to the title

	console.log(`Created item with data:\n  iconType=${iconType}\n  title=${title}`)
}