class HomePage {

    getComplejosDropDown(){
        return  cy.get('option').contains('Todos los complejos').parent()
    }

    getCategoriasDropDown(){
        return  cy.get('option').contains('Todas las categorías')
    }
    getIdiomaButton(idioma){
        return  cy.get('button').contains(idioma)
    }
    getFormatoButton(formato){
        return  cy.get('button').contains(formato)
    }

    getPeliculaResultadoFiltro(pelicula){
        return cy.get('h4').contains(pelicula)
    }
}

export default HomePage