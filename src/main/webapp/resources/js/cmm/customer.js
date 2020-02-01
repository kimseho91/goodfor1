"use strict";
var customer = customer || {};
customer = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, customer_vue_js, brd_js, brd_vue_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		customer_vue_js = js+'/vue/customer_vue.js'
		brd_vue_js = js+'/vue/brd_vue.js'
		brd_js = js+'/brd/brd.js'
	}

	let onCreate = ()=>{
		init();
		$.when(
			$.getScript(customer_vue_js),
			$.getScript(brd_vue_js),
			$.getScript(brd_js)
		)
		.done(()=>{
			
			$('#btn_faqView').click(e=>{
				e.preventDefault()
				alert('자주하는 질문 클릭')
				$('body_main').empty()
				brd.onCreate(1)
				
			})
			
			$('#btn_customerView').click(e=>{
				e.preventDefault()
				alert('고객 클릭')
				$('body_main').empty()
				brd.onCreate(2)
				
							
			})
			
			$('#btn_customerView').click(e=>{
				e.preventDefault()
				alert('고객 클릭')
				$('body_main').empty()
				brd.onCreate(3)
								
			
			})
			
			$('#btn_noticeView').click(e=>{
				e.preventDefault()
				alert('공지사항 클릭')
				$('body_main').empty()
				brd.onCreate(4)
				
			})
			
		})
		
			
	}
	
//	let brd_move=()=>{
//		let type = $('input[name="faq"]:checked').val()
//		switch(type){
//		case 1 :
//			$('#btn_faqView').click(e=>{
//				e.preventDefault()
//				alert('자주하는 질문 클릭')
//				$('body_main').empty()
//				brd.onCreate()
//				brd.write(1)
//			})
//			break
//		case 2 :
//			$('#btn_customerView').click(e=>{
//				e.preventDefault()
//				alert('고객 클릭')
//				$('body_main').empty()
//				brd.onCreate()
//				brd.write(2)
//							
//			})
//			
//			break
//		case 3 : 
//			$('#btn_customerView').click(e=>{
//				e.preventDefault()
//				alert('고객 클릭')
//				$('body_main').empty()
//				brd.onCreate()
//				brd.write(3)
//				
//			
//			})
//			break
//		case 4 : 
//			$('#btn_noticeView').click(e=>{
//				e.preventDefault()
//				alert('공지사항 클릭')
//				$('body_main').empty()
//				brd.onCreate()
//				brd.write(4)
//			})
//			break
//		}			
//		
//	}
	
	return {onCreate}
})();