import {NegociacaoController} from "./controllers/NegociacaoController";

let negociacaoCtrl = new NegociacaoController();

$('.form')
    .submit(negociacaoCtrl.adiciona.bind(negociacaoCtrl));
   