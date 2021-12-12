//----FORMULARIO----
class Contacto {
    constructor(nombre, correo, mensaje) {
        this.nombre = nombre
        this.correo = correo
        this.mensaje = mensaje
    }
}

let contactos = []

$('#formContacto').submit((e) => {
    e.preventDefault()

    let formDatos = new FormData(e.target)

    let contacto = new Contacto (formDatos.get("nombre"), formDatos.get("correo"), formDatos.get("mensaje"))

    $('#respuestaMensaje').empty().append(
                `<p class="detalle">¡Hola ${formDatos.get("nombre")}! Su mensaje ha sido enviado correctamente desde el mail ${formDatos.get("correo")}.<br>
                 Su mensaje es: ${formDatos.get("mensaje")}</p>
            `
            )
            

    $('#formContacto').trigger('reset')

    console.log(contacto)
})

//---BOTON BUSCAR----
$(() => {

    $('#formBuscar').submit((e) => {

        let formData = new FormData(e.target)
        let buscar = formData.get("busqueda") 

        e.preventDefault()

        fetch('productos.json') //hago una busqueda local a productos.json
        .then(response => response.json())
        .then(data => {
    
        let datosArray = data
        let productoEncontrado = datosArray.filter(producto => producto.nombre == buscar)

        $('#tituloResultados').empty().append(`Resultado de tu búsqueda`)
        $('#resultados').empty()

        if(productoEncontrado.length == 0){

            $('#resultados').append(`<p id="inexistente">El producto que ingresaste es inexistente :( ¡Intentá de nuevo!</p>`)
                     
        } else {

            productoEncontrado.forEach(producto => {
                $('#resultados').append(`
                    <div class="card" >
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombreCompleto}">
                        <div class="card-body">
                            <p class="detalle card-title">${producto.nombreCompleto}<br>${producto.precio}</p>
                            <a href="#" class="btn btn-primary">Comprar</a>
                        </div>
                    </div>
                `)
            })
        }
        })

        $('#formBuscar').trigger('reset')

    })
})

$('main').fadeIn('slow')
