package models;

public class Bid {

    public Bid() {
    }

    @SuppressWarnings("unused")
	private User user;
    private float bidPrice;
    public AuctionItem auctionItem;
    
    public Bid (User user, float bidPrice, AuctionItem auctionItem) {
    	this.user = user;
    	this.bidPrice = bidPrice;
    	this.auctionItem = auctionItem;
    }

    public User getUser() {
        // TODO implement here
        return null;
    }

    public void setUser(User user) {
        // TODO implement here
        this.user = user;
    }

    public float getBidPrice() {
        // TODO implement here
        return bidPrice;
    }

    public void setBidPrice(float bidPrice) {
        // TODO implement here
        this.bidPrice = bidPrice;
    }

}