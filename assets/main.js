//Declarations
const fullName = document.getElementById("fullname_");
const email = document.getElementById("email_");
const number = document.getElementById("number_");
const loginForm = document.getElementById("loginForm");
const password = document.getElementById("password_")
//Submit function
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
     const userinput = {
        fullName: fullName.value,
        email: email.value,
        number: number.value,
        password: password.value,
        uniqueId: Math.round(Math.random() * 1000)
    
    }
   
    //Saving records into LocalStorage with JSON
    const users = [];
    const records = JSON.parse(localStorage.getItem('users')); 
    let duplicateStatus = false;
    if (records == null) {
        users.push(userinput)
        localStorage.setItem('users', JSON.stringify(users))

    } else {
        for (var i = 0; i < records.length; i++){
            if (records[i].email == userinput.email) {
                duplicateStatus = true
            }
        }
        if (duplicateStatus == true) {
            swal("oops!", "User with this email already exists!", "info",)
            return;
        } else {
            records.push(userinput)
            localStorage.setItem('users', JSON.stringify(records))
        }
        
    }

    // swal("Done", "Registration Succesful!", "success");
    swal({
        title: 'Done',
        text: 'Registration Succesful',
        icon: 'success',
        timer : 3000,
    }).then(() => {
        location.href = ('registered.html');
})

    // location.href = ('registered.html');

    fullName.value = "";
    email.value = "";
    number.value = "";
    password.value = "";
    uniqueId.value = "";
    
})




function showpassword(){
    var a = document.getElementById('password_');
    if (a.type === "password") {
        a.type = "text";
        
    } else {
        a.type = "password";
    }
}

