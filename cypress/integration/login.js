import  MainPage from "../page_object_model/main_page";



context('Login', () => {
    before(()=>{
        cy.fixture('users').as('user')
    })
    
    it('login sucessfully',function () {
       var mainPage = new MainPage();
        mainPage
            .visit()
            .login(this.user.email,this.user.password)
            .isLoggedIn(this.user.userName);
    })


    })

    