package json.parser;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import json.model.Board;
import json.model.MainBoard;

public class BoardParser {

	public MainBoard parsingBoard(String str){
		MainBoard mBoard = new MainBoard();
		
		
		JSONObject obj = null;
		try{
			obj = new JSONObject(str);
			
			mBoard.setStatus(obj.getString("status"));
			mBoard.setCount(obj.getInt("count"));
			Board board = null;
			JSONArray boardList = obj.getJSONArray("list");
			JSONObject boardObj = null;
			ArrayList<Board> boardArr = new ArrayList<Board>();
			for(int i = 0 ; i < boardList.length(); i++ ){
				boardObj = boardList.getJSONObject(i);
				board = new Board();
				//jkk
				board.setNum(boardObj.getInt("num"));
				board.setTitle(boardObj.getString("title"));
				board.setWriter(boardObj.getString("writer"));
				board.setContent(boardObj.getString("content"));
				board.setCnt(boardObj.getInt("cnt"));
				board.setState(boardObj.getBoolean("state"));
				
				boardArr.add(board);	
			}
			mBoard.setList(boardArr);
			
			
			
		}catch(JSONException e){
			e.printStackTrace();
		}
		
		
		
		
		return mBoard;
	}
	
	
	
}
