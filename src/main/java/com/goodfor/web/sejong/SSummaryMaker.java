package com.goodfor.web.sejong;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("ssmaker")
public class SSummaryMaker {

	@Autowired SSummaryMapper ssummaryMapper;
	
	public String makeCaccount() {
		List<String> accountNum = Arrays.asList(
				"100100001","100100002","100100003","100100004","100100005",
				"100100006","100100007","100100008","100100009","100100010",
				"100200001","100200002","100200003","100200004","100200005",
				"100200006","100200007","100200008","100200009","100200010",
				"100300001","100300002","100300003","100300004","100300005",
				"100300006","100300007","100300008","100300009","100300010");
		Collections.shuffle(accountNum);
		return accountNum.get(0);
	}
	
	public String makeStockcode() {
		List<String> stockcodeNum = Arrays.asList(
				"034220","005930","000660","207940","035420",
				"005380","051910","012330","068270","028260",
				"051900","006400","005490","055550","017670",
				"105560","000270","034730","034730","018260",
				"036570","032830","035720","033780","003550",
				"096770","090430","090430","000810","086790");
		Collections.shuffle(stockcodeNum);
		return stockcodeNum.get(0);
	}
	
	public String makeTradetype() {
		return String.format("%d", (int)(Math.random()*2+1));
	}
	
	public String makeOrdertype() {
		return String.format("%d", (int)(Math.random()*2+1));
	}
	
	public String makeTcount() {
		return String.format("%d", (int)(Math.random()*100+1));
	}
	
	public String makeTamount() {
		return String.format("%d000", (int)(Math.random()*100+1));
	}
	
	public String makeCreatedate() {
		int iRandomMonth = (int)(Math.random()*12+1);
		int[] maxDays = {31,28,31,30,31,30,31,31,30,31,30,31};
		int iRandomDay = (int)(Math.random()*maxDays[iRandomMonth-1]+1);
		return String.format("%d%02d%02d", (int)(Math.random()*2+2018), iRandomMonth, iRandomDay );
	}
	
	public SSummary makeSSummary() {
		int tcount = Integer.parseInt(makeTcount());
		int tamount = Integer.parseInt(makeTamount());
		int ftamount = tcount*tamount;
		return new SSummary(makeCaccount(),
				makeStockcode(),
				makeTradetype(),
				makeOrdertype(),
				Integer.toString(tcount),
				Integer.toString(tamount),
				Integer.toString(ftamount),
				makeCreatedate());
	}
	
	public void insertMakeSSummary() {
		for(int i=0 ; i<100 ; i++) {
			ssummaryMapper.insertSSummary(makeSSummary());
		}
	}
	
}
