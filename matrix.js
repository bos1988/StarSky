function Matrix(objectId, mount, size, lay)
{
	//конструктор
	this.objectId = '#' + objectId;
	this.mount = mount;
	this.size = size;
	this.lay = lay;
	var that = this;
	
	var matrix = $(this.objectId);
	matrix.append('<div></div>');
	this.object = matrix.children('div:last');
	this.object.addClass('layer');
	this.object.css({'z-index': this.lay});
	
	this.createStar = function()
	{
		var i = 0;
		var create = setInterval(
			function()
			{
				var size = Math.round(Math.random() * that.size) + that.size/4;
				var img = Math.round(Math.random() * 3) + 1;
				var newObject = '<img src = "' + img + '.png" width = "' + size + '" height = "' + size + '">';
				that.object.append(newObject);
				
				var x = Math.round(Math.random() * ($('body').width() - that.size/4)) - that.size/4 + 'px';
				var y = Math.round(Math.random() * ($('body').height()- that.size/4)) - that.size/4 + 'px';
				
				that.object.find('img:last').css({'position': 'absolute', 'top': y, 'left': x}).hide().fadeIn(1000);
				
				i++;
				if (i >= that.mount)
					clearInterval(create);
			}
		, 3000/that.mount);
		
		/*for (var i = 0; i < that.mount; i++)
		{
			var size = Math.round(Math.random() * that.size) + that.size/4;
			var img = Math.round(Math.random() * 3) + 1;
			var newObject = '<img src = "' + img + '.png" width = "' + size + '" height = "' + size + '">';
			that.object.append(newObject);
			
			var x = Math.round(Math.random() * ($('body').width() - that.size/4)) - that.size/4 + 'px';
			var y = Math.round(Math.random() * ($('body').height()- that.size/4)) - that.size/4 + 'px';
			
			that.object.find('img:last').css({'position': 'absolute', 'top': y, 'left': x}).hide().fadeIn(5000);
		}*/
		
	}
	
	this.changePosition = function(x, y, speed)
	{
		var positions = that.object.position();
		var newX = positions.left + x * speed;
		var newY = positions.top + y * speed;
		that.object.css({'top': newY, 'left': newX});
	}
	
	this.deleteStar = function()
	{
		var i = 0;
		var del = setInterval(
			function()
			{
				setTimeout(function()
					{
						that.object.find('img:first').remove();
					}, 3000);
				that.object.children().eq(i).fadeOut(1000);
				
				i++;
				if (i >= that.mount)
					clearInterval(del);
			}
		, 3000/that.mount);
		
	}
}