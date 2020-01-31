package com.goodfor.web.pxy;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;
@Component @Lazy @Data
public class Box<T>{
	private ArrayList<T> list;
	
	public Box(){
		list = new ArrayList<>();	
	}
	
	public void add(T t) {
		list.add(t);
	}
	public T get(int i) {
		return list.get(i);
	}
	public ArrayList<T> get(){
		return list;
	}
	public int size() {
		return list.size();
	}
	public String toString() {
		return list.toString();
	}
	public void clear() {
		list.clear();
	}
}