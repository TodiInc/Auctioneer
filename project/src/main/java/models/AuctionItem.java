package models;

import java.time.LocalDateTime;
import java.util.*;

public class AuctionItem {
	
    private Item item;
    private LocalDateTime endTime;
    private float buyOutPrice;
    private User user;
    @SuppressWarnings("unused")
	private Set<Bid> bids;

    public AuctionItem() {
    	
    }
    public AuctionItem(Item item, LocalDateTime endTime, float buyOutPrice, User user) {
    	 this.item = item;
    	 this.endTime = endTime;
    	 this.buyOutPrice = buyOutPrice;
    	 this.user = user;
    }
    
    public Item getItem() {
        // TODO implement here
        return item;
    }

    public void setItem(Item item) {
    	// TODO implement here
        this.item = item;
    }

    public LocalDateTime getEndTime() {
        // TODO implement here
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        // TODO implement here
        this.endTime = endTime;
    }

    public float getBuyOutPrice() {
        // TODO implement here
        return buyOutPrice;
    }

    public void setBuyOutPrice(float buyOutPrice) {
        // TODO implement here
        this.buyOutPrice = buyOutPrice;
    }

    public User getUser() {
        // TODO implement here
        return user;
    }

    public void setUser(User user) {
        // TODO implement here
        this.user = user;
    }

}