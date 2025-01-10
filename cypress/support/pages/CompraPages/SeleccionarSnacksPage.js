class SeleccionarSnacksPage {

    getAgregarUnoButton(){
        return cy.get('button').contains('+')
    }

    getSiguienteButton(){
        return  cy.get('span').contains('Siguiente').parent()
    }

}

export default SeleccionarSnacksPage