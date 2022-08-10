import Utils from "../utils/utils";
const utils = new Utils  


import SearchElement from "../elements/SearchElement";

const searchElement = new SearchElement



export default class SearchPage {

    abrirNavegador() {
        utils.navegar(searchElement.urlSearch());
    }

    preencherBuscaNomeValida() {
        utils.preencherInput(searchElement.nameOrEmailField(), 'Alanis Almeida')
    } 

    preencherBuscaDelete() {
        utils.preencherInput(searchElement.nameOrEmailField(), 'Serei Deletado')
    }

    preencherBuscaEdit() {
        utils.preencherInput(searchElement.nameOrEmailField(), 'Serei Editado')
    }

    preencherBuscaEditAfter() {
        utils.preencherInput(searchElement.nameOrEmailField(), 'Fui Editado')
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
        utils.validarText(searchElement.validaSearchComSucesso(), 'Alanis Almeida')
    }

    validarBuscaEditComSucesso() {
        utils.validarText(searchElement.validaSearchComSucesso(), 'Fui Editado')
    }
    
    validarBuscaSemSucesso() {
        utils.validarText(searchElement.validaSearchSemSucesso(), 'No Match')
    }

}