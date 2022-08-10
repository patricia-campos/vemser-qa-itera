import DashboardPage from "../pages/DashboardPage";

const dashboardPage = new DashboardPage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;

//=======================================================================================

context('Acessar página create new com Sucesso', () => {

    it('acessar Create New', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
        
    dashboardPage.abrirNavegador();
    dashboardPage.clicarCreateNew();
    dashboardPage.validarAcessoCreateComSucesso();

})
})

//=======================================================================================

context('Acessar Search com Sucesso', () => {

    it('acessar Search', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
        
    dashboardPage.abrirNavegador();
    dashboardPage.preencherName();
    dashboardPage.clicarSearch();
    dashboardPage.validarAcessoSearchComSucesso();

})
})

//=======================================================================================

context('Acessar página edit com Sucesso', () => {

    it('acessar Edit', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
        
    dashboardPage.abrirNavegador();
    dashboardPage.clicarEdit();
    dashboardPage.validarAcessoEditComSucesso();

})
})