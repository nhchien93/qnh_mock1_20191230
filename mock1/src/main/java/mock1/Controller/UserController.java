package mock1.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseBody;

import mock1.Repository.UserRepository;

@Controller
@RequestMapping("/user")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@PostMapping("/")
	@ResponseBody
	public String addUser(String name, String Password) {
		String s = userRepository.addUser(name, Password);
		return s;
	}

	@PutMapping("/{id}")
	@ResponseBody
	public void updateUser(@PathVariable("id") String id, String username, String password, int isadmin) {
		int idnum = Integer.parseInt(id);
		userRepository.updateUser(idnum, username, password, isadmin);
	}

	@DeleteMapping("/{id}")
	@ResponseBody
	public void deleteUser(@PathVariable("id") String id) {
		int idnum = Integer.parseInt(id);
		userRepository.deleteUser(idnum);
	}

	@GetMapping("/{id}")
	@ResponseBody
	public String getUsers(@PathVariable("id") String id) {
		int idnum = Integer.parseInt(id);
		String getUser = userRepository.getUser(idnum);
		return getUser;
	}

	@GetMapping("/all")
	@ResponseBody
	public ArrayList<String> getAllUsers() {
		ArrayList<String> myList = userRepository.getAllUsers();
		return myList;
	}
}
