package models;

import services.AuctionService;

public class BidAndBuyOutModel {
	
	private User user;
	private AuctionItem auctionItem;
	private float bidPrice;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Bid and BuyOut windown is opened.");
	}

	public void setUsername(User user) {
		this.user = user;
	}

	public void setAuctionItem(AuctionItem auctionItem) {
		this.auctionItem = auctionItem;
	}

	public void setBidPrice(float bidPrice) {
		this.bidPrice = bidPrice;
	}
	
	public void clickBuyOutButton() {
		message = AuctionService.buyOutItem(auctionItem, user);
	}
	
	public void clickBidButton() {
		message = AuctionService.createBid(auctionItem, user, bidPrice);
	}

	public String getMessage() {
		return message;
	}
}
