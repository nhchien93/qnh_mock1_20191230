package mock1.Controller;

//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import mock1.Repository.UserRepository;

@Controller
public class IndexController {

    @Autowired 
	private UserRepository userRepository;
    
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
    	return "index";
    }
    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String Index() {
    	return "index";
    }
    @RequestMapping(value = "/signup", method = RequestMethod.GET)
    public String signUpPage() {
    	return "signup";
    }
    @RequestMapping(value = "/404", method = RequestMethod.GET)
    public String errorpage() {
    	return "404";
    }
    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public String userpage() {
    	return "user";
    }
    @RequestMapping(value ="/game", method= RequestMethod.GET)
    public String gamePage() {
    	return "game";
    }
    
    @PostMapping("/login")
    @ResponseBody
    public String checkUser(String username, String password) {
    	boolean check = userRepository.checkUser(username, password);
    	if(check==true) {
    		return "user";
    	}
    	else {
    	return "404";
    	}
    }
}