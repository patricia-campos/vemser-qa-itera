import Utils from "../utils/utils";
const utils = new Utils  


import CreateCustomerElement from "../elements/CreateCustomerElement";

const createCustomerElement = new CreateCustomerElement

const Chance = require('chance');
const chance = new Chance();


export default class CreateCustomerPage {

    abrirNavegador() {
        utils.navegar(createCustomerElement.urlCreateCustomer());
    }

    preencherName() {
        utils.preencherInput(createCustomerElement.nameField(), 'Alanis Almeida')
    } 

    preencherNameEdit() {
        utils.preencherInput(createCustomerElement.nameField(), 'Serei Editado')
    }

    preencherNameDelete() {
        utils.preencherInput(createCustomerElement.nameField(), 'Serei Deletado')
    }

    preencherCompany() {
        utils.preencherInput(createCustomerElement.companyField(), chance.company())
    } 

    preencherAddress() {
        utils.preencherInput(createCustomerElement.addressField(), chance.address())
    } 

    preencherCity() {
        utils.preencherInput(createCustomerElement.cityField(), chance.city())
    } 

    preencherPhone() {
        utils.preencherInput(createCustomerElement.phoneField(), chance.phone())
    }

    preencherEmail() {
        utils.preencherInput(createCustomerElement.emailField(), chance.email())
    }

    clicarCreate() {
        utils.click(createCustomerElement.createBtn());
    }

    // Validações:

    validarCreateCostumerComSucesso() {
        utils.validarText(createCustomerElement.validaCreateCostumerComSucesso(), 'Welcome novousername')
    }

}

