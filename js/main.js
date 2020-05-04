document.querySelector('.taskbar-tasks_btn').onclick = function () {
    document.querySelector('.taskbar-tasks').classList.toggle('taskbar-tasks-active');
}

document.querySelector('.open-startup-menu').onclick = function () {
    let startMenu = document.querySelector('.startup-menu');
    if (startMenu.style.display === "flex") {
        startMenu.style.display = "none";
    } else {
        startMenu.style.display = "flex";
    }
}
