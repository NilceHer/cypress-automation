describe('Iniciar sesión', () => {
  it('debe permitir al usuario iniciar sesión correctamente', () => {
    cy.visit('https://dev-gh.eko-igt.com/my-account/')

    // Ingresar credenciales
    cy.get('#username').type('CarantantasSas@igt-glasshardware.com');
    cy.get('#password').type('Prueba123'); // 

    // Hacer clic en el botón de inicio de sesión
    cy.get('button[name="login"]').click();

    // Asegúrate de que el inicio de sesión fue exitoso
    cy.url().should('include', '/my-account/');
  });

});

describe('Retomar Compra', () => {
  it('Retomar compra existente', () => {
    cy.visit('https://dev-gh.eko-igt.com/my-account/')
    // Ingresar credenciales
    cy.get('#username').type('CarantantasSas@igt-glasshardware.com');
    cy.get('#password').type('Prueba123'); // 
    // Hacer clic en el botón de inicio de sesión
    cy.get('button[name="login"]').click();
    // Asegúrate de que el inicio de sesión fue exitoso
    cy.url().should('include', '/my-account/');
    //Ver el carrito
    cy.get('#masthead > div.site-header-outer > div.site-header-inner > div.container > div > div.header-component-outer.header-right > div > div.header_component.header_component--cart.la_compt_iem.la_com_action--cart.aCart > a', 
      { includeShadowDom: true }
     )
     .click()
     //Iniciar al carrito
     cy.get('a[class="button wc-forward"]').click()
     //Procesar pago
     cy.get('a[class="checkout-button button alt wc-forward"]').click()
     //Detalle del pago
     cy.get('textarea[id="order_comments"]').type('Caso excepcional')
     cy.wait(5000)
     cy.get('button[value="Place order"]').click()
  });

});

describe('Ver Ordenes', () => {
  it('Validar Ordenes', () => {
    cy.visit('https://dev-gh.eko-igt.com/my-account/')
    // Ingresar credenciales
    cy.get('#username').type('CarantantasSas@igt-glasshardware.com');
    cy.get('#password').type('Prueba123'); // 
    // Hacer clic en el botón de inicio de sesión
    cy.get('button[name="login"]').click();
    // Asegúrate de que el inicio de sesión fue exitoso
    cy.url().should('include', '/my-account/');
    //Ver Ordenes
     cy.get('a[href="https://dev-gh.eko-igt.com/my-account/client-orders/"]').contains('Orders').click({force: true})
     cy.scrollTo(0,500)
  });

});
//Casos Mobile
describe('Primer Test - Notify Me', () => {
  it('Pruebas Mobile', () => {
    //cy.viewport('iphone-15-ProMax', 'landscape')
    cy.viewport(1000,1194)
    cy.visit('https://dev-gh.eko-igt.com/my-account/')

    //Inicio de sesión
    cy.get('#username').type('nilce11.22@hotmail.com')
    cy.get('#password').type('prueba123')
    cy.get('button[name="login"]').click()
    //Ingresar a Shower Door Hardware y Grid Pattern
    cy.wait(3000)
    cy.get('a[class="mega-menu-link"]').contains('Shower Door Hardware').click()
    cy.wait(2000);
    cy.get('a[class="mega-menu-link"]').contains('Grid Pattern').click()
    //Seleccionamos el producto
    cy.get('img[src="https://dev-gh.eko-igt.com/wp-content/uploads/2022/12/38SDU144-MB.jpg"]').click()
    //Pedimos que nos notifique una vez se encuentre disponible de nuevo
    cy.get('span[class="notify-me"]').click()
  })
})

describe('Segundo Test - Agregar más productos', () => {
  it('Pruebas Mobile', () => {
    //cy.viewport('iphone-15-ProMax', 'landscape')
    cy.viewport(1000,1194)
    cy.visit('https://dev-gh.eko-igt.com/my-account/')  

    //Inicio de sesión
    cy.get('#username').type('nilce11.22@hotmail.com')
    cy.get('#password').type('prueba123')
    cy.get('button[name="login"]').click()
    //Ver el carrito
    cy.get('#masthead > div.site-header-outer > div.site-header-inner > div.container > div > div.header-component-outer.header-right > div > div.header_component.header_component--cart.la_compt_iem.la_com_action--cart.aCart > a', 
      { includeShadowDom: true }
     )
     .click()
     //Iniciar al carrito
     cy.get('a[class="button wc-forward"]').click()
     //Agregar una existencias más
     cy.get('span[class="qty-plus"]').click({ multiple: true })
  })
})

describe('Tercer Test - Agregar diferentes productos', () => {
  it('Pruebas Mobile', () => {
    //cy.viewport('iphone-15-ProMax', 'landscape')
    cy.viewport(1000,1194)
    cy.visit('https://dev-gh.eko-igt.com/my-account/')  

    //Inicio de sesión
    cy.get('#username').type('nilce11.22@hotmail.com')
    cy.get('#password').type('prueba123')
    cy.get('button[name="login"]').click()
    //Ingresar a Heavy
    cy.wait(6000)
    cy.get('a[class="mega-menu-link"]').contains('Architectural Hardware').click()
    cy.wait(2000)
    cy.get('a[class="mega-menu-link"]').contains('Heavy Glass "U" Channel').click()
    cy.wait(2000)
    cy.get('img[src="https://dev-gh.eko-igt.com/wp-content/uploads/2022/12/U1X112-120-CP.jpg"]').click()
    cy.wait(3000)
    cy.get('button[name="add-to-cart"]').click()
    cy.wait(6000)
    cy.get('a[class="button wc-forward"]').click()
   

  })
})

