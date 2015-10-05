var llCanvas = false;
var disk = false;
var actuator = false;
var llSelector = false;
var llRpm = false;
var stopAnimation = false;

function lowLevelFormatting()
{
	fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
	var rpm = 4;
	stopAnimation = false;
	if(llCanvas == false)
	{
		llCanvas = new fabric.Canvas('canvas', 
		{
			hoverCursor: 'pointer',
			selection: false,
			perPixelTargetFind: true,
			targetFindTolerance: 5
		});
	}
	else
	{
		$("#canvas").show();
	}

	if(disk == false)
	{
		fabric.Image.fromURL('images/hard_disk.png', function(diskImg)
		{
			disk = diskImg;
			disk.originX = disk.originY = 'center';
			disk.lockMovementX = disk.lockMovementY = true;
			disk.selectable = false;
			disk.left = disk.top = 300;
			llCanvas.add(disk);
			diskAnimate();
		});
	}
	else
	{
		llCanvas.add(disk);
		diskAnimate();
	}

	if(actuator == false)
	{
		fabric.Image.fromURL('images/actuator_arm.png', function(actuatorImg)
		{
			actuator = actuatorImg;
			actuator.originX = actuator.originY = 'center';
			actuator.lockMovementX = actuator.lockMovementY = true;
			actuator.selectable = false;
			actuator.left = 700;
			actuator.top = 500;
			llCanvas.add(actuator);
			actuatorAnimate();
		});
	}
	else
	{
		llCanvas.add(actuator);
		actuatorAnimate();
	}

	function diskAnimate()
	{
		if(stopAnimation == false)
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
					llCanvas.renderAll();
				},
				onComplete: diskAnimate
			});
		}
	};
	
	function actuatorAnimate()
	{
		if(stopAnimation == false)
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
					llCanvas.renderAll();
				},
				onComplete: actuatorAnimate
			});
		}
	};

	if(llSelector == false)
	{
		llSelector = $( "#selector" );
		llRpm = $("#rpm");
		llSelector.slider(
		{
			min: 0,
			max: 32,
			value: 4,
			step: 4,
			slide: function( event, ui )
			{
				rpm = ui.value;
				llRpm.html("" + rpm);
				diskAnimate();
				actuatorAnimate();
			}
		});
		llRpm.html("" + rpm);
	}
	else
	{
		llSelector.show();
		llRpm.show();
	}
}

function hideAll()
{
	if(llCanvas != false)
	{
		$("#canvas").hide();
		llSelector.hide();
		llRpm.hide();
		llCanvas.remove(disk);
		llCanvas.remove(actuator);
	}
	
	$("#text").html("");
	
	stopAnimation = true;
}

function about()
{
	$("#text").html("Fuck you!");
}