package com.goodfor.web.seho;

import org.springframework.stereotype.Repository;

@Repository
public interface TradingMapper {
	public Trading search(String stockname);
	public void updateTrading(Trading param);
	public void updateBizInfo(BizInfo param);
}
