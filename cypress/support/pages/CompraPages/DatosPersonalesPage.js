class DatosPersonalesPage {
    
    getDocumentoInput(){
        return cy.get('input[placeholder="Documento (sin punto ni guión)"]')
    }

    getNombreYApellidoInput(){
        return cy.get('input[placeholder="Nombre y apellido"]')
    }
    getEmailInput(){
        return cy.get('input[formcontrolname="email"]')
    }
    getPagarButton(){
        return  cy.get('span').contains('Pagar').parent()
    }
}

export default DatosPersonalesPage