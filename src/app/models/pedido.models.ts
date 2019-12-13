export class Pedido {
    constructor(
        public user: string,
        public fecha: string,
        public valor: number,
        public status: string,
        public Iduser: number
    ) { }
}
