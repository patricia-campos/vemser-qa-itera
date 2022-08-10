import Utils from "../utils/utils";
const utils = new Utils  


import LoginElement from "../elements/LoginElement";
const loginElement = new LoginElement


// Variáveis:

let username = 'novousername';
let password = '123';


export default class LoginPage {

    abrirNavegador() {
        utils.navegar(loginElement.urlLogin());
    }

    preencherUsername() {
        utils.preencherInput(loginElement.usernameField(), username)
    }

    preencherPassword() {
        utils.preencherInput(loginElement.passwordField(), password)
    }

    clicarLogin() {
        utils.click(loginElement.loginBtn());
    }

    // Validações:

    validarLoginComSucesso() {
        utils.validarText(loginElement.validaLogin(), 'Dashboard')
    }

}