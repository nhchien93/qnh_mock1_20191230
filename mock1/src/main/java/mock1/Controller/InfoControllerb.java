package mock1.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import mock1.Entity.Info;
import mock1.Repository.InfoRepositoryb;
import mock1.Repository.UserRepository;

@Controller

public class InfoControllerb {
	@Autowired
	InfoRepositoryb userRepo;
	UserRepository userRepository;

	@RequestMapping("/info1")
	public String home(Model model) {
		model.addAttribute("information", userRepo.findAll());
		return "info";
	}

	@PostMapping("/delete/{id}")
	public String deleteUser(@PathVariable("id") int id, Model model) {
		userRepo.deleteById(id);
		model.addAttribute("information", userRepo.findAll());
		return "redirect:/info1";
	}

	@RequestMapping("/edit/{id}")
	public String editUser(@PathVariable("id") int id, Model model) {
		model.addAttribute("informations", userRepo.getOne(id));
		return "form";
	}

	@RequestMapping("/play")
	public String playGame() {
		return "game";
	}

	@PostMapping("/save")
	public String saveUser(Info info) {
		userRepo.save(info);
		return "redirect:/info1";
	}

	@GetMapping("/search")
	public String search(@RequestParam("term") String lastname, Model model) {
		model.addAttribute("information", userRepo.findBylastnameContaining(lastname));
		return "info";
	}
	
	@RequestMapping("/check/{id}")
	public String checkAdmin(@PathVariable("id") Integer id, Model model) {
		//String getUser = userRepository.getUser(id);
		model.addAttribute("user", userRepository.getUser(id));
		return "info";
	}

}
