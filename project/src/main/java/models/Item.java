package models;

public class Item {
	
    private String name;
    private int requiredLevel;
    private int durability;
    private int itemLevel;
    private int id;

    public Item(String name, int requiredLevel, int durability, int itemLevel, int id){
    	
    	this.name = name;
    	this.requiredLevel = requiredLevel;
    	this.durability = durability;
    	this.itemLevel = itemLevel;
    	this.id = id;
    	
    }
    
    public String getName() {
        // TODO implement here
        return name;
    }

    public void setName(String name) {
        // TODO implement here
    	this.name = name;
    }

    public int getRequiredLevel() {
        // TODO implement here
        return requiredLevel;
    }

    public void setRequiredLevel(int rLevel) {
        // TODO implement here
        this.requiredLevel = rLevel;
    }

    public int getDurability() {
        // TODO implement here
        return durability;
    }

    public void setDurability(int durability) {
        // TODO implement here
        this.durability = durability;
    }

    public int getItemLevel() {
        // TODO implement here
        return itemLevel;
    }

    public void setItemLevel(int iLevel) {
        // TODO implement here
        this.itemLevel = iLevel;
    }

    public int getId() {
        // TODO implement here
        return id;
    }

}