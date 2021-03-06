package services;

import java.time.LocalDateTime;
import java.util.ArrayList;

import models.AuctionItem;
import models.Bid;
import models.Item;
import models.User;

public class DbService {

	private static ArrayList<User> users = new ArrayList<User>();
	private static ArrayList<AuctionItem> auctionItems = new ArrayList<AuctionItem>();
	private static ArrayList<Bid> bids = new ArrayList<Bid>();
	
	public static AuctionItem getAuctionItemById(int id)
	{
		if(id>=auctionItems.size()) {
			return null;
		}
		return auctionItems.get(id);
	}
	
	public static User getUser(String username) {
		if(users.size()<=0) {
			generate();
		}
		for (User u: users)
		{
			if(u.getUsername().equals(username)) {
				return u;
			}
		}
		return null;
	}
	
	private static void generate()
	{
		User user = new User();
		AuctionItem auctionItem = new AuctionItem();
		
		for(int i=0; i<5; i++) {
			user = new User("name" + i, "password" + i);
			user.setMoney(i*999);
			user.addItems(new Item("name" + i, i * 999, i * 999, i * 999, i+1));
			users.add(user);
			auctionItem = new AuctionItem(user.getItems().get(0), LocalDateTime.now(), i*999, user);
			auctionItems.add(auctionItem);
		}
	}
	
	public static void addAuction(AuctionItem aI) {
		auctionItems.add(aI);
	}
	public static void addBid(Bid bid){
		bids.add(bid);
	}
	
	// get methods
	
	public static ArrayList<User> getUsers()
	{
		if(users.size() <= 0) {
			generate();
		}
		return users;
	}
	public static ArrayList<Bid> getBids(AuctionItem aI){
		ArrayList<Bid> results = new ArrayList<Bid>();
		for(Bid b: bids) {
			if(b.auctionItem == aI) {
				results.add(b);
			}
		}
		return results;
	}	
	public static ArrayList<AuctionItem> getAuctionItems()
	{
		if(auctionItems.size() <= 0) {
			generate();
		}
		return auctionItems;
	}
}
