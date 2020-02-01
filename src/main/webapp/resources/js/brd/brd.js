"use strict"
var brd = brd || {}
brd = (() => {
	const WHEN_ERR = '호출하는 JS파일을 찾을 수 없습니다.'
	let _, js, brd_vue_js, type
	let init = x => {
		_ = $.ctx()
		js = $.js()
		brd_vue_js = js + '/vue/brd_vue.js'
		type = x
		alert(`${type} 이닛 타입`)
	}
	let onCreate = x => {
		
		init(x)

		$.when(
			$.getScript(brd_vue_js)
		).done(() => {
			setContentView()
			
		}).fail(() => {
			alert('실패')
		})
	}
	let setContentView = () => {
		
		
		list({ ctype: type, pageSize: 5, nowPage: 0 })
		
		//list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})
	
	}
	let write = x =>  {
		
			
		$('#btn_brd').click((e) => {
			e.preventDefault()
			alert('게시판 글쓰기 버튼 클릭')
			
			$('#body_main').empty()
			$('#body_main').html(brd_vue.write({type:x}))		
				
			$('#btn_write').click(e => {
				e.preventDefault()
				alert('글 작성 페이지 글쓰기 버튼 클릭')
				$.ajax({
					url: _ + '/boards/',
					type: 'POST',
					data: JSON.stringify({
						title: $('#write_form input[name="title"]').val(),
						ctype: $('#write_form input[name="ctype"]').val(),
						writer: $('#write_form input[name="writer"]').val(),
						content: $('#write_form textarea[name="content"]').val()
						}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						alert('글쓰기 성공'+type+" 으로 이동")
						 list({ ctype: type, pageSize: 5, nowPage: 0 })
						// list({pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})

					},
					error: e => {
						alert('AJAX 실패')
					}
				})
			})			
			
			$(`<div id="myModal" class="modal">

							  <!-- Modal content -->
							  <div class="modal-content">
							    <span class="close">&times;</span>
							    <form>
							    <input id="fileUpload" type="file"/>
							    <button id="btn_fileCheck">확인</button>
							    <button id="btn_fileCancel">취소</button>
							    </form>
							  </div>
							
							</div>`).appendTo('#body_main')	
			
			$('#add_file').click(e=>{
				e.preventDefault()
				alert('>>>> ')
				const modal = document.getElementById("myModal");
				modal.style.display = "block";
				
				const span = document.getElementsByClassName("close")[0];
				span.onclick = function() {
					  modal.style.display = "none";
					}
				
				window.onclick = function(event) {
					  if (event.target == modal) {
					    modal.style.display = "none";
					  }
					}			
				
			})
			$('#btn_fileCheck').click(e=>{
				e.preventDefault()
				alert('확인')
				let formData = new FormData()
				let files = $('#fileUpload')[0].files

				let i = 0
				for(; i< files.length; i++){
					formData.append("uploadFile", files[i])
				}
				
				$.ajax({
					url : _+'/boards/fileupload',
					processData : false,
					contentType : false,
					data : formData,
					type : 'POST',
					success : d => {
						alert("파일업로드 성공")
						
					},
					error : e => {
						alert('파일 업로드 실패')
					}
				})
				
				
			})
			
			$('#btn_cancel').click(e=>{
				e.preventDefault()
				alert('취소버튼 클릭')
			})
			
		})
		
	}

	
	let content = function (x) {
		
		$('#body_main').empty()
		$('#body_main').html(brd_vue.content())
		
						console.log(x.read)
						$('#content_form input[name="title"]').val(x.read.title)
						$('#content_form input[name="writer"]').val(x.read.writer)
						$('#content_form textarea[name="content"]').val(x.read.content)
		
		
		$('#btn_updateForm').click(e=>{
			e.preventDefault()
			alert('수정 클릭')
			update(x)
		})
		
		$('#btn_backList1').click(()=>{
			alert('리스트 클릭')
		})
	
	}
	
	let update = function(x){
		$('#body_main').empty()
		$('#body_main').html(brd_vue.update())
		alert('seq 넘어옴' + x.read.seq)
				
		$('#update_form input[name="title"]').val(x.read.title)
		$('#update_form input[name="writer"]').val(x.read.writer)
		$('#update_form textarea[name="content"]').val(x.read.content)
		
		$('#btn_updateWrite').click(e=> {
			alert('수정 버튼 클릭' + x.read.title +',' + x.read.content)
			e.preventDefault()
				$.ajax({
					url: _ + '/boards/update',
					type: 'PUT',
					data: JSON.stringify({
						seq : x.read.seq,
						title: $('#update_form input[name="title"]').val(),
						content: $('#update_form textarea[name="content"]').val()

					}),
					dataType: 'json',
					contentType: 'application/json',
					success: d => {
						alert('AJAX 성공')
						 list({ ctype: type, pageSize: 5, nowPage: 0 })
						// list({pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})
					},
					error: e => {
						alert('AJAX 실패')
					}
				})
		
		})
		
		
		deleteBoard(x)
		
	}
	
	let deleteBoard = function(x){
		$('#btn_deleteWrite').click((e)=>{
			e.preventDefault()
			alert('삭제버튼 클릭 seq 값 넘어옴 :' + x.read.seq)
			$.getJSON(_ + '/boards/delete/'+ x.read.seq, d =>{
			alert('getJSON 성공' +d)})
			list({ ctype: type, pageSize: 5, nowPage: 0 })
			//list({pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val()})
		})
		
	}

	let list = x => {

		$.getJSON(_ + '/boards/list/'+x.ctype+'/'+x.pageSize+'/'+x.nowPage+'/'+x.option+'/'+x.search, d => {
			
			$('#body_main').empty()
			$(`
		<div id="wrapper">
		<h2 id="btn_list">게시글 목록 페이지</h2>
	

		<div id="search_form">
		
		</div>

		<table id="tmain" border="1">
			<thead id="thead">
				<tr>
					<th scope="col">#NO</th>
					<th scope="col">제목</th>
					<th scope="col">작성자</th>
					
				</tr>
			</thead>
			<tbody id="tbody">
			
			</tbody>
		</table>

		<div id="page_form">
		
		</div>

		<div id="page_size_form">
		
		</div>
				
		<button id ="btn_brd">글쓰기</button>
		<button id ="btn_brd2">삭제</button>
		</div>
		`).appendTo('#body_main')
		console.log(d.list)
		write(type)
			
		$('#btn_list').click(e => {
		e.preventDefault()
		$('#crawlTab').empty()
		$('#tmain').empty()
		 list({ ctype: type, pageSize: 5, nowPage: 0 })
		// list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(),
		// search: $('#search').val()})
		
		})
				
									
			$.each(d.list, (i, j) => {
				var tr = $(`<tr></tr>`).appendTo("#tbody");
				$(`<td></td>`).text(j.seq).appendTo(tr);
				$(`<td><a href="#">${j.title}</a></td>`).appendTo(tr)
				.click(e=>{
					e.preventDefault()
					alert('seq 확인'+ j.seq)
					$.getJSON(_ + '/boards/contentView/'+j.seq, d =>{
						
						content(d)
						
					})
				});
				$(`<td></td>`).text(j.writer).appendTo(tr);

			})
		
			if (d.pager.existPrev) {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">이전</span>`)
					.appendTo('#page_form')
					.click((e) => {
						e.preventDefault()
						alert('이전 페이지 클릭' + d.pager.prevBlock)
						 list({ ctype: type, pageSize: 5, nowPage: d.pager.prevBlock })
						//list({pageSize:5, nowPage:d.pager.prevBlock})
					//	 list({ pageSize: 5, nowPage: d.pager.prevBlock, option:$('#selectOption').val(), search: $('#search').val() })
					})
			}

			let blocks = []
			for (let i = d.pager.startPage + 1; i < d.pager.endPage + 1; i++) {
				blocks.push(i)

			}

			$.each(blocks, (i, j) => {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page"><a href="">${j}</a></span>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('a링크 클릭' + $(this).text())
						
						 list({ ctype: type, pageSize: 5, nowPage: (Number($(this).text()) - 1) })
					   // list({pageSize: 5, nowPage: (Number($(this).text()) - 1), option:$('#selectOption').val(), search: $('#search').val()})

					})
			})
			if (d.pager.existNext) {
				$(`<span style="border:1px solid black; padding-left: 5px; padding-right: 5px; class="btn-page">다음</span>`)
					.appendTo('#page_form')
					.click(function (e) {
						e.preventDefault()
						alert('다음 페이지 클릭' + d.pager.nextBlock)
						 list({ pageSize: 5, nowPage: d.pager.nextBlock })
						// list({pageSize: 5, nowPage: d.pager.nextBlock, option:$('#selectOption').val(), search: $('#search').val()})

					})
			}
		
		$(`
		<form>
		페이지 사이즈 입력 <input type="text" id="pageSize" />
		<input id="btn_page_size" type="submit" value="입력" />
		</form>	
		`).appendTo('#page_size_form')
	
		
			$('#btn_page_size').click(e => {
				e.preventDefault()
				list({ ctype: type, pageSize: $('#pageSize').val(), nowPage: 0 })
				 //list({ pageSize: $('#pageSize').val(), nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			})
			
		 $(`
		 <select id="selectOption">
		  <option value="seq">NO</option>
		  <option value="title">제목</option>
		  <option value="writer">작성자</option>
		</select>
	
		 <input type="text" id="search"/>	 	
		 <input id="btn_search" type="submit" value="입력"/> 
		 `)
		 .appendTo('#search_form')
		  $('#btn_search').click(e=>{
			 e.preventDefault()
			 alert('서치' + $('#search').val()+", 옵션:"+$('#selectOption').val())
			 list({ ctype:type, pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			 //list({ pageSize: 5, nowPage: 0, option:$('#selectOption').val(), search: $('#search').val() })
			
		 })
			
		})
				

	}

	return { onCreate, write }
})();