package com.goodfor.web.sejong;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface SSummaryMapper {

	public void createSSummary(HashMap<String, String> paramMap);
	public void dropSSummary(HashMap<String, String> paramMap);
	
}
