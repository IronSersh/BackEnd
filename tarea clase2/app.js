class usuarios{
    constructor(nombre,apellido,libros,mascota){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=[]
        this.mascota=[]
    }
    getfullname(){
        console.log(`${this.nombre} ${this.apellido}`)
    }
    countmascota(num){
        num.forEach(element => {
            console.log(element.length)
    });
    }
    getbookname(nombre){
        console.log(nombre)
    }
}
const mascota=[]
const libros=[]
function addmasscota(masc){
    mascota.push(masc)
    }

function addbook(autor){
    libros.push(autor)
}

const persona1= new usuarios('sergio','castelli',mascota,libros)

persona1.getfullname()
addmasscota(['pepe','pipo'])
persona1.countmascota(mascota)
addbook({libro:'el silmarilion',autor:'J.R.R. Tolkien'})
addbook({libro:'Game Of Throne',autor:'J.R.R. Martin'})
persona1.getbookname(libros[0].libro)
persona1.getbookname(libros[1].libro)