/// -- HTML TEXT --- ///

var title_pt = "Formatação de Disco";
var title_en = "Disk Formatting";

var begin_pt = "Iniciar";
var begin_en = "Begin";

var hd_pt = "Disco Rígido";
var hd_en = "Hard Disk";

var llf_pt = "Formatação de Baixo Nível";
var llf_en = "Low Level Formatting";

var skew0_pt = "Cilindro sem Torção";
var skew0_en = "Unskewed Cylinder";

var skew1_pt = "Torção de Cilindro";
var skew1_en = "Skewed Cylinder";

var interleaving0_pt = "Sem Entrelaçamento";
var interleaving0_en = "No Interleaving";

var interleaving1_pt = "Com Entrelaçamento";
var interleaving1_en = "Interleaving";

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
    "<p></p><image src='images/screenshots/hard_disk_pt.PNG' class='screenshot'></image><p></p>" +
    "Figura 1 - Visão da aplicação dentro da seção \"Disco Rígido\".</p>" +
    "<p>O terceiro botão é o de \"Formatação de Baixo Nível\". Ele possui quatro seções associadas a ele.<br>" +
    "1 - Cilindro sem Torção: Nesta seção é possível observar como funciona a leitura de setores consecutivos do disco em um cilindro sem torção.<br>" +
    "2 - Torção de Cilindro: Nesta seção é possível observar como funciona a leitura de setores consecutivos do disco em um cilindro com torção de um setor.<br>" +
    "3 - Sem Entrelaçamento: Nesta seção é possível observar como acontece a leitura de setores consecutivos em uma trilha, organizados de forma consecutiva fisicamente, quando existe um tempo mínimo para transferir os dados lidos do HD para a memória principal.<br>" +
    "4 - Com Entrelaçamento: Nesta seção é possível observar como acontece a leitura de setores consecutivos em uma trilha, quando organizados de forma intercalada, e onde existe um tempo mínimo para transferir os dados lidos do HD para a memória principal.<br>" +
    "<p>O quarto botão é o de \"Formatação de Alto Nível\", cuja seção correspondente consiste de uma breve demonstração interativa de setores de boot sendo instalados num disco, juntamente com as respectivas entradas na tabela de particionamento da MBR.</p>" +
    "<p>O quinto botão entra na seção \"Sobre\", que possui um texto similar a este, explicando como a aplicação está organizada e o que se encontra em cada seção.</p>" +
    "<p>O último botão é o botão de \"Créditos\", no qual pode-se ver quais foram os alunos que desenvolveram a aplicação, e o professor orientador do desenvolvimento.</p>" +
    "<p>Por fim, no canto inferior do menu, estão localizadas as bandeiras de seleção de idiomas. Clicando na bandeira do Brasil, o idioma é alterado para português. Clicando na bandeira dos Estados Unidos, o idioma é alterado para inglês.</p>";
var about_text_en = "<p class=\"title\">About</p>" +
    "<p>This application was developed with ease of use in our minds. When first entering it, you can see a lateral menu, which contains all the available sections of the application, as well as the language selection flags.</p>" +
    "<p>The first button is \"Begin\", which will simply pass linearly through all sections of the application. Recommended for those who never used the application before, and want to experience everything it has to offer.</p>" +
    "<p>The second button is \"Hard Disk\". Here you can observe how a hard disk is internally organized, with its main components named. Figure X shows a screenshot with the state of the application after entering that section.<br>" +
    "<image src='images/screenshots/hard_disk_en.PNG' class='screenshot'></image><br>" +
    "Figure 1 - Application state inside \"Hard Disk\" section.</p>" +
    "<p>The third button is the \"Low Level Formatting\" button. It contains four inner sections.<br>" +
    "1 - Unskewed Cylinder: In this section it's possible to observe how the access to consecutive sectors works, in an unskewed cylinder disk.<br>" +
    "2 - Skewed Cylinder: In this section it's possible to observe how the access to consecutive sectors works, in a cylinder that is skewed by one sector.<br>" +
    "3 - No Interleaving: In this section it's possible to observe how the access to consecutive sectors in a single track works, which are organized consequentially on that track, when there is a minimal time to transfer the data from the Hard Disk to the principal memory.<br>" +
    "4 - Interleaving: In this section it's possible to observe how the access to consecutive sectors in a single track works, which are organized alternatedly on that track, when there is a minimal time to transfer the data from the Hard Disk to the principal memory.<br>" +
    "<p>The fourth button is the \"High Level Formatting\" button, which section is composed of a brief interactive demonstration of boot sectors being laid out on a disk, along with the entries on the MBR's partition table.</p>" +
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

var skew_state_pt = "Estado";
var skew_state_en = "State";
var skew_track_pt = "Trilha";
var skew_track_en = "Track";
var skew_track0_pt = "Trilha azul";
var skew_track0_en = "Blue track";
var skew_track1_pt = "Trilha vermelha";
var skew_track1_en = "Red track";
var skew_track2_pt = "Trilha verde";
var skew_track2_en = "Green track";

var skew_subtitle_state_pt = "Cor";
var skew_subtitle_state_en = "Color";
var skew_subtitle_track_pt = "Estado";
var skew_subtitle_track_en = "State";
var skew_subtitle_track0_pt = "Esperando outras trilhas";
var skew_subtitle_track0_en = "Waiting for other tracks";
var skew_subtitle_track1_pt = "Esperando começo da trilha";
var skew_subtitle_track1_en = "Waiting for track begining";
var skew_subtitle_track2_pt = "Lendo trilha";
var skew_subtitle_track2_en = "Reading track";
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
    LLFsk0: 11,
    LLFsk1: 12,
    LLFil0: 13,
    LLFil1: 14,
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
var nav_rpm = [8, 12, 16];
var nav_rpm_cur = 0;

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
var platter_text_img = false;

var content;
var main_text;
var skew_table;
var skew_table_subtitle;
var circle_track0;
var circle_track1;
var circle_track2;
var inter_table;
var buffer;

var stop_skew = false;
var stop_inter = false;
var stop_actuator = false;

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
    };
    disk_cover_img.src = 'images/others/disk_cover_pt.png';

    disk_platter_img = new Image();
    disk_platter_img.onload = function () {
        disk_platter_inst.setElement(disk_platter_img);
    };
    disk_platter_img.src = 'images/platters/disk_platter.png';

    actuator_text_img = new Image();
    actuator_text_img.onload = function () {
        actuator_text_inst.setElement(actuator_text_img);
    };
    actuator_text_img.src = 'images/text_buttons/actuator_text_pt.png';

    actuator_arm_text_img = new Image();
    actuator_arm_text_img.onload = function () {
        actuator_arm_text_inst.setElement(actuator_arm_text_img);
    };
    actuator_arm_text_img.src = 'images/text_buttons/actuator_arm_text_pt.png';

    track_text_img = new Image();
    track_text_img.onload = function () {
        track_text_inst.setElement(track_text_img);
    };
    track_text_img.src = 'images/text_buttons/track_text_pt.png';

    platter_text_img = new Image();
    platter_text_img.onload = function () {
        platter_text_inst.setElement(platter_text_img);
    };
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
    skew_table_subtitle = $("#skew-table-subtitle");
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

                circle_track0.attr("fill", "green");
                circle_track1.attr("fill", "red");
                circle_track2.attr("fill", "red");
                changeRpmText(ui.value);
                rpm = 0;
                cur_track = 0;
                disk_actuator_inst.setAngle(actuator_angles[0]);
                stop_skew = true;
                stop_inter = true;
                stop_actuator = true;
            },
            stop: function (event, ui) {
                if (rpm == ui.value)
                    return;
                rpm = ui.value;
                switch (currentSection) {
                    case Section.HD:
                        stop_skew = false;
                        stop_actuator = false;
                        disk_actuator_inst.setAngle(actuator_angles[0]);
                        cur_track = 0;
                        skew = 0;
                        platterAnimateSkew(rpm);
                        break;

                    case Section.LLFsk0:
                        stop_skew = false;
                        stop_actuator = false;
                        disk_actuator_inst.setAngle(actuator_angles[0]);
                        cur_track = 0;
                        skew = 0;
                        platterAnimateSkew(rpm);
                        break;

                    case Section.LLFsk1:
                        stop_skew = false;
                        stop_actuator = false;
                        disk_actuator_inst.setAngle(actuator_angles[0]);
                        cur_track = 0;
                        skew = 1;
                        platterAnimateSkew(rpm);
                        break;

                    case Section.LLFil0:
                        stop_inter = false;
                        disk_actuator_inst.setAngle(actuator_angles[1]);
                        cur_track = 1;
                        platterAnimateInter(rpm,
                                            2,
                                            0,
                                            uninter_local,
                                            uninter_size,
                                            uninter_color_r,
                                            uninter_color_g,
                                            uninter_color_b);
                        break;

                    case Section.LLFil1:
                        stop_inter = false;
                        disk_actuator_inst.setAngle(actuator_angles[1]);
                        cur_track = 1;
                        platterAnimateInter(rpm,
                                            1,
                                            0,
                                            inter1_local,
                                            inter1_size,
                                            inter1_color_r,
                                            inter1_color_g,
                                            inter1_color_b);
                        break;

                    default:
                        break;
                }
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

function changeRpmText(cur_rpm) {

    if (lang == Languages._enUs)
        rpm_text.html("Disk Rotation Speed (RPM): " + cur_rpm);
    else
        rpm_text.html("Velocidade do Disco (RPM): " + cur_rpm);
}

function beginPresentation() {
    presentation_mode = true;
    hideAll();
    document.getElementById("previous-button").src = "images/navigation/nav_arrow_left.png";
    document.getElementById("next-button").src = 'images/navigation/nav_arrow_right_grey.png';
    $("#previous-button").show();
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
            document.getElementById("previous-button").src = "images/navigation/nav_arrow_left_grey.png";
            lowLevelFormatting(Section.LLFsk0);
            break;

        case Section.LLFsk0:
            hideAll();
            lowLevelFormatting(Section.LLFsk1);
            break;

        case Section.LLFsk1:
            hideAll();
            lowLevelFormatting(Section.LLFil0);
            break;

        case Section.LLFil0:
            hideAll();
            lowLevelFormatting(Section.LLFil1);
            break;

        case Section.LLFil1:
            hideAll();
            highLevelFormatting();
            break;

        case Section.HLF:
            hideAll();
            about();
            break;

        case Section.About:
            hideAll();
            document.getElementById("next-button").src = "images/navigation/nav_arrow_right.png";
            credits();
            break;

        default:
            break;
    }

}

function navPrev() {
    switch (currentSection) {
        case Section.LLFsk0:
            hideAll();
            document.getElementById("previous-button").src = "images/navigation/nav_arrow_left.png";
            hardDisk();
            break;

        case Section.LLFsk1:
            hideAll();
            lowLevelFormatting(Section.LLFsk0);
            break;

        case Section.LLFil0:
            hideAll();
            lowLevelFormatting(Section.LLFsk1);
            break;

        case Section.LLFil1:
            hideAll();
            lowLevelFormatting(Section.LLFil0);
            break;

        case Section.HLF:
            hideAll();
            lowLevelFormatting(Section.LLFil1);
            break;

        case Section.About:
            hideAll();
            highLevelFormatting();
            break;

        case Section.Credits:
            hideAll();
            document.getElementById("next-button").src = "images/navigation/nav_arrow_right_grey.png";
            about();
            break;

        default:
            break;
    }
}

function hardDisk() {
    stop_skew = false;
    stop_inter = true;
    stop_actuator = false;
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

	nav_rpm_cur = (nav_rpm_cur + 1)%nav_rpm.length;
    rpm = nav_rpm[nav_rpm_cur];
    rpm_slider.slider("value", rpm);
    changeRpmText(rpm);
    disk_actuator_inst.setAngle(actuator_angles[0]);
    cur_track = 0;
    skew = 0;
    platterAnimateSkew(rpm);

    $("#canvas").show();
    rpm_text.show();
    rpm_slider.show();
}

function lowLevelFormatting(section) {
    stop_skew = true;
    stop_inter = true;
    stop_actuator = true;

	circle_track0.attr("fill", "green");
	circle_track1.attr("fill", "red");
	circle_track2.attr("fill", "red");

    switch (section) {
        case Section.LLFsk0:
            currentSection = Section.LLFsk0;
            disk_platter_img.src = 'images/platters/unskewed_platter.png';
            rpm_text.show();
            rpm_slider.show();
            skew_table.show();
			$("#skew-subtitle").show();
			skew_table_subtitle.show();

            stop_skew = false;
            stop_actuator = false;
			nav_rpm_cur = (nav_rpm_cur + 1)%nav_rpm.length;
			rpm = nav_rpm[nav_rpm_cur];
			rpm_slider.slider("value", rpm);
			changeRpmText(rpm);
            disk_actuator_inst.setAngle(actuator_angles[0]);
            cur_track = 0;
            skew = 0;
            platterAnimateSkew(rpm);
            break;

        case Section.LLFsk1:
            currentSection = Section.LLFsk1;
            disk_platter_img.src = 'images/platters/skewed_platter.png';
            rpm_text.show();
            rpm_slider.show();
            skew_table.show();
			$("#skew-subtitle").show();
			skew_table_subtitle.show();

            stop_skew = false;
            stop_actuator = false;
			nav_rpm_cur = (nav_rpm_cur + 1)%nav_rpm.length;
			rpm = nav_rpm[nav_rpm_cur];
			rpm_slider.slider("value", rpm);
			changeRpmText(rpm);
            disk_actuator_inst.setAngle(actuator_angles[0]);
            cur_track = 0;
            skew = 1;
            platterAnimateSkew(rpm);
            break;

        case Section.LLFil0:
            currentSection = Section.LLFil0;
            disk_platter_img.src = 'images/platters/uninterleaved_platter.png';
            rpm_text.show();
            rpm_slider.show();
            inter_table.show();

            stop_inter = false;
			nav_rpm_cur = (nav_rpm_cur + 1)%nav_rpm.length;
			rpm = nav_rpm[nav_rpm_cur];
			rpm_slider.slider("value", rpm);
			changeRpmText(rpm);
            disk_actuator_inst.setAngle(actuator_angles[1]);
            cur_track = 1;
            sect_count = 0;
            platterAnimateInter(rpm,
                                2,
                                0,
                                uninter_local,
                                uninter_size,
                                uninter_color_r,
                                uninter_color_g,
                                uninter_color_b);
            break;

        case Section.LLFil1:
            currentSection = Section.LLFil1;
            disk_platter_img.src = 'images/platters/interleaved_platter.png';
            rpm_text.show();
            rpm_slider.show();
            inter_table.show();

            stop_inter = false;
			nav_rpm_cur = (nav_rpm_cur + 1)%nav_rpm.length;
			rpm = nav_rpm[nav_rpm_cur];
			rpm_slider.slider("value", rpm);
			changeRpmText(rpm);
            disk_actuator_inst.setAngle(actuator_angles[1]);
            cur_track = 1;
            sect_count = 0;
            platterAnimateInter(rpm, 1, 0, inter1_local, inter1_size, inter1_color_r, inter1_color_g, inter1_color_b);
            break;

        default:
            break;
    }

    canvas.insertAt(disk_case_inst, 0, true);
    canvas.insertAt(disk_platter_inst, 1, true);
    canvas.insertAt(disk_actuator_inst, 2, true);

    $("#canvas").show();
}

function highLevelFormatting() {
    stop_skew = true;
    stop_inter = true;
    currentSection = Section.HLF;

    // Definition
    var $platter = $("<img id='num_platter_base' src='images/platters/disk_platter_numbered.png'/>");
    var $pa = new Array();
    $pa[0] = $("<img class='p_bits' src='images/platters/disk_platter_step_0.png'/>");
    $pa[1] = $("<img class='p_bits' src='images/platters/disk_platter_step_1.png'/>");
    $pa[2] = $("<img class='p_bits' src='images/platters/disk_platter_step_2.png'/>");
    $pa[3] = $("<img class='p_bits' src='images/platters/disk_platter_step_3.png'/>");
    $pa[4] = $("<img class='p_bits' src='images/platters/disk_platter_step_4.png'/>");

    var $ptable = $("<table id='p_table'></table>");
    var $pt = new Array();
    $pt[0] = $("<tr><th colspan='4'><p data-i18n='ptable_head'></p></th></tr>" +
               "<tr><th><p data-i18n='ptable_col1'></p></th>" +
			   "<th><p data-i18n='ptable_col2'></p></th>" +
			   "<th><p data-i18n='ptable_col3'></p></th>" +
			   "<th><p data-i18n='ptable_col4'></p></th></tr>");
    $pt[1] = $("<tr><td>1</td><td>6</td><td>1</td><td>ext4</td></tr>");
    $pt[2] = $("<tr><td>7</td><td>7</td><td>0</td><td>FAT-32</td></tr>");
    $pt[3] = $("<tr><td>14</td><td>6</td><td>0</td><td>ReiserFS</td></tr>");
    $pt[4] = $("<tr><td>20</td><td>4</td><td>0</td><td>NTFS</td></tr>");

    var $navl = $("<div class='p_action_button' id='p_navl'><p><</p></div>");
    var $navr = $("<div class='p_action_button' id='p_navr'><p>></p></div>");
    var $blast = $("<div class='p_action_button' id='p_blast'><p>Discard</p></div>");

    // Injection
    $platter.fadeIn("fast").appendTo("#hlf");
    $pa[0].hide().appendTo("#hlf").delay(100).fadeIn("fast");
    $pa[1].hide().appendTo("#hlf").delay(200).fadeIn("fast");
    $pa[2].hide().appendTo("#hlf").delay(300).fadeIn("fast");
    $pa[3].hide().appendTo("#hlf").delay(400).fadeIn("fast");
    $pa[4].hide().appendTo("#hlf").delay(500).fadeIn("fast");

    $ptable.appendTo("#hlf").delay(600).animate({top: "-=1420px"}, 300);
    $pt[0].appendTo("#p_table");
    $pt[1].appendTo("#p_table");
    $pt[2].appendTo("#p_table");
    $pt[3].appendTo("#p_table");
    $pt[4].appendTo("#p_table");

    $navl.appendTo("#hlf").delay(750).animate({top: "-=1110"}, 300);
    $navr.appendTo("#hlf").delay(750).animate({top: "-=1110"}, 300);
    $blast.appendTo("#hlf").delay(700).animate({top: "-=1110"}, 300);

    // Behaviour
    var step = 5;

    $blast.click(function () {
        if (step > 0) {

            if (step > 4) step = 4;

            for (step; step > 0; step--) {
                $pt[step].delay(100 * (5 - step)).fadeOut("slow");
                $pa[step].delay(100 * (5 - step)).fadeOut("slow");
            }
            $pa[step].delay(100 * (5 - step)).fadeOut("slow");

            $navl.css({"opacity": "0.25", "cursor": "default"});
            $navr.css({"opacity": "1.00", "cursor": "pointer"});
            $blast.css({"opacity": "0.25", "cursor": "default"});
        }
    });

    $navr.click(function () {
        if (step < 5) {

            if (step === 0) {
                $navl.css({"opacity": "1.00", "cursor": "pointer"});
                $blast.css({"opacity": "1.00", "cursor": "pointer"});
            }

            $pa[step].hide().appendTo("#hlf").delay(100).fadeIn("fast");

            if (step > 0)
                $pt[step].hide().appendTo("#p_table").delay(100).fadeIn("fast");
            step++;

            if (step === 5)
                $navr.css({"opacity": "0.25", "cursor": "default"});
        }
    });

    $navl.click(function () {
        if (step > 0) {

            if (step === 5)
                $navr.css({"opacity": "1.00", "cursor": "pointer"});

            $pa[step - 1].fadeOut("fast");

            if ((step - 1) > 0)
                $pt[step - 1].fadeOut("fast");
            step--;

            if (step === 0) {
                $navl.css({"opacity": "0.25", "cursor": "default"});
                $blast.css({"opacity": "0.25", "cursor": "default"});
            }
        }
    });

	i18n_refresh();
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
    next_track = cur_track;
    if (stop_skew == false || rpm > 0) {
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
                    return (animation_rpm != rpm || stop_skew);
                }
            });
    }
}

var inter1_color_r = [0, 0, 0, 0, 71, 50, 26, 11];
var inter1_color_g = [150, 113, 64, 25, 207, 151, 79, 29];
var inter1_color_b = [246, 183, 105, 42, 0, 0, 0, 0];
var inter1_local = [0, 2, 4, 6, 1, 3, 5, 7];
var inter1_size = 8;


var uninter_color_r = [0, 0, 0, 0, 0, 0, 0, 0];
var uninter_color_g = [150, 134, 115, 91, 68, 43, 23, 5];
var uninter_color_b = [245, 220, 184, 150, 107, 69, 36, 9];
var uninter_local = [0, 1, 2, 3, 4, 5, 6, 7];
var uninter_size = 8;

var sect_count = 0;
var writing = false;

function platterAnimateInter(animation_rpm,
                             write_time,
                             write_count,
                             sect_local,
                             sect_size,
                             sect_color_r,
                             sect_color_g,
                             sect_color_b) {
    var prev_angle = 0;
    var cur_angle = 0;
    var counter = 1;

    if (stop_inter == false || rpm > 0) {
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
                    var target_angle = counter * 45;

                    if (cur_angle >= target_angle
                        && target_angle > prev_angle) {
                        console.log(counter);
                        counter++;
                        console.log(writing);
                        if (writing == true)
                            write_count++;
                    }

                    if (write_count == write_time) {
                        write_count = 0;
                        writing = false;
                    }


                    target_angle = (sect_local[sect_count] + 1) * 45;

                    if (cur_angle >= target_angle
                        && target_angle > prev_angle
                        && writing == false) {
                        var rgb = "rgb(" + sect_color_r[sect_count] + ", " + sect_color_g[sect_count] + ", " + sect_color_b[sect_count] + ")";
                        buffer.attr("fill", rgb);
                        if (sect_count == sect_size - 1)
                            write_count--;
                        sect_count = (sect_count + 1) % sect_size;
                        writing = true;
                    }

                    disk_platter_inst.setAngle(angle + initial_angle[1]);
                    canvas.renderAll();
                },
                onComplete: function () {
                    if (animation_rpm == rpm) {
                        platterAnimateInter(animation_rpm,
                                            write_time,
                                            write_count,
                                            sect_local,
                                            sect_size,
                                            sect_color_r,
                                            sect_color_g,
                                            sect_color_b);
                    }
                },

                abort: function () {
                    return (animation_rpm != rpm || stop_inter);
                }
            });
    }
}
var actuator_velocity = 40;
var actuator_angles = [30, 40, 55];
var actuator_moving = false;

function actuatorAnimateTo(track) {
    if (actuator_moving == true)
        return;

    if (cur_track == track)
        return;


    if (stop_actuator == false) {
        actuator_moving = true;

        circle_track0.attr("fill", "red");
        circle_track1.attr("fill", "red");
        circle_track2.attr("fill", "red");

        fabric.util.animate(
            {
                startValue: actuator_angles[cur_track],
                endValue: actuator_angles[track],
                duration: 1000 * Math.abs(actuator_angles[cur_track] - actuator_angles[track]) / actuator_velocity,
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

                    actuator_moving = false;
                    cur_track = track;
                },
                abort: function () {
                    return stop_actuator;
                }
            });
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

    $container = $("<div></div>");
    $members = $("<table>" +
                 "<tr>" +
                 "<td><img class='crew' src='images/crew/ceccon.jpg'/></td>" +
                 "<td><img class='crew' src='images/crew/moura.jpg'/></td>" +
                 "<td><img class='crew' src='images/crew/nelsen.jpg'/></td>" +
                 "<td><img class='crew' src='images/crew/zanardo.jpg'/></td>" +
                 "</tr>" +
                 "<tr>" +
                 "<td><a href='https://github.com/gfceccon'>Gustavo Ceccon</a></td>" +
                 "<td><a href='https://github.com/lucas-skilo'>Lucas Moura</a></td>" +
                 "<td><a href='https://github.com/dnery'>Danilo Nery</a></td>" +
                 "<td><a href='https://github.com/zanardob'>Guilherme Zanardo</td>" +
                 "</tr>" +
                 "</table>");

    $members.appendTo($container);
    $container.appendTo("#abt");

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
    $("#0skew-button").html(skew0_pt);
    $("#1skew-button").html(skew1_pt);
    $("#0interleaving-button").html(interleaving0_pt);
    $("#1interleaving-button").html(interleaving1_pt);
    $("#hlf-button").html(hlf_pt);
    $("#about-button").html(about_pt);
    $("#credits-button").html(credits_pt);
	
    $("#th-state").html(skew_state_pt);
    $("#th-track").html(skew_track_pt);
    $("#td-track0").html(skew_track0_pt);
    $("#td-track1").html(skew_track1_pt);
    $("#td-track1").html(skew_track2_pt);
	
	$("#skew-subtitle").html("Legenda");
    $("#th-state-subtitle").html(skew_subtitle_state_pt);
    $("#th-track-subtitle").html(skew_subtitle_track_pt);
    $("#td-track0-subtitle").html(skew_subtitle_track0_pt);
    $("#td-track1-subtitle").html(skew_subtitle_track1_pt);
    $("#td-track1-subtitle").html(skew_subtitle_track2_pt);
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

	i18n_change("pt");
}

function setLangEn() {
    lang = Languages._enUs;

    $("#title").html(title_en);
    $("#title-text").html(title_en);
    $("#begin-button").html(begin_en);
    $("#hd-button").html(hd_en);
    $("#llf-button").html(llf_en);
    $("#0skew-button").html(skew0_en);
    $("#1skew-button").html(skew1_en);
    $("#0interleaving-button").html(interleaving0_en);
    $("#1interleaving-button").html(interleaving1_en);
    $("#hlf-button").html(hlf_en);
    $("#about-button").html(about_en);
    $("#credits-button").html(credits_en);
	
    $("#th-state-subtitle").html(skew_subtitle_state_en);
    $("#th-track-subtitle").html(skew_subtitle_track_en);
    $("#td-track0-subtitle").html(skew_subtitle_track0_en);
    $("#td-track1-subtitle").html(skew_subtitle_track1_en);
    $("#td-track1-subtitle").html(skew_subtitle_track2_en);
	
	$("#skew-subtitle").html("Subtitle");
    $("#th-state").html(skew_state_en);
    $("#th-track").html(skew_track_en);
    $("#td-track0").html(skew_track0_en);
    $("#td-track1").html(skew_track1_en);
    $("#td-track1").html(skew_track2_en);
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

	i18n_change("en");
}

function hideAll() {

    $("#canvas").hide();
    $("#hlf").empty();
    $("#abt").empty();
    canvas.clear();

    rpm_text.hide();
    rpm_slider.hide();
    skew_table.hide();
	$("#skew-subtitle").hide();
	skew_table_subtitle.hide();
    inter_table.hide();
    main_text.html("");

    stop_skew = true;
    stop_inter = true;
    stop_actuator = true;
}

function i18n_refresh() {

	$("[data-i18n]").each(function () {
		var prop = $(this).data('i18n');
		$(this).text($.i18n.prop(prop))
	});
}

function i18n_change(lang) {

	$.i18n.properties({
		path    : 'text/',
		mode    : 'both',
		language: lang,
		callback: i18n_refresh
	});
}

$(document).ready(function() {

	i18n_change("pt");
});
