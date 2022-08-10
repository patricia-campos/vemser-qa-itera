import Utils from "../utils/utils";
const utils = new Utils  


import SearchElement from "../elements/SearchElement";

const searchElement = new SearchElement



export default class SearchPage {

    abrirNavegador() {
        utils.navegar(searchElement.urlSearch());
    }

    preencherBuscaNomeValida() {
        utils.preencherInput(searchElement.nameOrEmailField(), 'shine A')
    } 

    preencherBuscaEmailValida() {
        utils.preencherInput(searchElement.nameOrEmailField(), 'xyz@itera.com')
    }

    preencherBuscaInvalido() {
        utils.preencherInput(searchElement.nameOrEmailField(), '000')
    } 

    preencherBuscaVazio() {
        utils.preencherInput(searchElement.nameOrEmailField(), '')
    } 

    clicarSearch() {
        utils.click(searchElement.searchBtn());
    }

    // Validações:

    validarBuscaComSucesso() {
        utils.validarText(searchElement.validaSearchComSucesso(), 'shine A')
    }

    validarBuscaSemSucesso() {
        utils.validarText(searchElement.validaSearchSemSucesso(), 'No Match')
    }

}