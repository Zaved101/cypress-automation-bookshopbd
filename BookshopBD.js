/// <reference types="cypress"/>
describe('bookshopbd', () => {
    it('TC01_visitingSite', () => {
        cy.visit('https://bookshopbd.com/')
  
         cy.title().should('eq','Buy Books Online at Best Price in Bangladesh - BookShopBD.com - বুকশপবিডি')
    })
    it('TC02_clickWriterFromMenu',()=>
    {
         cy.visit('https://bookshopbd.com/')
         cy.get('#menu-item-11310').click()
         cy.get(".lazy-load-active[alt='হুমায়ূন আহমেদ']").click()
    })
    it('TC03_dropdownFilter',() =>
     {
          cy.visit('https://bookshopbd.com/c/authors/humayun-ahmed/')
          cy.get('.select2-selection__arrow').click()
          cy.get('.select2-hidden-accessible').select('হুমায়ূন আহমেদ',{ force: true })

    })
    
    it('TC04_addTocartProcess1',() =>
     {
          cy.visit('https://bookshopbd.com/c/authors/humayun-ahmed/')
          cy.get('.select2-selection__arrow').click()
          cy.get('.select2-hidden-accessible').select('হুমায়ূন আহমেদ',{ force: true })
          cy.get('body.archive.tax-product_cat.term-humayun-ahmed.term-261.theme-flatsome.woocommerce.woocommerce-page.woocommerce-js.full-width.box-shadow.lightbox.nav-dropdown-has-arrow.nav-dropdown-has-shadow.nav-dropdown-has-border.parallax-mobile:nth-child(2) div.row.category-page-row div.col.large-9:nth-child(2) div.shop-container div.products.row.row-small.large-columns-4.medium-columns-3.small-columns-2.has-shadow.row-box-shadow-1.row-box-shadow-3-hover.has-equal-box-heights.equalize-box div.product-small.col.has-hover.product.type-product.post-5551.status-publish.first.instock.product_cat-humayun-ahmed.product_cat-121.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple div.col-inner div.product-small.box div.box-image div.image-none:nth-child(1) a:nth-child(1) > img.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail.lazy-load-active').trigger('{mouseover}')
          cy.get('body.archive.tax-product_cat.term-humayun-ahmed.term-261.theme-flatsome.woocommerce.woocommerce-page.woocommerce-js.full-width.box-shadow.lightbox.nav-dropdown-has-arrow.nav-dropdown-has-shadow.nav-dropdown-has-border.parallax-mobile:nth-child(2) div.row.category-page-row div.col.large-9:nth-child(2) div.shop-container div.products.row.row-small.large-columns-4.medium-columns-3.small-columns-2.has-shadow.row-box-shadow-1.row-box-shadow-3-hover.has-equal-box-heights.equalize-box div.product-small.col.has-hover.product.type-product.post-5551.status-publish.first.instock.product_cat-humayun-ahmed.product_cat-121.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple div.col-inner div.product-small.box div.box-image div.image-tools.grid-tools.text-center.hide-for-small.bottom.hover-slide-in.show-on-hover:nth-child(4) a.add-to-cart-grid.no-padding.is-transparent.product_type_simple.add_to_cart_button.ajax_add_to_cart div.cart-icon.tooltip.is-small.tooltipstered > strong:nth-child(1)').invoke('show')
          cy.contains('+').click({force: true})
          cy.get('.checkout-button').click() 
          cy.get('[name="billing_first_name"]').type('xyz')
          cy.get('#billing_last_name').type('abc')
          cy.get('#billing_country').select('Bangladesh','{force: true}').should('have.value','BD') 
          cy.get('#billing_address_1').type('abc')
          cy.get('#billing_city').type('Dhaka')
          cy.get('#billing_state').select('Dhaka','{force: true}')
          cy.get('#billing_postcode').type('1111')
          cy.get('#billing_phone').type('11111111')
          cy.get('#billing_email').type('abc@abc.com')
          
     })
     it('TC05_AddtoCart2_andCheckout',()=>
    {
          cy.visit('https://bookshopbd.com/c/authors/humayun-ahmed/')
          cy.get('.select2-selection__arrow').click()
          cy.get('.select2-hidden-accessible').select('হুমায়ূন আহমেদ',{ force: true })
          cy.get('body.archive.tax-product_cat.term-humayun-ahmed.term-261.theme-flatsome.woocommerce.woocommerce-page.woocommerce-js.full-width.box-shadow.lightbox.nav-dropdown-has-arrow.nav-dropdown-has-shadow.nav-dropdown-has-border.parallax-mobile:nth-child(2) div.row.category-page-row div.col.large-9:nth-child(2) div.shop-container div.products.row.row-small.large-columns-4.medium-columns-3.small-columns-2.has-shadow.row-box-shadow-1.row-box-shadow-3-hover.has-equal-box-heights.equalize-box div.product-small.col.has-hover.product.type-product.post-5551.status-publish.first.instock.product_cat-humayun-ahmed.product_cat-121.has-post-thumbnail.shipping-taxable.purchasable.product-type-simple div.col-inner div.product-small.box div.box-image div.image-none:nth-child(1) a:nth-child(1) > img.attachment-woocommerce_thumbnail.size-woocommerce_thumbnail.lazy-load-active').click()
          //cy.get('[href="https://bookshopbd.com/p/debi-by-humayun-ahmed/"]', '{multiple: false}').click()
          cy.get('[name="add-to-cart"]').click()
          cy.get('.checkout-button').click() 
          cy.get('#billing_first_name').type('xyz')
          cy.get('#billing_last_name').type('abc')
          cy.get('#billing_country').select('Bangladesh','{force: true}').should('have.value','BD') 
          cy.get('#billing_address_1').type('abc')
          cy.get('#billing_city').type('Dhaka')
          cy.get('#billing_state').select('Dhaka','{force: true}')
          cy.get('#billing_postcode').type('1111')
          cy.get('#billing_phone').type('11111111')
          cy.get('#billing_email').type('abc@abc.com')  
     })

  })