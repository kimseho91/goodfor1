"use strict";
var stockinfo_vue = stockinfo_vue || {}
stockinfo_vue = {
	stockinfo_body:()=>{
		return ` <!--그리드 틀-->
	<div class = "hwrapper">
										
<!--첫번째 그리드 국기 클릭해서 국가이-->
	<div class = "hpage1">
		<div id="hflag_move">
			<a class="hflag_move1" href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-us.svg"></a>
			<a class="hflag_move2" href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-us.svg"></a>
		    <a class="hflag_move3" href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-jp.svg"></a>
		    <a class="hflag_move4" href="#hwrapper"><img src="https://img.themoin.com/public/img/circle-flag-cn.svg"></a>	
		</div>
		<div><h2 style=" position: relative; left: 40%;">국가별 증시현황</h2></div>	
	</div>
	<!--차트를 보여주는 디브-->
	<div class = "hpage2">
			<div style="width:1000px">
		<canvas id="chart1"></canvas>
			</div>
	</div>
	<div class = "hpage3">
	<div class="container111">
  <div class="row">
    <div class="col-6" style="width: 100%">
      <div style="width: 100%; height: 400px" class="card mt-3 tab-card">
        <div class="card-header tab-card-header">
          <ul class="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="true">최근검색</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">MYSTOCK</a>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab"> 
            <a href="#" class="btn btn-primary">최근 검색한 주식</a>              
          </div>
          <div class="tab-pane fade p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
            <a href="#" class="btn btn-primary">내 주식 바로가기</a>              
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
	</div>
		<!--최근검색, 마이스톸-->
		
	<div class = "hpage4">
	<div class="container">
    	<div class="row">
			<div class="col-md-6">
				<div class="panel panel-primary">
					<div class="panel-heading">
						<h3 class="panel-title">상위 거래 목록</h3>
						
					</div> 
					<div class="panel-body">
						<input type="text" style="width:330px;height:45px;font-size:20px; border-top-left-radius: 5px;border-top-right-radius: 5px;
						border-bottom-right-radius: 5px;border-bottom-left-radius: 5px" id="dev-table-filter" placeholder="주식 검색"/>
								<button type="button" class="btn btn-info">검색</button>

					</div>
					<table class="table table-hover" id="dev-table">
						<thead>
							<tr>
								<th>#</th>
								<th>거래상위</th>
								<th>상한가</th>
								<th>하한가</th>
								<th>시가총액 상위</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>남선알미늄</td>
								<td>Trout</td>
								<td>kilgore</td>
								<td>kilgore</td>
							</tr>
							<tr>
								<td>2</td>
								<td>동양네트워크</td>
								<td>Loblaw</td>
								<td>boblahblah</td>
								<td>boblahblah</td>

							</tr>
							<tr>
								<td>3</td>
								<td>까뮤이앤씨</td>
								<td>Caulfield</td>
								<td>penceyreject</td>
								<td>penceyreject</td>								
							</tr>
							<tr>
								<td>3</td>
								<td>까뮤이앤씨</td>
								<td>Caulfield</td>
								<td>penceyreject</td>
								<td>penceyreject</td>								
							</tr>
						</tbody>
						
					</table>
					<div style="text-align : center">
                <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#">&laquo;</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">4</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">5</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">&raquo;</a>
    </li>
              </div>
				</div>
			</div>
			
		</div>
	</div>
	</div>
	<!--국내증시-->
	<div class = "hpage5">
		<div class="card border-danger mb-3" style="max-width: 90%; height: 90%; padding-left: 15px">
			<div class="card-header"><h2>국내증시</h2></div>
				<div class="card-body">
					<h4 class="card-title">국내증시 차트 크롤링</h4>
						<p class="card-text">각각 크롤링해서 국내증시 등락 보여주는 차트</p>
			</div>
		</div>
	</div>
		<!--이런식으로 많이 클릭한 것이나 
		많이 구매 한것 랭킹 구현-->
	<div class = "hpage6">
	<div>
	<div _ngcontent-nel-c149="" class="form-group form-inline">뉴스검색: <input _ngcontent-nel-c149="" type="text" name="searchTerm" class="form-control ml-2 ng-pristine ng-untouched ng-valid">
		<button type="button" class="btn btn-info">검색</button>
	</div>
	<table _ngcontent-nel-c149="" class="table table-striped">
	<thead _ngcontent-nel-c149=""><tr _ngcontent-nel-c149="">
	<th _ngcontent-nel-c149="" scope="col">#</th>
	<th _ngcontent-nel-c149="" scope="col" sbsortable="name">
	<span _ngcontent-nel-c149="">증권뉴스</span>
	</th></th>
		</tr>
		<tr>
			<th>1</th>
		</tr>
		<tr>
			<th>2</th>			
		</tr>
		<tr>
			<th>3</th>			
		</tr>
		<tr>
			<th>4</th>			
		</tr>
		<tr>
			<th>5</th>			
			</tr>
		</tbody>
		</table>
	<div style="text-align : center" >
	  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#">&laquo;</a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#">1</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">3</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">4</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">5</a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">&raquo;</a>
    </li>
  </ul>
	
	
	
	</div>
	</form>
	</sb-ng-bootstrap-table>

	</div>
	</div>
	<!--해외증시-->
	<div class = "hpage7">
	<div class="card border-primary mb-3" style="max-width: 90%; height: 90%; padding-left: 15px">
  <div class="card-header"><h2>해외증시</h2></div>
  <div class="card-body">
    <h4 class="card-title">해외증시 차트 크롤링</h4>
    <p class="card-text">각각 크롤링해서 해외증시 등락 보여주는 차트</p>
  </div>
</div>
</div>
	</div>
	</div>
	<style type="text/css">
.hwrapper {
    display: grid;
    height : 100vh;
    width: 100% auto;
    grid-template-columns: 50% 50%;
    grid-template-rows: 10% 60% 50% 50%;
}
.hpage1{
	grid-column: 1/3;
	float : right;
}
.hflag_move1{
 position: relative;
  left: 30%;
  top : 20%;
}
.hflag_move2{
 position: relative;
  left: 40%;
}
.hflag_move3{
 position: relative;
  left: 50%;
}
.hflag_move4{
 position: relative;
  left: 60%;
}

</style>`
	}
}