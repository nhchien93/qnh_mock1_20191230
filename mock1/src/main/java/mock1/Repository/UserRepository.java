package mock1.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;


@Repository
public class UserRepository {
	private static final String url       = "jdbc:mysql://localhost:3306/battleship";
    private static final String user      = "root";
    private static final String password  = "Huong1993";
	private ArrayList<String> userList;
	private Connection conn;
	
	public UserRepository(){
		userList=new ArrayList<String> ();
		userList.add("HoangBV4");
		userList.add("ChienNH2");
	}
	public boolean checkUser(String username, String pw) {
		 try {
	  		  String sql = "SELECT Username, Password FROM user";
	  	      conn = DriverManager.getConnection(url, user, password);
	  	      Statement stmt  = conn.createStatement();
	          ResultSet rs    = stmt.executeQuery(sql);
	          while (rs.next()) {
	          	  String currUser = rs.getString("Username");
	          	  String currPw = rs.getString("Password");
	          	  
	          	  if(username.equals(currUser) && pw.equals(currPw)) {
	          		 return true;
	          	  }	  
	          }
	          return false;
	  	  } catch(SQLException e) {
	  		  System.out.println(e.getMessage());
	  		  return false;
	  	  } finally {
	  	      try{
	               if(conn != null)
	                 conn.close();
	  	      }catch(SQLException ex){
	  	             System.out.println(ex.getMessage());
	  	      }
	  	  }
	}
	public String getUser(int id) {
		try {
  		  String sql = "SELECT ID, Username, Password, Isadmin FROM user WHERE ID =" + id;
  	      conn = DriverManager.getConnection(url, user, password);
  	      Statement stmt  = conn.createStatement();
          ResultSet rs    = stmt.executeQuery(sql);
          String ret = "";
          while(rs.next()) {
           ret =  rs.getInt("ID") + ";" + rs.getString("Username") + ";" + rs.getString("Password")  + ";" +rs.getInt("Isadmin");
          }
          return ret;
  	   } catch(SQLException e) {
  	     return(e.getMessage());
  	   } finally {
  	      try{
               if(conn != null)
                 conn.close();
  	      }catch(SQLException ex){
  	           return(ex.getMessage());
  	      }
  	   }
  }
	
	public String addUser(String name, String Password) {
    	  try {
    		  String sql = "SELECT ID, Username FROM user";
    	      conn = DriverManager.getConnection(url, user, password);
    	      Statement stmt  = conn.createStatement();
              ResultSet rs    = stmt.executeQuery(sql);
              int id = 0;
              while (rs.next()) {
            	  String username = rs.getString("Username");
            	  id = rs.getInt("ID");
            	  if(username == name) {
            		 return("Username already existed!");
            	  }
              }
            id++;
            userList.add(name);
            String sql1 = "INSERT INTO user(ID, Username, Password, Isadmin) VALUES ("+ id +", '"+  name +"', '" + Password + "',0)";
            stmt.executeUpdate(sql1);
            return "Saved!";
    	  } catch(SQLException e) {
    		  return(e.getMessage());
    	  } finally {
    	      try{
                 if(conn != null)
                   conn.close();
    	      }catch(SQLException ex){
    	             System.out.println(ex.getMessage());
    	      }
    	  }
		
    }
	public void updateUser(int id, String username, String Password, int isadmin) {
		try {
	  		  String sql = "UPDATE user "
	  		  		+ "SET Username =" + "'" + username + "', Password ="+"'"
	  				+ Password + "',Isadmin=" + isadmin
	  				+ " WHERE ID=" + id;
	  	      conn = DriverManager.getConnection(url, user, password);
	  	      Statement stmt = conn.createStatement();
	          stmt.executeUpdate(sql);
	          System.out.println("Updated!");
	  	   } catch(SQLException e) {
	  		 System.out.println(e.getMessage());
	  	   } finally {
	  	      try{
	               if(conn != null)
	                 conn.close();
	  	      }catch(SQLException ex){
	  	    	System.out.println(ex.getMessage());
	  	      }
	  	   }
	}
	public String deleteUser(int id) {
		try {
	  		  String sql = "DELETE FROM user WHERE ID=" + id;
	  	      conn = DriverManager.getConnection(url, user, password);
	  	      Statement stmt  = conn.createStatement();
	          stmt.executeUpdate(sql);
	          return "Deleted!";
	  	   } catch(SQLException e) {
	  	     return(e.getMessage());
	  	   } finally {
	  	      try{
	               if(conn != null)
	                 conn.close();
	  	      }catch(SQLException ex){
	  	           return(ex.getMessage());
	  	      }
	  	   }
	}
	public ArrayList<String> getAllUsers() {
	    ArrayList<String> myList = new ArrayList<String>();
	    Connection conn = null;
		String sql = "SELECT ID, Username, Password, Isadmin FROM user";
		  try {
		      conn = DriverManager.getConnection(url, user, password);
		      Statement stmt  = conn.createStatement();
	          ResultSet rs    = stmt.executeQuery(sql);
	          while (rs.next()) {
	              myList.add(rs.getInt("ID") + ";" + rs.getString("Username") + ";" + 
	                                 rs.getString("Password")  + ";" +
	                                 rs.getInt("Isadmin"));
	          }
		  } catch(SQLException e) {
		     System.out.println(e.getMessage());
		  } finally {
		      try{
	             if(conn != null)
	               conn.close();
		      }catch(SQLException ex){
		             System.out.println(ex.getMessage());
		      }
		  }
		return myList;
	  }
}