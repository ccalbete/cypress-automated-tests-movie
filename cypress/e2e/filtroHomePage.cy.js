import HomePage from "../support/pages/homePage"
const homePage = new HomePage()

describe('Filtro home page', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Pelicula de terror en portones 2D esp', () => {
    cy.fixture('complejos').then((complejos) => {
    homePage.getComplejosDropDown().select(complejos.portones)
    });
      homePage.getCategoriasDropDown().parent().select('Terror')
      homePage.getIdiomaButton('Esp').click()
      homePage.getFormatoButton('2D').click()

      homePage.getPeliculaResultadoFiltro('Nosferatu').should('be.visible')
  })

  it('Filtrar pelicula con datos al azar', () => {
    cy.fixture('complejos').then((complejos) => {
    homePage.getComplejosDropDown().select(complejos.portones)
    });
    cy.fixture('categorias').then(({categorias}) => {
      const categoriaRandom = categorias[Math.floor(Math.random() * categorias.length)];
      homePage.getCategoriasDropDown().parent().select(categoriaRandom)
    });
    cy.fixture('idiomas').then(({idiomas}) => {
      const idiomaRandom = idiomas[Math.floor(Math.random() * idiomas.length)];
      homePage.getIdiomaButton(idiomaRandom).click()
    });
    cy.fixture('formatos').then(({formatos}) => {
      const formatoRandom = formatos[Math.floor(Math.random() * formatos.length)];
      homePage.getFormatoButton(formatoRandom).click()
    });
  })
})