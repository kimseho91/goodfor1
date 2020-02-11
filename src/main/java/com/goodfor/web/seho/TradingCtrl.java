package com.goodfor.web.seho;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodfor.web.pxy.Box;
import com.goodfor.web.pxy.CrawlingProxy;

@RestController
@RequestMapping("/tradings")
public class TradingCtrl {
	@Autowired CrawlingProxy crawler;
	@Autowired Map<String, Object> map;
	@Autowired Box<Object> box;
	@Autowired TradingServiceImpl tservice;
	
	@GetMapping("/uprankpicrawl")
	public ArrayList<HashMap<String, String>> uprankpicrawl(){
		return crawler.upRankPiCrawl();
	}
	
	@GetMapping("/uprankdakcrawl")
	public ArrayList<HashMap<String, String>> uprankdakcrawl(){
		return crawler.upRankDakCrawl();
	}
	
	@GetMapping("/downrankpicrawl")
	public ArrayList<HashMap<String, String>> downrankpicrawl(){
		return crawler.downRankPiCrawl();
	}
	
	@GetMapping("/downrankdakcrawl")
	public ArrayList<HashMap<String, String>> downrankdakcrawl(){
		return crawler.downRankDakCrawl();
	}

	@GetMapping("/upjongcrawl")
	public ArrayList<HashMap<String, String>> upjongcrawl(){
		return crawler.upjongCrawl();
	}
	
	@GetMapping("/themecrawl")
	public ArrayList<HashMap<String, String>> themecrawl(){
		return crawler.themeCrawl();
	}
	
	@GetMapping("/detailcrawl/{stockcode}")
	public ArrayList<HashMap<String, String>> detailcrawl(@PathVariable("stockCode") String stockCode){
		
		return null;
	}
	
	@GetMapping("/ingcrawl")
	public ArrayList<HashMap<String, String>> ingcrawl(){
		return crawler.ingCrawl();
	}
	
	@GetMapping("/bizinfo")
	public ArrayList<HashMap<String, String>> bizinfo(){
		return crawler.bizinfoCrawl();
	}
	
	@PostMapping("/{stockname}")
	public Map<?, ?> detail(@PathVariable String stockname){
		System.out.println("넘어온 종목명 : " + stockname);
		tservice.search(stockname);
		map.clear();
		map.put("msg", "success");
		map.put("trading", tservice.search(stockname));
		return map;
	}
}
