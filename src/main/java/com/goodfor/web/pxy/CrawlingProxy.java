package com.goodfor.web.pxy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("crawler")
public class CrawlingProxy extends Proxy{
	@Autowired Inventory<HashMap<String, String>> inventory;
	public ArrayList<HashMap<String, String>> crawling1(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String top = "https://www.moneycontrol.com/markets/global-indices/" ;
			Connection.Response homePage;
			homePage = Jsoup.connect(top) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("div.glob_indi_lft");    
			Elements tempforTitle = element.select("div.tbl_redtxt");
//			System.out.println("1번입니다."+element.size());
//			System.out.println("1번입니다."+tempforTitle.size());
			HashMap<String, String> map = null;
			for (int i=0; i <2;i++) {
				map = new HashMap<>();
				map.put("tempforTitle", tempforTitle.get(i).text());

				inventory.add(map);
	
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
//		System.out.println("11111----- 크롤링 결과 -------1111");
//		inventory.get().forEach(System.out :: println);
		return inventory.get();	
	}	
	public ArrayList<HashMap<String, String>> crawling2(){
		inventory.clear();
		try {
			Document rawData = Jsoup.connect("https://money.cnn.com/data/us_markets/").timeout(10*1000).get();
			Elements item = rawData.select("td[class=\"wsod_firstCol\"]");
			Elements price = rawData.select("td[class=\"wsod_aRight\"] span");
			Elements different = rawData.select("td[class=\"wsod_aRight\"] span span");
//			Elements rate = rawData.select("td[class=\"wsod_aRight\"] span span");
//			Elements amount = rawData.select("td[class=\"number\"]");
//			Elements total = rawData.select("td[class=\"number_2\"]");

//			System.out.println("2번입니다."+item.size());
//			System.out.println("2번입니다."+price.size());
//			System.out.println("2번입니다."+different.size());
//			System.out.println("2번입니다."+rate.size());
//			System.out.println("2번입니다."+amount.size());
//			System.out.println("2번입니다."+total.size());
			
			
			HashMap<String, String> map = null;
			for (int i=0; i <2;i++) {
				map = new HashMap<>();
				map.put("item", item.get(i).text());
				map.put("price", price.get(i).text());
				map.put("different", different.get(i).text());
//				map.put("rate", rate.get(i).text());
//				map.put("amount", amount.get(i).text());
//				map.put("total", total.get(i).text());
				
				inventory.add(map);				
			}
//			System.out.println("\n******************\n" + inventory.toString());
			
		} catch (Exception e2) {
			// TODO: handle exception
			e2.printStackTrace();
		}
//		 System.out.println("2222--------크롤링 결과---------2222");
//		 inventory.get().forEach(System.out :: println);

		return inventory.get();
	}
	public ArrayList<HashMap<String, String>> crawling3(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String news = "https://finance.naver.com/" ;
			Connection.Response homePage;
			homePage = Jsoup.connect(news) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("div.section_strategy");    
			Elements tempforTitle = element.select("ul li a");

//			System.out.println("3번입니다."+element.size());
//			System.out.println("3번입니다."+tempforTitle.size());

			

			HashMap<String, String> map = null;
			for (int i=0; i <2;i++) {
				map = new HashMap<>();
				map.put("title", tempforTitle.get(i).text());

				inventory.add(map);
	
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
//		System.out.println("3333------- 크롤링 결과 ----------333");
//		inventory.get().forEach(System.out :: println);
		return inventory.get();	
	}	
	public ArrayList<HashMap<String, String>> crawling4(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String inter = "https://www.moneycontrol.com/markets/global-indices/" ;
			
			Connection.Response homePage;
			homePage = Jsoup.connect(inter) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements name = temp.select("a.robo_medium");    
			Elements currentV = temp.select("div.tbl_redtxt");
			Elements change = temp.select("div.shw_1024");
			Elements perChange = temp.select("td.hide_1024bx");
			Elements high = temp.select("div.shw_1024");
			
//			System.out.println("4번입니다."+name.size());
//			System.out.println("4번입니다."+currentV.size());
//			System.out.println("4번입니다."+change.size());
//			System.out.println("4번입니다."+perChange.size());
//			System.out.println("4번입니다."+high.size());
//			
			
			HashMap<String, String> map = null;
			for (int i=0; i <2;i++) {
				map = new HashMap<>();
				map.put("currentV", currentV.get(i).text());
				map.put("change", change.get(i).text());
				map.put("perChange", perChange.get(i).text());
				map.put("high", high.get(i).text());
				inventory.add(map);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		
//		System.out.println("444-------- 크롤링 결과 ---------444");
//		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
}