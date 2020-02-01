package com.goodfor.web.customer;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/customers")
public class CustomerCtrl {
	@Autowired Map<String, Object> map;
	@Autowired CustomerServiceImpl service;
	
	@PostMapping("/")
	public Map<?, ?> join(@RequestBody Customer param) {
		
		System.out.println("조인 param 값" + param.getCid() + ","  + param.getCpw() + ","  + param.getCname() + ","  
		+ param.getEmail() + ","  + param.getPnumber() + ","  + param.getInvest() + ","  + param.getRating());
		service.insertCustomerJoin(param);
		map.clear();
		map.put("msg", "success");
		
		return map;
	}
	
	@PostMapping("/{cid}")
	public Map<?, ?> login(@PathVariable String cid, @RequestBody Customer param) {
		System.out.println("cid 값 넘어온 결과 :" +cid);
		System.out.println("로그인 param 값 넘어온 결과" + param.getCid() + "," + param.getCpw());
		map.clear();
		map.put("msg", "success");
		map.put("login", service.selectCustomerLogin(param));
		return map;
				
	}
	
	@GetMapping("/cuslist")
	public Map<?, ?> customerList(){
		
		map.clear();
		map.put("msg", "success");
		map.put("cuslist", service.selectAllCustomer());
		
		return map;
		
	}
	
	
	
	

}
