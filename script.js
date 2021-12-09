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
class Producto {
    constructor(nombre, nombreCompleto, precio, imagen) {
        this.nombre = nombre
        this.nombreCompleto = nombreCompleto
        this.precio = precio
        this.imagen = imagen
    }

    devolverDatos(){
        return`
            <div class="card" >
            <img src="${this.imagen}" class="card-img-top" alt="${this.nombreCompleto}">
        <div class="card-body">
                <p class="detalle card-title">${this.nombreCompleto}<br>${this.precio}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>
        </div>
        `
    }
}

const mateVidrio = new Producto ("mate", "Mate de cuero y vidrio con un retrato", "$1650", "images/mateVidrio.JPG")
const mateCalabazaRetrato = new Producto ("mate", "Mate de cuero y vidrio con un retrato", "$2650", "images/mateCalabazaRetrato.JPG")
const mateCalabazaDiseño = new Producto ("mate", "Mate de cuero y calabaza con diseño a elección", "$1300", "images/mateCalabazaPersonalizado.JPG")
const mateMaderaRetrato = new Producto ("mate", "Mate de madera con un retrato", "$1350", "images/mateMadera.JPG")
const mateMaderaDiseño = new Producto ("mate", "Mate de madera con diseño a elección", "$1000", "images/mateMaderaRetrato.jpeg")
const tablaAlgarrobo = new Producto ("tabla", "Tabla 15x40 de algarrobo", "$1000", "images/tablaAlgarrobo.JPG")
const tablaAlgarroboRetrato = new Producto ("tabla", "Tabla de algarrobo con un retrato", "$1000", "images/tablaRetrato.JPG")
const tablaPremium = new Producto ("tabla", "Tabla 15x40 Premium de madera calden", "$1500", "images/tablaPremiumMadera.JPG")
const yerberoAzucarero = new Producto ("azucarero", "Yerbero y azucarero de color", "$650", "images/yerberoAzucarero.JPG")

const productos = [mateVidrio, mateCalabazaRetrato, mateCalabazaDiseño, mateMaderaRetrato, mateMaderaDiseño, tablaAlgarrobo, tablaAlgarroboRetrato, tablaPremium, yerberoAzucarero]


$(() => {

    $('#formBuscar').submit((e) => {
        e.preventDefault()

        let formData = new FormData(e.target)
        let buscar = formData.get("busqueda") 
        let productoEncontrado = productos.filter(producto => producto.nombre == buscar)

        $('#tituloResultados').empty().append(`Resultado de tu búsqueda`)
        $('#resultados').empty()

        if(productoEncontrado.length == 0){

            $('#resultados').append(`<p>El producto que ingresaste es inexistente :( ¡Intentá de nuevo!</p>`)
                     
        } else {

            productoEncontrado.forEach(producto => {
                $('#resultados').append(producto.devolverDatos())
            })


        }

        $('#formBuscar').trigger('reset')

    })
})
