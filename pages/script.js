const validacionEmail = () => {
    const btnEnvio = document.getElementById('enviar')
    btnEnvio.onclick = (e) => {
        e.preventDefault()
        setTimeout((e) => {
        e.preventDefault()

            const nombre = document.getElementById('nombre').value
            const mail = document.getElementById('email').value
            const mensaje = document.getElementById('mensaje').value
            window.location.href = `mailto:inepiazzalonga@gmail.com?subject=envioDesdeFormulario&body=Nombre%3A${nombre}%0ACorreo%3A${mail}%0AMensaje%3A${mensaje}`
            alert("Mensaje enviado")
        }, 2000)

    }


}