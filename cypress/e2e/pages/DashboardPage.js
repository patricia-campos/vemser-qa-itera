import Utils from "../utils/utils";
const utils = new Utils  


import DashboardElement from "../elements/DashboardElement";
const dashboardElement = new DashboardElement

export default class DashboardPage {


    abrirNavegador() {
        utils.navegar(dashboardElement.urlDashboard());
    }

    //=======================================================================================

    // ACESSAR CREATE NEW CUSTOMER

    clicarCreateNew() {
        utils.click(dashboardElement.createNewBtn());
    }

    validarAcessoCreateComSucesso() {
        utils.validarText(dashboardElement.validaAcessoCreateComSucesso(), 'Create')
    }

    //=======================================================================================

    // ACESSAR SEARCH

    preencherSearch() {
        utils.preencherInput(dashboardElement.searchField());
    }

    clicarSearch() {
        utils.click(dashboardElement.editBtn());
    }

    validarAcessoSearchComSucesso() {
        utils.validarText(dashboardElement.validaAcessoSearchComSucesso(), 'Create')
    }
    
    //=======================================================================================

    // ACESSAR EDIT

    clicarEdit() {
        utils.click(dashboardElement.editBtn());
    }

    validarAcessoEditComSucesso() {
        utils.validarText(dashboardElement.validaAcessoEditComSucesso(), 'Create')
    }
    





}