package json.model;

import java.util.ArrayList;

public class MainBoard {

	private String status;
	private int count;
	private ArrayList<Board> list;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public ArrayList<Board> getList() {
		return list;
	}
	public void setList(ArrayList<Board> list) {
		this.list = list;
	}
	@Override
	public String toString() {
		return "Board [status=" + status + ", count=" + count + ", list=" + list + "]";
	}
	
	
	
	
}
