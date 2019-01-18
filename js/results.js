$(document).ready(function(){

	function assembleTable(data) {
		var count = 0;
		var table = document.getElementById("tablebody");
		console.log(data.list);
		data.list.forEach(function(item) {
			if(count < 10) {
				var row = table.insertRow(count);
				var head = row.insertCell(0).innerHTML = item.firstName;
				row.insertCell(1).innerHTML = item.lastName;
				row.insertCell(2).innerHTML = item.fish;
				row.insertCell(3).innerHTML = item.weight;
				count++;
			}
		});
	};

	$.ajax({
  	url: 'http://jigsuplist.strecks.net/',
  	type: 'GET',
		dataType: 'json',
  	success: function(object) {
			assembleTable(object);
		}
	}).responseJSON;
});
