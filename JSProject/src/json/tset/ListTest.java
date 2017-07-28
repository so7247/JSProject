package json.tset;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import json.model.MainBoard;
import json.parser.BoardParser;

public class ListTest {

	public ListTest() {
		// TODO Auto-generated constructor stub
		
		
		String boardURL = "http://192.168.205.111/JSProject/list.txt";
		
		URL url = null;
		HttpURLConnection ccon = null;
		BufferedReader reader = null;
		try{
			url = new URL(boardURL);
			
			ccon = (HttpURLConnection)url.openConnection();
			
			reader = new BufferedReader(new InputStreamReader(ccon.getInputStream()));
			
			String readData = "";
			StringBuilder sb = new StringBuilder();
			while((readData = reader.readLine()) != null){
				sb.append(readData).append("\n");
			}
			String BoardStr = sb.toString();
			
			System.out.println(BoardStr);
			
			BoardParser parser = new BoardParser();
			
			MainBoard mBoard = parser.parsingBoard(BoardStr);
			System.out.println(mBoard);
			
		}catch(IOException e){
			e.printStackTrace();
		}
	
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		new ListTest();
	}

}
