var popupWindow = document.getElementById("popup-window");
var closeButton = document.getElementById("popup-cancelButton");
var blurScreen = document.getElementById("blur-screen");

// Register PopupWindow
var popupRegisterwindow = document.getElementById("popup-registerwindow");
var closeButtonRegister = document.getElementById("popup-cancelButton-register");
var emailInput = document.getElementById('email');

function login() {
    popupWindow.style.display = "flex";
    blurScreen.classList.add('show');
    blurScreen.style.display = 'block';  
}

closeButton.addEventListener("click", function() {
    popupWindow.style.display = "none";
    blurScreen.style.display = 'none';
});


function register() {
    var errorMessage = "";
    if (!emailInput.value) {
        if (document.location.pathname === "/landingPageEnglish.html") {
            errorMessage += "Please enter a email before.\n";
        } else {
            errorMessage += "El correo no puede estar vacio.\n";
        }
        errorEmail(errorMessage);
    } else {
        popupRegisterwindow.style.display = "flex";
        blurScreen.classList.add('show');
        blurScreen.style.display = 'block';
    }
}

closeButtonRegister.addEventListener('click', function() {
    popupRegisterwindow.style.display = "none";
    blurScreen.style.display = 'none';
});
