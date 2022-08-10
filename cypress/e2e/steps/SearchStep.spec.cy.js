import SearchPage from "../pages/SearchPage";

const searchPage = new SearchPage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;


context('Buscar usuário', () => {

    it('Buscar usuário com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaNomeValida();
    searchPage.clicarSearch();
    searchPage.validarBuscaComSucesso();
    
})

it('Buscar usuário sem sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaInvalido();
    searchPage.clicarSearch();
    searchPage.validarBuscaSemSucesso();
    
})


})