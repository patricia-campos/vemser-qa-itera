import SignUpPage from "../pages/SignUpPage";

const signUpPage = new SignUpPage;


context('Cadastrar com Sucesso', () => {

    it('cadastrar com sucesso', () => {

    signUpPage.abrirNavegador();
    signUpPage.preencherFirstName();
    signUpPage.preencherSurname();
    signUpPage.preencherEPost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsername();
    signUpPage.preencherPassword();
    signUpPage.preencherConfirmPassword();
    signUpPage.clicarSubmit();
    signUpPage.validarSignUpComSucesso();
    

})
})

