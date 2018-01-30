$(document).ready(function() {
var pickedColor = $('input[type="color"]').val();
function makeGrid() {
	var h = Number($('#inputHeight').val());
	var w = Number($('#inputWidth').val());
	var table = $('#pixelCanvas');
	table.empty();
	for (var i = 0; i < h; i++) {
		var row = table.prepend("<tr></tr>"); // add rows from the top to access the 0 index in the next loop
		for (var j = 0; j < w; j++) {
			$(table.children()[0]).append("<td> </td>"); //append cells in the top row
		}
	}
	return false; 
}
function changeColor() {
	var currentCellColor = $(this).css("background-color");
	// if (currentCellColor = pickedColor) {
	// 	$(this).css("background-color", "white");
	// } else {
		$(this).css("background-color", pickedColor);	
	//}
}

$('#sizePicker').submit(makeGrid);
$('#pixelCanvas').on('mouseover ', 'td', changeColor);
$('#pixelCanvas').off('mouseleave', 'td');
 
  
});

