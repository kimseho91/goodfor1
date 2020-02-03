"use strict";
var trading = trading || {}
trading = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img,trading_vue_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		trading_vue_js=js+'/vue/trading_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(trading_vue_js)
		)
		.done(()=>{
			setContentView()
			button_click()
		})
		.fail()
	}
	let setContentView =()=>{
		$('#body_main').empty()
			.html(trading_vue.trading_mainbody({css: $.css(), img: $.img()}))
			.appendTo('#body_main')
	}
	let button_click=()=>{
		$('#btn_mystock').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_mystock())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_lead').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_lead())
			.appendTo('#d_one')
			button_click()
		})
		$('#lead_industry').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_lead())
			.appendTo('#d_one')
			button_click()
		})
		$('#lead_theme').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_lead_theme())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_uprank').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_up_rank())
			.appendTo('#d_one')
			crawling()
			button_click()
		})
		$('#uprank_kospi').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_up_rank())
			.appendTo('#d_one')
		})
		$('#uprank_kosdak').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_up_rank_kosdak())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_downrank').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_down_rank())
			.appendTo('#d_one')
			button_click()
		})
		$('#downrank_kospi').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_down_rank())
			.appendTo('#d_one')
			button_click()
		})
		$('#downrank_kosdak').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_down_rank_kosdak())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_balance').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_balance())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_da').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_da())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_log').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_log())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_time').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_time())
			.appendTo('#d_three')
			button_click()
		})
		$('#btn_day').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_day())
			.appendTo('#d_three')
			button_click()
		})
		$('#btn_buy').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_buy())
			.appendTo('#d_three')
			button_click()
		})
		$('#btn_sell').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_sell())
			.appendTo('#d_three')
			button_click()
		})
		$('#btn_correction').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_correction())
			.appendTo('#d_three')
			button_click()
		})
		$('#btn_cancle').click(e=>{
			e.preventDefault()
			$('#tab3').empty()
			.html(trading_vue.trading_cancle())
			.appendTo('#d_three')
			button_click()
		})
		$('#btn_attention').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_attention())
			.appendTo('#d_one')
			button_click()
		})
		$('#btn_lmystock').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_mystock())
			.appendTo('#d_one')
			button_click()
		})
	}
	let crawling =()=>{
		$.getJSON(_+'/tradings/navercrawl/',d=>{
			console.log(d)
			// let list = d.list;
			$('#uprank_data').empty()
			$.each(d,(i,j)=>{
				if(i==2){
					$('<td colspan="2"></td>').text(d.sname).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.nprice).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.pcompare).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.frate).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.volume).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.sprice).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.hprice).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.lprice).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.sellprice).appendTo('#uprank_data');
					$('<td colspan="2"></td>').text(d.purchaseprice).appendTo('#uprank_data');
				}
			})
		})
	}

	return {onCreate}
})();