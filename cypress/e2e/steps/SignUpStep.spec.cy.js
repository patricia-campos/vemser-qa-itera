import SignUpPage from "../pages/SignUpPage";

const signUpPage = new SignUpPage;


context('Cadastrar Usuário', () => {

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

it('cadastrar sem sucesso nome vazio', () => {

    signUpPage.abrirNavegador();
    signUpPage.preencherSurname();
    signUpPage.preencherEPost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsername();
    signUpPage.preencherPassword();
    signUpPage.preencherConfirmPassword();
    signUpPage.clicarSubmit();
    signUpPage.validarSignUpSemSucessoVazio();
    
})

it('cadastrar sem sucesso sobrenome vazio', () => {

    signUpPage.abrirNavegador();
    signUpPage.preencherFirstName();
    signUpPage.preencherEPost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsername();
    signUpPage.preencherPassword();
    signUpPage.preencherConfirmPassword();
    signUpPage.clicarSubmit();
    signUpPage.validarSignUpSemSucessoSurnameVazio();
    
})

it('cadastrar sem sucesso password diferente', () => {

    signUpPage.abrirNavegador();
    signUpPage.preencherFirstName();
    signUpPage.preencherSurname();
    signUpPage.preencherEPost();
    signUpPage.preencherMobile();
    signUpPage.preencherUsername();
    signUpPage.preencherPassword();
    signUpPage.preencherConfirmPasswordDiferente();
    signUpPage.clicarSubmit();
    signUpPage.validarSignUpSemSucessoPassword();
    
})


})

