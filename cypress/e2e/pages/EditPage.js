import Utils from "../utils/utils";
const utils = new Utils  


import EditElement from "../elements/EditElement";

const editElement = new EditElement

import SearchElement from "../elements/SearchElement";

const searchElement = new SearchElement

const Chance = require('chance');
const chance = new Chance();



export default class EditPage {

    abrirNavegador() {
        utils.navegar(editElement.urlEdit());
    }

    clicarEdit() {
        utils.click(editElement.editBtn());
    }

    preencherName() {
        utils.preencherInput(editElement.nameField(), 'Fui Editado')
    } 

    preencherCompany() {
        utils.preencherInput(editElement.companyField(), chance.company())
    } 

    preencherAddress() {
        utils.preencherInput(editElement.addressField(), chance.address())
    } 

    preencherCity() {
        utils.preencherInput(editElement.cityField(), chance.city())
    } 

    preencherPhone() {
        utils.preencherInput(editElement.phoneField(), chance.phone())
    }

    preencherEmail() {
        utils.preencherInput(editElement.emailField(), chance.email())
    }

    clicarSave() {
        utils.click(editElement.saveBtn());
    }

    // Validações:

    validarEditComSucesso() {
        utils.validarText(searchElement.validaBuscaComSucesso(), 'Fui Editado')
    }


   /*
    validarEditSemSucesso() {
        utils.validarText(editElement.validaEditSemSucesso(), 'Welcome novousername')
    }
    */


}