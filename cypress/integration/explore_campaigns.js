import MainPage  from "../page_object_model/main_page";


context('Explore campaigns', () => {
    before(()=>{
        cy.fixture('users').as('user')
    })
    
    it('Explore campaigns by category successfully',function () {
       var mainPage = new MainPage();
        mainPage
            .visit()
            .login(this.user.email,this.user.password)
            .exploreCampaignCategoryByText("Audio")
            .getLabel()
            .should("eq","Audio");
    })
    
    })