package com.goodfor.web.sejong;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class SSummaryCtrl {
	
	@SuppressWarnings("unused")
	private static final Logger logger = LoggerFactory.getLogger(SSummaryCtrl.class);
	
	@Autowired Map<String, Object> map;
	@Autowired SSummary ssummary;
	@Autowired SSummaryMapper ssummaryMapper;
	@Autowired SSummaryMaker ssMaker;
	
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
	
	@GetMapping("/insert/summarytable")
	public Map<?,?> insertSSummary(){
		System.out.println("insertSSummary 도착");
		HashMap<String, String> paramMap = new HashMap<>();
		ssMaker.insertMakeSSummary();
		paramMap.clear();
		paramMap.put("msg", "SUCCESS");
		return paramMap;
	}
	
	@GetMapping("/menu1/selectData")
	public Map<?,?> selectSSummaryData(){
		System.out.println("selectSSummaryData 도착");
		
		HashMap<String, String> paramMap = new HashMap<>();
		paramMap.clear();
		
		Supplier<String> s = () -> ssummaryMapper.selectTcaseSummary();
		paramMap.put("tcase", s.get());
		Supplier<String> s2 = () -> ssummaryMapper.selectTamountSummary();
		paramMap.put("tamount", s2.get());
		paramMap.put("sellamount", "100500");
		paramMap.put("sellcase", "237");
		paramMap.put("buyamount", "100400");
		paramMap.put("buycase", "105");
		paramMap.put("alramcase", "12");
		return paramMap;
	}

}
