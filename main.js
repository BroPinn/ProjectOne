function ChangePage_Home() {
    window.location.assign('/HTML/index.html');
}
function Register_Page() {
    window.location.assign('/HTML/register.html');
}
function ChangePage_Laptop() {
    window.location.assign('/HTML/Laptop.html');
}
function ChangePage_Desktop() {
    window.location.assign('/HTML/Desktop.html');
}
function ChangePage_Gaming() {
    window.location.assign('/HTML/Gaming.html');
}
function ChangePage_PERIPHERAL() {
    window.location.assign('/HTML/Laptop.html');
}
function ChangePage_PC_BUILDER() {
    window.location.assign('/HTML/PcBuilder.html');
}

const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.addEventListener('click', () => {
    // Toggle the dropdown menu
    dropdownMenuButton.classList.toggle('show');
});


var counter = 0;
document.getElementById('btn1').addEventListener('click', () => {
    counter += 1;
    document.getElementById('shoptxt').innerText = counter;
});

document.getElementById('btn2').addEventListener('click', () => {
    if (counter <= 0) {
        counter = 0;
    }
    else {
        counter -= 1;
    }
    document.getElementById('shoptxt').innerText = counter;
});


function SearchItem() {
    var Search1 = document.getElementById('search').value.toUpperCase();
    const allProducts = document.getElementsByClassName('card');
    const allName = document.getElementsByClassName('card-title');
    for (var i = 0; i < allProducts.length; i++) {
        if (allName[i].innerHTML.toUpperCase().indexOf(Search1) > -1) {
            allProducts[i].style.display = "";

        }
        else {
            allProducts[i].style.display = "none";

        }
    }
}
