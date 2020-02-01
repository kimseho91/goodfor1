package com.goodfor.web.board;

import java.util.List;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import com.goodfor.web.pxy.PageProxy;

@Repository
public interface BoardMapper {
	public void insertBoardWrite(Board param);
	public List<Board> selectAllBoardCustomer(PageProxy param);
	public List<Board> selectAllBoardNotice(PageProxy param);
	public List<Board> selectAllBoardFAQ(PageProxy param);
//	public List<BoardCustomer> selectAllBoardCustomer(PageProxy param);
//	public List<BoardNotice> selectAllBoardNotice(PageProxy param);
//	public List<BoardFAQ> selectAllBoardFAQ(PageProxy param);
	public int selectBoardAllCount(String ctype);
	public Board selectBoardRead(int param);
	public void updateBoard(Board param);
	public void deleteBoard(int param);
	public List<Board> selectAllBoardByBno(PageProxy param);
	public List<Board> selectAllBoardByTitle(PageProxy param); 
	public List<Board> selectAllBoardByWriter(PageProxy param); 
	
	
}
