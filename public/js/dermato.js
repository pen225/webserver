let patientsDermatologie = JSON.parse(localStorage.getItem("patientDermatologie"));
console.log(patientsDermatologie);
for (let i = 0; i < patientsDermatologie.length; i++) {
    const element = patientsDermatologie[i];
    // console.log(element);


    document.querySelector('tbody').innerHTML += `
    <tr>
    <td><span><i class="far fa-trash-alt" onclick ="supprimer(${i})"></i></span><i class="far fa-edit" onclick ="modifier(${i})"></i></span>${i+1}</td>
    <td>${element.nom}</td>
    <td>${element.prenom}</td>
    <td>${element.telephone}</td>
    <td>${element.mail}</td>
    <td>${element.address}</td>
    <td>${element.anniversaire}</td>
    </tr>
    `;
}

const supprimer = (index) =>{
    let ind = patientsDermatologie.indexOf(patientsDermatologie[index])
    patientsDermatologie.splice(ind, 1)
    localStorage.setItem("patientDermatologie",JSON.stringify(patientsDermatologie))
    location.reload('../html/dermato.html')
}



const modifier = (index) =>{
    console.log(patientsDermatologie[index]);

    document.querySelector(".contentGeneral").innerHTML=`
    <div class="card text-center bg-light" id="rendezVous">
    <div class="card-header">
      <h2 class="text-muted">Prendre un rendez-vous</h2>
    </div>
    <div class="card-body">
      <p class="card-text">Prenez rendez-vous avec nous via notre application en ligne.</p>

      <div class="container ">
        <form class="row g-3" id="formulaireDeRdv">
          <div class="col-md-6">
            <label for="nom" class="form-label">Nom</label>
            <input type="text" class="form-control" id="nom" aria-label="First name" required>
          </div>
          <div class="col-md-6">
            <label for="prenom" class="form-label">Prenom</label>
            <input type="text" class="form-control" aria-label="Last name" id="prenom" required>
          </div>
          <div class="col-md-6">
            <label for="mail" class="form-label">Email</label>
            <input type="email" class="form-control" id="mail" required>
          </div>
          <div class="col-md-6">
            <label for="number" class="form-label">Tel</label>
            <input type="tel" class="form-control" id="number" required>
          </div>
          <div class="col-12">
            <label for="address" class="form-label">Address</label>
            <input type="text" class="form-control" id="address" placeholder="Cocody Abidjan" required>
          </div>
          <div class="col-md-6">
            <label for="anniv" class="form-label">Anniversaire</label>
            <input type="date" class="form-control" id="anniv" required>
          </div>
          <div class="col-md-6">
            <label for="service" class="form-label">Choisir un service</label>
            <select id="service" class="form-select">
              <option value="generaliste" disable>Généraliste</option>
              <option value="ophtamologie" disabled>Ophtamologie</option>
              <option value="dermatologie" selected>Dermatologie</option>
              <option value="chirugie" disabled>Chirugie</option>
            </select>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary text-white">Enregistrer</button>
          </div>
        </form>
      </div>

    </div>
  </div>
    
    `;


    document.getElementById("nom").value=patientsDermatologie[index].nom;
    document.getElementById("prenom").value=patientsDermatologie[index].prenom;
    document.getElementById("mail").value=patientsDermatologie[index].mail;
    document.getElementById("number").value=patientsDermatologie[index].telephone;
    document.getElementById("address").value=patientsDermatologie[index].address;
    document.getElementById("anniv").value=patientsDermatologie[index].anniversaire;

    document.getElementById("formulaireDeRdv").addEventListener('submit',(e) =>{
      e.preventDefault();
      console.log(index);
      
      patientsDermatologie[index].nom=document.getElementById("nom").value;
      patientsDermatologie[index].prenom=document.getElementById("prenom").value;
      patientsDermatologie[index].mail=document.getElementById("mail").value;
      patientsDermatologie[index].telephone=document.getElementById("number").value;
      patientsDermatologie[index].address=document.getElementById("address").value;
      patientsDermatologie[index].anniversaire=document.getElementById("anniv").value;

      localStorage.setItem("patientDermatologie",JSON.stringify(patientsDermatologie))
      location.reload('../html/dermato.html')
    })
}