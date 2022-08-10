import Utils from "../utils/utils";
const utils = new Utils  

import HomeElement from "../elements/HomeElement";
const homeElement = new HomeElement



export default class HomePage {

    abrirNavegador() {
        utils.navegar(homeElement.url());
    }

    clicarSignUp() {
        utils.click(homeElement.signUpBtn());
    }

    clicarLogin() {
        utils.click(homeElement.loginBtn());
    }

    // Validações:

    validarAcessoSignUpComSucesso() {
        utils.validarText(homeElement.validaAcessoSignUp(), 'Add new user')
    }
    
    validarAcessoLoginComSucesso() {
        utils.validarText(homeElement.validaAcessoLogin(), 'LOGIN')
    }


    /*
    //Esse mecanismo de busca nmão está funcionando no site

    preencherSearch() {
        utils.preencherInput(homeElement.searchField(), 'Coraline');
    }

    clicarSearch() {
        utils.click(homeElement.searchBtn());
    }

    */

}


