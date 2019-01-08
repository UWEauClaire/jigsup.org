$(document).ready(function(){

	function assembleTable(data) {
		var count = 0;
		var table = document.getElementById("#table");
		console.log('here i am');
		console.log('this is the returned data', data);
		data.forEach(function(item) {
			var row = table.insertRow(count);
			var firstName = row.insertCell(0);
			var lastName = row.insertCell(1);
			var fish = row.insertCell(2);
			var weight = row.insertCell(3);
			var time = row.insertCell(4);
		});
	};

	$.ajax({
  	url: 'https://jigsup-entry.herokuapp.com/moreInfo/0',
  	type: 'PUT',
		dataType: 'json',
  	success: function(object) {
			assembleTable(object);
		}
	}).responseJSON;
});
