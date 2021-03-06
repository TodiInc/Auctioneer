package project;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.BidAndBuyOutModel;
import services.DbService;

public class BidAndBuyOutSteps {
	BidAndBuyOutModel bidAndBuyOutScreen = new BidAndBuyOutModel();

	@Given("^User opens bids and buy outs screen$")
	public void openAuctionScreen() throws Throwable {
		bidAndBuyOutScreen.navigateToMe();
	}

	@When("^User types in his username in bids and buy outs \"([^\"]*)\"$")
	public void addUsername(final String username) throws Throwable {
		bidAndBuyOutScreen.setUsername(DbService.getUser(username));
	}

	@When("^User selects the item he wants to bid on or buy out (\\d+)$")
	public void addAuction(final int id) throws Throwable {
		bidAndBuyOutScreen.setAuctionItem(DbService.getAuctionItemById(id));
	}
	
	@When("^User types in bid price (\\d+)$")
	public void addBidPrice(final float bidPrice) throws Throwable {
		bidAndBuyOutScreen.setBidPrice(bidPrice);
	}

	@When("^User clicks on buy out button$")
	public void clickBuyOutButton() throws Throwable {
		bidAndBuyOutScreen.clickBuyOutButton();
	}
	
	@When("^User clicks on bid button$")
	public void clickBidButton() throws Throwable {
		bidAndBuyOutScreen.clickBidButton();
	}

	@Then("^Sees bid and buy out message \"([^\"]*)\"$")
	public void checkMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, bidAndBuyOutScreen.getMessage());
	}
}
