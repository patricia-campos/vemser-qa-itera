import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;


context('Efetuar login', () => {

    it('logar com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
    loginPage.validarLoginComSucesso();

})

it('logar sem sucesso campo vazio', () => {

    loginPage.abrirNavegador();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
    loginPage.validarLoginSemSucesso();

})

it('logar sem sucesso password erradfo', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername
    loginPage.preencherPasswordErrado();
    loginPage.clicarLogin();
    loginPage.validarLoginSemSucesso();

})




})