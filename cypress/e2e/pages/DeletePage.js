import Utils from "../utils/utils";
const utils = new Utils  


import DeleteElement from "../elements/DeleteElement";

const deleteElement = new DeleteElement

export default class DeletePage {

    abrirNavegador() {
        utils.navegar(deleteElement.urlDelete());
    }

    clicarDelete() {
        utils.click(deleteElement.firstDeleteBtn());
    }

    clicarSegundoDelete() {
        utils.click(deleteElement.secondDeleteBtn());
    }

    // Validações:

    validarDeleteComSucesso() {
        utils.validarText(deleteElement.validaDeleteComSucesso(), 'No Match')
    }


}