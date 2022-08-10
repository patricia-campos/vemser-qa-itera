import HomePage from "../pages/HomePage";
const homePage = new HomePage;



context('Acessar página SIGN UP com sucesso', () => {

    it('acessar SignUp', () => {

    homePage.abrirNavegador();
    homePage.clicarSignUp();
    homePage.validarAcessoSignUpComSucesso();

})
})

//===========================================================================================================

context('Acessar página LOGIN com sucesso', () => {

    it('acessar Login', () => {

    homePage.abrirNavegador();
    homePage.clicarLogin();
    homePage.validarAcessoLoginComSucesso();

})
})

//===========================================================================================================
/*

Referente ao mecanismo de busca da home, porém nào está funcionando no site

context('Acessar BUSCA com sucesso', () => {

    it('acessar Busca', () => {

    homePage.abrirNavegador();
    homePage.preencherSearch();
    homePage.clicarSearch();

})
})
*/








    /*
    novoUsuarioPage.preencherUltimoNome();
    novoUsuarioPage.preencherEmail();
    novoUsuarioPage.preencherEndereco();
    novoUsuarioPage.preencherUniversidade();
    novoUsuarioPage.preencherProfissao();
    novoUsuarioPage.preencherGenero();
    novoUsuarioPage.preencherIdade();
    novoUsuarioPage.clicarCriar();

    // Validações:

    novoUsuarioPage.validarUsuarioCadastrado();
    */
   


