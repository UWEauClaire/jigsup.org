function assembleTable(data) {
	var table = $("#table").find("tbody");
	data.forEach(function(item) {
		var tableTR = $("<tr/>");
		var html = '';
		html += "<td><h4>"+item.firstName+"</h4></td>";
		html += "<td><h4>"+item.lastName+"</h4></td>";
		html += "<td><h4>"+item.fish+"</h4></td>";
		html += "<td><h4>"+item.weight+"</h4></td>";
		html += "<td><h4>"+moment(item.createdAt).format('h:mm:ss A')+"</h4></td>";
		tableTR.append(html);
		table.append(tableTR);
	});
};

$.ajax({
  url: 'https://jigsup-entry.herokuapp.com/moreInfo/0',
  type: 'PUT',
  data: ,
  success:
})
