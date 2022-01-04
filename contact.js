let form = document.getElementById('form');
console.log(form);
let firstName = document.querySelector('input[name="first-name"]');
let lastName = document.querySelector('input[name="last-name"]');
let email = document.querySelector('input[name="email"]');
let phone = document.querySelector('input[name="phone"]');
let message = document.querySelector('input[name="message"]');


form.addEventListener('submit',(e)=>{
    console.log('ofkmlsdfmlsdf');
     
    Swal.fire({
        html: 'Name : ' + firstName.value + " " + lastName.value 
        + phone.value + "<br/> Message : " + message.value,
        icon: 'success',
        title: 'Message sent Successfully',
        
        confirmButtonColor: '#1985A1'
    })
    e.preventDefault();
})