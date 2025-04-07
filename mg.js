// let kartatArray = [
//     "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG",
//     "portokall.PNG", "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG", "portokall.PNG"
// ];

// let kartatZgjedhura = [];
// let idKartaveZgjedhura = [];
// let kartatEBarazuara = [];
// let levizje = 0;

// const quotes = [
//     '"Vetëm ajo mënyrë që të bësh punë të shkëlqyera është të duash atë që bën." - Steve Jobs',
//     '"Suksesi nuk është çelësi i lumturisë. Lumturia është çelësi i suksesit." - Albert Schweitzer',
//     '"Në mes të çdo vështirësie ndodhet mundësia." - Albert Einstein',
//     '"Jeta është ajo që ndodh kur je i zënë duke bërë plane të tjera." - John Lennon',
//     '"Të jesh vetvetja në një botë që vazhdimisht përpiqet të të bëjë diçka tjetër është arritja më e madhe." - Ralph Waldo Emerson',
//     '"E ardhmja i përket atyre që besojnë në bukurinë e ëndrrave të tyre." - Eleanor Roosevelt',
//     '"Gjithmonë duket e pamundur derisa të bëhet." - Nelson Mandela',
//     '"Besoni se mundeni dhe jeni gjysmë rrugës atje." - Theodore Roosevelt',
//     '"Do ti humbisni 100% të mundësive që nuk i merrni." - Wayne Gretzky',
//     '"Mos shkoni aty ku udha mund të çojë, shkoni aty ku nuk ka udhë dhe lini një gjurmë." - Ralph Waldo Emerson'
// ];

// const quoteText = document.getElementById("text");
// const quoteEre = document.getElementById("quoteere");
// const shiko = document.getElementById("shiko");
// const quotee = document.getElementById("quote");
// const seksionEquote = document.getElementById("seksioniquote");
// const restart = document.getElementById("reset");

// function login() {
//     let emriPërdoruesit = document.getElementById("username").value;
//     let fjalëkalimi = document.getElementById("password").value;
//     let mesazhGabimi = document.getElementById("error-message");

//     if (emriPërdoruesit === "anika" && fjalëkalimi === "anika") {
//         document.querySelector(".mrena").style.display = "none";
//         document.querySelector(".mrena2").style.display = "block";
//         krijoBordin();
//     } else {
//         mesazhGabimi.textContent = "Username ose Password i gabuar!";
//         mesazhGabimi.style.display = "block";
//     }
// }

// function krijoBordin() {
//     const bordi = document.querySelector(".fund");
//     bordi.innerHTML = "";
//     bordi.style.display = "flex";

//     kartatZgjedhura = [];
//     idKartaveZgjedhura = [];
//     kartatEBarazuara = [];
//     levizje = 0;
//     document.getElementById("Levizje").textContent = "0 Levizje";

//     const kartatEShuffle = [...kartatArray].sort(() => 0.5 - Math.random());

//     kartatEShuffle.forEach((kartë, indeks) => {
//         const kartëElement = document.createElement("div");
//         kartëElement.classList.add("kard");
//         kartëElement.dataset.id = indeks;

//         kartëElement.addEventListener("click", ktheKartën);

//         const imgElement = document.createElement("img");
//         imgElement.src = "imazhwt/" + kartë;
//         imgElement.alt = kartë;
//         imgElement.style.display = "none";
//         kartëElement.appendChild(imgElement);

//         bordi.appendChild(kartëElement);
//     });

//     seksionEquote.style.display = "none";
//     quotee.style.display = "none";
// }

// function ktheKartën() {
//     let kartaId = this.dataset.id;

//     if (idKartaveZgjedhura.includes(kartaId) || kartatEBarazuara.includes(kartaId)) return;

//     this.classList.add("flipped");
//     const imgElement = this.querySelector("img");
//     imgElement.style.display = "block";

//     kartatZgjedhura.push(imgElement.src); 
//     idKartaveZgjedhura.push(kartaId);

//     if (kartatZgjedhura.length === 2) {
//         setTimeout(kontrolloBarazimin, 500);
//         levizje++;
//         document.getElementById("Levizje").textContent = levizje + " Levizje";
//     }
// }

// function kontrolloBarazimin() {
//     const kartat = document.querySelectorAll(".kard");

//     if (kartatZgjedhura[0] === kartatZgjedhura[1]) {
//         kartatEBarazuara.push(idKartaveZgjedhura[0]);
//         kartatEBarazuara.push(idKartaveZgjedhura[1]);
//     } else {
//         kartat[idKartaveZgjedhura[0]].classList.remove("flipped");
//         kartat[idKartaveZgjedhura[1]].classList.remove("flipped");
//         kartat[idKartaveZgjedhura[0]].querySelector("img").style.display = "none";
//         kartat[idKartaveZgjedhura[1]].querySelector("img").style.display = "none";
//     }

//     kartatZgjedhura = [];
//     idKartaveZgjedhura = [];

//     if (kartatEBarazuara.length === kartatArray.length) {
//         alert("Fituat!");
//         document.querySelector(".fund").style.display = "none";
//         quotee.style.display = "block";
//     }
// }

// function getRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     quoteText.textContent = quotes[randomIndex];
// }

// shiko.addEventListener("click", function () {
//     seksionEquote.style.display = "block";
//     quotee.style.display = "none";
//     getRandomQuote();
// });

// quoteEre.addEventListener("click", getRandomQuote);

// restart.addEventListener("click", function () {
//     document.querySelector(".fund").style.display = "flex";
//     seksionEquote.style.display = "none";
//     quotee.style.display = "none";
//     krijoBordin();
// });


let kartatArray = [
    "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG",
    "portokall.PNG", "blueberrys.PNG", "dredheza.PNG", "limon.PNG", "mollaa.PNG", "portokall.PNG"
];

let kartatZgjedhura = [];
let idKartaveZgjedhura = [];
let kartatENjejta = [];
let levizje = 0;

const quotes = [
    '"Vetëm ajo mënyrë që të bësh punë të shkëlqyera është të duash atë që bën." - Steve Jobs',
    '"Suksesi nuk është çelësi i lumturisë. Lumturia është çelësi i suksesit." - Albert Schweitzer',
    '"Në mes të çdo vështirësie ndodhet mundësia." - Albert Einstein',
    '"Jeta është ajo që ndodh kur je i zënë duke bërë plane të tjera." - John Lennon',
    '"Të jesh vetvetja në një botë që vazhdimisht përpiqet të të bëjë diçka tjetër është arritja më e madhe." - Ralph Waldo Emerson',
    '"E ardhmja i përket atyre që besojnë në bukurinë e ëndrrave të tyre." - Eleanor Roosevelt',
    '"Gjithmonë duket e pamundur derisa të bëhet." - Nelson Mandela',
    '"Besoni se mundeni dhe jeni gjysmë rrugës atje." - Theodore Roosevelt',
    '"Do ti humbisni 100% të mundësive që nuk i merrni." - Wayne Gretzky',
    '"Mos shkoni aty ku udha mund të çojë, shkoni aty ku nuk ka udhë dhe lini një gjurmë." - Ralph Waldo Emerson'
];

const quoteText = document.getElementById("text");
const quoteEre = document.getElementById("quoteere");
const shiko = document.getElementById("shiko");
const quotee = document.getElementById("quote");
const seksionEquote = document.getElementById("seksioniquote");
const restart = document.getElementById("reset");

function login() {
    let useri = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let gabimI = document.getElementById("error-message");

    if (useri === "anika" && password === "anika") {
        document.querySelector(".mrena").style.display = "none";
        document.querySelector(".mrena2").style.display = "block";
        krijoBordin();
    } else {
        gabimI.textContent = "Username ose Password i gabuar!";
        gabimI.style.display = "block";
    }
}

function krijoBordin() {
    const bordi = document.querySelector(".fund");
    bordi.innerHTML = "";
    bordi.style.display = "flex";

    kartatZgjedhura = [];
    idKartaveZgjedhura = [];
    kartatENjejta = [];
    levizje = 0;
    document.getElementById("Levizje").textContent = "0 Levizje";

    const kartatEPerziera = [...kartatArray].sort(() => 0.5 - Math.random());

    kartatEPerziera.forEach((kartë, indeks) => {
        const kardElement = document.createElement("div");
        kardElement.classList.add("kard");
        kardElement.dataset.id = indeks;

        kardElement.addEventListener("click", ktheKard);

        const imgElement = document.createElement("img");
        imgElement.src = "imazhwt/" + kartë;
        imgElement.alt = kartë;
        imgElement.style.display = "none";
        kardElement.appendChild(imgElement);

        bordi.appendChild(kardElement);
    });

    seksionEquote.style.display = "none";
    quotee.style.display = "none";
}

function ktheKard() {
    let kartaId = this.dataset.id;

    if (idKartaveZgjedhura.includes(kartaId) || kartatENjejta.includes(kartaId)) return;

    this.classList.add("flipped");
    const imgElement = this.querySelector("img");
    imgElement.style.display = "block";

    kartatZgjedhura.push(imgElement.src); 
    idKartaveZgjedhura.push(kartaId);

    if (kartatZgjedhura.length === 2) {
        setTimeout(kontrolloKardat, 500);
        levizje++;
        document.getElementById("Levizje").textContent = levizje + " Levizje";
    }
}

function kontrolloKardat() {
    const kartat = document.querySelectorAll(".kard");

    if (kartatZgjedhura[0] === kartatZgjedhura[1]) {
        kartatENjejta.push(idKartaveZgjedhura[0]);
        kartatENjejta.push(idKartaveZgjedhura[1]);
    } else {
        kartat[idKartaveZgjedhura[0]].classList.remove("flipped");
        kartat[idKartaveZgjedhura[1]].classList.remove("flipped");
        kartat[idKartaveZgjedhura[0]].querySelector("img").style.display = "none";
        kartat[idKartaveZgjedhura[1]].querySelector("img").style.display = "none";
    }

    kartatZgjedhura = [];
    idKartaveZgjedhura = [];

    if (kartatENjejta.length === kartatArray.length) {
        alert("Fituat!");
        document.querySelector(".fund").style.display = "none";
        quotee.style.display = "block";
    }
}

function quoteeRe() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
}

shiko.addEventListener("click", function () {
    seksionEquote.style.display = "block";
    quotee.style.display = "none";
    quoteeRe();
});

quoteEre.addEventListener("click", quoteeRe);

restart.addEventListener("click", function () {
    document.querySelector(".fund").style.display = "flex";
    seksionEquote.style.display = "none";
    quotee.style.display = "none";
    krijoBordin();
});
