package models;

import java.util.ArrayList;
import java.util.List;

public class User {

    private String username;
    private String password;
    private float money;
    private ArrayList <Item> items = new ArrayList<Item>();
    
    public User()
    {
    	
    }
    
    public User(String username, String password) {
    	
    	this.username = username;
    	this.password = password;
    	
    }
    
    public String getUsername() {
        // TODO implement here
        return username;
    }

    public void setUsername(String username) {
        // TODO implement here
        this.username = username;
    }

    public String getPassword() {
        // TODO implement here
        return password;
    }

    public void setPassword(String pass) {
        // TODO implement here
        this.password = pass;
    }

    public float getMoney() {
        // TODO implement here
        return money;
    }

    public void setMoney(float money) {
        // TODO implement here
        this.money = money;
    }

    public List<Item> getItems() {
        // TODO implement here
        return items;
    }
    
    
    // functions
    
    public void addItems(Item item) {
        // TODO implement here
        this.items.add(item);
    }

}