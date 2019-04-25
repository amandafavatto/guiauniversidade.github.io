// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCPt4oNYojmhezrj2sBFNF31etJpgECMwE",
    authDomain: "guiauniversidade.firebaseapp.com",
    databaseURL: "https://guiauniversidade.firebaseio.com",
    projectId: "guiauniversidade",
    storageBucket: "guiauniversidade.appspot.com",
    messagingSenderId: "489359413781"
});

// reference messages collection
var ebookRef = firebase.database().ref('ebook');

//Listen for form submit
var form = document.getElementById('contactForm');

form.addEventListener('submit', submitForm);

//Submit form
async function submitForm(e) {

    e.preventDefault();

    //Get Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = new Date();
    var ipInfo = await fetch("https://ipapi.co/json/").then(res => res.json());

    var formattedDate = "";
    formattedDate += date.getFullYear();
    formattedDate += "/";
    formattedDate += date.getMonth().toString().length === 1 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    formattedDate += "/";
    formattedDate += date.getDate().toString().length === 1 ? "0" + date.getDate() : date.getDate();
    formattedDate += " ";
    formattedDate += date.getHours().toString().length === 1 ? "0" + date.getHours() : date.getHours();
    formattedDate += ":";
    formattedDate += date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes();
    formattedDate += ":";
    formattedDate += date.getSeconds().toString().length === 1 ? "0" + date.getSeconds() : date.getSeconds();

    ebookRef.push().set({
        email: email,
        name: name,
        date: formattedDate,
        ip: ipInfo.ip
    });

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";

    alert("Cadastro feito com sucesso");
    window.location.href = "https://guiauniversidade.com/obrigada.html"
    
}
