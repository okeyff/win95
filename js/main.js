//Open Start Menu
document.querySelector('.open-startup-menu').onclick = function () {
    let startMenu = document.querySelector('.startup-menu');
    if (startMenu.style.display === 'flex') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'flex';
    }
}

//Show Sub Menu 
function showSubMenu() {
    let subMenu = document.querySelector('.startup-sub-menu');
    subMenu.style.display = 'block';
}

//Hide Sub Menu
function hideSubMenu() {
    let subMenu = document.querySelector('.startup-sub-menu');
    subMenu.style.display = 'none';
}


//Active/Non-Active Window Tasks
document.querySelector('.taskbar-tasks_btn').onclick = function () {
    document.querySelector('.taskbar-tasks').classList.toggle('taskbar-tasks-active');
}

//Open Control Panel
document.getElementById('control-panel').onclick = function () {
    document.querySelector('.control-panel').style.display = 'block';
}

//Close Window
document.querySelector('.window-close-btn').onclick = function () {
    document.querySelector('.window').style.display = 'none';
}

//Draggable Window (p.s: spizjeno)
dragElement(document.querySelector((".window")));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.querySelector('.window-title')) {

        /* if present, the header is where you move the DIV from:*/
        document.querySelector('.window-title').onmousedown = dragMouseDown;
    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

