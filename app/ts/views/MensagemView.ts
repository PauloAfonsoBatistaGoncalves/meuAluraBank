import {View} from "./View";

export class MensagemView extends View<String>{
   
     //metodo template
     template(model:String):String{
        return `<p class="alert alert-info">
                    ${model}
                </p>
                `;
    }
}