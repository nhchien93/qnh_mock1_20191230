package mock1.Repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import org.springframework.stereotype.Repository;

@Repository
public class InfoRepository {
	private static final String url       = "jdbc:mysql://localhost:3306/battleship";
    private static final String user      = "root";
    private static final String password  = "Nguyenhongchien20101993";
	//private ArrayList<String> userList;
	private Connection conn;
	
//	public InfoRepository(){
//		userList=new ArrayList<String> ();
//		userList.add("HoangBV4");
//		userList.add("ChienNH2");
//	}
	
	public ArrayList<String> getInfo(){
		ArrayList<String> myList = new ArrayList<String>();
		
	    conn = null;
		String sql = "SELECT userid, firstname, lastname, gioitinh FROM info";
		  try {
		      conn = DriverManager.getConnection(url, user, password);
		      Statement stmt  = conn.createStatement();
	          ResultSet rs    = stmt.executeQuery(sql);
	          
	          while (rs.next()) {
	              myList.add(rs.getInt("userid") + ";" + rs.getString("firstname") + ";" + 
	                                 rs.getString("lastname")  + ";" +
	                                 rs.getString("gioitinh"));
//	        	  result = rs.getInt("userid") + ";" + rs.getString("firstname") + ";" + 
//                          rs.getString("lastname")  + ";" +
//                          rs.getString("gioitinh");
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
