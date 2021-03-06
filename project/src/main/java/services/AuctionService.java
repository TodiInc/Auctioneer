package services;

import java.time.LocalDateTime;

import models.AuctionItem;
import models.Bid;
import models.Item;
import models.User;

public class AuctionService {

	
    public static String buyOutItem(AuctionItem aI, User user) {
        // TODO implement here
    	
    	Item item = new Item("Excalibur", 100, 100, 500, 1);
    	
    	aI.setBuyOutPrice(100);
        if(aI.getBuyOutPrice()> user.getMoney())
        	return "Not enough money!" ;
        else {
        	user.addItems(item);
        	return "Thank you for your purchase";
        }
    }
    
    public static String createBid (AuctionItem aI, User user, float bidPrice) {
    	if(user == null)
    	{
    		return "Such a user does not exist";
    	}
    	
    	if(aI == null)
    	{
    		return "Auctioned item does not exist";
    	}
    	
    	if(user.getMoney() < bidPrice) {
    		return "User does not have that amount of money";
    	}
    	
    	if(bidPrice <= 0) {
    		return "Bid price should be higher than zero";
    	}
    	
    	Bid bid = new Bid(user, bidPrice, aI);
    	
    	DbService.addBid(bid);
    	
    	return "Bid has been made";
    	
    }
    
    public static String createAuction(User user,Item item, float buyOutPrice) {
    	
    	if(user == null)
    	{
    		return "Such a user does not exist";
    	}
    	
    	if(user == null || item == null)
    	{
    		return "Auctioned item does not exist";
    	}
    	
    	if(buyOutPrice <= 0) {
    		return "Price must be higher than 0, this is not a gift shop";
    	}
    	
    	AuctionItem aI = new AuctionItem(item, LocalDateTime.now(), buyOutPrice, user);
    	DbService.addAuction(aI);
    	
    	return "Auction created";
    }
	
}
