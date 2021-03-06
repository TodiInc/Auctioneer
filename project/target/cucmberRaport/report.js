$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AuctionFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Auctions",
  "description": "",
  "id": "auctions",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Auctions",
  "description": "",
  "id": "auctions;auctions",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Opens Auction screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User types in his username in auction \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects item to be auctioned off \u003cid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User types in buy out price \u003cbuyout\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on create auction button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sees auction message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "auctions;auctions;",
  "rows": [
    {
      "cells": [
        "name",
        "id",
        "buyout",
        "message"
      ],
      "line": 12,
      "id": "auctions;auctions;;1"
    },
    {
      "cells": [
        "\"name1\"",
        "2",
        "125",
        "\"Auction created\""
      ],
      "line": 13,
      "id": "auctions;auctions;;2"
    },
    {
      "cells": [
        "\"name1\"",
        "2",
        "0",
        "\"Price must be higher than 0, this is not a gift shop\""
      ],
      "line": 14,
      "id": "auctions;auctions;;3"
    },
    {
      "cells": [
        "\"name1\"",
        "78372",
        "125",
        "\"Auctioned item does not exist\""
      ],
      "line": 15,
      "id": "auctions;auctions;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Auctions",
  "description": "",
  "id": "auctions;auctions;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Opens Auction screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User types in his username in auction \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects item to be auctioned off 2",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User types in buy out price 125",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on create auction button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sees auction message \"Auction created\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AuctionSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 191023500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 39
    }
  ],
  "location": "AuctionSteps.addUsername(String)"
});
formatter.result({
  "duration": 13872100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "AuctionSteps.addAuctionItem(int)"
});
formatter.result({
  "duration": 601000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "125",
      "offset": 28
    }
  ],
  "location": "AuctionSteps.addBuyOutPrice(float)"
});
formatter.result({
  "duration": 142300,
  "status": "passed"
});
formatter.match({
  "location": "AuctionSteps.clickAuctionButton()"
});
formatter.result({
  "duration": 968500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auction created",
      "offset": 22
    }
  ],
  "location": "AuctionSteps.checkAuctionMessage(String)"
});
formatter.result({
  "duration": 2571300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Auctions",
  "description": "",
  "id": "auctions;auctions;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Opens Auction screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User types in his username in auction \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects item to be auctioned off 2",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User types in buy out price 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on create auction button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sees auction message \"Price must be higher than 0, this is not a gift shop\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AuctionSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 126400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 39
    }
  ],
  "location": "AuctionSteps.addUsername(String)"
});
formatter.result({
  "duration": 277200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 38
    }
  ],
  "location": "AuctionSteps.addAuctionItem(int)"
});
formatter.result({
  "duration": 79200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 28
    }
  ],
  "location": "AuctionSteps.addBuyOutPrice(float)"
});
formatter.result({
  "duration": 58200,
  "status": "passed"
});
formatter.match({
  "location": "AuctionSteps.clickAuctionButton()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price must be higher than 0, this is not a gift shop",
      "offset": 22
    }
  ],
  "location": "AuctionSteps.checkAuctionMessage(String)"
});
formatter.result({
  "duration": 45100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Auctions",
  "description": "",
  "id": "auctions;auctions;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User Opens Auction screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User types in his username in auction \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User selects item to be auctioned off 78372",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User types in buy out price 125",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User clicks on create auction button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Sees auction message \"Auctioned item does not exist\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "AuctionSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 39
    }
  ],
  "location": "AuctionSteps.addUsername(String)"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "78372",
      "offset": 38
    }
  ],
  "location": "AuctionSteps.addAuctionItem(int)"
});
formatter.result({
  "duration": 98200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "125",
      "offset": 28
    }
  ],
  "location": "AuctionSteps.addBuyOutPrice(float)"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.match({
  "location": "AuctionSteps.clickAuctionButton()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auctioned item does not exist",
      "offset": 22
    }
  ],
  "location": "AuctionSteps.checkAuctionMessage(String)"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.uri("BidAndBuyOutFeature.feature");
formatter.feature({
  "line": 2,
  "name": "Bids and BuyOuts",
  "description": "",
  "id": "bids-and-buyouts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Bids",
  "description": "",
  "id": "bids-and-buyouts;bids",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User types in his username in bids and buy outs \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects the item he wants to bid on or buy out \u003cid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User types in bid price \u003cbid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bid button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees bid and buy out message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "bids-and-buyouts;bids;",
  "rows": [
    {
      "cells": [
        "name",
        "id",
        "bid",
        "message"
      ],
      "line": 13,
      "id": "bids-and-buyouts;bids;;1"
    },
    {
      "cells": [
        "\"name1\"",
        "0",
        "53",
        "\"Bid has been made\""
      ],
      "line": 14,
      "id": "bids-and-buyouts;bids;;2"
    },
    {
      "cells": [
        "\"asoidfnajscn\"",
        "0",
        "53",
        "\"Such a user does not exist\""
      ],
      "line": 15,
      "id": "bids-and-buyouts;bids;;3"
    },
    {
      "cells": [
        "\"name1\"",
        "0",
        "0",
        "\"Bid price should be higher than zero\""
      ],
      "line": 16,
      "id": "bids-and-buyouts;bids;;4"
    },
    {
      "cells": [
        "\"name1\"",
        "0",
        "5178519851978155132978",
        "\"User does not have that amount of money\""
      ],
      "line": 17,
      "id": "bids-and-buyouts;bids;;5"
    },
    {
      "cells": [
        "\"name1\"",
        "6234",
        "24",
        "\"Auctioned item does not exist\""
      ],
      "line": 18,
      "id": "bids-and-buyouts;bids;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Bids",
  "description": "",
  "id": "bids-and-buyouts;bids;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User types in his username in bids and buy outs \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects the item he wants to bid on or buy out 0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User types in bid price 53",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bid button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees bid and buy out message \"Bid has been made\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 847500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 273500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 488000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "53",
      "offset": 24
    }
  ],
  "location": "BidAndBuyOutSteps.addBidPrice(float)"
});
formatter.result({
  "duration": 90600,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBidButton()"
});
formatter.result({
  "duration": 506200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bid has been made",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 68800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Bids",
  "description": "",
  "id": "bids-and-buyouts;bids;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User types in his username in bids and buy outs \"asoidfnajscn\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects the item he wants to bid on or buy out 0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User types in bid price 53",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bid button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees bid and buy out message \"Such a user does not exist\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asoidfnajscn",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 99500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 60700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "53",
      "offset": 24
    }
  ],
  "location": "BidAndBuyOutSteps.addBidPrice(float)"
});
formatter.result({
  "duration": 148000,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBidButton()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Such a user does not exist",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 50600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Bids",
  "description": "",
  "id": "bids-and-buyouts;bids;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User types in his username in bids and buy outs \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects the item he wants to bid on or buy out 0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User types in bid price 0",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bid button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees bid and buy out message \"Bid price should be higher than zero\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 56700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 1630900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 24
    }
  ],
  "location": "BidAndBuyOutSteps.addBidPrice(float)"
});
formatter.result({
  "duration": 59700,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBidButton()"
});
formatter.result({
  "duration": 22400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bid price should be higher than zero",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 43200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Bids",
  "description": "",
  "id": "bids-and-buyouts;bids;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User types in his username in bids and buy outs \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects the item he wants to bid on or buy out 0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User types in bid price 5178519851978155132978",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bid button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees bid and buy out message \"User does not have that amount of money\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 99100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 44400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5178519851978155132978",
      "offset": 24
    }
  ],
  "location": "BidAndBuyOutSteps.addBidPrice(float)"
});
formatter.result({
  "duration": 832100,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBidButton()"
});
formatter.result({
  "duration": 22700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "User does not have that amount of money",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 199300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Bids",
  "description": "",
  "id": "bids-and-buyouts;bids;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User types in his username in bids and buy outs \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User selects the item he wants to bid on or buy out 6234",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User types in bid price 24",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicks on bid button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees bid and buy out message \"Auctioned item does not exist\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 155900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 43800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6234",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 59800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 24
    }
  ],
  "location": "BidAndBuyOutSteps.addBidPrice(float)"
});
formatter.result({
  "duration": 52000,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBidButton()"
});
formatter.result({
  "duration": 25000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Auctioned item does not exist",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "BuyOuts",
  "description": "",
  "id": "bids-and-buyouts;buyouts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User types in his username in bids and buy outs \u003cname\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects the item he wants to bid on or buy out \u003cid\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on buy out button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Sees bid and buy out message \u003cmessage\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "bids-and-buyouts;buyouts;",
  "rows": [
    {
      "cells": [
        "name",
        "id",
        "message"
      ],
      "line": 28,
      "id": "bids-and-buyouts;buyouts;;1"
    },
    {
      "cells": [
        "\"name1\"",
        "0",
        "\"Thank you for your purchase\""
      ],
      "line": 29,
      "id": "bids-and-buyouts;buyouts;;2"
    },
    {
      "cells": [
        "\"name0\"",
        "0",
        "\"Not enough money!\""
      ],
      "line": 30,
      "id": "bids-and-buyouts;buyouts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
  "name": "BuyOuts",
  "description": "",
  "id": "bids-and-buyouts;buyouts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User types in his username in bids and buy outs \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects the item he wants to bid on or buy out 0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on buy out button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Sees bid and buy out message \"Thank you for your purchase\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 93700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 55600,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBuyOutButton()"
});
formatter.result({
  "duration": 42700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your purchase",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 40900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "BuyOuts",
  "description": "",
  "id": "bids-and-buyouts;buyouts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 21,
  "name": "User opens bids and buy outs screen",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "User types in his username in bids and buy outs \"name0\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User selects the item he wants to bid on or buy out 0",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User clicks on buy out button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Sees bid and buy out message \"Not enough money!\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BidAndBuyOutSteps.openAuctionScreen()"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name0",
      "offset": 49
    }
  ],
  "location": "BidAndBuyOutSteps.addUsername(String)"
});
formatter.result({
  "duration": 53300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 52
    }
  ],
  "location": "BidAndBuyOutSteps.addAuction(int)"
});
formatter.result({
  "duration": 53300,
  "status": "passed"
});
formatter.match({
  "location": "BidAndBuyOutSteps.clickBuyOutButton()"
});
formatter.result({
  "duration": 21100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Not enough money!",
      "offset": 30
    }
  ],
  "location": "BidAndBuyOutSteps.checkMessage(String)"
});
formatter.result({
  "duration": 53200,
  "status": "passed"
});
formatter.uri("loginFeature.feature");
formatter.feature({
  "line": 1,
  "name": "System entry",
  "description": "",
  "id": "system-entry",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Entry into system with valid credentials",
  "description": "",
  "id": "system-entry;entry-into-system-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User opens login window",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Types in username in login \"name1\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Types in password in login \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Sees login message \"OK\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 613900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 65700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 51100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 2452700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 75500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Entry into system with invalid credentials",
  "description": "",
  "id": "system-entry;entry-into-system-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User opens login window",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Types in username in login \"name\"",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Types in password in login \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Sees login message \"Wrong username and/or password\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 123300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name",
      "offset": 28
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 28
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 190600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wrong username and/or password",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 99700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Entry into system without password",
  "description": "",
  "id": "system-entry;entry-into-system-without-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "User opens login window",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Types in username in login \"name1\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Sees login message \"No password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 67900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.addUsername(String)"
});
formatter.result({
  "duration": 46500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No password.",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 50200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Entry into system without username",
  "description": "",
  "id": "system-entry;entry-into-system-without-username",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User opens login window",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Types in password in login \"password1\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "User clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Sees login message \"No username.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 56600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 28
    }
  ],
  "location": "LoginSteps.addPassword(String)"
});
formatter.result({
  "duration": 101100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No username.",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 46600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Entry into system without credentials",
  "description": "",
  "id": "system-entry;entry-into-system-without-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User opens login window",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "User clicks login button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Sees login message \"No Username and password.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.openLoginScreen()"
});
formatter.result({
  "duration": 172400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.clickLoginButton()"
});
formatter.result({
  "duration": 35100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Username and password.",
      "offset": 20
    }
  ],
  "location": "LoginSteps.checkLoginMessage(String)"
});
formatter.result({
  "duration": 48300,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 2,
  "name": "User Registry",
  "description": "",
  "id": "user-registry",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-registry;user-registry;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "password2",
        "message"
      ],
      "line": 13,
      "id": "user-registry;user-registry;;1"
    },
    {
      "cells": [
        "Dragon123124",
        "password",
        "password",
        "Registry was successful."
      ],
      "line": 14,
      "id": "user-registry;user-registry;;2"
    },
    {
      "cells": [
        "name1",
        "password",
        "password",
        "Username already exists"
      ],
      "line": 15,
      "id": "user-registry;user-registry;;3"
    },
    {
      "cells": [
        "Dragon123124",
        "password",
        "password2",
        "Passwords don not match."
      ],
      "line": 16,
      "id": "user-registry;user-registry;;4"
    },
    {
      "cells": [
        "Dragon123124",
        "",
        "",
        "No Password."
      ],
      "line": 17,
      "id": "user-registry;user-registry;;5"
    },
    {
      "cells": [
        "Dragon123124",
        "password",
        "",
        "Passwords don not match."
      ],
      "line": 18,
      "id": "user-registry;user-registry;;6"
    },
    {
      "cells": [
        "Dragon123124",
        "",
        "password2",
        "Passwords don not match."
      ],
      "line": 19,
      "id": "user-registry;user-registry;;7"
    },
    {
      "cells": [
        "",
        "password",
        "password",
        "No username."
      ],
      "line": 20,
      "id": "user-registry;user-registry;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"Dragon123124\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"Registry was successful.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 775700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dragon123124",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 54400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 133200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 92200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 1063000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Registry was successful.",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 100100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"name1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"Username already exists\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 119700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "name1",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 45200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username already exists",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 39300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"Dragon123124\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"password2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"Passwords don not match.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 59600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dragon123124",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 63000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 41800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 38000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 17900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Passwords don not match.",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"Dragon123124\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"No Password.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 64300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dragon123124",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 52700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 603700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 24400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No Password.",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 56400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"Dragon123124\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"Passwords don not match.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 60900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dragon123124",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 43400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 523600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 49600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 11700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Passwords don not match.",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 51000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"Dragon123124\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"password2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"Passwords don not match.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 62800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dragon123124",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 54200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 35900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password2",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 33200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 13500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Passwords don not match.",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 36100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Registry",
  "description": "",
  "id": "user-registry;user-registry;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User opens window for registry",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User typed in his username in registry \"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User typed in his password in registry \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User typed in his second password in registry \"password\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User clicked on the register button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Sees register message\"No username.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.openRegisterScreen()"
});
formatter.result({
  "duration": 705300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addUsername(String)"
});
formatter.result({
  "duration": 46800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 40
    }
  ],
  "location": "RegisterSteps.addPassword(String)"
});
formatter.result({
  "duration": 79100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 47
    }
  ],
  "location": "RegisterSteps.addPassword2(String)"
});
formatter.result({
  "duration": 36400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickRegisterButton()"
});
formatter.result({
  "duration": 14700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "No username.",
      "offset": 22
    }
  ],
  "location": "RegisterSteps.checkMessage(String)"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
});