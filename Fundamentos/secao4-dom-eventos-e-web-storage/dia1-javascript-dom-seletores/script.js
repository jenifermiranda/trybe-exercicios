const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = '#ff9f84';

const noEmergencyTasks = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTasks.style.backgroundColor = 'rgb(251,187,111)';

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';

const emergencyTasksTitle = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksTitle.length; index += 1){
    emergencyTasksTitle[index].style.backgroundColor = '#a500f3';
}

const noEmergencyTasksTitle = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksTitle.length; index += 1){
    noEmergencyTasksTitle[index].style.backgroundColor = '#232525'
}