package com.goodfor.web.sejong;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface SSummaryMapper {

	public void createSSummary(HashMap<String, String> paramMap);
	public void dropSSummary(HashMap<String, String> paramMap);
	public void insertSSummary(SSummary param);
	
	public String selectTcaseSummary();
	
	public String selectTamountSummary();
	//SELECT_TCASE_SUMMARY
	
}
