export class Cliente {
    idCliente: number;
    idTipoDoc: {
        id: number;
        descripcion: string;
    };
    numDocumento: string;
    nombre: string;
    apePat: string;
    apeMat: string;
    fecNacimiento: Date;
    email: string;

    constructor(){
        this.idCliente = 0;
        this.idTipoDoc = {
            id: 0,
            descripcion: "",
        };
        this.numDocumento = "";
        this.nombre = "";
        this.apePat = "";
        this.apeMat = "";
        this.fecNacimiento = new Date(); 
        this.email = "";
    }
}