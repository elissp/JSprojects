// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Nav and PopUp    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//Burger Nav
const burgerNav = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}
burgerNav();



//Pop-up Login 
const activateLogin = () => {
    const loginBtn = document.querySelector('.login');
    const popup = document.querySelector('.pop-up');
    const closeBtn = document.querySelector('.close-pop-up');

    loginBtn.addEventListener('click', () => {
        popup.classList.add('pop-up-active');
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('pop-up-active');

    });
}
activateLogin();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Validate login Form ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//  const loginBtn = document.querySelector('#submit-login');
 const popupForm = document.getElementById('pop-up-form');

 popupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userName = document.getElementById('fusername').value;
    const passWord = document.getElementById('fpassword').value;
    if(userName !== 'giannis') {
        if(passWord !== 'chioytakos') {
            alert("Wrong Username and Password");
            return false;
        } else {alert("Wrong Username")}
        return false; 
    } else if(passWord !== 'chioutakos') {
        alert("wrong Password");
        return false;
    } else {
        window.open("student.html","_self");
    }
})

// Click on the Input:checkbox and convert password to text
function showPass() {
    const passType = document.getElementById('fpassword')
    if(passType.type === "password") {
        passType.type = "text";
    } else {
        passType.type = "password";
    }
}


//Redirect BY Pressing ENTER only when the form fields are completed
popupForm.addEventListener('keypress', (e) => {
    const userName = document.getElementById('fusername').value;
    const passWord = document.getElementById('fpassword').value;
    if(userName !== 'giannis' && passWord !== 'chioutakos') {
        if(e.key === 'Enter') {
            e.preventDefault();
        }
    }
   
})
    

