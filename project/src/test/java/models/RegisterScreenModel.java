package models;

import services.RegisterService;

public class RegisterScreenModel {

	private String username;
	private String password1;
	private String password2;
	private String message;

	public void navigateToMe() {
		System.out.println("Register windown is opened.");
	}

	/**
	 * Set user name to the correct screen input field
	 * 
	 * @param username String representation of user name
	 */
	public void setUsername(final String username) {
		this.username = username;
	}

	public void setPassword1(String password) {
		password1 = password;
	}

	public void setPassword2(String password) {
		password2 = password;
	}
	
	public void clickRegisterButton() {
		message = RegisterService.register(username, password1, password2);

	}

	public String getRegisterMessage() {
		return message;
	}

}
