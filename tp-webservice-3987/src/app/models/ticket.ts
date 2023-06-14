import { Espectador } from "./espectador";

export class Ticket {
    _id!: string;
    precioTicket!: Number;
    categoriaEspectador!: string;
    fechaCompra!: string;
    espectador!: Espectador;
}
