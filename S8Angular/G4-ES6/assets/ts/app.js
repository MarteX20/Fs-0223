"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const api = "./Abbigliamento.json";
class Product {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    ;
    getSaldoCapo() { return Number((this.prezzoivainclusa * (this.saldo / 100)).toFixed(2)); }
    getAcquistoCapo() { return (this.prezzoivainclusa - this.getSaldoCapo()); }
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(api);
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            const data = yield response.json();
            console.log(data);
            const capo0 = new Product(data[0].id, data[0].codprod, data[0].collezione, data[0].capo, data[0].modello, data[0].quantita, data[0].colore, data[0].prezzoivainclusa, data[0].prezzoivaesclusa, data[0].disponibile, data[0].saldo);
            console.log('---', data[0].capo, '---');
            console.log('Prezzo capo 1 con sconto:', capo0.getSaldoCapo());
            console.log('Prezzo capo 1 senza lo sconto:', capo0.getAcquistoCapo());
            const capo1 = new Product(data[1].id, data[1].codprod, data[1].collezione, data[1].capo, data[1].modello, data[1].quantita, data[1].colore, data[1].prezzoivainclusa, data[1].prezzoivaesclusa, data[1].disponibile, data[1].saldo);
            console.log('---', data[1].capo, '---');
            console.log('Prezzo capo 2 senza lo sconto:', capo1.getAcquistoCapo());
            console.log('Prezzo capo 2 con sconto:', capo1.getSaldoCapo());
            const capo2 = new Product(data[2].id, data[2].codprod, data[2].collezione, data[2].capo, data[2].modello, data[2].quantita, data[2].colore, data[2].prezzoivainclusa, data[2].prezzoivaesclusa, data[2].disponibile, data[2].saldo);
            console.log('---', data[2].capo, '---');
            console.log('Prezzo capo 3 senza lo sconto:', capo2.getAcquistoCapo());
            console.log('Prezzo capo 3 con sconto:', capo2.getSaldoCapo());
            const capo3 = new Product(data[3].id, data[3].codprod, data[3].collezione, data[3].capo, data[3].modello, data[3].quantita, data[3].colore, data[3].prezzoivainclusa, data[3].prezzoivaesclusa, data[3].disponibile, data[3].saldo);
            console.log('---', data[3].capo, '---');
            console.log('Prezzo capo 4 senza lo sconto:', capo3.getAcquistoCapo());
            console.log('Prezzo capo 4 con sconto:', capo3.getSaldoCapo());
            const capo4 = new Product(data[4].id, data[4].codprod, data[4].collezione, data[4].capo, data[4].modello, data[4].quantita, data[4].colore, data[4].prezzoivainclusa, data[4].prezzoivaesclusa, data[4].disponibile, data[4].saldo);
            console.log('---', data[4].capo, '---');
            console.log('Prezzo capo 4 senza lo sconto:', capo4.getAcquistoCapo());
            console.log('Prezzo capo 4 con sconto:', capo4.getSaldoCapo());
        }
        catch (error) {
            console.log(error);
        }
    });
}
main();
