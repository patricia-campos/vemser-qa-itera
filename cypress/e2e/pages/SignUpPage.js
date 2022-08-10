import Utils from "../utils/utils";
const utils = new Utils  


import SignUpElement from "../elements/SignUpElement";

const signUpElement = new SignUpElement

const Chance = require('chance');
const chance = new Chance();


// Variáveis:

let first_name = 'Coraline';
let surname = 'Jones';
let e_post = '12345';
let mobile = 'mobile';
let password = '123';
let confirm_password = '123';


export default class SignUpPage {

    abrirNavegador() {
        utils.navegar(signUpElement.url());
    }

    preencherFirstName() {
        utils.preencherInput(signUpElement.firstNameField(), first_name)
    } 

    preencherSurname() {
        utils.preencherInput(signUpElement.surnameField(), surname)
    } 

    preencherEPost() {
        utils.preencherInput(signUpElement.epostField(), e_post)
    } 

    preencherMobile() {
        utils.preencherInput(signUpElement.mobileField(), mobile)
    } 

    preencherUsername() {
        utils.preencherInput(signUpElement.usernameField(), chance.animal())
    }

    preencherPassword() {
        utils.preencherInput(signUpElement.passwordField(), password)
    }

    preencherConfirmPassword() {
        utils.preencherInput(signUpElement.confirmPasswordField(), confirm_password)
    }

    preencherConfirmPasswordDiferente() {
        utils.preencherInput(signUpElement.confirmPasswordField(), 'passwordIncorreto')
    }

    clicarSubmit() {
        utils.click(signUpElement.submitBtn());
    }

    // Validações:

    validarSignUpComSucesso() {
        utils.validarText(signUpElement.validaSignUpComSucesso(), 'Registration Successful')
    }

    validarSignUpSemSucessoVazio() {
        utils.validarText(signUpElement.validaSignUpSemSucessoNomeVazio(), 'Please enter first name')
    }

    validarSignUpSemSucessoSurnameVazio() {
        utils.validarText(signUpElement.validaSignUpSemSucessoSurnameVazio(), 'Please enter surname')
    }

    validarSignUpSemSucessoPassword() {
        utils.validarText(signUpElement.validaSignUpSemSucessoPassword(), 'do not match.')
    }

    
}