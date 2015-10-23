var llCanvas = false;
var llSelector = false;
var llRpm = false;
var rpm = 4;

var disk_cover = false;
var disk_case = false;
var disk_platter = false;
var disk_actuator = false;

var stopAnimation = false;

initialize();

function initialize()
{
	llCanvas = new fabric.Canvas('canvas', 
	{
		hoverCursor: 'pointer',
		selection: false,
		perPixelTargetFind: true,
		targetFindTolerance: 5
	});

	fabric.Image.fromURL('images/disk_cover.png', function(disk_coverImg)
	{
		disk_cover = disk_coverImg;
		disk_cover.originX = disk_cover.originY = 'center';
		disk_cover.lockMovementX = disk_cover.lockMovementY = true;
		disk_cover.selectable = false;
		disk_cover.left = 400;
		disk_cover.top = 300;
		llCanvas.add(disk_cover);
		disk_cover.moveTo(0);
	});

	fabric.Image.fromURL('images/disk_case.png', function(disk_caseImg)
	{
		disk_case = disk_caseImg;
		disk_case.originX = disk_case.originY = 'center';
		disk_case.lockMovementX = disk_case.lockMovementY = true;
		disk_case.selectable = false;
		disk_case.left = 400;
		disk_case.top = 300;
		llCanvas.add(disk_case);
		disk_case.moveTo(1);
	});

	fabric.Image.fromURL('images/disk_platter.png', function(disk_platterImg)
	{
		disk_platter = disk_platterImg;
		disk_platter.originX = disk_platter.originY = 'center';
		disk_platter.lockMovementX = disk_platter.lockMovementY = true;
		disk_platter.selectable = false;
		disk_platter.left = 317;
		disk_platter.top = 300;
		llCanvas.add(disk_platter);
		//platterAnimate();
		disk_platter.moveTo(2);
	});

	fabric.Image.fromURL('images/disk_actuator_arm.png', function(disk_actuatorImg)
	{
		disk_actuator = disk_actuatorImg;
		disk_actuator.originX = disk_actuator.originY = 'center';
		disk_actuator.lockMovementX = disk_actuator.lockMovementY = true;
		disk_actuator.selectable = false;
		disk_actuator.left = 610;
		disk_actuator.top = 350;
		llCanvas.add(disk_actuator);
		//actuatorAnimate();
		disk_actuator.moveTo(3);
	});

	llSelector = $( "#selector" );
	llRpm = $("#rpm");
	llSelector.slider(
	{
		min: 0,
		max: 32,
		value: rpm,
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

	hideAll();
}

function hardDisk()
{
	fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
	stopAnimation = false;

	llCanvas.add(disk_cover);
	llCanvas.add(disk_case);
	llCanvas.add(disk_platter);
	llCanvas.add(disk_actuator);

	platterAnimate();
	actuatorAnimate();

	$("#canvas").show();
}

function lowLevelFormatting()
{
	fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
	stopAnimation = false;

	llCanvas.add(disk_case);
	llCanvas.add(disk_platter);
	llCanvas.add(disk_actuator);
	
	platterAnimate();
	actuatorAnimate();

	$("#canvas").show();

	llSelector.show();
	llRpm.show();
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
			startValue: 37,
			endValue: -18,
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

function about()
{
	$("#text").html("This is our OER!");
}

function hideAll()
{
	$("#canvas").hide();
	llSelector.hide();
	llRpm.hide();
	//llCanvas.remove(disk_cover);
	//llCanvas.remove(disk_platter);
	//llCanvas.remove(disk_actuator);

	$("#text").html("");
	
	stopAnimation = true;
}