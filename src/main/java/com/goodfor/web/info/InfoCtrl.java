package com.goodfor.web.info;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
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
import com.goodfor.web.pxy.PageProxy;

@RestController
@RequestMapping("/infos")
public class InfoCtrl{
	@Autowired
	PageProxy pager;
	@Autowired
	CrawlingProxy crawler;
	@Autowired
	Map<String, Object> map;
	@Autowired Box<Object> box;
	
	@GetMapping("/crawl1")
	public ArrayList<HashMap<String, String>> crawl1(){
		return crawler.crawling1();
	}	
	@GetMapping("/crawl2")
	public ArrayList<HashMap<String, String>> crawl2(){
		return crawler.crawling2();
	}
	@GetMapping("/crawl3")
	public ArrayList<HashMap<String, String>> crawl3(){
		return crawler.crawling3();
	}
	@GetMapping("/crawl4")
	public ArrayList<HashMap<String, String>> crawl4(){
		return crawler.crawling4();
	}
	
	@GetMapping("/list/{pageSize}/{nowPage}")
	public Map<?,?> pagingSize(@PathVariable("pageSize") String pageSize, @PathVariable("nowPage") String nowPage){	
		System.out.println("넘어온 페이지 : "+pageSize);
		
		pager.setPageSize(Integer.parseInt(pageSize));
		pager.setNowPage(Integer.parseInt(nowPage));
		pager.setBlockSize(5);
		pager.setPageSize(5);
		System.out.println("나우페이지"+nowPage);	
		System.out.println("있자나 이거 변할 수 있는거 맞겠지?" +pageSize);
		System.out.println(pager);
		return map;
	}
}