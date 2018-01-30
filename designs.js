// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
var height = $('#inputHeight');
var width = $('#inputWidth');
var table = $('#pixelCanvas');
$(document).ready(function() {

function makeGrid() {
	var h = Number(height.val());
	var w = Number(width.val());
	table.prepend('<tr><td></td></tr>');
	console.log((w + h) + table);
	// for (var i = 0; i < w; i++) {
	// 	table.prepend("<tr></tr>");
	// 	for (var j = 0; j < h; j++) {
	// 		table.children()[0].append('<td></td>');
	// 	}
		
	// }
  	
}
$('input[type="submit"]').click(makeGrid);
  
  
});