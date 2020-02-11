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
			upjongcrawl()
			button_click()
		})
		$('#lead_industry').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_lead())
			.appendTo('#d_one')
			upjongcrawl()
			button_click()
		})
		$('#lead_theme').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_lead_theme())
			.appendTo('#d_one')
			themecrawl()
			button_click()
		})
		$('#btn_uprank').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_up_rank())
			.appendTo('#d_one')
			uprankpicrawl()
			button_click()
		})
		$('#uprank_kospi').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_up_rank())
			.appendTo('#d_one')
			uprankpicrawl()
			button_click()
		})
		$('#uprank_kosdak').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_up_rank_kosdak())
			.appendTo('#d_one')
			uprankdakcrawl()
			button_click()
		})
		$('#btn_downrank').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_down_rank())
			.appendTo('#d_one')
			downrankpicrawl()
			button_click()
		})
		$('#downrank_kospi').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_down_rank())
			.appendTo('#d_one')
			downrankpicrawl()
			button_click()
		})
		$('#downrank_kosdak').click(e=>{
			e.preventDefault()
			$('#tab1').empty()
			.html(trading_vue.trading_down_rank_kosdak())
			.appendTo('#d_one')
			downrankdakcrawl()
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

		$('#tab2_searchbtn').click(e=>{
			e.preventDefault()
			$.ajax({
				url:_+'/tradings/'+$('#tab2_input').val(),
				type: 'POST',
				dataType : 'json',
				data : JSON.stringify({
					stockname : $('#tab2_input').val()
				}),
				contentType:'application/json',
				success: d =>{
					alert('AJAX 성공')
					if(d.msg === 'success'){
						detailstock(d.trading)
						button_click()
					}else {
						alert('디테일 정보 가져오기 실패')
					}
				},
				error: e =>{
					alert('AJAX 실패')
				}
			})
		})
	}
	let uprankpicrawl =()=>{
		$.getJSON(_+'/tradings/uprankpicrawl/',d=>{
			console.log(d)
			$('#uprank_data').empty()
			$.each(d,(i,j)=>{
				$('<tr id="uprank'+(i+1)+'"></tr>').appendTo('#uprank_data');
				$('<td colspan="2"></td>').text(j.sname+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.nprice+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.pcompare+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.frate+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.volume+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.buyprice+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.buytotal+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice+(i+1)).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.per+(i+1)).appendTo('#uprank_data tr');
			})
		})
	}

	let uprankdakcrawl =()=>{
		$.getJSON(_+'/tradings/uprankdakcrawl/',d=>{
			console.log(d)
			$('#uprank_data').empty()
			$.each(d,(i,j)=>{
				$('<tr></tr>').appendTo('#uprank_data');
				$('<td colspan="2"></td>').text(j.sname).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.nprice).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.pcompare).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.frate).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.volume).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.buyprice).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.buytotal).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice).appendTo('#uprank_data tr');
				$('<td colspan="2"></td>').text(j.per).appendTo('#uprank_data tr');
			})
		})
	}

	let downrankpicrawl =()=>{
		$.getJSON(_+'/tradings/downrankpicrawl/',d=>{
			console.log(d)
			$('#downrank_data').empty()
			$.each(d,(i,j)=>{
				$('<tr></tr>').appendTo('#downrank_data');
				$('<td colspan="2"></td>').text(j.sname).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.nprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.pcompare).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.frate).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.volume).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.buyprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.buytotal).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.per).appendTo('#downrank_data tr');
			})
		})
	}
	
	let downrankdakcrawl =()=>{
		$.getJSON(_+'/tradings/downrankdakcrawl/',d=>{
			console.log(d)
			$('#downrank_data').empty()
			$.each(d,(i,j)=>{
				$('<tr></tr>').appendTo('#downrank_data');
				$('<td colspan="2"></td>').text(j.sname).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.nprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.pcompare).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.frate).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.volume).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.buyprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.buytotal).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.sellprice).appendTo('#downrank_data tr');
				$('<td colspan="2"></td>').text(j.per).appendTo('#downrank_data tr');
			})
		})
	}

	let upjongcrawl =()=>{
		$.getJSON(_+'/tradings/upjongcrawl/',d=>{
			console.log(d)
			$('#lead_data').empty()
			$.each(d,(i,j)=>{
				$('<tr></tr>').appendTo('#lead_data');
				$('<td colspan="4"></td>').text(j.sname).appendTo('#lead_data tr');
				$('<td colspan="4"></td>').text(j.frate).appendTo('#lead_data tr');
				$('<td colspan="3"></td>').text(j.total).appendTo('#lead_data tr');
				$('<td colspan="3"></td>').text(j.up).appendTo('#lead_data tr');
				$('<td colspan="3"></td>').text(j.maintenance).appendTo('#lead_data tr');
				$('<td colspan="3"></td>').text(j.down).appendTo('#lead_data tr');
			})
		})
	}

	let themecrawl =()=>{
		$.getJSON(_+'/tradings/themecrawl/',d=>{
			console.log(d)
			$('#lead_data').empty()
			$.each(d,(i,j)=>{
				$('<tr></tr>').appendTo('#lead_data');
				$('<td colspan="3"></td>').text(j.tname).appendTo('#lead_data tr');
				$('<td colspan="3"></td>').text(j.frate).appendTo('#lead_data tr');
				$('<td colspan="4"></td>').text(j.threeday).appendTo('#lead_data tr');
				$('<td colspan="2"></td>').text(j.up).appendTo('#lead_data tr');
				$('<td colspan="2"></td>').text(j.maintenance).appendTo('#lead_data tr');
				$('<td colspan="2"></td>').text(j.down).appendTo('#lead_data tr');
				$('<td colspan="2"></td>').text(j.snameo).appendTo('#lead_data tr');
				$('<td colspan="2"></td>').text(j.snamet).appendTo('#lead_data tr');
			})
		})
	}

	let detailstock =x=>{
		$('#tab2').empty()
		.html(trading_vue.detail_stock(x))
		.appendTo('#tab2')

	}

	return {onCreate}
})();