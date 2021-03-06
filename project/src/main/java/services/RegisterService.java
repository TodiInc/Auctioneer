package services;

import java.util.ArrayList;
import java.util.List;

import models.User;

public class RegisterService {

	public static String register(String username, String password1, String password2) {

		if (null == username || username.isEmpty()) {
			return "No username.";
		}

		if ((password1 == null || password1.isEmpty()) && (password2 == null || password2.isEmpty())) {
			return "No Password.";
		}
		
		if (password1 != password2) {
			return "Passwords don not match.";
		}

		final List<User> users = DbService.getUsers();

		boolean isUsernameExists = users.stream().anyMatch(u -> u.getUsername().equals(username));
		if (isUsernameExists) {
			return "Username already exists";
		}

		final User newUser = new User(username, password1);
		users.add(newUser);
		return users.contains(newUser) ? "Registry was successful." : "";
	}

}