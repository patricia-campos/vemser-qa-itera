export default class CreateCustomerElement {


    urlCreateCustomer() {return 'https://itera-qa.azurewebsites.net/Customer/Create'}

    nameField() {return '#Name'}

    companyField() {return '#Company'}

    addressField() {return '#Address'}

    cityField() {return '#City'}

    phoneField() {return '#Phone'}

    emailField() {return '#Email'}

    createBtn() {return 'body > div > form > div > div:nth-child(9) > div > input'}

    /*
    validaCadastro() {return 'body > div > form > div > div:nth-child(11) > div > label'}
    */
}