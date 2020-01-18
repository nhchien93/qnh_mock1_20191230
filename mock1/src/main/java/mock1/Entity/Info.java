package mock1.Entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "info")
public class Info {
	@Id
	private Integer userid;
	private String firstname;
	private String lastname;
	private String gioitinh;
//Link to user table
	@OneToOne
	@JoinColumn(name = "userid")
	private User user;
//Link to user table

	public Info() {
	}

	public Info(Integer userid, String firstname, String lastname, String gioitinh) {
		super();
		this.userid = userid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.gioitinh = gioitinh;
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getGioitinh() {
		return gioitinh;
	}

	public void setGioitinh(String gioitinh) {
		this.gioitinh = gioitinh;
	}

}
