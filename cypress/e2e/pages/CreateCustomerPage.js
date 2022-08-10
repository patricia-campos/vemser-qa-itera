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
        utils.preencherInput(createCustomerElement.nameField(), chance.name())
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

}

/*
// Variáveis:

let first_name = 'Coraline';
let surname = 'Jones';
let e_post = '12345';
let mobile = 'mobile';
//let username = 'novousername';
let password = '123';
let confirm_password = '123';
*/
