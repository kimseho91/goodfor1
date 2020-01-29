package com.goodfor.web.sejong;

public enum SSQL {
	
	CREATE_SUMMARY, DROP_SUMMARY;
	
	public String toString() {
		String result = "";
		switch(this) {
		case CREATE_SUMMARY : 
			result = "CREATE TABLE GOODFOR.SUMMARY (SUMMARYSEQ VARCHAR(10) PRIMARY KEY,\r\n" + 
					"CACCOUNT VARCHAR(10),\r\n" + 
					"STOCKCODE VARCHAR(10),\r\n" + 
					"TRADETYPE VARCHAR(10),\r\n" + 
					"TCOUNT VARCHAR(10), \r\n" + 
					"TAMOUNT VARCHAR(10),\r\n" + 
					"CREATEDATE VARCHAR(10))";
			break;
		case DROP_SUMMARY : 
			result = "DROP TABLE GOODFOR.SUMMARY";
			break;		
		}
		return result;
	}

}
