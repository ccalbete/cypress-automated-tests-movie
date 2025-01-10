class HomePage {
    // Busqueda
    getQueVasAVerDropDown(){
        return cy.get('option').contains('¿Qué vas a ver?').parent()
    }
    getDondeDropDown(){
        return cy.get('option').contains('¿Dónde?').parent()
    }
    getCuandoDropDown(){
        return cy.get('option').contains('¿Cuándo?').parent()
    }
    getAQueHoraDropDown(){
        return cy.get('option').contains('¿A qué hora?').parent()
    }
    getFormaDePagoDropDown(){
        return cy.get('option').contains('Forma de pago').parent()
    }
    getComprarButton(){
        return cy.get('button').contains('COMPRAR')
    }


    // Filtros
    getComplejosDropDown(){
        return cy.get('option').contains('Todos los complejos').parent()
    }

    getCategoriasDropDown(){
        return cy.get('option').contains('Todas las categorías')
    }
    getIdiomaButton(idioma){
        return cy.get('button').contains(idioma)
    }
    getFormatoButton(formato){
        return cy.get('button').contains(formato)
    }

    getPeliculaResultadoFiltro(pelicula){
        return cy.get('h4').contains(pelicula)
    }
}

export default HomePage