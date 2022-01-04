const type = document.getElementById('type');
const formulaire = document.getElementById('formulaire');
const carburantLabel = document.createElement('label');
carburantLabel.setAttribute("for","carburant");
carburantLabel.innerText = "Fuel : ";
const carburant = document.createElement('select');
carburant.setAttribute("name","carburant")
const submit = document.createElement('button');
submit.innerText = "Submit";
submit.setAttribute("type","button");

// Date

let date = new Date();
let today =date.getFullYear() + '-'
+ ('0' + (date.getMonth()+1)).slice(-2) + '-'
+ ('0' + date.getDate()).slice(-2);

date.setDate(date.getDate() + 1);

let tomorrow = date.getFullYear() + '-'
+ ('0' + (date.getMonth()+1)).slice(-2) + '-'
+ ('0' + date.getDate()).slice(-2);
console.log(today+" "+tomorrow);

const startDateLabel = document.createElement('label');
startDateLabel.setAttribute("for","start");
startDateLabel.innerText = "From : ";
let startDate = document.createElement('input');
startDate.setAttribute("type","date");
startDate.setAttribute("name","start");
startDate.setAttribute("value",today);
startDate.setAttribute("min",today);
let endDate = document.createElement('input');
const endDateLabel = document.createElement('label');
endDateLabel.setAttribute("for","end");
endDateLabel.innerText = "to : ";
endDate.setAttribute("type","date");
endDate.setAttribute("name","end");
endDate.setAttribute("value",tomorrow);
endDate.setAttribute("min",tomorrow);


const dateContainer = document.createElement('div');
dateContainer.append(startDateLabel,startDate,endDateLabel,endDate);

// options
const diesel = document.createElement('option');
diesel.text = "Diesel";
diesel.value = "diesel";
const essence = document.createElement('option');
essence.text = "Gasoline";
essence.value = "essence";
const electrique = document.createElement('option');
electrique.text = "Electric";
electrique.value = "electrique";
const hybrid = document.createElement('option');
hybrid.text = "Hybrid";
hybrid.value = "hybrid";
const choose = document.createElement('option');
choose.text = "Choose";
choose.value = "choose";
carburant.add(choose);

let span = document.createElement('span');
let vitesse = document.createElement('label');
vitesse.innerText = 'Gearbox : ';
vitesse.appendChild(span);

let result = 0;
let vehiculePrice = result;
let finalVehiculePrice = vehiculePrice;

type.addEventListener('change',() =>{
  formulaire.append(carburantLabel,carburant,vitesse,dateContainer,submit);
  let length = carburant.length;

  for(let i = 0; i < length; i++){
    carburant.remove(0);
  }
    if(type[0].value === 'choose'){
      type.remove(0);
    }
    switch (type.value){
      case 'moto':
        result = 10;
        carburant.add(electrique);
        carburant.add(essence);
        span.innerText = "none.";
        console.log(result);
        break;
      case 'compact':
        result = 14;
        carburant.add(hybrid);
        carburant.add(essence);
        carburant.add(diesel);
        span.innerText = "manual.";
        break;
      case 'citadin':
        result = 12;
        carburant.add(hybrid);
        carburant.add(essence);
        carburant.add(diesel);
        carburant.add(electrique);
        span.innerText = "manual.";
        break;
      case 'utilitaire':
        result = 16;
        carburant.add(diesel);
        span.innerText = "manual.";
        break;
      case 'berlin':
        result = 20*1.19;
        console.log("im result"+result);
        carburant.add(essence);
        carburant.add(diesel);
        carburant.add(hybrid);
        span.innerText = "automatic.";
        break;
      case 'camion':
        result = 250*1.19;
        carburant.add(diesel);
        span.innerText = "automatic.";
        break;
      case 'chantier':
        result = 900;
        carburant.add(essence);
        carburant.add(diesel);
        span.innerText = "manual.";
        break;
    }
    vehiculePrice = result;
    carburantSelect();
 });

 const carburantSelect = function(){
  vehiculePrice = result;
  switch (carburant.value){
    case 'diesel':
      vehiculePrice += vehiculePrice*0.21;
      break;
    case 'essence':
      result = vehiculePrice;
      vehiculePrice += vehiculePrice*0.14;
      console.log(result);
      break;
    case 'electrique':
      result = vehiculePrice;
      vehiculePrice += vehiculePrice*0.05;
      console.log(result);

      break;
    case 'hybrid':
      vehiculePrice += vehiculePrice*0.09;
      break;
  }
 }

carburant.addEventListener('change',carburantSelect);

submit.addEventListener('click',() =>{
  console.log(startDate.valueAsNumber);
  let text = 'Car type : '+ type.value + " & Fuel : " + carburant.value ;
  let parts = startDate.value.split('-');
  let sDate = new Date(parts[0], parts[1] - 1, parts[2]);
  parts = endDate.value.split('-');
  let eDate = new Date(parts[0], parts[1] - 1, parts[2]);
  let diffTime = eDate - sDate;
  if(diffTime > 0){
    finalVehiculePrice = vehiculePrice;
    finalVehiculePrice *= Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    Swal.fire({
    icon: 'success',
    title: 'the price is ' + (Math.round(finalVehiculePrice * 100) / 100).toFixed(2) + '$',
    text: text,
    footer: 'From : ' + startDate.value +" to : " + endDate.value,
    confirmButtonColor: '#1985A1'
  })
  }else{
    Swal.fire({
      icon: 'error',
      title: 'Invalid date !',
      text: 'Change the date and try again',
      confirmButtonColor: '#1985A1'
  })
}
});
