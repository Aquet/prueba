export class User{
    _id?: number;
    apellidoP: string;
    apellidoM: string;
    nombre: string;
    correo: string;
    equipo: string;

    constructor (apellidoP:string , apellidoM:string , nombre:string , correo:string , equipo:string){
        this.apellidoP = apellidoP;
        this.apellidoM = apellidoM;
        this.nombre = nombre;
        this.correo = correo;
        this.equipo = equipo;
    }
}