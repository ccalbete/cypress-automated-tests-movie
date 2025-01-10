import HomePage from "../support/pages/homePage"
import SeleccionarAsientoPage from "../support/pages/CompraPages/SeleccionarAsientoPage"
import SeleccionarSnacksPage from "../support/pages/CompraPages/SeleccionarSnacksPage"
import DatosPersonalesPage from "../support/pages/CompraPages/DatosPersonalesPage"
const homePage = new HomePage()
const seleccionarAsientoPage = new SeleccionarAsientoPage()
const seleccionarSnacksPage = new SeleccionarSnacksPage()
const datosPersonalesPage = new DatosPersonalesPage()

describe('Compra de ticket para una pelicula', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Comprar ticket para Sonic', () => {
    homePage.getQueVasAVerDropDown().select('Sonic 3: La Película')
    cy.fixture('complejos').then((complejos) => {
        homePage.getDondeDropDown().select(complejos.portones)
    });
    homePage.getCuandoDropDown().select('15/1/2025')
    homePage.getAQueHoraDropDown().select('150291')
    homePage.getFormaDePagoDropDown().select('Débito / Crédito')
    homePage.getComprarButton().click()

    seleccionarAsientoPage.getAsientosVacios().eq(1).click()
    seleccionarAsientoPage.getSiguienteButton().click()

    seleccionarSnacksPage.getSiguienteButton().click()

    cy.fixture('datosPersonales').then((datosPersonales) => {
        datosPersonalesPage.getDocumentoInput().type(datosPersonales.documento)
        datosPersonalesPage.getNombreYApellidoInput().type(datosPersonales.nombre)
        datosPersonalesPage.getEmailInput().type(datosPersonales.email)
    });
    
    datosPersonalesPage.getPagarButton().click()
  })
})