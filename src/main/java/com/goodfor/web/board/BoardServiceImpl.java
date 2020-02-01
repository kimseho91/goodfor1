package com.goodfor.web.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.goodfor.web.pxy.PageProxy;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired BoardMapper mapper;
			
	@Override
	public int boardAllCount(String ctype) {
		// TODO Auto-generated method stub
		return mapper.selectBoardAllCount(ctype);
	}
	
	@Override
	public void insertBoardWrite(Board param) {
		mapper.insertBoardWrite(param);
		
	}

	@Override
	public Board readBoard(int param) {
		// TODO Auto-generated method stub
		return mapper.selectBoardRead(param);
	}
	
	@Override
	public void updateBoard(Board param) {
		mapper.updateBoard(param);
		
	}

	@Override
	public void deleteBoard(int param) {
		mapper.deleteBoard(param);
		
	}

	

	@Override
	public List<Board> selectAllBoardCustomer(PageProxy param) {
		// TODO Auto-generated method stub
		return mapper.selectAllBoardCustomer(param);
	}

	@Override
	public List<Board> selectAllBoardNotice(PageProxy param) {
		// TODO Auto-generated method stub
		return mapper.selectAllBoardNotice(param);
	}

	@Override
	public List<Board> selectAllBoardFAQ(PageProxy param) {
		// TODO Auto-generated method stub
		return mapper.selectAllBoardFAQ(param);
	}
	
//	@Override
//	public List<BoardCustomer> selectAllBoardCustomer(PageProxy param) {
//		// TODO Auto-generated method stub
//		return mapper.selectAllBoardCustomer(param);
//	}
//
//	@Override
//	public List<BoardNotice> selectAllBoardNotice(PageProxy param) {
//		// TODO Auto-generated method stub
//		return mapper.selectAllBoardNotice(param);
//	}
//
//	@Override
//	public List<BoardFAQ> selectAllBoardFAQ(PageProxy param) {
//		// TODO Auto-generated method stub
//		return mapper.selectAllBoardFAQ(param);
//	}
	
	@Override
	public List<Board> searchBno(PageProxy param) {
		// TODO Auto-generated method stub
		return mapper.selectAllBoardByBno(param);
	}

	@Override
	public List<Board> searchTitle(PageProxy param) {
		// TODO Auto-generated method stub
		return mapper.selectAllBoardByTitle(param);
	}

	@Override
	public List<Board> searchWriter(PageProxy param) {
		// TODO Auto-generated method stub
		return mapper.selectAllBoardByWriter(param);
	}
	
	

}
