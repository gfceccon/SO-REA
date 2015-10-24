var titlePt = "Formatação de Disco"
var titleEn = "Disk Formatting"

var beginPt = "Iniciar"
var beginEn = "Begin"

var hdPt = "Disco Rígido"
var hdEn = "Hard Disk"

var llfPt = "Formatação de Baixo Nível"
var llfEn = "Low Level Formatting"

var hlfPt = "Formatação de Alto Nível"
var hlfEn = "High Level Formatting"

var aboutPt = "Sobre"
var aboutEn = "About"

var creditsPt = "Créditos"
var creditsEn = "Credits"

var aboutTextPt = "<p>Nosso REA é tardado.</p>"
var aboutTextEn = "<p>Our OER is late...</p>"

var creditsTextPt = "<p>Créditos:</p>" +
			"<p>Esta aplicação informativa foi desenvolvida como Recurso Educacional Aberto (REA) dentro da disciplina de Sistemas Operacionais I.<br>" +
			"Seu desenvolvimento foi supervisionado pelo professor Paulo Sérgio Lopes de Souza, e implementado pelos alunos:</p>" +
			"<p>Danilo Zecchin Nery<br>" +
			"Guilherme Zanardo Borduchi<br>" +
			"Gustavo Ferreira Ceccon<br>" +
			"Lucas Silveira de Moura</p>" +
			"<p>Universidade de São Paulo, Institudo de Ciências Matemáticas e de Computação (ICMC - USP).<br>" +
			"São Carlos - SP, Brasil.<br>" +
			"Segundo semestre de 2015.</p>";
var creditsTextEn = "<p>Credits:</p>" +
			"<p>This informative application was developed as an Open Educational Resource (OER), within the discipline of Operational Systems I.<br>" +
			"Its development was supervised by professor Paulo Sérgio Lopes de Souza, and implemented by the students:</p>" +
			"<p>Danilo Zecchin Nery<br>" +
			"Guilherme Zanardo Borduchi<br>" +
			"Gustavo Ferreira Ceccon<br>" +
			"Lucas Silveira de Moura</p>" +
			"<p>University of São Paulo, Institute of Mathematics and Computer Sciences (ICMC - USP).<br>" +
			"São Carlos - SP, Brasil.<br>" +
			"Second semester of 2015.</p>";

var Languages = {
	PtBr : 0, 
	EnUs : 1
};
var lang = Languages.PtBr;

var Section = {
	About : 0,
	Credits : 1,
	Other : 2,
};
var currentSection = Section.Other;

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
		disk_cover.left = 415;
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
	if(lang == Languages.EnUs)
		RpmText.html("Disk Rotation Speed (RPM): " + rpm);
	else
		RpmText.html("Velocidade do Disco (RPM): " + rpm);

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

			if(lang == Languages.EnUs)
				RpmText.html("Disk Rotation Speed (RPM): " + rpm);
			else
				RpmText.html("Velocidade do Disco (RPM): " + rpm);

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

	disk_cover.left = 415;

	platterAnimate();
	actuatorAnimate();

	$("#canvas").show();
	RpmText.show();
	RpmSelector.show();

	currentSection = Section.Other;
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

	currentSection = Section.Other;
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
	if(lang == Languages.PtBr)
		$("#text").html(aboutTextPt);
	else
		$("#text").html(aboutTextEn);

	currentSection = Section.About;
}

function credits()
{
	if(lang == Languages.PtBr)
		$("#text").html(creditsTextPt);
	else
		$("#text").html(creditsTextEn);

	currentSection = Section.Credits;
}

function resetLang()
{
	switch(currentSection)
	{
		case Section.About:
			hideAll();
			about();
			break;

		case Section.Credits:
			hideAll();
			credits();
			break;

		case Section.Other:
			break;

		default:
			break;
	}
}

function setLangPt()
{
	lang = Languages.PtBr;

	$("#title").html(titlePt);
	$("#title-text").html(titlePt);
	$("#begin-button").html(beginPt);
	$("#hd-button").html(hdPt);
	$("#llf-button").html(llfPt);
	$("#hlf-button").html(hlfPt);
	$("#about-button").html(aboutPt);
	$("#credits-button").html(creditsPt);
	RpmText.html("Velocidade do Disco (RPM): " + rpm);

	resetLang();
}

function setLangEn()
{
	lang = Languages.EnUs;

	$("#title").html(titleEn);
	$("#title-text").html(titleEn);
	$("#begin-button").html(beginEn);
	$("#hd-button").html(hdEn);
	$("#llf-button").html(llfEn);
	$("#hlf-button").html(hlfEn);
	$("#about-button").html(aboutEn);
	$("#credits-button").html(creditsEn);
	RpmText.html("Disk Rotation Speed (RPM): " + rpm);

	resetLang();
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