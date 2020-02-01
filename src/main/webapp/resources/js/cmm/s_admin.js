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
			$.getScript(s_admin03_vue_js),
			$.getScript(s_admin04_vue_js)
		)
		.done(()=>{
			setContentView()
			adminLeftButton()
		})
		.fail()
	}
	
	let setContentView =()=>{
		
		$('#body_main').empty()
		.html(s_admin01_vue.admin01_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
		.appendTo('#body_main')
		
		$.getJSON(_+'/admin/menu1/selectData',
				d=>{
					$(`<i class="dripicons-graph-bar float-right"></i>
                    <h5 class="text-muted text-uppercase mb-3">거래현황 (건수/금액)</h5>
					<h4 class="mb-3" data-plugin="counterup"><span data-plugin="counterup">${d.tcase}건 / ${d.tamount}원</span></h4>
					<span class="badge badge-primary"> +11% </span> <span class="text-muted ml-2 vertical-middle">From previous period</span>`)
					.appendTo("#s_tcaseamount")
				})
	}
	
	
	
	let adminLeftButton =()=>{
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
		})
		$('#s_admin_m3').click(e=>{
			e.preventDefault()
			$('#s_body_div01')
			.empty()
			.html(s_admin03_vue.admin03_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
			.appendTo('#s_body_div01')
		})
		$('#s_admin_m4').click(e=>{
			e.preventDefault()
			$('#s_body_div01')
			.empty()
			.html(s_admin04_vue.admin04_body({css: $.css(), img: $.img(), ctx: $.ctx()}))
			.appendTo('#s_body_div01')
			adminmenu4()
		})
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
		
		$('#s_insertsummarytable')
		.click(e=>{
			e.preventDefault()
			alert('s_insertsummarytable 버튼 클릭'+_)
			$.getJSON(_+'/admin/insert/summarytable',
				d=>{
				alert('summary table drop : '+d.msg)
			})
		})
		
	}
	
	return{ onCreate }
	
})()