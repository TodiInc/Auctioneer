package models;

import services.LoginServices;



public class LoginScreenModel {

	
	private String username;
	private String password;
	private String message;

	public void navigateToMe() {
		System.out.println("Login screen is opened.");
	}

	public void setUsername(final String username) {
		this.username = username;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void clickLoginButton() {
		message = LoginServices.login(username, password);
	}

	public String getLoginMessage() {
		return message;
	}

}