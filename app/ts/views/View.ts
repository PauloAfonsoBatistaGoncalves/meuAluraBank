export abstract class View<T>{

    protected _element:JQuery;

    constructor(selector:String){
        this._element = $(selector.toString());
    }
 
    
    update(model:T):void{
        this._element.html(this.template(model).toString());
    }


    abstract template(model:T):String
    
}