let patientsOphtamologie = JSON.parse(localStorage.getItem("patientOphtamologie"));
console.log(patientsOphtamologie);
for (let i = 0; i < patientsOphtamologie.length; i++) {
    const element = patientsOphtamologie[i];
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
    let ind = patientsOphtamologie.indexOf(patientsOphtamologie[index])
    patientsOphtamologie.splice(ind, 1)
    localStorage.setItem("patientOphtamologie",JSON.stringify(patientsOphtamologie))
    location.reload('../html/ophtamologie.html')
}



const modifier = (index) =>{
    console.log(patientsOphtamologie[index]);

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
              <option value="generaliste" disabled>Généraliste</option>
              <option value="ophtamologie" selected>Ophtamologie</option>
              <option value="dermatologie" disabled>Dermatologie</option>
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


    document.getElementById("nom").value=patientsOphtamologie[index].nom;
    document.getElementById("prenom").value=patientsOphtamologie[index].prenom;
    document.getElementById("mail").value=patientsOphtamologie[index].mail;
    document.getElementById("number").value=patientsOphtamologie[index].telephone;
    document.getElementById("address").value=patientsOphtamologie[index].address;
    document.getElementById("anniv").value=patientsOphtamologie[index].anniversaire;

    document.getElementById("formulaireDeRdv").addEventListener('submit',(e) =>{
      e.preventDefault();
      console.log(index);
      
      patientsOphtamologie[index].nom=document.getElementById("nom").value;
      patientsOphtamologie[index].prenom=document.getElementById("prenom").value;
      patientsOphtamologie[index].mail=document.getElementById("mail").value;
      patientsOphtamologie[index].telephone=document.getElementById("number").value;
      patientsOphtamologie[index].address=document.getElementById("address").value;
      patientsOphtamologie[index].anniversaire=document.getElementById("anniv").value;

      localStorage.setItem("patientOphtamologie",JSON.stringify(patientsOphtamologie))
      location.reload('../html/ophtamologie.html')
    })
}