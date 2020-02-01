package com.goodfor.web.board;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data 
@AllArgsConstructor
@NoArgsConstructor
@Component
public class Board {
	//
	private String seq, writer, ctype, title, content, credate, modidate, attfile;
	
}
