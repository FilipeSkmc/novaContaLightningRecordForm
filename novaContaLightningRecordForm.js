import { LightningElement } from 'lwc';

/*IMPORTANDO O OBJETO E CAMPOS DO PROPRIO SCHEMA DA ORG, GARANTEM QUE SEMPRE VENHA AS INFORMAÇÕES SEMPRE CORRETINHAS */
//importando o schema do objeto account de dentro da ORG
import Account from '@salesforce/schema/Account';

//importando os campos necessários para a inserção de account
import Name from '@salesforce/schema/Account.Name';
import Phone from '@salesforce/schema/Account.Phone';

//biblioteca que dispara a mensagem em caso de sucesso
import {ShowToastEvent} from   'lightning/platformShowToastEvent';

export default class NovaContaLightningRecordForm extends LightningElement {
    //atribui o nome do objeto para ser usado no formulario
    objectApiName = Account;
    //lista de objetos contendo os campos utilizados na criação de account
    fields = [Name, Phone];

    //função que dispara a mensagem de sucesso em caso de inserção concluida
    handleSuccess(event){
        this.dispatchEvent(
            new ShowToastEvent({
                title:'Conta Criada',
                message: 'ID da Conta' + event.detail.id,
                variant: 'success'
            })
        );
    }
}
