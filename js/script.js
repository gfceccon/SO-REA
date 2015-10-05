var llCanvas = false;
var disk_case = false;
var disk_platter = false;
var disk_actuator = false;
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

	if(disk_case == false)
	{
		fabric.Image.fromURL('images/disk_case.png', function(disk_caseImg)
		{
			disk_case = disk_caseImg;
			disk_case.originX = disk_case.originY = 'center';
			disk_case.lockMovementX = disk_case.lockMovementY = true;
			disk_case.selectable = false;
			disk_case.left = 400;
			disk_case.top = 300;
			llCanvas.add(disk_case);
			disk_case.moveTo(0);
		});
	}
	else
	{
		llCanvas.add(disk_case);
		disk_case.moveTo(0);
	}

	if(disk_platter == false)
	{
		fabric.Image.fromURL('images/disk_platter.png', function(disk_platterImg)
		{
			disk_platter = disk_platterImg;
			disk_platter.originX = disk_platter.originY = 'center';
			disk_platter.lockMovementX = disk_platter.lockMovementY = true;
			disk_platter.selectable = false;
			disk_platter.left = 317;
			disk_platter.top = 300;
			llCanvas.add(disk_platter);
			platterAnimate();
			disk_platter.moveTo(1);
		});
	}
	else
	{
		llCanvas.add(disk_platter);
		disk_platterAnimate();
		disk_platter.moveTo(1);
	}

	if(disk_actuator == false)
	{
		fabric.Image.fromURL('images/disk_actuator_arm.png', function(disk_actuatorImg)
		{
			disk_actuator = disk_actuatorImg;
			disk_actuator.originX = disk_actuator.originY = 'center';
			disk_actuator.lockMovementX = disk_actuator.lockMovementY = true;
			disk_actuator.selectable = false;
			disk_actuator.left = 610;
			disk_actuator.top = 350;
			llCanvas.add(disk_actuator);
			actuatorAnimate();
			disk_actuator.moveTo(2);
		});
	}
	else
	{
		llCanvas.add(disk_actuator);
		disk_actuatorAnimate();
		disk_actuator.moveTo(2);
	}

	function platterAnimate()
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
					disk_platter.setAngle(angle);
					llCanvas.renderAll();
				},
				onComplete: platterAnimate
			});
		}
	};
	
	function actuatorAnimate()
	{
		if(stopAnimation == false)
		{
			fabric.util.animate(
			{
				startValue: 0,
				endValue: 0,
				duration: 60000 / rpm ,

				easing: function(t, b, c, d) { if(t > d/2) return c*t/d + b; else return c*(1 - t/d) + b },

				onChange: function(angle)
				{
					disk_actuator.setAngle(angle);
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
				platterAnimate();
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