let btn = document.querySelector('#btnSus');

document.querySelector('.suscribeContainer').addEventListener('submit', function (event) {
    emailjs.init('PiYl-C39rIpuxbtAj');

    event.preventDefault();
    btn.value = 'ENVIANDO...'
    emailjs.sendForm('service_96ng8fg', 'template_8sbnztg', this)
        .then(function () {
            btnSus.value = 'ENVIAR';
            Swal.fire('En breve nos pondremos en contacto 🙋')
            console.log('Mail status: success');
        }, function (error) {
            btnSus.value = 'ENVIAR';
            Swal.fire(`El mail no pudo ser enviado, intente de nuevo mas tarde 😕`)
            console.log('Mail status: failed', error);
        });
});