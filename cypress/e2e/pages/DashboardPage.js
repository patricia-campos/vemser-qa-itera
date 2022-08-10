import Utils from "../utils/utils";
const utils = new Utils  


import DashboardElement from "../elements/DashboardElement";
const dashboardElement = new DashboardElement

export default class DashboardPage {

    // Criar novo 

    abrirNavegador() {
        utils.navegar(dashboardElement.urlDashboard());
    }

    clicarCreateNew() {
        utils.click(dashboardElement.createNewBtn());
    }

    // Validações:

    validarAcessoCreateComSucesso() {
        utils.validarText(dashboardElement.validaAcessoCreateComSucesso(), 'Create')
    }
    

}