import CreateCustomerPage from "../pages/CreateCustomerPage";

const createCustomerPage = new CreateCustomerPage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;


context('Criar usuário com Sucesso', () => {

    it('criar usuário com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();

    createCustomerPage.abrirNavegador();
    createCustomerPage.preencherName();
    createCustomerPage.preencherCompany();
    createCustomerPage.preencherAddress();
    createCustomerPage.preencherCity();
    createCustomerPage.preencherPhone();
    createCustomerPage.preencherEmail();
    createCustomerPage.clicarCreate();

    /*
    signUpPage.validarCadastro();
    */

})
})
