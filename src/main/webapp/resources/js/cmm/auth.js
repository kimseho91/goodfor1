"use strict";
var auth = auth || {};
auth = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img, auth_vue_js,trading_vue_js,s_admin_vue_js,notice_vue_js,notice_js,s_admin_jsjs,trading_js, customer_vue_js, myPage_vue_js, stockinfo_vue_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		auth_vue_js=js+'/vue/auth_vue.js'
		trading_vue_js=js+'/vue/trading_vue.js'
		s_admin_vue_js=js+'/vue/s_admin01_vue.js'
		notice_vue_js=js+'/vue/notice_vue.js'
		notice_js=js+'/cmm/notice.js'
		s_admin_jsjs=js+'/cmm/s_admin.js'
		trading_js=js+'/cmm/trading.js'
		customer_vue_js = js+'/vue/customer_vue.js'
		myPage_vue_js = js+'/vue/myPage_vue.js'
		stockinfo_vue_js =js+'/vue/stockinfo_vue.js'
	}
	
	let onCreate =()=>{
		init();
		$.when(
			$.getScript(auth_vue_js),
			$.getScript(trading_vue_js),
			$.getScript(trading_js),
			$.getScript(s_admin_vue_js),
			$.getScript(s_admin_jsjs),
			$.getScript(notice_vue_js),
			$.getScript(notice_js),
			$.getScript(customer_vue_js),
			$.getScript(myPage_vue_js),
			$.getScript(stockinfo_vue_js)
			
		).done(()=>{
			setContentView()
			$('#btn_main').click(e=>{
				e.preventDefault()
				$('body').empty()
				.html(auth_vue.auth_body({css: $.css(), img: $.img()}))
				onCreate()
			})
			$('#btn_trading').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(trading_vue.trading_mainbody({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				trading.onCreate()
			})
			$('#btn_notice').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(customer_vue.cust_mainbody({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				customer.onCreate()
			})
			$('#btn_admin').click(e=>{
				e.preventDefault()
				s_admin.onCreate()
			})
			$('#btn_stockinfo').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(stockinfo_vue.stockinfo_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				stockinfo.onCreate()
			})
			$('#btn_mypage').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(myPage_vue.main({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
			})
			$('#btn_loginForm').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(auth_vue.login({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				login()
			})
			$('#btn_joinForm').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(auth_vue.join({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
				join()
			})
		})
	}
	let setContentView =()=>{
		$('body').html(auth_vue.auth_body({css: $.css(), img: $.img()}))
	}

	let join =()=>{
		$('#btn_join').click(e=>{
			e.preventDefault()
		
		$.ajax({
			url: _ + '/customers/',
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify({
				cid: $('#join_cid').val(),
				cpw: $('#join_cpw').val(),
				cname: $('#join_userName').val(),
				email: $('#join_email').val(),
				pnumber: $('#join_pnumber').val(),
				invest: $("#join_investRadio input[name='join_invest']:checked").val(),
				rating : $('#join_rating').val()
			}),
			contentType: 'application/json',
			success: d => {
				alert('AJAX성공')
				if (d.msg === 'success') {
					$('body').html(auth_vue.auth_body({css: $.css(), img: $.img()}))
					
				} else {
					alert('회원가입 실패')
				}

			},
			error: e => {
				alert('AJAX 실패')
			}

			})
		})
		
	}
	
	let login =()=>{
		
		$('#btn_login').click(e=>{
			e.preventDefault()
		
		$.ajax({
			url: _ + '/customers/'+$('#login_cid').val(),
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify({
				cid: $('#login_cid').val(),
				cpw: $('#login_cpw').val()
				
			}),
			contentType: 'application/json',
			success: d => {
				alert('AJAX성공')
				$('#body_main').empty()
				$('#s-header').empty()
				$('#s-header').html(auth_vue.auth_header({css: $.css(), img: $.img()}))
				//.appendTo('#s-header')
										

			},
			error: e => {
				alert('AJAX 실패')
			}

			})
		})
		
	}

	return {onCreate}	
	
})();