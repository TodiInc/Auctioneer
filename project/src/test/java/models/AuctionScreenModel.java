package models;

import services.AuctionService;

public class AuctionScreenModel {

	private User user;
	private Item item;
	private float buyOutPrice;
	private String message;
	
	public void navigateToMe() {
		System.out.println("Auction windown is opened.");
	}

	public void setUsername(User user) {
		this.user = user;
	}

	public void setItem(int id) {
		for(Item i: user.getItems()) {
			if(i.getId() == id) {
				item = i;
			}
		}
	}
	
	public void setBuyOutPrice(float buyOutPrice) {
		this.buyOutPrice = buyOutPrice;
	}
	
	public void clickCreateAuctionButton() {
		message = AuctionService.createAuction(user, item, buyOutPrice);
	}

	public String getAuctionMessage() {
		return message;
	}
}
