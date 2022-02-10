// Partie covid
let sub = document.getElementById('searchCovid');
let input = document.getElementById('inputSearchCovid');
let nameCountry = document.getElementById('nameCountry');
let inputSearchCovid = document.getElementById('inputSearchCovid');
let nombreCasConfirm = document.querySelector('.nombreCasConfirm');
let nombrePatientDece = document.querySelector('.nombrePatientDece');
let nombrePatientGuerrir = document.querySelector('.nombrePatientGuerrir');
let apiKey = '5c11dce65ccad3ca5428202e0c9b89f0';


// Recherche
fetch("https://api.covid19api.com/summary")
    .then((response) => response.json())
    .then((data) => {
    let country = data.Countries;
    console.log(data.Global);


    document.getElementById('NmbreTotalCas').innerHTML = `${data.Global.TotalConfirmed} `;      
    document.getElementById('NmbreTotalDeces').innerHTML = `${data.Global.TotalDeaths} `;      
    
    
    
    for (let i = 0; i < country.length; i++) {
        const element = country[i];
        // console.log(element.Country);
        document.getElementById('inputSearchCovid').innerHTML += `<option value="${element.Country}">${element.Country}</option>`;
    }
    
})


// Afficher les infos d'un pays
fetch("https://disease.sh/v3/covid-19/countries/c%C3%B4te%20d%27ivoire?strict=true")
        .then((response) => response.json())
        .then((data) => {
        console.log(data);

        nameCountry.innerHTML=`${data.country}`;
        nombreCasConfirm.innerHTML= `${data.cases}`;
        nombrePatientDece.innerHTML= `${data.deaths}`;
        nombrePatientGuerrir.innerHTML= `${data.recovered}`;
})

// AddeventListener
sub.addEventListener('submit', (e) =>{
    e.preventDefault();
    console.log(inputSearchCovid.value);

    fetch(`https://disease.sh/v3/covid-19/countries/${inputSearchCovid.value}?strict=true`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data);

        nameCountry.innerHTML=`${data.country}`;
        nombreCasConfirm.innerHTML= `${data.cases}`;
        nombrePatientDece.innerHTML= `${data.deaths}`;
        nombrePatientGuerrir.innerHTML= `${data.recovered}`;
    })
       })
// Fin patie


let formRdv = document.getElementById('formulaireDeRdv');
let selectService = document.getElementById('service');
let nom = document.getElementById('nom');
let prenom = document.getElementById('prenom');
let mail = document.getElementById('mail');
let tel = document.getElementById('number');
let address = document.getElementById('address');
let anniv = document.getElementById('anniv');
let textRdv = document.getElementById('textRdv');

console.log(selectService);

formRdv.addEventListener('submit', (e) =>{
    e.preventDefault();
    const patient = {
        nom: nom.value,
        prenom: prenom.value,
        mail: mail.value,
        telephone: tel.value,
        address: address.value,
        anniversaire: anniv.value
    }
    if (selectService.value == 'generaliste') {
        let patientsGeneral = JSON.parse(localStorage.getItem("patientGeneral"));
        if (patientsGeneral) {
            for (const element of patientsGeneral) {
                    if (mail.value == element.mail || tel.value == element.telephone) {
                        // alert('Numero de telephone ou mail existe déja')
                        textRdv.innerHTML=`Numero de telephone ou mail existe!`;
                        textRdv.style.color="red";                
                    }else{
                        patientsGeneral.push(patient);
                        localStorage.setItem("patientGeneral",JSON.stringify(patientsGeneral));
                    }

                    break;
            }
   
        }else{
            patientsGeneral = [];
            patientsGeneral.push(patient);
            localStorage.setItem("patientGeneral",JSON.stringify(patientsGeneral));

            textRdv.innerHTML=`Bienvenue Mr/Mme ${nom.value}`;
            textRdv.style.color="green";
        }
    }else if(selectService.value == 'ophtamologie') {

        let patientsOphtamologie = JSON.parse(localStorage.getItem("patientOphtamologie"));
        if (patientsOphtamologie) {
            for (const element of patientsOphtamologie) {
                if (mail.value == element.mail || tel.value == element.telephone) {
                    textRdv.innerHTML=`Numero de telephone ou mail existe!`;
                    textRdv.style.color="red";
                    
                }else{
                    patientsOphtamologie.push(patient);
                    localStorage.setItem("patientOphtamologie",JSON.stringify(patientsOphtamologie));
                }

                break;
            }
           
        }else{
            patientsOphtamologie = [];
            patientsOphtamologie.push(patient);
            localStorage.setItem("patientOphtamologie",JSON.stringify(patientsOphtamologie));

            textRdv.innerHTML=`Bienvenue Mr/Mme ${nom.value}`;
            textRdv.style.color="green";
        }

    }else if (selectService.value == 'dermatologie') {
        let patientsDermatologie = JSON.parse(localStorage.getItem("patientDermatologie"));
        if (patientsDermatologie) {

            for (const element of patientsDermatologie) {
                if (mail.value == element.mail || tel.value == element.telephone) {
                    textRdv.innerHTML=`Numero de telephone ou mail existe!`;
                    textRdv.style.color="red";
                    
                }else{
                    
                    patientsDermatologie.push(patient);
                    localStorage.setItem("patientDermatologie",JSON.stringify(patientsDermatologie));
                }

                break;
                
            }
            
        }else{
            patientsDermatologie = [];
            patientsDermatologie.push(patient);
            localStorage.setItem("patientDermatologie",JSON.stringify(patientsDermatologie));

            textRdv.innerHTML=`Bienvenue Mr/Mme ${nom.value}`;
            textRdv.style.color="green";
        }
    }else if (selectService.value == 'chirugie') {
        let patientsChirugie = JSON.parse(localStorage.getItem("patientChirugie"));
        if (patientsChirugie) {
            for (const element of patientsChirugie) {
                if (mail.value == element.mail || tel.value == element.telephone) {
                    textRdv.innerHTML=`Numero de telephone ou mail existe!`;
                    textRdv.style.color="red";
                    
                }else{
                    patientsChirugie.push(patient);
                    localStorage.setItem("patientChirugie",JSON.stringify(patientsChirugie));
                }

                break;
            }
        }else{
            patientsChirugie = [];
            patientsChirugie.push(patient);
            localStorage.setItem("patientChirugie",JSON.stringify(patientsChirugie));

            textRdv.innerHTML=`Bienvenue Mr/Mme ${nom.value}`;
            textRdv.style.color="green";
        }
    }
    
    
    nom.value ="";
    prenom.value ="";
    mail.value ="";
    tel.value ="";
    address.value ="";
    anniv.value ="";
})

//-------- Message de contact ---------//
let sendMail = document.getElementById('sendMail');
let sendMessage = document.getElementById('sendMessage');
let formContact = document.getElementById('sendContact');

formContact.addEventListener('click', (e) =>{
    const usr = {
        Mail: sendMail.value,
        Message: sendMessage.value
    }
    console.log(usr);
    let sugesstion = JSON.parse(localStorage.getItem("user"));

    if (sugesstion) {
        sugesstion.push(usr);
        localStorage.setItem("user", JSON.stringify(sugesstion));
    }else{
        sugesstion = [];
        sugesstion.push(usr);
        localStorage.setItem("user", JSON.stringify(sugesstion));
    }
    sendMail.value = "";
    sendMessage.value ="";
})






// Slicke carousel
  function chargeplay (){
    $('.galerie').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
      });
      stylePrevAndNext();
  }

function stylePrevAndNext(){
    let previousAll = document.querySelectorAll('.slick-prev');
    let nextAll = document.querySelectorAll('.slick-next');
    console.log(previousAll);

    for (let i = 0; i < previousAll.length; i++) {
        const element = previousAll[i];
        // console.log(element);
        element.innerHTML = `<i class="fas fa-arrow-circle-left"></i>`
    }
    for (let i = 0; i < nextAll.length; i++) {
        const element = nextAll[i];
        console.log(element);
        element.innerHTML = `<i class="fas fa-arrow-circle-right"></i>`
    }
}



fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=covid`)
.then((response) => response.json())
.then((data) => {
    // console.log(data.results);
    let dataElements = data.results;
    for (let i = 0; i < dataElements.length; i++) {
        const elements = dataElements[i];

        // console.log(elements);
        document.querySelector('.galerie').innerHTML += `
        <div class="card card1"  style="width: 18rem;" onclick="afficheInfoFilm(${elements.id})">
                <img src="https://image.tmdb.org/t/p/w500${elements.backdrop_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${elements.title}</h5>
                </div>
        </div>
        `;
    }

    chargeplay();
})



function afficheInfoFilm(id){
    console.log(id);
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.homepage);
        location.assign(data.homepage)
})
}

//------------- Document scroll --------------//
window.document.addEventListener('scroll', () =>{
    if (window.scrollY > 100) {
        document.querySelector('.navbar').classList.add('afficheNavbar');
    }else{
        document.querySelector('.navbar').classList.remove('afficheNavbar');
    }
})