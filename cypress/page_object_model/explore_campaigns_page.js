import BasePage from "./base_page";

class ExploreCampainsPage extends BasePage{
    headerLabel = "*[gogo-test=\"header_label\"]";
    getLabel(){
       return cy.get(this.headerLabel).invoke("text");
    }
}

export default ExploreCampainsPage;