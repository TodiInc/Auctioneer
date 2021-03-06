
Feature: User Registry

  Scenario Outline: User Registry
    Given User opens window for registry
    When User typed in his username in registry "<username>"
    And User typed in his password in registry "<password>"
    And User typed in his second password in registry "<password2>"
    And User clicked on the register button
    Then Sees register message"<message>"

    Examples: 
      | username  | password	| password2  |message    				 |
      | Dragon123124 		| password	| password	 |Registry was successful.|
      | name1 		| password	| password	 |Username already exists|
      | Dragon123124 		| password	| password2	 |Passwords don not match.|
      | Dragon123124 		| 	| 	 |No Password.|
      | Dragon123124 		| password	||Passwords don not match.|
      | Dragon123124 		| | password2	 |Passwords don not match.|
      || password	| password	 |No username.|
