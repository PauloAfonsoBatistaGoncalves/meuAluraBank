import {Negociacao} from "./Negociacao";

export class Negociacoes{
    private _negociacoes:Array<Negociacao> = [];

    adiciona(negociacao:Negociacao){
        this._negociacoes.push(negociacao);
    }

    toArray():Array<Negociacao>{
        return this._negociacoes;
    }
}