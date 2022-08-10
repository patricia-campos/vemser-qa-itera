import EditPage from "../pages/EditPage";

const editPage = new EditPage;

import LoginPage from "../pages/LoginPage";

const loginPage = new LoginPage;


context('Editar usuário', () => {

    it('Editar usuário com sucesso', () => {

    loginPage.abrirNavegador();
    loginPage.preencherUsername();
    loginPage.preencherPassword();
    loginPage.clicarLogin();
    editPage.clicarEdit();
    editPage.preencherName();
    editPage.preencherCompany();
    editPage.preencherAddress();
    editPage.preencherCity();
    editPage.preencherPhone();
    editPage.preencherEmail();
    editPage.clicarSave();

    //editPage.validarEditComSucesso(); VERIFICAR VALIDAÇÃO
    
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