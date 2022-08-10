export default class SignUpElement {


    url() {return 'https://itera-qa.azurewebsites.net/UserRegister/NewUser'}

    firstNameField() {return '#FirstName'}

    surnameField() {return '#Surname'}

    epostField() {return '#E_post'}

    mobileField() {return '#Mobile'}

    usernameField() {return '#Username'}

    passwordField() {return '#Password'}

    confirmPasswordField() {return '#ConfirmPassword'}

    submitBtn() {return '#submit'}

    // Validações:                                     

    validaSignUpComSucesso() {return 'body > div > form > div > div:nth-child(11) > div > label'}

}