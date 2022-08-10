export default class DeleteElement {


    urlDelete() {return 'https://itera-qa.azurewebsites.net/Dashboard'}

    firstDeleteBtn() {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > a.btn.btn-outline-danger'}

    secondDeleteBtn() {return 'body > div > div > form > div > input'}

    validaDeleteComSucesso() {return 'body > div > div > table > tbody > tr:nth-child(2) > td'}
}

