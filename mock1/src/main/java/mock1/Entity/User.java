package mock1.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {

	@Id
//	@GeneratedValue(strategy=GenerationType.AUTO)
	private Integer ID;
	private String Username;
	private String Password;
	private Integer Isadmin;

	public User() {
	}

	public User(Integer id, String username, String password, Integer isadmin) {
		super();
		ID = id;
		Username = username;
		Password = password;
		Isadmin = isadmin;
	}

	public User(Integer id, String username, String password) {
		super();
		ID = id;
		Username = username;
		Password = password;
		Isadmin = 0;
	}

	public String getName() {
		return Username;
	}

	public void setName(String username) {
		this.Username = username;
	}

	public String getPassword() {
		return Password;
	}

	public void setPassword(String password) {
		this.Password = password;
	}

	public Integer getIsadmin() {
		return Isadmin;
	}

	public void setIsadmin(Integer isadmin) {
		this.Isadmin = isadmin;
	}

	public int getId() {
		return ID;
	}

	public void setId(int id) {
		this.ID = id;
	}
}
