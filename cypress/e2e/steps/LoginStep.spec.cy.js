import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;


context('Efetuar login com Sucesso', () => {

    it('logar com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
    loginPage.validarLoginComSucesso();

})
})