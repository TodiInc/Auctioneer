package project;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.RegisterScreenModel;

public class RegisterSteps {

private RegisterScreenModel registerScreen = new RegisterScreenModel();
	
	@Given("^User opens window for registry$")
	public void openRegisterScreen() throws Throwable {
		registerScreen.navigateToMe();
	}

	@When("^User typed in his username in registry \\\"([^\\\"]*)\\\"$")
	public void addUsername(String username) throws Throwable {
		registerScreen.setUsername(username);
	}

	@When("^User typed in his password in registry \\\"([^\\\"]*)\\\"$")
	public void addPassword(String password) throws Throwable {
		registerScreen.setPassword1(password);
	}

	@When("^User typed in his second password in registry \\\"([^\\\"]*)\\\"$")
	public void addPassword2(String password) throws Throwable {
		registerScreen.setPassword2(password);
	}

	@When("^User clicked on the register button$")
	public void clickRegisterButton() throws Throwable {
		registerScreen.clickRegisterButton();
	}

	@Then("^Sees register message\\\"([^\\\"]*)\\\"$")
	public void checkMessage(String expectedMessage) throws Throwable {
	    assertEquals(expectedMessage, registerScreen.getRegisterMessage());
	}
	
}
