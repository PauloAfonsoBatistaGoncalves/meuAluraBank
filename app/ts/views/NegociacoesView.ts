import {Negociacoes} from "../models/Negociacoes";

import {View} from "./View";

export class NegociacoesView extends View<Negociacoes>{

    template(model:Negociacoes):String {
        return `

        <table class="table table-hover table-bordered">
            <thead>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </thead>
            <tbody>
            ${model.toArray().map(negociacao => {
                return `
                    <tr>
                        <td>${negociacao.data().getDate()}/${negociacao.data().getMonth()+1}/${negociacao.data().getFullYear()}</td>
                        <td>${negociacao.quantidade()}</td>
                        <td>${negociacao.valor()}</td>
                        <td>${negociacao.volume()}</td>
                    </tr>
                `;
            })}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
        `;
    }
}