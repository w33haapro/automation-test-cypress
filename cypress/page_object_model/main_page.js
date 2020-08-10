import BasePage from "./base_page";
import ProfilePage from "./profile_page";
import ExploreCampainsPage from "./explore_campaigns_page";

class MainPage extends BasePage{
    visit() {
        cy.visit('');
        return this;
      }
      goToProfilePage(){
        cy.get(this.userIcon).click();
        var profileSelection = cy.get(this.userIconProfileDropdown);
        profileSelection.click();
        return new ProfilePage();
     }
     exploreCampaignCategoryByText(categoryName){
      cy.wait(2000);
      cy.get(this.exploreBtn).click();
      cy.get(this.categoriesBtn).contains(categoryName).click();
      return new ExploreCampainsPage();
    }
}

export default MainPage;