var canvas = false;
var RpmSelector = false;
var RpmText = false;
var rpm = 4;

var disk_cover = false;
var disk_case = false;
var disk_platter = false;
var disk_actuator = false;

var stopAnimation = false;

initialize();

function initialize()
{
	fabric.Image.fromURL('images/disk_cover.png', function(disk_coverImg)
	{
		disk_cover = disk_coverImg;
		disk_cover.originX = disk_cover.originY = 'center';
		disk_cover.lockMovementY = true;
		disk_cover.left = 400;
		disk_cover.top = 300;
	});

	fabric.Image.fromURL('images/disk_case.png', function(disk_caseImg)
	{
		disk_case = disk_caseImg;
		disk_case.originX = disk_case.originY = 'center';
		disk_case.lockMovementX = disk_case.lockMovementY = true;
		disk_case.selectable = false;
		disk_case.left = 400;
		disk_case.top = 300;
	});

	fabric.Image.fromURL('images/disk_platter.png', function(disk_platterImg)
	{
		disk_platter = disk_platterImg;
		disk_platter.originX = disk_platter.originY = 'center';
		disk_platter.lockMovementX = disk_platter.lockMovementY = true;
		disk_platter.selectable = false;
		disk_platter.left = 317;
		disk_platter.top = 300;
	});

	fabric.Image.fromURL('images/disk_actuator_arm.png', function(disk_actuatorImg)
	{
		disk_actuator = disk_actuatorImg;
		disk_actuator.originX = disk_actuator.originY = 'center';
		disk_actuator.lockMovementX = disk_actuator.lockMovementY = true;
		disk_actuator.selectable = false;
		disk_actuator.left = 610;
		disk_actuator.top = 350;
	});

	RpmText = $("#rpm");
	RpmText.html("Disk rotation speed (RPM): " + rpm);
	RpmText.hide();
	
	RpmSelector = $("#selector");
	RpmSelector.slider(
	{
		min: 0,
		max: 32,
		value: rpm,
		step: 4,
		slide: function(event, ui)
		{
			rpm = ui.value;
			RpmText.html("Disk rotation speed (RPM): " + rpm);
			platterAnimate();
			actuatorAnimate();
		}
	});
	RpmSelector.hide();

	canvas = new fabric.Canvas('canvas', 
	{
		hoverCursor: 'pointer',
		selection: false,
		perPixelTargetFind: true,
		targetFindTolerance: 5,
		renderOnAddRemove: false
	});
}

function hardDisk()
{
	stopAnimation = false;

	canvas.insertAt(disk_case, 0, true);
	canvas.insertAt(disk_platter, 1, true);
	canvas.insertAt(disk_actuator, 2, true);
	canvas.insertAt(disk_cover, 3, true);

	disk_cover.left = 400;

	platterAnimate();
	actuatorAnimate();

	$("#canvas").show();
	RpmText.show();
	RpmSelector.show();
}

function lowLevelFormatting()
{
	stopAnimation = false;

	canvas.insertAt(disk_case, 0, true);
	canvas.insertAt(disk_platter, 1, true);
	canvas.insertAt(disk_actuator, 2, true);

	platterAnimate();
	actuatorAnimate();

	$("#canvas").show();
	RpmText.show();
	RpmSelector.show();
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
				canvas.renderAll();
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
			endValue: 55,
			duration: 60000 / rpm ,

			easing: function(t, b, c, d) { if(t > d/2) return c*t/d + b; else return c*(1 - t/d) + b },

			onChange: function(angle)
			{
				disk_actuator.setAngle(angle);
				canvas.renderAll();
			},
			onComplete: actuatorAnimate
		});
	}
};

function about()
{
	$("#text").html("This is our OER!");
}

function hideAll()
{
	$("#canvas").hide();
	RpmText.hide();
	RpmSelector.hide();

	canvas.remove(disk_cover);
	canvas.remove(disk_case);
	canvas.remove(disk_platter);
	canvas.remove(disk_actuator);

	$("#text").html("");
	
	stopAnimation = true;
}