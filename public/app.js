
function createObject(){
	var description = document.getElementById('createData').value;

	var data = JSON.stringify({
  	"description": description
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === this.DONE) {
    		console.log(this.responseText);
  		}
	});

	xhr.open("POST", "https://restapicreateupdateobjects.stamplayapp.com/api/cobject/v1/object");
	xhr.setRequestHeader("accept", "application/json");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(data);
}

function updateObject(){

	var newDescription = document.getElementById('updateData').value;

	var data = JSON.stringify({
  	"description": newDescription
	});

	var xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener("readystatechange", function () {
  		if (this.readyState === this.DONE) {
    		console.log(this.responseText);
  		}
	});

	xhr.open("PUT", "https://restapicreateupdateobjects.stamplayapp.com/api/cobject/v1/object/565603deb3039e5f75c10d60");
	xhr.setRequestHeader("accept", "application/json");
	xhr.setRequestHeader("content-type", "application/json");
	xhr.send(data);
}

