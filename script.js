//----FORMULARIO----
class Contacto {
    constructor(id, nombre, correo, mensaje) {
        this.id = id
        this.nombre = nombre
        this.correo = correo
        this.mensaje = mensaje
    }
}

let id = 1
let contactos = []

$('#formContacto').submit((e) => {
    e.preventDefault()

    let formDatos = new FormData(e.target)

    let contacto = new Contacto (id, formDatos.get("nombre"), formDatos.get("correo"), formDatos.get("mensaje"))

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
        e.preventDefault()

        fetch('./productos.json')
        .then(response => response.json())
        .then(data => {
    
        let datosArray = Object.entries(data)

        let formData = new FormData(e.target)
        let buscar = formData.get("busqueda") 
        let productoEncontrado = datosArray.filter(producto => producto.nombre == buscar)

        $('#tituloResultados').empty().append(`Resultado de tu búsqueda`)
        $('#resultados').empty()

        if(productoEncontrado.length == 0){

            $('#resultados').append(`<p>El producto que ingresaste es inexistente :( ¡Intentá de nuevo!</p>`)
                     
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

