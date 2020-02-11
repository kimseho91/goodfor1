package com.goodfor.web.pxy;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import com.goodfor.web.bonghyeon.Info;
import com.goodfor.web.bonghyeon.InfoMapper;
import com.goodfor.web.seho.BizInfo;
import com.goodfor.web.seho.Trading;
import com.goodfor.web.seho.TradingMapper;

@Component("crawler")
public class CrawlingProxy extends Proxy {
	@Autowired Box<String> box;
	@Autowired Inventory<HashMap<String, String>> inventory;
	@Autowired
	PageProxy pager;
	@Autowired Info info;
	@Autowired InfoMapper infoMapper;
	@Autowired Trading trading;
	@Autowired TradingMapper tradingMapper;
	@Autowired BizInfo bizinfo;
	
	
	public ArrayList<HashMap<String, String>> crawling(){
		box.clear();
		System.out.println("박스 크롤링 시작 지점");
		try {
			Document rawData = Jsoup.connect
					("https://music.bugs.co.kr/recomreview?&order=listorder&page=2")
					.timeout(10*1000).get();
			Elements artist = rawData.select("div[class=recommendItem]"); 
			HashMap<String, String> map = null;
			for(Element e : artist) {
				map = new HashMap<>();
				map.put("list", e.text()+"\n ************** \n");
				inventory.add(map);
				System.out.println("크롤링 확인" + e.text());
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> bugsCrawling() {
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String bugsurl = "https://music.bugs.co.kr/chart";
			Connection.Response homePage = Jsoup.connect(bugsurl).method(Connection.Method.GET).userAgent(USER_AGENT)
					.execute();
			Document temp = homePage.parse();
			Elements thumbnail = temp.select("a.thumbnail");
			Elements title = temp.select("p.title");
			Elements artist = temp.select("p.artist");
			HashMap<String, String> map = null;
		
			for (int i=0; i < title.size(); i++) {
				map = new HashMap<>();
				map.put("seq", string(i+1));
				map.put("title", title.get(i).text());
				map.put("artist", artist.get(i).text());
				map.put("thumbnail", thumbnail.get(i).select("img").attr("src"));
				inventory.add(map);
			}
		} catch (Exception e) {
		}
		System.out.println("********************크롤링결과********************");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	@Transactional
	public ArrayList<HashMap<String, String>> crawling1(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String top = "https://www.investing.com/equities/americas";
			Connection.Response homePage;
			homePage = Jsoup.connect(top) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements elements = temp.select("table#cross_rate_markets_stocks_1 tbody tr");
			Elements first = elements.select("td");
			inventory.clear();

			HashMap<String, String> map = null;
			for (int i=0; i <first.size();i+=10) {
				map = new HashMap<>();
				map.put("first1", first.get(i+1).text());
				map.put("second1", first.get(i+2).text());
				map.put("third1", first.get(i+3).text());
				map.put("fourth1", first.get(i+4).text());
				map.put("fifth1", first.get(i+5).text());
				map.put("sixth1", first.get(i+6).text());
				map.put("seventh1", first.get(i+7).text());
				inventory.add(map);				
				info.setCompany(first.get(i+1).text());
				info.setNowPrice(first.get(i+2).text());
				info.setHighPrice(first.get(i+3).text());
				info.setLowPrice(first.get(i+4).text());
				info.setNumChange(first.get(i+5).text());
				info.setPerChange(first.get(i+6).text());
				info.setTrade(first.get(i+7).text());
				infoMapper.insertInfo(info);
				System.out.println(info);
				System.out.println("여기는 역시 안 찍히지?");
				
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return inventory.get();	
	}

	public ArrayList<HashMap<String, String>> crawling2(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String top = "https://kr.investing.com/equities/south-korea";
			Connection.Response homePage;
			homePage = Jsoup.connect(top) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements elements = temp.select("table#cross_rate_markets_stocks_1 tbody tr");
			Elements first2 = elements.select("td");
			inventory.clear();
			HashMap<String, String> map = null;
			for (int i=0; i <first2.size();i+=10) {
				map = new HashMap<>();
				map.put("first2", first2.get(i+1).text());
				map.put("second2", first2.get(i+2).text());
				map.put("third2", first2.get(i+3).text());
				map.put("fourth2", first2.get(i+4).text());
				map.put("fifth2", first2.get(i+5).text());
				map.put("sixth2", first2.get(i+6).text());
				map.put("seventh2", first2.get(i+7).text());
				inventory.add(map);				
			}
			
		} catch (Exception e2) {
			e2.printStackTrace();
		}
		return inventory.get();
	}
	public ArrayList<HashMap<String, String>> crawling3(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String news = "https://news.naver.com/main/list.nhn?sid2=258&sid1=101&mid=shm&mode=LS2D&date=20170425&page=3" ;
			Connection.Response homePage;
			homePage = Jsoup.connect(news) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements element = temp.select("ul.type06_headline");    
			Elements tempforTitle = element.select("li dl dt");
			inventory.clear();
			HashMap<String, String> map = null;
			for (int i=0; i <tempforTitle.size(); i+=2) {
				map = new HashMap<>();
				map.put("tempforTitle", tempforTitle.get(i).text());
				inventory.add(map);
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		/*
		 * System.out.println("3333------- 크롤링 결과 ----------333");
		 * inventory.get().forEach(System.out :: println);
		 */
		return inventory.get();	
	}	
	public ArrayList<HashMap<String, String>> crawling4(){
		inventory.clear();
		try {
			final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
			String top = "https://kr.investing.com/equities/united-states";
			Connection.Response homePage;
			homePage = Jsoup.connect(top) 
					.method(Connection.Method.GET) 
					.userAgent(USER_AGENT) 
					.execute();
			Document temp = homePage.parse();
			Elements elements = temp.select("table#cross_rate_markets_stocks_1 tbody tr");
			Elements first4 = elements.select("td");
			inventory.clear();
			HashMap<String, String> map = null;
			for (int i=0; i <first4.size();i+=10) {
				map = new HashMap<>();
				map.put("first4", first4.get(i+1).text());
				map.put("second4", first4.get(i+2).text());
				map.put("third4", first4.get(i+3).text());
				map.put("fourth4", first4.get(i+4).text());
				map.put("fifth4", first4.get(i+5).text());
				map.put("sixth4", first4.get(i+6).text());
				map.put("seventh4", first4.get(i+7).text());
				inventory.add(map);				
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> upRankPiCrawl(){
		String url = "https://finance.naver.com/sise/sise_rise.nhn?sosok=0";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements stocktr = rawData.select("div[class=box_type_l] tbody tr");
			Elements stocktd = stocktr.select("td");
			HashMap<String, String> map = null;
			for(int i=0; i < 1 ; i++) {
				map = new HashMap<>();
//				map.put("stockinfo",stocktr.get(2).text());
				map.put("sname", stocktd.get(2).text());
				map.put("nprice", stocktd.get(3).text());
				map.put("pcompare", stocktd.get(4).text());
				map.put("frate", stocktd.get(5).text());
				map.put("volume", stocktd.get(6).text());
				map.put("buyprice", stocktd.get(7).text());
				map.put("sellprice", stocktd.get(8).text());
				map.put("buytotal", stocktd.get(9).text());
				map.put("selltotal", stocktd.get(10).text());
				map.put("per", stocktd.get(11).text());
				inventory.add(map);
			}
//			System.out.println("inventory에 담긴 값 : " + inventory);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("===== 크롤링 결과 =====");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> upRankDakCrawl(){
		String url = "https://finance.naver.com/sise/sise_rise.nhn?sosok=1";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements stocktr = rawData.select("div[class=box_type_l] tbody tr");
			Elements stocktd = stocktr.select("td");
			HashMap<String, String> map = null;
			for(int i=0; i < 1; i++) {
				map = new HashMap<>();
//				map.put("stockinfo",stocktr.get(i).text());
				map.put("sname", stocktd.get(2).text());
				map.put("nprice", stocktd.get(3).text());
				map.put("pcompare", stocktd.get(4).text());
				map.put("frate", stocktd.get(5).text());
				map.put("volume", stocktd.get(6).text());
				map.put("buyprice", stocktd.get(7).text());
				map.put("sellprice", stocktd.get(8).text());
				map.put("buytotal", stocktd.get(9).text());
				map.put("selltotal", stocktd.get(10).text());
				map.put("per", stocktd.get(11).text());
				inventory.add(map);
			}
//			System.out.println("inventory에 담긴 값 : " + inventory);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("===== 크롤링 결과 =====");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> downRankPiCrawl(){
	String url = "https://finance.naver.com/sise/sise_fall.nhn?sosok=0";
	inventory.clear();
	try {
		Document rawData = Jsoup.connect(url).timeout(10*1000).get();
		Elements stocktr = rawData.select("div[class=box_type_l] tbody tr");
		Elements stocktd = stocktr.select("td");
		HashMap<String, String> map = null;
		for(int i=0; i < 1; i++) {
			map = new HashMap<>();
//				map.put("stockinfo",stocktr.get(i).text());
			map.put("sname", stocktd.get(2).text());
			map.put("nprice", stocktd.get(3).text());
			map.put("pcompare", stocktd.get(4).text());
			map.put("frate", stocktd.get(5).text());
			map.put("volume", stocktd.get(6).text());
			map.put("buyprice", stocktd.get(7).text());
			map.put("sellprice", stocktd.get(8).text());
			map.put("buytotal", stocktd.get(9).text());
			map.put("selltotal", stocktd.get(10).text());
			map.put("per", stocktd.get(11).text());
			inventory.add(map);
		}
//			System.out.println("inventory에 담긴 값 : " + inventory);
		
	} catch (IOException e) {
		e.printStackTrace();
	}
	System.out.println("===== 크롤링 결과 =====");
	inventory.get().forEach(System.out :: println);
	return inventory.get();
	}	
	
	public ArrayList<HashMap<String, String>> downRankDakCrawl(){
		String url = "https://finance.naver.com/sise/sise_fall.nhn?sosok=1";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements stocktr = rawData.select("div[class=box_type_l] tbody tr");
			Elements stocktd = stocktr.select("td");
			HashMap<String, String> map = null;
			for(int i=0; i < 1; i++) {
				map = new HashMap<>();
//					map.put("stockinfo",stocktr.get(i).text());
				map.put("sname", stocktd.get(2).text());
				map.put("nprice", stocktd.get(3).text());
				map.put("pcompare", stocktd.get(4).text());
				map.put("frate", stocktd.get(5).text());
				map.put("volume", stocktd.get(6).text());
				map.put("buyprice", stocktd.get(7).text());
				map.put("sellprice", stocktd.get(8).text());
				map.put("buytotal", stocktd.get(9).text());
				map.put("selltotal", stocktd.get(10).text());
				map.put("per", stocktd.get(11).text());
				inventory.add(map);
			}
//				System.out.println("inventory에 담긴 값 : " + inventory);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("===== 크롤링 결과 =====");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
		}
	
	public ArrayList<HashMap<String, String>> upjongCrawl(){
		String url = "https://finance.naver.com/sise/sise_group.nhn?type=upjong";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements stocktr = rawData.select("div#contentarea_left table tbody tr");
			Elements stocktd = stocktr.select("td");
			HashMap<String, String> map = null;
			for(int i=0; i < 1; i++) {
				map = new HashMap<>();
//				map.put("stockinfo",stocktr.get(3).text());
				map.put("sname", stocktd.get(1).text());
				map.put("frate", stocktd.get(2).text());
				map.put("total", stocktd.get(3).text());
				map.put("up", stocktd.get(4).text());
				map.put("maintenance", stocktd.get(5).text());
				map.put("down", stocktd.get(6).text());
				inventory.add(map);
			}
//			System.out.println("inventory에 담긴 값 : " + inventory);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("===== 크롤링 결과 =====");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> themeCrawl(){
		String url = "https://finance.naver.com/sise/theme.nhn";
		inventory.clear();
		try {
			Document rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements stocktr = rawData.select("div#contentarea_left table tbody tr");
			Elements stocktd = stocktr.select("td");
			HashMap<String, String> map = null;
			for(int i=0; i < 1; i++) {
				map = new HashMap<>();
//				map.put("stockinfo",stocktr.get(3).text());
				map.put("tname", stocktd.get(1).text());
				map.put("frate", stocktd.get(2).text());
				map.put("threeday", stocktd.get(3).text());
				map.put("up", stocktd.get(4).text());
				map.put("maintenance", stocktd.get(5).text());
				map.put("down", stocktd.get(6).text());
				map.put("snameo", stocktd.get(7).text());
				map.put("snamet", stocktd.get(8).text());
				inventory.add(map);
			}
//			System.out.println("inventory에 담긴 값 : " + inventory);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		System.out.println("===== 크롤링 결과 =====");
		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> ingCrawl(){
		String url = ""; //url 도메인 주소에 따라 크롤링 하는 화면이 바뀜
		try {
			for(int j=0; j<10; j++) {
				switch (j) {
				case 0:
					url = "https://finance.naver.com/item/sise.nhn?code=005930";
					break;
				case 1:
					url = "https://finance.naver.com/item/sise.nhn?code=000660";
					break;
				case 2:
					url = "https://finance.naver.com/item/sise.nhn?code=005935";
					break;
				case 3:
					url = "https://finance.naver.com/item/sise.nhn?code=207940";
					break;
				case 4:
					url = "https://finance.naver.com/item/sise.nhn?code=035420";
					break;
				case 5:
					url = "https://finance.naver.com/item/sise.nhn?code=005380";
					break;
				case 6:
					url = "https://finance.naver.com/item/sise.nhn?code=051910";
					break;
				case 7:
					url = "https://finance.naver.com/item/sise.nhn?code=068270";
					break;
				case 8:
					url = "https://finance.naver.com/item/sise.nhn?code=02826K";
					break;
				case 9:
					url = "https://finance.naver.com/item/sise.nhn?code=006400";
					break;
				}
				inventory.clear();
				Document rawData = Jsoup.connect(url).timeout(10*1000).get();
				Elements stockname = rawData.select("div[class="+"wrap_company"+"] a");
				Elements stockcode = rawData.select("div[class="+"description"+"] span");
				Elements stocktbody = rawData.select("table[class="+"type2 type_tax"+"] tbody");
				Elements stocktr = stocktbody.select("tr");
				Elements stockth = stocktbody.select("th");
				Elements stocktd = stocktbody.select("td");
				HashMap<String, String> map = null;
				for(int i=0; i < stocktbody.size(); i++) {
					map = new HashMap<>();
					map.put("nprice",stocktd.get(i).text());
					map.put("sellprice",stocktd.get(i+1).text());
					map.put("pcontrast",stocktd.get(i+2).text());
					map.put("buyprice",stocktd.get(i+3).text());
					map.put("frate",stocktd.get(i+4).text());
					map.put("cprice",stocktd.get(i+5).text());
					map.put("tvolume",stocktd.get(i+6).text());
					map.put("sprice",stocktd.get(i+7).text());
					map.put("tamount",stocktd.get(i+8).text());
					map.put("hprice",stocktd.get(i+9).text());
					map.put("fvalue",stocktd.get(i+10).text());
					map.put("lprice",stocktd.get(i+11).text());
					map.put("ulprice",stocktd.get(i+13).text());
					map.put("pulprice",stocktd.get(i+14).text());
					map.put("dlprice",stocktd.get(i+15).text());
					map.put("pdlprice",stocktd.get(i+16).text());
					map.put("per",stocktd.get(i+17).text());
					map.put("eps",stocktd.get(i+18).text());
					map.put("ftweektop",stocktd.get(i+19).text());
					map.put("ftweeklow",stocktd.get(i+20).text());
					map.put("mtotal",stocktd.get(i+21).text());
					map.put("tnumstock",stocktd.get(i+22).text());
					map.put("fnow",stocktd.get(i+23).text());
					map.put("capital",stocktd.get(i+24).text());
					inventory.add(map); // 크롤링한걸 맵에 담아서 리스트에 담음 화면에 뿌려줄 용도
					trading.setStockcode(stockcode.get(0).text());
					trading.setStockname(stockname.get(0).text());
					trading.setNprice(stocktd.get(i).text());
					trading.setSellprice(stocktd.get(i+1).text());
					trading.setPcontrast(stocktd.get(i+2).text());
					trading.setBuyprice(stocktd.get(i+3).text());
					trading.setFrate(stocktd.get(i+4).text());
					trading.setCprice(stocktd.get(i+5).text());
					trading.setTvolume(stocktd.get(i+6).text());
					trading.setSprice(stocktd.get(i+7).text());
					trading.setTamount(stocktd.get(i+8).text());
					trading.setHprice(stocktd.get(i+9).text());
					trading.setFvalue(stocktd.get(i+10).text());
					trading.setLprice(stocktd.get(i+11).text());
					trading.setUlprice(stocktd.get(i+13).text());
					trading.setPulprice(stocktd.get(i+14).text());
					trading.setDlprice(stocktd.get(i+15).text());
					trading.setPdlprice(stocktd.get(i+16).text());
					trading.setPer(stocktd.get(i+17).text());
					trading.setEps(stocktd.get(i+18).text());
					trading.setFtweektop(stocktd.get(i+19).text());
					trading.setFtweeklow(stocktd.get(i+20).text());
					trading.setMtotal(stocktd.get(i+21).text());
					trading.setTnumstock(stocktd.get(i+22).text());
					trading.setFnow(stocktd.get(i+23).text());
					trading.setCapital(stocktd.get(i+24).text());
					tradingMapper.updateTrading(trading); // 크롤링한걸 set 해서 디비에 저장함 매매 시스템에 사용 될 데이터 값
//					System.out.println("===== 디비에 넣을 값 "+i+"번째 ======");
//					System.out.println(trading);
				}
			
			} 
		}
			catch (Exception e) {
			e.printStackTrace();
		}
		
//		System.out.println("===== 크롤링 결과 =====");
//		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
	
	public ArrayList<HashMap<String, String>> bizinfoCrawl(){
		String url = ""; //url 도메인 주소에 따라 크롤링 하는 화면이 바뀜
		try {
			for(int j=0; j<10; j++) {
				switch (j) {
				case 0:
					url = "https://finance.naver.com/item/sise.nhn?code=005930";
					break;
				case 1:
					url = "https://finance.naver.com/item/sise.nhn?code=000660";
					break;
				case 2:
					url = "https://finance.naver.com/item/sise.nhn?code=005935";
					break;
				case 3:
					url = "https://finance.naver.com/item/sise.nhn?code=207940";
					break;
				case 4:
					url = "https://finance.naver.com/item/sise.nhn?code=035420";
					break;
				case 5:
					url = "https://finance.naver.com/item/sise.nhn?code=005380";
					break;
				case 6:
					url = "https://finance.naver.com/item/sise.nhn?code=051910";
					break;
				case 7:
					url = "https://finance.naver.com/item/sise.nhn?code=068270";
					break;
				case 8:
					url = "https://finance.naver.com/item/sise.nhn?code=02826K";
					break;
				case 9:
					url = "https://finance.naver.com/item/sise.nhn?code=006400";
					break;
				}
				inventory.clear();
				Document rawData = Jsoup.connect(url).timeout(10*1000).get();
				Elements stockname = rawData.select("div[class="+"wrap_company"+"] a");
				Elements stockcode = rawData.select("div[class="+"description"+"] span");
				Elements firstinfo = rawData.select("div[class="+"first"+"] tbody");
				Elements firstinfotr = firstinfo.select("tr");
				Elements firstinfotd = firstinfotr.select("td");
				Elements rwidthinfo = rawData.select("table[class="+"rwidth"+"] tbody");
				Elements rwidthinfotr = rwidthinfo.select("tr");
				Elements rwidthinfotd = rwidthinfotr.select("td");
				Elements perinfo = rawData.select("table[class="+"per_table"+"] tbody");
				Elements perinfotr = perinfo.select("tr");
				Elements perinfotd = perinfotr.select("td");
				Elements grayinfo = rawData.select("div[class="+"gray"+"] tbody");
				Elements grayinfotr = grayinfo.select("tr");
				Elements grayinfotd = grayinfotr.select("td");
				HashMap<String, String> map = null;
				for(int i=0; i < firstinfo.size(); i++) {
					map = new HashMap<>();
					map.put("stockcode", stockcode.get(0).text());
					map.put("stockname", stockname.get(0).text());
					map.put("mtamount", firstinfotd.get(i).text());
					map.put("mtarank", firstinfotd.get(i+1).text());
					map.put("tnumstock", firstinfotd.get(i+2).text());
					map.put("fvalueunit", firstinfotd.get(i+3).text());
					map.put("flnumstock", grayinfotd.get(i).text());
					map.put("fhnumstock", grayinfotd.get(i+1).text());
					map.put("ferate", grayinfotd.get(i+2).text());
					map.put("iotsprice", rwidthinfotd.get(i).text());
					map.put("ftweektoplow", rwidthinfotd.get(i+1).text());
					map.put("perfg", perinfotd.get(i).text());
					map.put("krx", perinfotd.get(i+1).text());
					map.put("eper", perinfotd.get(i+2).text());
					map.put("pbrfg", perinfotd.get(i+3).text());
					map.put("drate", perinfotd.get(i+4).text());
					map.put("stper", grayinfotd.get(i+3).text());
					map.put("strate", grayinfotd.get(i+4).text());
					inventory.add(map); // 크롤링만 해오는거
					bizinfo.setStockcode(stockcode.get(0).text());
					bizinfo.setStockname(stockname.get(0).text());
					bizinfo.setMtamount(firstinfotd.get(i).text());
					bizinfo.setMtarank(firstinfotd.get(i+1).text());
					bizinfo.setTnumstock(firstinfotd.get(i+2).text());
					bizinfo.setFvalueunit(firstinfotd.get(i+3).text());
					bizinfo.setFlnumstock(grayinfotd.get(i).text());
					bizinfo.setFhnumstock(grayinfotd.get(i+1).text());
					bizinfo.setFerate(grayinfotd.get(i+2).text());
					bizinfo.setIotsprice(rwidthinfotd.get(i).text());
					bizinfo.setFtweektoplow(rwidthinfotd.get(i+1).text());
					bizinfo.setPerfg(perinfotd.get(i).text());
					bizinfo.setKrx(perinfotd.get(i+1).text());
					bizinfo.setEper(perinfotd.get(i+2).text());
					bizinfo.setPbrfg(perinfotd.get(i+3).text());
					bizinfo.setDrate(perinfotd.get(i+4).text());
					bizinfo.setStper(grayinfotd.get(i+3).text());
					bizinfo.setStrate(grayinfotd.get(i+4).text());
					tradingMapper.updateBizInfo(bizinfo);//크롤링한거 디비에 넣는거
//					System.out.println("===== 디비에 넣을 값 "+i+"번째 ======");
//					System.out.println(bizinfo);
				}
			
			} 
		}
			catch (Exception e) {
			e.printStackTrace();
		}
		
//		System.out.println("===== 크롤링 결과 =====");
//		inventory.get().forEach(System.out :: println);
		return inventory.get();
	}
}
