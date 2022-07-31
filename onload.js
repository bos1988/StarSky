function var_dump(obj)
{
	var s = '<h1>' + obj + '</h1>';
	s += '<ol>';

	for (p in obj)
		s += '<li><b>' + p + '</b> : ' + obj[p] + '</li>';
	
	s += '</ol>';
	window.document.body.innerHTML = s;
}

//
// Точка входа.
//
$(document).ready(
	function(){
		
		$('body').height($('body').width() * 10/16);
		
		var layer1 = new Matrix('matrix', 60, 50, 1);
		var layer2 = new Matrix('matrix', 30, 100, 2);
		var layer3 = new Matrix('matrix', 10, 150, 3);
		
		function Show(){
			layer1.createStar();
			layer2.createStar();
			layer3.createStar();
		}
		
		function Hide(){
			layer1.deleteStar();
			layer2.deleteStar();
			layer3.deleteStar();
		}
		
		var oldX;
		var oldY;
		var newX;
		var newY;
		
		var G = false;
		
		$(document).mousemove(
			function(event)
			{
				newX = event.pageX;
				newY = event.pageY;
			}
		);
		
		var move = setInterval(
			function()
			{
				var x = newX - oldX;
				var y = newY - oldY;
				
				layer1.changePosition(x, y, 0.1);
				layer2.changePosition(x, y, 0.2);
				layer3.changePosition(x, y, 0.4);
				
				oldX = newX;
				oldY = newY;
			}
		, 10);
		
		$(document).click(
			function(){
				(G) ? Hide() : Show();
				G = !G;
			}
		);
	}
);