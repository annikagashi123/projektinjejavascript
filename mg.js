let kartatZgjedhura = [];
let idKartaveZgjedhura = [];
let kartatEBarazuara = [];
let levizje = 0;


function login() {
    let emriPërdoruesit = document.getElementById("username").value;
    let fjalëkalimi = document.getElementById("password").value;
    let mesazhGabimi = document.getElementById("error-message");

    if (emriPërdoruesit === "anika" && fjalëkalimi === "anika") {
        document.querySelector(".mrena").style.display = "none";
        document.querySelector(".mrena2").style.display = "block";  
        krijoBordin(); 
    } else {
        mesazhGabimi.textContent = "Username ose Password i gabuar!";  
        mesazhGabimi.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".mrena2").style.display = "none";  
}); 
const kartatArray = [
    "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG",
    "portokall.PNG",  "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG",
    "portokall.PNG"
];


document.getElementById("reset").addEventListener("click", krijoBordin); 

function krijoBordin() {
    const bordi = document.querySelector(".fund");
    bordi.innerHTML = "";  

    levizje = 0;  
    document.getElementById("Levizje").textContent = "0 Levizje";  

    const kartatEShuffle = kartatArray.sort(() => 0.5 - Math.random());  

    kartatEShuffle.forEach((kartë, indeks) => {
        const kartëElement = document.createElement("div");
        kartëElement.classList.add("kard");
        kartëElement.dataset.id = indeks;
        kartëElement.addEventListener("click", ktheKartën);

        
        const imgElement = document.createElement("img");
        imgElement.src = "imazhwt/" + kartë;
        imgElement.alt = kartë;
        imgElement.style.display = "none"; 
        kartëElement.appendChild(imgElement);

        bordi.appendChild(kartëElement);
    });
}

function ktheKartën() {
    let kartaId = this.dataset.id;

    
    if (idKartaveZgjedhura.includes(kartaId) || kartatEBarazuara.includes(kartaId)) return;

    this.classList.add("flipped");  

    const imgElement = this.querySelector("img");
    imgElement.style.display = "block";  

    kartatZgjedhura.push(kartatArray[kartaId]);
    idKartaveZgjedhura.push(kartaId);

    if (kartatZgjedhura.length === 2) {
        setTimeout(kontrolloBarazimin, 500);  
        levizje++;
        document.getElementById("Levizje").textContent = levizje + " Levizje"; 
    }
}

function kontrolloBarazimin() {
    const kartat = document.querySelectorAll(".kard");

    if (kartatZgjedhura[0] === kartatZgjedhura[1]) {
        kartatEBarazuara.push(idKartaveZgjedhura[0]);
        kartatEBarazuara.push(idKartaveZgjedhura[1]);
    } else {
       
        kartat[idKartaveZgjedhura[0]].classList.remove("flipped");
        kartat[idKartaveZgjedhura[1]].classList.remove("flipped");

        kartat[idKartaveZgjedhura[0]].querySelector("img").style.display = "none";
        kartat[idKartaveZgjedhura[1]].querySelector("img").style.display = "none";
    }

    kartatZgjedhura = [];
    idKartaveZgjedhura = [];
}
