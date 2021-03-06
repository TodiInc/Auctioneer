package services;

import java.util.ArrayList;
import java.util.List;

import models.User;

public class LoginServices {

	public static String login(String username, String password) {
		if (username == null && password == null) {
			return "No Username and password.";
		}
		
		if (password == null) {
			return "No password.";
		}
		
		if (username == null) {
			return "No username.";
		}
		
		List<User> users = DbService.getUsers();
		
		boolean isUserExist = users.stream().anyMatch(user -> 
								(user.getUsername().equals(username) 
								&& user.getPassword().equals(password)));
		return isUserExist?"OK":"Wrong username and/or password";

	}
}