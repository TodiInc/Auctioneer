Feature: System entry
	
		Scenario: Entry into system with valid credentials
		Given User opens login window
		When Types in username in login "name1"
		And Types in password in login "password1"
		And User clicks login button
		Then Sees login message "OK"
		
		Scenario: Entry into system with invalid credentials
    Given User opens login window 
    When Types in username in login "name"
    And Types in password in login "password"
    And User clicks login button
    Then Sees login message "Wrong username and/or password"
    
  Scenario: Entry into system without password
    Given User opens login window 
    When Types in username in login "name1"
    And User clicks login button
    Then Sees login message "No password."
    
  Scenario: Entry into system without username
    Given User opens login window 
    When Types in password in login "password1"
    And User clicks login button
    Then Sees login message "No username."
    
  Scenario: Entry into system without credentials
    Given User opens login window 
    When User clicks login button
    Then Sees login message "No Username and password."