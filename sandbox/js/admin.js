/*$(document).ready(function() {
	$('#resp1').click(function() {
		$('#resp1').slideUp();
	});
});
*/

/*$(document).ready(function () {
	$('#resp1').click(function() {
		$('#resp1').fadeOut(100).fadeIn(100);
	});
});*/
this.count1 = 0;
this.count2 = 0;
this.count3 = 0;
this.count4 = 0;

var PingScreen = function (input) {
	// First check what is type of input
	// If input is a number, go to switch statement
	// Switch statement decides which div on the screen needs to be edited.
	if (typeof input === "number") {
		switch (input) {
			case 1:
				var resp1 = document.getElementById('resp1');
				this.count++;
				$(document).ready(function () {
					$('#resp1').fadeOut(100).fadeIn(100);
					$('#resp1').innerHTML(this.count);
				});
				
				break;

			case 2:


			case 3:


			case 4:


		}

	} else if (typeof input === "string") {

	} else {
		return 0;
	}

}






/*var resp1 = document.getElementById('resp1'),
	resp2 = document.getElementById('resp2'),
	resp3 = document.getElementById('resp3'),
	resp4 = document.getElementById('resp4');
*/