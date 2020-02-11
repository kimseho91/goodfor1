package com.goodfor.web.seho;

import org.springframework.stereotype.Component;

@Component
public interface TradingService {
	public Trading search(String stockname);
	public void updateTrading(Trading param);
	public void updateBizInfo(BizInfo param);
}
