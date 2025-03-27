// method="POST"


function loginUser(event) { 
    console.log("test");
    event.preventDefault();  
   
    const Usernameisakt = "loja";
    const Passwordisakt = "memorygame";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    
    if (username === Usernameisakt && password === Passwordisakt) {
        document.getElementById("login").style.display = "none";
        document.getElementById("sectionelojes").style.display = "block";
    } else {
    
        document.getElementById("error-message").style.display = "block";
    }
  }
