package com.goodfor.web.sejong;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("admin")
public class SSummaryCtrl {
	
	private static final Logger logger = LoggerFactory.getLogger(SSummaryCtrl.class);
	
	@Autowired Map<String, Object> map;
	@Autowired SSummary ssummary;
	@Autowired SSummaryMapper ssummaryMapper;
	
	@GetMapping("/create/summarytable")
	public Map<?,?> createSSummary(){
		System.out.println("createSSummary 도착");
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("CREATE_SUMMARY", SSQL.CREATE_SUMMARY.toString());
		Consumer<HashMap<String, String>> c = t -> ssummaryMapper.createSSummary(t);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/drop/summarytable")
	public Map<?,?> dropSSummary(){
		System.out.println("dropSSummary 도착");
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.put("DROP_SUMMARY", SSQL.DROP_SUMMARY.toString());
		Consumer<HashMap<String, String>> c = t -> ssummaryMapper.dropSSummary(t);
		c.accept(paramMap);
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}

}
