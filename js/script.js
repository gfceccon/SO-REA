/// -- HTML TEXT --- ///

var title_pt = "Formatação de Disco";
var title_en = "Disk Formatting";

var begin_pt = "Iniciar";
var begin_en = "Begin";

var hd_pt = "Disco Rígido";
var hd_en = "Hard Disk";

var llf_pt = "Formatação de Baixo Nível";
var llf_en = "Low Level Formatting";

var skew_pt = "Deslocamento de Cilindro";
var skew_en = "Cylinder Skew";

var interleaving_pt = "Entrelaçamento";
var interleaving_en = "Interleaving";

var hlf_pt = "Formatação de Alto Nível";
var hlf_en = "High Level Formatting";

var about_pt = "Sobre";
var about_en = "About";

var credits_pt = "Créditos";
var credits_en = "Credits";

var about_text_pt = "<p class=\"title\">Sobre</p>" +
    "<p>Esta aplicação foi desenvolvida pensando-se na facilidade de uso. Ao entrar na aplicação, é possível ver um menu lateral, que contém todas as seções da aplicação, bem como as bandeiras de seleção de idioma.</p>" +
    "<p>O primeiro botão é o \"Iniciar\", que simplesmente passa por todas as seções da aplicação de forma linear. Ideal para quem nunca utilizou a aplicação e deseja experimentar tudo o que ela tem a oferecer.</p>" +
    "<p>O segundo botão é o de \"Disco Rígido\". Nesta seção, é possível observar como está internamente organizado o disco rígido, com suas principais partes nomeadas. A figura X mostra uma captura de tela com o estado da aplicação ao entrar nesta seção.<br>" +
    "<image src=\"images/screenshots/hard_disk_pt.png\" class=\"screenshot\"></image></br>" +
    "Figura X - Visão da aplicação dentro da seção \"Disco Rígido\".</p>" +
    "<p>O terceiro botão é o de \"Formatação de Baixo Nível\". INSIRA TEXTO AQUI</p>" +
    "<p>O quarto botão é o de \"Formatação de Alto Nível\". INSIRA TEXTO AQUI</p>" +
    "<p>O quinto botão entra na seção \"Sobre\", que possui um texto similar a este, explicando como a aplicação está organizada e o que se encontra em cada seção.</p>" +
    "<p>O último botão é o botão de \"Créditos\", no qual pode-se ver quais foram os alunos que desenvolveram a aplicação, e o professor orientador do desenvolvimento.</p>" +
    "<p>Por fim, no canto inferior do menu, estão localizadas as bandeiras de seleção de idiomas. Clicando na bandeira do Brasil, o idioma é alterado para português. Clicando na bandeira dos Estados Unidos, o idioma é alterado para inglês.</p>";
var about_text_en = "<p class=\"title\">About</p>" +
    "<p>This application was developed with ease of use in our minds. When first entering it, you can see a lateral menu, which contains all the available sections of the application, as well as the language selection flags.</p>" +
    "<p>The first button is \"Begin\", which will simply pass linearly through all sections of the application. Recommended for those who never used the application before, and want to experience everything it has to offer.</p>" +
    "<p>The second button is \"Hard Disk\". Here you can observe how a hard disk is internally organized, with its main components named. Figure X shows a screenshot with the state of the application after entering that section.<br>" +
    "<image src=\"images/screenshots/hard_disk_en.png\" class=\"screenshot\"></image><br>" +
    "Figure X - Application state inside \"Hard Disk\" section.</p>" +
    "<p>The third button is the \"Low Level Formatting\" button.</p>" +
    "<p>The fourth button is the \"High Level Formatting\" button.</p>" +
    "<p>The fifth button leads you to the \"About\" section, which contains text similar to this one, explaining how the application is organized and what you will find in each of the sections.</p>" +
    "<p>The last button is the \"Credits\" button, where you can see which students developed the application, as well as the supervisioning professor.</p>" +
    "<p>Lastly, on the bottom corner of the menu, the language selection flags are displayed. You can set the application language to portuguese by clicking on the Brazil flag, or set it to english by clicking on the United States flag.</p>";

var credits_text_pt = "<p class=\"title\">Créditos</p>" +
    "<p>Esta aplicação informativa foi desenvolvida como Recurso Educacional Aberto (REA) dentro da disciplina de Sistemas Operacionais I.<br>" +
    "Seu desenvolvimento foi supervisionado pelo professor Paulo Sérgio Lopes de Souza, e implementado pelos alunos:</p>" +
    "<p>Danilo Zecchin Nery<br>" +
    "Guilherme Zanardo Borduchi<br>" +
    "Gustavo Ferreira Ceccon<br>" +
    "Lucas Silveira de Moura</p>" +
    "<p>Universidade de São Paulo, Instituto de Ciências Matemáticas e de Computação (ICMC - USP).<br>" +
    "São Carlos - SP, Brasil.<br>" +
    "Segundo semestre de 2015.</p>";
var credits_text_en = "<p class=\"title\">Credits</p>" +
    "<p>This informative application was developed as an Open Educational Resource (OER), within the discipline of Operational Systems I.<br>" +
    "Its development was supervised by professor Paulo Sérgio Lopes de Souza, and implemented by the students:</p>" +
    "<p>Danilo Zecchin Nery<br>" +
    "Guilherme Zanardo Borduchi<br>" +
    "Gustavo Ferreira Ceccon<br>" +
    "Lucas Silveira de Moura</p>" +
    "<p>University of São Paulo, Institute of Mathematics and Computer Sciences (ICMC - USP).<br>" +
    "São Carlos - SP, Brasil.<br>" +
    "Second semester of 2015.</p>";


/// -- SYSTEM VARIABLES --- ///

var presentation_mode = false;

var Languages = {
    _ptBr: 0,
    _enUs: 1
};
var lang = Languages._ptBr;

var Section = {
    HD: 0,
    LLF: 1,
    HLF: 2,
    About: 3,
    Credits: 4,
    Other: 5
};
var currentSection = Section.HD;

var canvas = false;

var rpm_slider = false;
var rpm_text = false;
var rpm = 16;

/// -- INSTANCES VARIABLES --- ///
var disk_case_inst = false;
var disk_cover_inst = false;
var disk_platter_inst = false;
var disk_actuator_inst = false;
var actuator_text_inst = false;
var actuator_arm_text_inst = false;
var actuator_arm_path_inst = false;
var track_text_inst = false;
var track_path_inst = false;
var platter_text_inst = false;
var platter_path_inst = false;

// --- IMAGES VARIABLES --- //
var disk_cover_img = false;
var disk_platter_img = false;
var actuator_text_img = false;
var actuator_arm_text_img = false;
var track_text_img = false;
var platter_text_img = false

var content;
var main_text
var skew_table;
var circle_track0;
var circle_track1;
var circle_track2;
var inter_table;
var buffer;

var stop_anim = false;

initialize();

function initialize() {
    // --- INSTANCES BLOCK --- //
    disk_cover_inst = new fabric.Image('images/disk_cover.png',
        {
            left: 35,
            top: 22,
            opacity: 0.98,
            lockScalingX: true,
            lockScalingY: true,
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
            lockRotation: true,
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

    actuator_arm_text_inst = new fabric.Image('images/text_buttons/actuator_arm_text_pt.png',
        {
            left: 697,
            top: 220,
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

    fabric.Image.fromURL('images/others/disk_case.png', function (disk_caseImg) {
        disk_case_inst = disk_caseImg;
        disk_case_inst.originX = disk_case_inst.originY = 'center';
        disk_case_inst.lockMovementX = disk_case_inst.lockMovementY = true;
        disk_case_inst.selectable = false;
        disk_case_inst.left = 400;
        disk_case_inst.top = 300;
    });

    fabric.Image.fromURL('images/others/disk_actuator_arm.png', function (disk_actuatorImg) {
        disk_actuator_inst = disk_actuatorImg;
        disk_actuator_inst.originX = disk_actuator_inst.originY = 'center';
        disk_actuator_inst.lockMovementX = disk_actuator_inst.lockMovementY = true;
        disk_actuator_inst.selectable = false;
        disk_actuator_inst.left = 610;
        disk_actuator_inst.top = 350;
    });

    fabric.Image.fromURL('images/paths/track_path.png', function (track_pathImg) {
        track_path_inst = track_pathImg;
        track_path_inst.originX = track_path_inst.originY = 'center';
        track_path_inst.lockMovementX = track_path_inst.lockMovementY = true;
        track_path_inst.selectable = false;
        track_path_inst.left = 154;
        track_path_inst.top = 132;
    });

    fabric.Image.fromURL('images/paths/actuator_arm_path.png', function (actuator_arm_pathImg) {
        actuator_arm_path_inst = actuator_arm_pathImg;
        actuator_arm_path_inst.originX = actuator_arm_path_inst.originY = 'center';
        actuator_arm_path_inst.lockMovementX = actuator_arm_path_inst.lockMovementY = true;
        actuator_arm_path_inst.selectable = false;
        actuator_arm_path_inst.left = 592;
        actuator_arm_path_inst.top = 260;
    });

    fabric.Image.fromURL('images/paths/platter_path.png', function (platter_pathImg) {
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
    disk_cover_img.onload = function () {
        disk_cover_inst.setElement(disk_cover_img);
    }
    disk_cover_img.src = 'images/others/disk_cover_pt.png';

    disk_platter_img = new Image();
    disk_platter_img.onload = function () {
        disk_platter_inst.setElement(disk_platter_img);
    }
    disk_platter_img.src = 'images/platters/disk_platter.png';

    actuator_text_img = new Image();
    actuator_text_img.onload = function () {
        actuator_text_inst.setElement(actuator_text_img);
    }
    actuator_text_img.src = 'images/text_buttons/actuator_text_pt.png';

    actuator_arm_text_img = new Image();
    actuator_arm_text_img.onload = function () {
        actuator_arm_text_inst.setElement(actuator_arm_text_img);
    }
    actuator_arm_text_img.src = 'images/text_buttons/actuator_arm_text_pt.png';

    track_text_img = new Image();
    track_text_img.onload = function () {
        track_text_inst.setElement(track_text_img);
    }
    track_text_img.src = 'images/text_buttons/track_text_pt.png';

    platter_text_img = new Image();
    platter_text_img.onload = function () {
        platter_text_inst.setElement(platter_text_img);
    }
    platter_text_img.src = 'images/text_buttons/platter_text_pt.png';
    // --- END IMAGES BLOCK --- //

    rpm_text = $("#rpm");
    if (lang == Languages._enUs)
        rpm_text.html("Disk Rotation Speed (RPM): " + rpm);
    else
        rpm_text.html("Velocidade do Disco (RPM): " + rpm);

    rpm_slider = $("#selector");
    content = $("#content");
    main_text = $("#text");
    skew_table = $("#skew-table");
    circle_track0 = $("#state0");
    circle_track1 = $("#state1");
    circle_track2 = $("#state2");
    inter_table = $("#inter-table");
    buffer = $("#buffer");

    rpm_slider.slider(
        {
            min: 0,
            max: 32,
            value: rpm,
            step: 4,
            slide: function (event, ui) {

                circle_track0.attr("fill", "red");
                circle_track1.attr("fill", "red");
                circle_track2.attr("fill", "red");
                if (lang == Languages._enUs)
                    rpm_text.html("Disk Rotation Speed (RPM): " + ui.value);
                else
                    rpm_text.html("Velocidade do Disco (RPM): " + ui.value);
                actuator_angle = 30;
                disk_actuator_inst.setAngle(30);
                rpm = 0;
            },
            stop: function (event, ui) {
                rpm = ui.value;
                actuatorAnimateTo(0);
                platterAnimateSkew(rpm);
            }
        });

    canvas = new fabric.Canvas('canvas',
        {
            hoverCursor: 'pointer',
            selection: false,
            perPixelTargetFind: true,
            targetFindTolerance: 5,
            renderOnAddRemove: false
        });

    hideAll();
    $("#previous-button").hide();
    $("#next-button").hide();
}

function beginPresentation() {
    presentation_mode = true;
    hideAll();
    $("#previous-button").hide();
    $("#next-button").show();
    hardDisk();
}

function endPresentation() {
    presentation_mode = false;
    $("#previous-button").hide();
    $("#next-button").hide();
}

function navNext() {
    switch (currentSection) {
        case Section.HD:
            hideAll();
            $("#previous-button").show();
            lowLevelFormatting();
            break;

        case Section.LLF:
            hideAll();
            highLevelFormatting();
            break;

        case Section.HLF:
            hideAll();
            about();
            break;

        case Section.About:
            hideAll();
            $("#next-button").hide();
            credits();
            break;

        default:
            break;
    }

}

function navPrev() {
    switch (currentSection) {
        case Section.LLF:
            hideAll();
            $("#previous-button").hide();
            hardDisk();
            break;

        case Section.HLF:
            hideAll();
            lowLevelFormatting();
            break;

        case Section.About:
            hideAll();
            highLevelFormatting();
            break;

        case Section.Credits:
            hideAll();
            $("#next-button").show();
            about();
            break;

        default:
            break;
    }
}

function hardDisk() {
    stop_anim = false;
    currentSection = Section.HD;
    disk_cover_inst.left = 35;

    if (lang == Languages._ptBr)
        disk_platter_img.src = 'images/platters/platter_presentation_pt.png';
    else
        disk_platter_img.src = 'images/platters/platter_presentation_en.png';

    canvas.insertAt(disk_case_inst, 0, true);
    canvas.insertAt(disk_platter_inst, 1, true);
    canvas.insertAt(disk_actuator_inst, 2, true);

    canvas.insertAt(actuator_text_inst, 3, true);
    canvas.insertAt(actuator_arm_text_inst, 4, true);
    canvas.insertAt(track_text_inst, 5, true);
    canvas.insertAt(platter_text_inst, 6, true);

    canvas.insertAt(actuator_arm_path_inst, 7, true);
    canvas.insertAt(track_path_inst, 8, true);
    canvas.insertAt(platter_path_inst, 9, true);

    canvas.insertAt(disk_cover_inst, 10, true);

    rpm = 8;
    rpm_slider.slider("value", 8);
    actuatorAnimateTo(0);
    platterAnimateSkew(rpm);

    $("#canvas").show();
    rpm_text.show();
    rpm_slider.show();
}

function lowLevelFormatting() {
    stop_anim = false;
    currentSection = Section.LLF;
    //disk_platter_img.src = 'images/platters/skewed_platter.png';
    disk_platter_img.src = 'images/platters/interleaved_platter.png';

    canvas.insertAt(disk_case_inst, 0, true);
    canvas.insertAt(disk_platter_inst, 1, true);
    canvas.insertAt(disk_actuator_inst, 2, true);

    rpm = 16;
    rpm_slider.slider("value", 16);
    actuatorAnimateTo(1);
    platterAnimateInter(rpm);

    $("#canvas").show();
    rpm_text.show();
    rpm_slider.show();
    skew_table.show();
    inter_table.show();
}

function highLevelFormatting() {
    stop_anim = true;
    currentSection = Section.HLF;

    var $p1 = $("<div id='part1' class='pentry'><p>1, 6, 1, inodes</p></div>");
    var $p2 = $("<div id='part2' class='pentry'><p>7, 6, 0, exFAT</p></div>");
    var $p3 = $("<div id='part3' class='pentry'><p>14, 6, 0, NTFS</p></div>");
    var $p4 = $("<div id='part4' class='pentry'><p>20, 4, 0, NTFS</p></div>");
    var $platter = $("<img id='dpimg' src='images/platters/disk_platter_numbered.png'/>");

    $platter.fadeIn("fast").appendTo("#hlf");
    $p1.hide().appendTo("#hlf").delay(200).fadeIn("fast");
    $p2.hide().appendTo("#hlf").delay(400).fadeIn("fast");
    $p3.hide().appendTo("#hlf").delay(600).fadeIn("fast");
    $p4.hide().appendTo("#hlf").delay(800).fadeIn("fast");
}

var reading = true;
var cur_track = 0;
var skew = 1;
var platter_division = 8;
var initial_angle = [15, 18, 24];
var next_track = 0;
var begin_read = 0;
var epsilon = 10;

function get_time() {
    return new Date().getTime();
}

function platterAnimateSkew(animation_rpm) {
    var prev_angle = 0;
    var cur_angle = 0;
    if (stop_anim == false || rpm > 0) {
        fabric.util.animate(
            {
                startValue: 0,
                endValue: 360,
                duration: 60000 / animation_rpm,
                easing: function (t, b, c, d) {
                    return c * t / d + b;
                },
                onChange: function (angle) {
                    prev_angle = cur_angle;
                    cur_angle = angle;

                    var target_angle = initial_angle[cur_track] + cur_track * skew * 360 / platter_division;

                    if (actuator_moving == false
                        && cur_angle >= target_angle
                        && target_angle > prev_angle
                        && get_time() - begin_read >= 60000 / animation_rpm - epsilon) {
                        if (reading == true) {
                            reading = false;
                            next_track = (next_track + 1) % 3;
                            actuatorAnimateTo(next_track);
                        } else {
                            reading = true;
                            begin_read = get_time();
                            if (cur_track == 0)
                                circle_track0.attr("fill", "green");
                            else if (cur_track == 1)
                                circle_track1.attr("fill", "green");
                            else
                                circle_track2.attr("fill", "green");
                        }
                    }
                    disk_platter_inst.setAngle(angle);
                    canvas.renderAll();
                },
                onComplete: function () {
                    if (animation_rpm == rpm) {
                        platterAnimateSkew(animation_rpm);
                    }
                },

                abort: function () {
                    return (animation_rpm != rpm || stop_anim);
                }
            });
    }
}

var sect_color_red = [0, 0, 0, 0, 71, 50, 26, 11];
var sect_color_green = [150, 113, 64, 25, 207, 151, 79, 29];
var sect_color_blue = [246, 183, 105, 42, 0, 0, 0, 0];
var sect_target = 0;

function platterAnimateInter(animation_rpm) {
    var prev_angle = 0;
    var cur_angle = 0;

    if (stop_anim == false || rpm > 0) {
        fabric.util.animate(
            {
                startValue: 0,
                endValue: 360,
                duration: 60000 / animation_rpm,
                easing: function (t, b, c, d) {
                    return c * t / d + b;
                },
                onChange: function (angle) {
                    prev_angle = cur_angle;
                    cur_angle = angle;
                    var target_angle = sect_target * 45;

                    if (cur_angle >= target_angle && target_angle >= prev_angle) {
                        if (reading == true)
                            reading = false;
                        else {
                            var rgb = "rgb(" + sect_color_red[sect_target - 1] + ", " + sect_color_green[sect_target - 1] + ", " + sect_color_blue[sect_target - 1] + ")";
                            buffer.attr("fill", rgb);
                            sect_target = (sect_target + 2) % platter_division;
                            reading = true;
                        }
                    }
                    disk_platter_inst.setAngle(angle + initial_angle[1]);
                    canvas.renderAll();
                },
                onComplete: function () {
                    if (animation_rpm == rpm) {
                        platterAnimateInter(animation_rpm);
                    }
                },

                abort: function () {
                    return (animation_rpm != rpm || stop_anim);
                }
            });
    }
}

var actuator_velocity = 20;
var actuator_angle = 30;
var actuator_moving = false;

function actuatorAnimateTo(track) {
    if (actuator_moving == true)
        return;

    var angle;
    if (track == 0)
        angle = 30;
    else if (track == 1)
        angle = 40;
    else if (track == 2)
        angle = 55;

    if (actuator_angle == angle)
        return;

    actuator_moving = true;

    if (stop_anim == false) {
        var auxiliar = angle;

        circle_track0.attr("fill", "red");
        circle_track1.attr("fill", "red");
        circle_track2.attr("fill", "red");

        fabric.util.animate(
            {
                startValue: actuator_angle,
                endValue: angle,
                duration: 1000 * Math.abs(actuator_angle - angle) / actuator_velocity,
                easing: function (t, b, c, d) {
                    return c * t / d + b;
                },
                onChange: function (value) {
                    disk_actuator_inst.setAngle(value);
                    canvas.renderAll();
                },
                onComplete: function () {
                    if (track == 0)
                        circle_track0.attr("fill", "yellow");
                    else if (track == 1)
                        circle_track1.attr("fill", "yellow");
                    else
                        circle_track2.attr("fill", "yellow");

                    actuator_angle = auxiliar;
                    actuator_moving = false;
                    cur_track = track;
                },
                abort: function () {
                    return stop_anim;
                }
            });
    }
    else {
        actuator_moving = false;
    }
}

function about() {
    currentSection = Section.About;

    if (lang == Languages._ptBr)
        main_text.html(about_text_pt);
    else
        main_text.html(about_text_en);
}

function credits() {
    currentSection = Section.Credits;

    if (lang == Languages._ptBr)
        main_text.html(credits_text_pt);
    else
        main_text.html(credits_text_en);
}

function setLangPt() {
    lang = Languages._ptBr;

    $("#title").html(title_pt);
    $("#title-text").html(title_pt);
    $("#begin-button").html(begin_pt);
    $("#hd-button").html(hd_pt);
    $("#llf-button").html(llf_pt);
    $("#skew-button").html(skew_pt);
    $("#interleaving-button").html(interleaving_pt);
    $("#hlf-button").html(hlf_pt);
    $("#about-button").html(about_pt);
    $("#credits-button").html(credits_pt);
    rpm_text.html("Velocidade do Disco (RPM): " + rpm);

    switch (currentSection) {
        case Section.About:
            hideAll();
            about();
            break;

        case Section.Credits:
            hideAll();
            credits();
            break;

        case Section.HD:
            disk_cover_img.src = 'images/others/disk_cover_pt.png';
            disk_platter_img.src = 'images/platters/platter_presentation_pt.png';
            actuator_text_img.src = 'images/text_buttons/actuator_text_pt.png';
            actuator_arm_text_img.src = 'images/text_buttons/actuator_arm_text_pt.png';
            track_text_img.src = 'images/text_buttons/track_text_pt.png';
            platter_text_img.src = 'images/text_buttons/platter_text_pt.png';
            break;

        default:
            break;
    }
}

function setLangEn() {
    lang = Languages._enUs;

    $("#title").html(title_en);
    $("#title-text").html(title_en);
    $("#begin-button").html(begin_en);
    $("#hd-button").html(hd_en);
    $("#llf-button").html(llf_en);
    $("#skew-button").html(skew_en);
    $("#interleaving-button").html(interleaving_en);
    $("#hlf-button").html(hlf_en);
    $("#about-button").html(about_en);
    $("#credits-button").html(credits_en);
    rpm_text.html("Disk Rotation Speed (RPM): " + rpm);

    switch (currentSection) {
        case Section.About:
            hideAll();
            about();
            break;

        case Section.Credits:
            hideAll();
            credits();
            break;

        case Section.HD:
            disk_cover_img.src = 'images/others/disk_cover_en.png';
            disk_platter_img.src = 'images/platters/platter_presentation_en.png';
            actuator_text_img.src = 'images/text_buttons/actuator_text_en.png';
            actuator_arm_text_img.src = 'images/text_buttons/actuator_arm_text_en.png';
            track_text_img.src = 'images/text_buttons/track_text_en.png';
            platter_text_img.src = 'images/text_buttons/platter_text_en.png';
            break;

        default:
            break;
    }
}

function hideAll() {
    $("#canvas").hide();
    $("#hlf").empty();
    canvas.clear();

    rpm_text.hide();
    rpm_slider.hide();
    skew_table.hide();
    inter_table.hide();
    main_text.html("");

    stop_anim = true;
}