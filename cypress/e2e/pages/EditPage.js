import Utils from "../utils/utils";
const utils = new Utils  


import EditElement from "../elements/EditElement";

const editElement = new EditElement



export default class EditPage {

    abrirNavegador() {
        utils.navegar(editElement.urlEdit());
    }

    clicarEdit() {
        utils.click(editElement.editBtn());
    }

    preencherName() {
        utils.preencherInput(editElement.nameField(), 'shine AAA')
    } 

    preencherCompany() {
        utils.preencherInput(editElement.companyField(), 'barclaysss')
    } 

    preencherAddress() {
        utils.preencherInput(editElement.addressField(), 'Tamil Naduuu')
    } 

    preencherCity() {
        utils.preencherInput(editElement.cityField(), 'Chennaiii')
    } 

    preencherPhone() {
        utils.preencherInput(editElement.phoneField(), '7894561235555')
    }

    preencherEmail() {
        utils.preencherInput(editElement.emailField(), 'prakashhh@gmail.com')
    }

    clicarSave() {
        utils.click(editElement.saveBtn());
    }




    // Validações:

    validarEditComSucesso() {
        utils.validarText(editElement.validaEditComSucesso(), 'shine AAA')
    }

    /*
    validarEditSemSucesso() {
        utils.validarText(editElement.validaEditSemSucesso(), 'Welcome novousername')
    }
    */


}