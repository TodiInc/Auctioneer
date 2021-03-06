package project;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.AuctionScreenModel;
import services.DbService;

public class AuctionSteps {
	AuctionScreenModel auctionScreen = new AuctionScreenModel();

	@Given("^User Opens Auction screen$")
	public void openAuctionScreen() throws Throwable {
		auctionScreen.navigateToMe();
	}

	@When("^User types in his username in auction \"([^\"]*)\"$")
	public void addUsername(final String username) throws Throwable {
		auctionScreen.setUsername(DbService.getUser(username));
	}

	@When("^User selects item to be auctioned off (\\d+)$")
	public void addAuctionItem(final int id) throws Throwable {
		auctionScreen.setItem(id);
	}
	
	@When("^User types in buy out price (\\d+)$")
	public void addBuyOutPrice(final float buyOutPrice) throws Throwable {
		auctionScreen.setBuyOutPrice(buyOutPrice);
	}

	@When("^User clicks on create auction button$")
	public void clickAuctionButton() throws Throwable {
		auctionScreen.clickCreateAuctionButton();
	}

	@Then("^Sees auction message \"([^\"]*)\"$")
	public void checkAuctionMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, auctionScreen.getAuctionMessage());
	}
	
}
