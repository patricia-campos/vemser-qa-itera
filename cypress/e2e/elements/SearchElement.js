export default class SearchElement {


    urlSearch() {return 'https://itera-qa.azurewebsites.net/Dashboard'}

    nameOrEmailField() {return '#searching'}

    searchBtn() {return 'body > div > div > form > input.btn.btn-secondary.my-2.my-sm-0'}

    validaSearchComSucesso() {return 'body > div > div > table > tbody > tr:nth-child(2) > td:nth-child(1)'} //validar pela quantidade

    validaSearchSemSucesso() {return 'body > div > div > table > tbody > tr:nth-child(2) > td'} //No Match string

}