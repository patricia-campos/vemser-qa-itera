export default class EditElement {


    urlEdit() {return 'https://itera-qa.azurewebsites.net/Dashboard'}

    nameField() {return '#Name'}

    companyField() {return '#Company'}

    addressField() {return '#Address'}

    cityField() {return '#City'}

    phoneField() {return '#Phone'}

    emailField() {return '#Email'}

    saveBtn() {return 'body > div > form > div > div:nth-child(10) > div > input'}

    editBtn() {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > a.btn.btn-outline-primary'}

    //validaEditComSucesso() {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)'} VERIFICAR VALIDAÇÃO

    //validaEditSemSucesso() {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)'} 

}