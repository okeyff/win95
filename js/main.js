document.querySelector('.taskbar-tasks_btn').onclick = function () {
    document.querySelector('.taskbar-tasks').classList.toggle('taskbar-tasks-active');
}

document.querySelector('.open-startup-menu').onclick = function () {
    let startMenu = document.querySelector('.startup-menu');
    if (startMenu.style.display === 'flex') {
        startMenu.style.display = 'none';
    } else {
        startMenu.style.display = 'flex';
    }
}

function showSubMenu() {
    let subMenu = document.querySelector('.startup-sub-menu');
    subMenu.style.display = 'block';
}

function hideSubMenu() {
    let subMenu = document.querySelector('.startup-sub-menu');
    subMenu.style.display = 'none';
}

// document.querySelector('.desktop-icons_item').ondblclick = function () {
//     let folderName = document.querySelector;
//     let windowFolderName = document.querySelector;
//     if (windowFolderName === 'folderName') {
//         return;
//     } else {
//         folderName = document.querySelector('.desktop-icon__text');
//         windowFolderName = document.querySelector('.window-title_text').innerHTML += 'folderName ';
//     }
// }

document.getElementById('control-panel').onclick = function () {
    document.querySelector('.control-panel').style.display = 'block';
}

document.querySelector('.window-close-btn').onclick = function () {
    document.querySelector('.window').style.display = 'none';
}



// document.querySelector('.desktop-icons_item').onclick = function() {
//     document.querySelector('.desktop-icon__text').style.backgroundColor = 'navy';
// }

// var btn = document.querySelector('.desktop-icons_item');
// btn.addEventListener('click', foo);

// function foo() {
//     document.querySelector('.desktop-icon__text').style.backgroundColor = 'navy';
// }