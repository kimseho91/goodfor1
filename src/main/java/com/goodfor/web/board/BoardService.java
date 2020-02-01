package com.goodfor.web.board;

import java.util.List;

import org.springframework.stereotype.Component;

import com.goodfor.web.pxy.PageProxy;

@Component
public interface BoardService {
	public int boardAllCount(String ctype);
	public void insertBoardWrite(Board param);
	public List<Board> selectAllBoardCustomer(PageProxy param);
	public List<Board> selectAllBoardNotice(PageProxy param);
	public List<Board> selectAllBoardFAQ(PageProxy param);
//	public List<BoardCustomer> selectAllBoardCustomer(PageProxy param);
//	public List<BoardNotice> selectAllBoardNotice(PageProxy param);
//	public List<BoardFAQ> selectAllBoardFAQ(PageProxy param);
	
	public Board readBoard(int param);
	public void updateBoard(Board param);
	public void deleteBoard(int param);
	public List<Board> searchBno(PageProxy param);
	public List<Board> searchTitle(PageProxy param); 
	public List<Board> searchWriter(PageProxy param); 
}
