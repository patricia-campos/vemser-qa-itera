
import DeletePage from "../pages/DeletePage";

const deletePage = new DeletePage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;

import SearchPage from "../pages/SearchPage";

const searchPage = new SearchPage;

import CreateCustomerPage from "../pages/CreateCustomerPage";

const createCustomerPage = new CreateCustomerPage;


context('Deletar usuário', () => {

    it('Deletar usuário com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    createCustomerPage.abrirNavegador();
    createCustomerPage.preencherNameDelete();
    createCustomerPage.preencherCompany();
    createCustomerPage.preencherAddress();
    createCustomerPage.preencherCity();
    createCustomerPage.preencherPhone();
    createCustomerPage.preencherEmail();
    createCustomerPage.clicarCreate();
    createCustomerPage.validarCreateCostumerComSucesso();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaDelete();
    searchPage.clicarSearch();

    deletePage.clicarDelete();
    deletePage.clicarSegundoDelete();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaDelete();
    searchPage.clicarSearch();

    deletePage.validarDeleteComSucesso();
    
})

it('Deletar usuário sem sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    createCustomerPage.abrirNavegador();
    createCustomerPage.preencherNameDelete();
    createCustomerPage.preencherCompany();
    createCustomerPage.preencherAddress();
    createCustomerPage.preencherCity();
    createCustomerPage.preencherPhone();
    createCustomerPage.preencherEmail();
    createCustomerPage.clicarCreate();
    createCustomerPage.validarCreateCostumerComSucesso();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaDelete();
    searchPage.clicarSearch();

    deletePage.clicarDelete();
    deletePage.clicarSegundoDelete();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaDelete();
    searchPage.clicarSearch();

    deletePage.validarDeleteComSucesso();
    
})

})