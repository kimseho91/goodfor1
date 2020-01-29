"use strict";
var s_admin = s_admin || {}
s_admin = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
		
	let _, js, css, img, s_admin01_vue_js, s_admin02_vue_js, s_admin03_vue_js, s_admin04_vue_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		s_admin01_vue_js = js+'/vue/s_admin01_vue.js'
		s_admin02_vue_js = js+'/vue/s_admin02_vue.js'
		s_admin03_vue_js = js+'/vue/s_admin03_vue.js'
		s_admin04_vue_js = js+'/vue/s_admin04_vue.js'
	}
	
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(s_admin01_vue_js),
			$.getScript(s_admin02_vue_js),
			$.getScript(s_admin02_vue_js),
			$.getScript(s_admin04_vue_js)
		)
		.done(()=>{
			$('#s_admin_m1').click(e=>{
				e.preventDefault()
				$('#body_main')
				.empty()
				.html(s_admin01_vue.admin01_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
				.appendTo('#body_main')
				onCreate()
			})
			$('#s_admin_m2').click(e=>{
				e.preventDefault()
				$('#s_body_div01')
				.empty()
				.html(s_admin02_vue.admin02_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
				.appendTo('#s_body_div01')
				onCreate()
			})
			$('#s_admin_m3').click(e=>{
				e.preventDefault()
				$('#s_body_div01')
				.empty()
				.html(s_admin03_vue.admin03_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
				.appendTo('#s_body_div01')
				onCreate()
			})
			$('#s_admin_m4').click(e=>{
				e.preventDefault()
				$('#s_body_div01')
				.empty()
				.html(s_admin04_vue.admin04_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
				.appendTo('#s_body_div01')
				adminmenu4()
			})
		})
		.fail()
	}
	
	let adminmenu4 =()=>{
		
		$('#s_createsummarytable')
		.click(e=>{
			e.preventDefault()
			alert('s_createsummarytable 버튼 클릭'+_)
			$.getJSON(_+'/admin/create/summarytable',
				d=>{
				alert('summary table create : '+d.msg)
			})
		})
		
		$('#s_dropsummarytable')
		.click(e=>{
			e.preventDefault()
			alert('s_dropsummarytable 버튼 클릭'+_)
			$.getJSON(_+'/admin/drop/summarytable',
				d=>{
				alert('summary table drop : '+d.msg)
			})
		})
		
	}
	
	return{ onCreate }
	
})()