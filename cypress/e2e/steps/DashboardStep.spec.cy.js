import DashboardPage from "../pages/DashboardPage";

const dashboardPage = new DashboardPage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;

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
