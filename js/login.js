const loginform = document.getElementById('login-form');
loginform.addEventListener('submit', (e)=> {
  e.preventDefault() /* Prevenimos que el formulario se envie para verificarlo */

  var errorMessage1 = ""; /* Se inicializa la variable de error */
  var valid = true; /* Se inicializa el booleano para la condición que si hay algún dato vacio imprime error
                       Si no hay errores busca el correo y la contraseña con JSON */

  const email = document.getElementById('input-Email').value

  if (!email) {
    valid = false;
    if (document.location.pathname === "/landingPageEnglish.html") {
      errorMessage1 += "Email cannot be empty.\n";
    } else {
      errorMessage1 += "El correo no puede estar vacio.\n";
    }
  }

  const password = document.getElementById('input-Userpass').value

  if (!password) {
    valid = false;
    if (document.location.pathname === "/landingPageEnglish.html") {
      errorMessage1 += "Password cannot be empty.";
    } else {
      errorMessage1 += "La contraseña no puede estar vacia.";
    }    
  }

  /* A este punto ya se inicializo la variable de error
     Se verifica que si hay algún dato vacio para así poder continuar o no */

  if (valid) {
    const Users = JSON.parse(localStorage.getItem('users'))
    const validUser = Users.find(user => user.email === email && user.password === password); /* Buscamos datos con JSON, si no encontramos coincidencias imprime error */
  
    var invalidMessage = ""; /* Inicializamos el mensaje de que no se encuentra el usuario y la contraseña */
  
    if (!validUser) {
      if (document.location.pathname === "/landingPageEnglish.html") {
        invalidMessage += "Password or email is wrong";
      } else {
        invalidMessage += "La contraseña y/o el correo son incorrectos";
      }      
      errorFinding(invalidMessage); /* Llamamos un toast de que no se encuentra el usuario y la contraseña*/
    }
    var successMessage = "";

    if (document.location.pathname === "/landingPageEnglish.html") {
      successMessage += "Welcome " + validUser.name;
    } else {
      successMessage += "Bienvenido " + validUser.name;
    }

    succesLogin(successMessage) /* Imprime un mensaje de bienvenida y con un temporizador te redirecciona a la página principal */
    setTimeout(function(){
      window.location.href = 'index.html';
    }, 3000);    

    var sesionActual = {name: validUser.name, password: password, email: email}; /* Guarda la contraseña, usuario y correo en sessionStorage para luego ser validada en la página principal */
    sessionStorage.setItem('currentSesson', JSON.stringify(sesionActual));
  } else {

    loginError(errorMessage1);   /* Si hay algún dato vacio imprime error con un toast*/
  }
})