import EditPage from "../pages/EditPage";

const editPage = new EditPage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;

import CreateCustomerPage from "../pages/CreateCustomerPage";

const createCustomerPage = new CreateCustomerPage;

import SearchPage from "../pages/SearchPage";

const searchPage = new SearchPage;

context('Editar usuário', () => {

    it('Editar usuário com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    createCustomerPage.abrirNavegador();
    createCustomerPage.preencherNameEdit();
    createCustomerPage.preencherCompany();
    createCustomerPage.preencherAddress();
    createCustomerPage.preencherCity(); 
    createCustomerPage.preencherPhone();
    createCustomerPage.preencherEmail();
    createCustomerPage.clicarCreate();
    createCustomerPage.validarCreateCostumerComSucesso();

    searchPage.abrirNavegador();
    searchPage.preencherBuscaEdit();
    searchPage.clicarSearch();

    editPage.clicarEdit();
    editPage.preencherName();
    editPage.preencherCompany();
    editPage.preencherAddress();
    editPage.preencherCity();
    editPage.preencherPhone();
    editPage.preencherEmail();
    editPage.clicarSave();

    //Valida a busca
    searchPage.abrirNavegador();
    searchPage.preencherBuscaEditAfter();
    searchPage.clicarSearch();
    searchPage.validarBuscaEditComSucesso();
    
})

/*

it('Editar usuário sem sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    ACEITA TUDO, VER COMO FAZER CENÁRIO SEM SUCESSO
    
})
*/

})