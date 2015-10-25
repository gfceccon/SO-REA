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
    _ptBr: 0,
    _enUs: 1
};
var lang = Languages._ptBr;

var Section = {
    About: 0,
    Credits: 1,
    HardDisk: 2,
    Other: 3,
};
var currentSection = Section.Other;

var canvas = false;

var rpm_slider = false;
var rpm_text = false;
var rpm = 16;

var disk_cover_img = false;
var disk_platter_img = false;
var actuator_text_img = false;
var track_text_img = false;
var platter_text_img = false

var disk_case_inst = false;
var disk_cover_inst = false;
var disk_platter_inst = false;
var disk_actuator_inst = false;
var actuator_text_inst = false;
var actuator_path_inst = false;
var track_text_inst = false;
var track_path_inst = false;
var platter_text_inst = false;
var platter_path_inst = false;

var paragraph;

var stop_anim = false;

initialize();

function initialize()
{
    // --- INSTANCES BLOCK --- //
    disk_cover_inst = new fabric.Image('images/disk_cover.png',
    {
        left: 35,
        top: 22,
        opacity: 0.98,
        lockMovementY: true
    });

    disk_platter_inst = new fabric.Image('images/platters/disk_platter.png',
    {
        left: 317,
        top: 300,
        originX: 'center',
        originY: 'center',
        lockMovementX: true,
        lockMovementY: true,
        selectable: false
    });

    actuator_text_inst = new fabric.Image('images/text_buttons/actuator_text_pt.png',
    {
        left: 700,
        top: 450,
        originX: 'center',
        originY: 'center',
        opacity: 0.85,
        lockMovementX: true,
        lockMovementY: true,
        selectable: false
    });

    track_text_inst = new fabric.Image('images/text_buttons/track_text_pt.png',
    {
        left: 120,
        top: 70,
        originX: 'center',
        originY: 'center',
        opacity: 0.85,
        lockMovementX: true,
        lockMovementY: true,
        selectable: false
    });

    platter_text_inst = new fabric.Image('images/text_buttons/platter_text_pt.png',
    {
        left: 650,
        top: 100,
        originX: 'center',
        originY: 'center',
        opacity: 0.85,
        lockMovementX: true,
        lockMovementY: true,
        selectable: false
    });

    fabric.Image.fromURL('images/others/disk_case.png', function (disk_caseImg)
    {
        disk_case_inst = disk_caseImg;
        disk_case_inst.originX = disk_case_inst.originY = 'center';
        disk_case_inst.lockMovementX = disk_case_inst.lockMovementY = true;
        disk_case_inst.selectable = false;
        disk_case_inst.left = 400;
        disk_case_inst.top = 300;
    });

    fabric.Image.fromURL('images/others/disk_actuator_arm.png', function (disk_actuatorImg)
    {
        disk_actuator_inst = disk_actuatorImg;
        disk_actuator_inst.originX = disk_actuator_inst.originY = 'center';
        disk_actuator_inst.lockMovementX = disk_actuator_inst.lockMovementY = true;
        disk_actuator_inst.selectable = false;
        disk_actuator_inst.left = 610;
        disk_actuator_inst.top = 350;
    });

    fabric.Image.fromURL('images/paths/track_path.png', function (track_pathImg)
    {
        track_path_inst = track_pathImg;
        track_path_inst.originX = track_path_inst.originY = 'center';
        track_path_inst.lockMovementX = track_path_inst.lockMovementY = true;
        track_path_inst.selectable = false;
        track_path_inst.left = 154;
        track_path_inst.top = 132;
    });

    fabric.Image.fromURL('images/paths/actuator_path.png', function (actuator_pathImg)
    {
        actuator_path_inst = actuator_pathImg;
        actuator_path_inst.originX = actuator_path_inst.originY = 'center';
        actuator_path_inst.lockMovementX = actuator_path_inst.lockMovementY = true;
        actuator_path_inst.selectable = false;
        actuator_path_inst.left = 625;
        actuator_path_inst.top = 390;
    });

    fabric.Image.fromURL('images/paths/platter_path.png', function (platter_pathImg)
    {
        platter_path_inst = platter_pathImg;
        platter_path_inst.originX = platter_path_inst.originY = 'center';
        platter_path_inst.lockMovementX = platter_path_inst.lockMovementY = true;
        platter_path_inst.selectable = false;
        platter_path_inst.left = 558;
        platter_path_inst.top = 173;
    });
    // --- END INSTANCES BLOCK --- //

    // --- IMAGES BLOCK --- //
    disk_cover_img = new Image();
    disk_cover_img.onload = function ()
    {
        disk_cover_inst.setElement(disk_cover_img);
    }
    disk_cover_img.src = 'images/others/disk_cover_pt.png';

    disk_platter_img = new Image();
    disk_platter_img.onload = function ()
    {
        disk_platter_inst.setElement(disk_platter_img);
    }
    disk_platter_img.src = 'images/platters/disk_platter.png';

    actuator_text_img = new Image();
    actuator_text_img.onload = function ()
    {
        actuator_text_inst.setElement(actuator_text_img);
    }
    actuator_text_img.src = 'images/text_buttons/actuator_text_pt.png';

    track_text_img = new Image();
    track_text_img.onload = function ()
    {
        track_text_inst.setElement(track_text_img);
    }
    track_text_img.src = 'images/text_buttons/track_text_pt.png';

    platter_text_img = new Image();
    platter_text_img.onload = function ()
    {
        platter_text_inst.setElement(platter_text_img);
    }
    platter_text_img.src = 'images/text_buttons/platter_text_pt.png';
    // --- END IMAGES BLOCK --- //

    rpm_text = $("#rpm");
    if (lang == Languages._enUs)
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
        slide: function (event, ui)
        {
            if (lang == Languages._enUs)
                rpm_text.html("Disk Rotation Speed (RPM): " + ui.value);
            else
                rpm_text.html("Velocidade do Disco (RPM): " + ui.value);
            actuator_angle = 30;
            disk_actuator_inst.setAngle(30);
            rpm = 0;
        },
        stop: function (event, ui)
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
    currentSection = Section.HardDisk;
    disk_cover_inst.left = 35;

    if (lang == Languages._ptBr)
        disk_platter_img.src = 'images/platters/platter_presentation_pt.png';
    else
        disk_platter_img.src = 'images/platters/platter_presentation_en.png';

    canvas.insertAt(disk_case_inst, 0, true);
    canvas.insertAt(disk_platter_inst, 1, true);
    canvas.insertAt(disk_actuator_inst, 2, true);

    canvas.insertAt(actuator_text_inst, 3, true);
    canvas.insertAt(track_text_inst, 4, true);
    canvas.insertAt(platter_text_inst, 5, true);

    canvas.insertAt(actuator_path_inst, 6, true);
    canvas.insertAt(track_path_inst, 7, true);
    canvas.insertAt(platter_path_inst, 8, true);

    canvas.insertAt(disk_cover_inst, 9, true);

    platterAnimate(rpm, 0, 0);
    actuator_angle = 30;
    disk_actuator_inst.setAngle(30);

    $("#canvas").show();
    rpm_text.show();
    rpm_slider.show();
}

function lowLevelFormatting()
{
    stop_anim = false;
    currentSection = Section.Other;
    disk_platter_img.src = 'images/platters/unskewed_platter.png';

    canvas.insertAt(disk_case_inst, 0, true);
    canvas.insertAt(disk_platter_inst, 1, true);
    canvas.insertAt(disk_actuator_inst, 2, true);

    platterAnimate(rpm, 0, 0);
    actuator_angle = 30;
    disk_actuator_inst.setAngle(30);

    $("#canvas").show();
    rpm_text.show();
    rpm_slider.show();
}

function highLevelFormatting()
{
    stop_anim = false;
    currentSection = Section.Other;

    // Wait for it...
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
    if (stop_anim == false || rpm > 0)
    {
        fabric.util.animate(
        {
            startValue: initial_angle + prev_track * prev_track * 2,
            endValue: 360 + initial_angle + track * track * 2,
            duration: 60000 / animation_rpm,

            easing: function (t, b, c, d)
            {
                return c * t / d + b;
            },

            onChange: function (angle)
            {
                platter_angle = angle;
                disk_platter_inst.setAngle(angle);
                canvas.renderAll();
            },

            onComplete: function ()
            {
                if (animation_rpm == rpm)
                {
                    if (reading == true)
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

            abort: function ()
            {
                return (animation_rpm != rpm);
            }
        });
    }
}

var actuator_velocity = 20;
var actuator_angle = 30;
var actuator_moving = false;

function actuatorAnimateTo(track)
{
    if (actuator_moving == true)
        return;

    actuator_moving = true;

    var angle;
    if (track == 0)
        angle = 30;
    else if (track == 1)
        angle = 40;
    else if (track == 2)
        angle = 55;

    if (actuator_angle == angle)
    {
        actuator_moving = false;
        return;
    }

    if (stop_anim == false)
    {
        var auxiliar = angle;

        fabric.util.animate(
        {
            startValue: actuator_angle,
            endValue: angle,
            duration: 1000 * Math.abs(actuator_angle - angle) / actuator_velocity,

            easing: function (t, b, c, d)
            {
                return c * t / d + b;
            },

            onChange: function (value)
            {
                disk_actuator_inst.setAngle(value);
                canvas.renderAll();
            },
            onComplete: function ()
            {
                if (platter_angle <= skew * track * 360 / platter_division) {
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
    {
        actuator_moving = false;
    }
}

function about()
{
    currentSection = Section.About;

    if (lang == Languages._ptBr)
        $("#text").html(about_text_pt);
    else
        $("#text").html(about_text_en);
}

function credits()
{
    currentSection = Section.Credits;

    if (lang == Languages._ptBr)
        $("#text").html(credits_text_pt);
    else
        $("#text").html(credits_text_en);
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

    switch (currentSection)
    {
        case Section.About:
            hideAll();
            about();
            break;

        case Section.Credits:
            hideAll();
            credits();
            break;

        case Section.HardDisk:
            disk_cover_img.src = 'images/others/disk_cover_pt.png';
            disk_platter_img.src = 'images/platters/platter_presentation_pt.png';
            actuator_text_img.src = 'images/text_buttons/actuator_text_pt.png';
            track_text_img.src = 'images/text_buttons/track_text_pt.png';
            platter_text_img.src = 'images/text_buttons/platter_text_pt.png';
            break;

        default:
            break;
    }
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

    switch (currentSection)
    {
        case Section.About:
            hideAll();
            about();
            break;

        case Section.Credits:
            hideAll();
            credits();
            break;

        case Section.HardDisk:
            disk_cover_img.src = 'images/others/disk_cover_en.png';
            disk_platter_img.src = 'images/platters/platter_presentation_en.png';
            actuator_text_img.src = 'images/text_buttons/actuator_text_en.png';
            track_text_img.src = 'images/text_buttons/track_text_en.png';
            platter_text_img.src = 'images/text_buttons/platter_text_en.png';
            break;

        default:
            break;
    }
}

function hideAll()
{
    $("#canvas").hide();
    canvas.clear();

    rpm_text.hide();
    rpm_slider.hide();

    $("#text").html("");

    stop_anim = true;
}