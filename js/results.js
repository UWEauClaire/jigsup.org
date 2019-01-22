var initialized = false;
function assembleTable(data) {
	var count = 0;
	var table = document.getElementById("tablebody");
	data.list.forEach(function(item) {
		if(count < 10) {
			var row = table.insertRow(count);
			row.insertCell(0).innerHTML = item.ticketNumber;
			row.insertCell(1).innerHTML = item.firstName;
			row.insertCell(2).innerHTML = item.lastName;
			row.insertCell(3).innerHTML = item.fish;
			row.insertCell(4).innerHTML = item.weight;
			count++;
		}
	});
};

function updateTable(data) {
	var count = 0;
	var table = document.getElementById("tablebody");
	data.list.forEach(function(item) {
		if(count < table.rows.length) {
			var row = table.rows[count];
			row.cells[0].innerHTML = item.ticketNumber;
			row.cells[1].innerHTML = item.firstName;
			row.cells[2].innerHTML = item.lastName;
			row.cells[3].innerHTML = item.fish;
			row.cells[4].innerHTML = item.weight;
			count++;
		}else {
			if(count < 10) {
				var row = table.insertRow(count);
				row.insertCell(0).innerHTML = item.ticketNumber;
				row.insertCell(1).innerHTML = item.firstName;
				row.insertCell(2).innerHTML = item.lastName;
				row.insertCell(3).innerHTML = item.fish;
				row.insertCell(4).innerHTML = item.weight;
				count++;
			}
		}
	});
};

function getData() {
	$.ajax({
		url: 'http://jigsuplist.strecks.net/',
		type: 'GET',
		dataType: 'json',
		success: function(object) {
			if(initialized == false) {
				console.log('Assemble');
				assembleTable(object);
				initialized = true;
			}else {
				console.log('Update');
				updateTable(object);
			}
		}
	}).responseJSON;
};

getData();
setInterval(function() {getData()},10000);
