class SeleccionarAsientoPage {

    getAsientosVacios(){
        return cy.get('img[src*="butacaVaciaN"]')
    }

    getSiguienteButton(){
        return cy.get('span').contains('Siguiente').parent()
    }
}

export default SeleccionarAsientoPage