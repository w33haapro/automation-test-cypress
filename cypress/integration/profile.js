import MainPage from "../page_object_model/main_page";

context('Profile', () => {
    before(()=>{
        cy.fixture('users').as('user')
    })
    
    it('access profile sucessfully',function () {
       var mainPage = new MainPage();
        mainPage
            .visit()
            .login(this.user.email,this.user.password)
            .goToProfilePage()
            .getAccountName()
            .should('eq',this.user.accountName);   
    })
    
})