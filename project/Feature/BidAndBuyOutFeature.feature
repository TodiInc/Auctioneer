
Feature: Bids and BuyOuts

  Scenario Outline: Bids
    Given User opens bids and buy outs screen 
    When User types in his username in bids and buy outs <name>
    And User selects the item he wants to bid on or buy out <id>
    And User types in bid price <bid>
    And User clicks on bid button
    Then Sees bid and buy out message <message>

    Examples: 
      | name  | id | bid | message  |
      |"name1"|  0 | 53 | "Bid has been made" |
      |"asoidfnajscn"|  0 | 53 | "Such a user does not exist" |
      |"name1"|  0 | 0 | "Bid price should be higher than zero" |
      |"name1"|  0 | 5178519851978155132978 | "User does not have that amount of money" |
      |"name1"|  6234 | 24 | "Auctioned item does not exist" |
      
  Scenario Outline: BuyOuts
    Given User opens bids and buy outs screen 
    When User types in his username in bids and buy outs <name>
    And User selects the item he wants to bid on or buy out <id>
    And User clicks on buy out button
    Then Sees bid and buy out message <message>

    Examples: 
      | name  | id | message  |
      |"name1"|  0 | "Thank you for your purchase" |
      |"name0"|  0 | "Not enough money!" |
