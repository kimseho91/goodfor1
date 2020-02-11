package com.goodfor.web.seho;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradingServiceImpl implements TradingService {
	@Autowired TradingMapper mapper;
	
	@Override
	public Trading search(String stockname) {
		return mapper.search(stockname);
	}

	@Override
	public void updateTrading(Trading param) {
		mapper.updateTrading(param);
	}

	@Override
	public void updateBizInfo(BizInfo param) {
		mapper.updateBizInfo(param);
	}
}
