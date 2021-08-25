let namstebtn = document.querySelector('button');
namstebtn.addEventListener('click', showMsg);

function showMsg() {
    let name = prompt("Enter the name of the student");
    namstebtn.textContent = 'Roll no.1 : ' + name;
}