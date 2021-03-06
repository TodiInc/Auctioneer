Feature: Auctions

  Scenario Outline: Auctions
    Given User Opens Auction screen
    When User types in his username in auction <name>
    And User selects item to be auctioned off <id>
    And User types in buy out price <buyout>
    And User clicks on create auction button
    Then Sees auction message <message>

    Examples: 
      | name  | id | buyout | message  |
      |"name1"|  2 | 125 | "Auction created" |
      |"name1"|  2 | 0 | "Price must be higher than 0, this is not a gift shop" |
      |"name1"|  78372 | 125 | "Auctioned item does not exist" |
