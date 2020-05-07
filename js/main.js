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

// document.querySelector('.desktop-icons_item').onclick = function () {
//     document.querySelector('.desktop-icon__text').style.backgroundColor = 'navy';
// }

