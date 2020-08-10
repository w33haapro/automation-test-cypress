import BasePage from "./base_page";

class ProfilePage extends BasePage {
    accountNameLabel = ".i-profileHeader-accountName";

    getAccountName(){
        var accountName = cy.get(this.accountNameLabel).invoke("text");
        return accountName;
    }
}

export default ProfilePage;