
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const toastTrigger1 = document.getElementById('routeimg')
const toastTrigger2= document.getElementById('mountimg')
const toastTrigger3 = document.getElementById('planeimg')
const toastLiveExample1 = document.getElementById('liveToast1')
const toastLiveExample2 = document.getElementById('liveToast2')
const toastLiveExample3 = document.getElementById('liveToast3')

if (toastTrigger1 ) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample1)
  toastTrigger1.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
if (toastTrigger2 ) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample2)
  toastTrigger2.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
if (toastTrigger3 ) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample3)
  toastTrigger3.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

$('#btnForm').click(function(e){
    e.preventDefault();

    /* let mensaje = `<h2 class='bg-danger text-center'>Haz logrado hacer login exitosamente.
    bien hecho</h2>` 
    
    $('#msg').html(mensaje); */

    $('#msg').toggle()


})