export class Negociacao{

    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor:number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    data():Date{
        return this._data;
    }

    quantidade():Number{
        return this._quantidade;
    }

    valor(){
        return this._valor;
    }

    volume():Number{
        return this._quantidade * this._valor;
    }
}