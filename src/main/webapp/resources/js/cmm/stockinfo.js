var stockinfo = stockinfo || {}
stockinfo=(()=>{
	const WHEN_ERR = '호출하는 stockinfoJS파일을 찾지 못했습니다.'
	let _, js, css, img, stockinfo_vue_js			
	let init=()=>{
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		stockinfo_vue_js =js+'/vue/stockinfo_vue.js'
	}
	let onCreate=()=>{
		init()
		$.when(
			$.getScript(stockinfo_vue_js)
	
		)
		.done(()=>{
			setContentView()
		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
		
	}
	let setContentView=()=>{
		topCrawling()
		domeCrawling()
		newsCrawling()
		interCrawling()
	}
	let topCrawling=()=>{
		$('tbody').empty()
		$.getJSON(_+'/infos/crawl1/'+x.pageCount+x.pageSize+'/'+x.nowPage, d=>{
			$('#dev-table tbody').empty()
			console.log(d)
			$.each(d, (i,j)=>{
				$(`<tr><td>${j.element}</td><td>${j.tempforTitle}</td><td>${j.perChange}</td><td>{j.첫번째꺼}</td><td>${j.high}</td><td>${j.name}</td></tr>`)
				.css({width: '25%', height: '100%'})
					.appendTo('#dev-table tbody')
			})	
		})
	}
	let domeCrawling=()=>{
		$('tbody').empty()
		$.getJSON(_+'/infos/crawl2/', d=>{
			$('#table_nation tbody').empty()
			console.log(d)
			$.each(d, (i,j)=>{
				$(`<tr><td>${j.item}</td><td>${j.price}</td><td>${j.different}</td><td>j.rate</td><td>j.amount</td><td>j.total</td></tr>`)
				.css({width: '25%', height: '100%'})
					.appendTo('#table_nation tbody')
			})
		})	
	}
	let newsCrawling=()=>{
		$('tbody').empty()
		$.getJSON(_+'/infos/crawl3/', d=>{
			$('#crawl_news tbody').empty()
			console.log(d)
			$.each(d, (i,j)=>{
				$(`<tr><td>${j.element}</td><td>${j.tempforTitle}</td><td>${j.perChange}</td><td>{j.뉴스크롤링}</td><td>${j.high}</td><td>${j.name}</td></tr>`)
				.css({width: '25%', height: '100%'})
					.appendTo('#crawl_news tbody')
			})	
			
		})
	}
	let interCrawling=()=>{
		$('tbody').empty()
		$.getJSON(_+'/infos/crawl4/', d=>{
			$('#table_internation tbody').empty()
			console.log(d)
			$.each(d, (i,j)=>{
				$(`<tr><td>${j.currentV}</td><td>${j.change}</td><td>${j.perChange}</td><td>{j.아무거}</td><td>${j.high}</td><td>${j.name}</td></tr>`)
				.css({width: '25%', height: '100%'})
					.appendTo('#table_internation tbody')
			})	
			
		})
		
	}
	
	return {onCreate}
})()