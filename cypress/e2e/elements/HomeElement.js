export default class HomeElement {



    url() {return 'https://itera-qa.azurewebsites.net/'}

    signUpBtn() {return '#navbarColor01 > form > ul > li:nth-child(1) > a'}

    loginBtn() {return '#navbarColor01 > form > ul > li:nth-child(2) > a'}

    searchField() {return '#navbarColor01 > form > input'}

    searchBtn() {return '#navbarColor01 > form > button'}

    // Validações:
    validaAcessoSignUp() {return 'body > div > h2'}

    validaAcessoLogin() {return 'body > div > div:nth-child(4) > form > table > tbody > tr:nth-child(1) > td:nth-child(2)' }

    
    /*
    Referente ao mecanismo de busca da home, porém nào está funcionando no site
    
    validaSearch() {return }
    */


}

// ========================================================================================
// Aqui são feitas as declarações dos elementos, é aqui que fazemos o mapeamento dos campos