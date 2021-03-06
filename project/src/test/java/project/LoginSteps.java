package project;

import static org.junit.Assert.assertEquals;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import models.LoginScreenModel;

public class LoginSteps {

	LoginScreenModel loginScreen = new LoginScreenModel();

	@Given("^User opens login window$")
	public void openLoginScreen() throws Throwable {
		loginScreen.navigateToMe();
	}

	@When("^Types in username in login \"([^\"]*)\"$")
	public void addUsername(final String username) throws Throwable {
		loginScreen.setUsername(username);
	}

	@When("^Types in password in login \"([^\"]*)\"$")
	public void addPassword(final String password) throws Throwable {
		loginScreen.setPassword(password);
	}

	@When("^User clicks login button$")
	public void clickLoginButton() throws Throwable {
		loginScreen.clickLoginButton();
	}

	@Then("^Sees login message \"([^\"]*)\"$")
	public void checkLoginMessage(String expectedMessage) throws Throwable {
		assertEquals(expectedMessage, loginScreen.getLoginMessage());
	}
	
}
