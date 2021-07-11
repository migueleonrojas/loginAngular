//creando la clase
export class Empleado{

    //constructor que se encarga de crear el objeto
    constructor(nombre:string, usuario:string, correo:string, clave:string,
        fechaDeNacimiento:string, registrado:boolean, inactivo:string, saldo:number, rol:string){

        this.nombre = nombre;
        this.usuario = usuario;
        this.correo = correo;
        this.clave = clave;
        this.fechaDeNacimiento = fechaDeNacimiento;
        this.registrado = registrado;
        this.saldo = saldo;
        this.rol = rol;

    }


    //creando las propiedades
    nombre:string = "";
    usuario:string = "";
    correo:string = "";
    clave:string = "";
    fechaDeNacimiento:string="";
    registrado = false;
    estatus = "";
    saldo = 0;
    rol = "";
}