export default class LoginElement {


    urlLogin() {return 'https://itera-qa.azurewebsites.net/Login'}

    usernameField() {return '#Username'}

    passwordField() {return '#Password'}

    loginBtn() {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(7) > td:nth-child(2) > input.btn.btn-primary'}

    clearBtn() {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(7) > td:nth-child(2) > input.btn.btn-secondary'}
    
    // Validações:
    
    validaLogin() {return 'body > div > div > h1'}

    validaLoginSemSucesso() {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(5) > td > label'}


}
