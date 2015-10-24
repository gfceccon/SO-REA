var title_pt = "Formatação de Disco";
var title_en = "Disk Formatting";

var begin_pt = "Iniciar";
var begin_en = "Begin";

var hd_pt = "Disco Rígido";
var hd_en = "Hard Disk";

var llf_pt = "Formatação de Baixo Nível";
var llf_en = "Low Level Formatting";

var hlf_pt = "Formatação de Alto Nível";
var hlf_en = "High Level Formatting";

var about_pt = "Sobre";
var about_en = "About";

var credits_pt = "Créditos";
var credits_en = "Credits";

var about_text_pt = "<p>Nosso REA é tardado.</p>";
var about_text_en = "<p>Our OER is late...</p>";

var credits_text_pt = "<p>Créditos:</p>" +
			"<p>Esta aplicação informativa foi desenvolvida como Recurso Educacional Aberto (REA) dentro da disciplina de Sistemas Operacionais I.<br>" +
			"Seu desenvolvimento foi supervisionado pelo professor Paulo Sérgio Lopes de Souza, e implementado pelos alunos:</p>" +
			"<p>Danilo Zecchin Nery<br>" +
			"Guilherme Zanardo Borduchi<br>" +
			"Gustavo Ferreira Ceccon<br>" +
			"Lucas Silveira de Moura</p>" +
			"<p>Universidade de São Paulo, Institudo de Ciências Matemáticas e de Computação (ICMC - USP).<br>" +
			"São Carlos - SP, Brasil.<br>" +
			"Segundo semestre de 2015.</p>";
var credits_text_en = "<p>Credits:</p>" +
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
	_ptBr : 0, 
	_enUs : 1
};
var lang = Languages._ptBr;

var Section = {
	About : 0,
	Credits : 1,
	Other : 2,
};
var currentSection = Section.Other;

var canvas = false;

var rpm_slider = false;
var rpm_text = false;
var rpm = 16;

var disk_cover = false;
var disk_case = false;
var disk_platter = false;
var disk_actuator = false;

var paragraph;

var stop_anim = false;

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

	fabric.Image.fromURL('images/unskewed_platter.png', function(disk_platterImg)
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

	rpm_text = $("#rpm");
	if(lang == Languages._enUs)
		rpm_text.html("Disk Rotation Speed (RPM): " + rpm);
	else
		rpm_text.html("Velocidade do Disco (RPM): " + rpm);

	rpm_text.hide();
	
	rpm_slider = $("#selector");
	rpm_slider.slider(
	{
		min: 0,
		max: 32,
		value: rpm,
		step: 4,
		slide: function(event, ui)
		{
			if(lang == Languages._enUs)
				rpm_text.html("Disk Rotation Speed (RPM): " + ui.value);
			else
				rpm_text.html("Velocidade do Disco (RPM): " + ui.value);
			actuator_angle = 30;
			disk_actuator.setAngle(30);
			rpm = 0;
		},
		stop: function(event, ui)
		{
			rpm = ui.value;
			platterAnimate(rpm, 0, 0);
		}
	});
	rpm_slider.hide();
	
	paragraph = $("#subtitle");

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
	stop_anim = false;

	canvas.insertAt(disk_case, 0, true);
	canvas.insertAt(disk_platter, 1, true);
	canvas.insertAt(disk_actuator, 2, true);
	canvas.insertAt(disk_cover, 3, true);

	disk_cover.left = 415;

	platterAnimate(rpm, 0, 0);
	actuator_angle = 30;
	disk_actuator.setAngle(30);

	$("#canvas").show();
	rpm_text.show();
	rpm_slider.show();

	currentSection = Section.Other;
}

function lowLevelFormatting()
{
	stop_anim = false;

	canvas.insertAt(disk_case, 0, true);
	canvas.insertAt(disk_platter, 1, true);
	canvas.insertAt(disk_actuator, 2, true);

	platterAnimate(rpm, 0, 0);
	actuator_angle = 30;
	disk_actuator.setAngle(30);

	$("#canvas").show();
	rpm_text.show();
	rpm_slider.show();

	currentSection = Section.Other;
}

var reading = true;
var current_track = 0;
var skew = 1;
var platter_angle = 0;
var platter_division = 8;
var initial_angle = 15;

function platterAnimate(animation_rpm, prev_track, track)
{
	console.log(animation_rpm);
	if(stop_anim == false || rpm > 0) 
	{
		fabric.util.animate(
		{
			startValue: 0 + initial_angle + prev_track*prev_track * 2,
			endValue: 360 + initial_angle + track*track * 2,
			duration: 60000 / animation_rpm ,

			easing: function(t, b, c, d) { return c*t/d + b; },

			onChange: function(angle)
			{
				platter_angle = angle;
				disk_platter.setAngle(angle);
				canvas.renderAll();
			},
			onComplete: function()
			{
				if(animation_rpm == rpm)
				{
					if(reading == true)
					{
						var randTrack = Math.round(Math.random() * 2);
						actuatorAnimateTo(randTrack);
						reading = false;
						paragraph.append("End reading " + current_track);
						platterAnimate(animation_rpm, track, randTrack);
					}
					else
					{
						reading = true;
						paragraph.append("Begin reading " + current_track);
						platterAnimate(animation_rpm, track, track);
					}
					paragraph.append("<br/>");
				}
			},
			abort: function()
			{
				if(animation_rpm != rpm)
					return true;
				return false;
			}
		});
	}
};

var actuator_velocity = 20;
var actuator_angle = 30;
var actuator_moving = false;

function actuatorAnimateTo(track)
{
	if(actuator_moving == true)
		return;

	actuator_moving = true;
	
	var angle;
	if(track == 0)
		angle = 30;
	else if(track == 1)
		angle = 40;
	else if(track == 2)
		angle = 55;
	
	if(actuator_angle == angle)
	{
		actuator_moving = false;
		return;
	}
	
	if(stop_anim == false)
	{
		var auxiliar = angle;
		fabric.util.animate(
		{
			startValue: actuator_angle,
			endValue: angle,
			duration: 1000 * Math.abs(actuator_angle - angle) / actuator_velocity,

			easing: function(t, b, c, d) { return c*t/d + b; },

			onChange: function(value)
			{
				disk_actuator.setAngle(value);
				canvas.renderAll();
			},
			onComplete: function()
			{
				if(platter_angle <= skew * track * 360 / platter_division)
				{
					reading = true;
					paragraph.append("Begin reading " + current_track + '\n');
					paragraph.append("<br/>");
				}
				actuator_angle = auxiliar;
				actuator_moving = false;
				current_track = track;
			}
		});
	}
	else
		actuator_moving = false;
};

function about()
{
	if(lang == Languages._ptBr)
		$("#text").html(about_text_pt);
	else
		$("#text").html(about_text_en);

	currentSection = Section.About;
}

function credits()
{
	if(lang == Languages._ptBr)
		$("#text").html(credits_text_pt);
	else
		$("#text").html(credits_text_en);

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
	lang = Languages._ptBr;

	$("#title").html(title_pt);
	$("#title-text").html(title_pt);
	$("#begin-button").html(begin_pt);
	$("#hd-button").html(hd_pt);
	$("#llf-button").html(llf_pt);
	$("#hlf-button").html(hlf_pt);
	$("#about-button").html(about_pt);
	$("#credits-button").html(credits_pt);
	rpm_text.html("Velocidade do Disco (RPM): " + rpm);

	resetLang();
}

function setLangEn()
{
	lang = Languages._enUs;

	$("#title").html(title_en);
	$("#title-text").html(title_en);
	$("#begin-button").html(begin_en);
	$("#hd-button").html(hd_en);
	$("#llf-button").html(llf_en);
	$("#hlf-button").html(hlf_en);
	$("#about-button").html(about_en);
	$("#credits-button").html(credits_en);
	rpm_text.html("Disk Rotation Speed (RPM): " + rpm);

	resetLang();
}

function hideAll()
{
	$("#canvas").hide();
	rpm_text.hide();
	rpm_slider.hide();

	canvas.remove(disk_cover);
	canvas.remove(disk_case);
	canvas.remove(disk_platter);
	canvas.remove(disk_actuator);

	$("#text").html("");
	
	stop_anim = true;
}