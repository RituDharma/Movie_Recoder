

import java.io.FileWriter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

/**
 * Servlet implementation class favourite
 */
@WebServlet("/favourite")
public class favourite extends HttpServlet {
	private static final long serialVersionUID = 1L;
	int c=0;
	JSONObject arrayObj = new JSONObject();
	JSONArray arr= new JSONArray();
    /**
     * Default constructor. 
     */
    public favourite() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		
		/*String title= request.getParameter("title");
		String release= request.getParameter("rdate");
		String rating= request.getParameter("avgvote");*/
		
	      //  int length = arrayObj.length();
	       try {
		        arr.add(request.getParameter("title"));
				arr.add(request.getParameter("rdate"));
				arr.add(request.getParameter("avgvote"));
				arrayObj.put("output", arr);
				FileWriter fw=new FileWriter("//home//sapient//Documents//jee_servlet//AmazonPrime//src/com//movie//output.json");
				fw.write(arrayObj.toString());
				fw.flush();
				fw.close();
	    	   }	   
	       catch(Exception e) {
	    	   e.printStackTrace();
	       }
	    	   response.setContentType("application/json");
	    	   response.getWriter().write(arr.toString());
	       
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

