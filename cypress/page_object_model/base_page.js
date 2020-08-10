class BasePage {
    loginBtn = ".layoutHeader-logIn";
    loginForm_emailInput = "#email";
    loginForm_passwordInput = "#password";
    loginForm_loginBtn = ".modalUserAuth-logIn-submitButton button";
    userIcon = "*[gogo-test=\"logged_in_name\"]";
    userIconProfileDropdown = ".layoutHeader-desktopUserMenuDropdown a:nth-of-type(2)";
    userIconLogoutDropdown = ".layoutHeader-desktopUserMenuDropdown a:nth-of-type(5)";
    exploreBtn = "a[gogo-test=\"explore_link\"]:first";
    categoriesBtn = ".layoutHeader-exploreDropdownCategories-category";
    login(username,password){
        cy.get(this.loginBtn).click();

        const usernameInput = cy.get(this.loginForm_emailInput);
        usernameInput.clear();
        usernameInput.type(username);

        const passwordInput = cy.get(this.loginForm_passwordInput);
        passwordInput.clear();
        passwordInput.type(password);
        
        cy.get(this.loginForm_loginBtn).click();
        return this;
    }

    logOut(){
      cy.wait(2000);
      cy.get(this.userIcon).click();
      var logOutBtn = cy.get(this.userIconLogoutDropdown);
      logOutBtn.click();
      return this;
    }


    isLoggedIn(userName){
      var iconName =  cy.get(this.userIcon).invoke("text");
      iconName.should('contain',userName);
      return this;
    }

    isLoggedOut(){
      cy.get(this.loginBtn).should('be.visible');
    }


 
}

export default BasePage;