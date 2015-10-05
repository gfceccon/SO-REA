(function()
{
	fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
	var rpm = 4;
	var disk;
	var actuator;
	var canvas = this.__canvas = new fabric.Canvas('canvas', 
	{
		hoverCursor: 'pointer',
		selection: false,
		perPixelTargetFind: true,
		targetFindTolerance: 5
	});

	fabric.Image.fromURL('images/hard_disk.png', function(diskImg)
	{
		disk = diskImg;
		disk.originX = disk.originY = 'center';
		disk.lockMovementX = disk.lockMovementY = true;
		disk.selectable = false;
		disk.left = disk.top = 300;
		canvas.add(diskImg);
		diskAnimate();
	});

	fabric.Image.fromURL('images/actuator_arm.png', function(actuatorImg)
	{
		actuator = actuatorImg;
		actuator.originX = actuator.originY = 'center';
		actuator.lockMovementX = actuator.lockMovementY = true;
		actuator.selectable = false;
		actuator.left = 700;
		actuator.top = 500;
		canvas.add(actuatorImg);
		actuatorAnimate();
	});

	function diskAnimate()
	{
		fabric.util.animate(
		{
			startValue: 0,
			endValue: 360,
			duration: 60000 / rpm ,

			easing: function(t, b, c, d) { return c*t/d + b; },

			onChange: function(angle)
			{
				disk.setAngle(angle);
				canvas.renderAll();
			},
			onComplete: diskAnimate
		});
	};
	
	function actuatorAnimate()
	{
		fabric.util.animate(
		{
			startValue: 60,
			endValue: 105,
			duration: 60000 / rpm ,

			easing: function(t, b, c, d) { if(t > d/2) return c*t/d + b; else return c*(1 - t/d) + b },

			onChange: function(angle)
			{
				actuator.setAngle(angle);
				canvas.renderAll();
			},
			onComplete: actuatorAnimate
		});
	};

	$( "#selector" ).slider(
	{
		min: 0,
		max: 32,
		value: 4,
		step: 4,
		slide: function( event, ui )
		{
			rpm = ui.value;
			$("#dur").html("" + rpm);
      diskAnimate();
      actuatorAnimate();
		}
	});
	$("#dur").html("" + rpm);
})();