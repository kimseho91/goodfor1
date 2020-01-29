"use strict";
var s_admin02_vue = s_admin02_vue || {}
s_admin02_vue = {
		admin02_body : x=>{
			return `
			<div>	<!-- Start content -->
				<div class="container-fluid">	<!-- Start container -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box">
                                <h4 class="page-title float-left">Todo List</h4>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3">
	                    <a href="#" data-toggle="modal" data-target="#add-category" class="btn btn-lg btn-gradient btn-block waves-effect m-t-20 waves-light">
	                        <i class="fa fa-plus"></i> Create New
	                    </a>
	                    <div id="external-events" class="m-t-20">
	                        <br>
	                        <p class="text-muted">Drag and drop your event or click in the calendar</p>
	                        <div class="external-event bg-success ui-draggable ui-draggable-handle" data-class="bg-success" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>New Theme Release
	                        </div>
	                        <div class="external-event bg-info ui-draggable ui-draggable-handle" data-class="bg-info" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>My Event
	                        </div>
	                        <div class="external-event bg-warning ui-draggable ui-draggable-handle" data-class="bg-warning" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Meet manager
	                        </div>
	                        <div class="external-event bg-purple ui-draggable ui-draggable-handle" data-class="bg-purple" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Create New theme
	                        </div>
	                    </div>
	
	                    <!-- checkbox -->
	                    <div class="checkbox checkbox-primary mt-3">
	                        <input type="checkbox" id="drop-remove">
	                        <label for="drop-remove">
	                            Remove after drop
	                        </label>
	                    </div>
	                </div>
	                
	                <div class="col-md-9">
						<div id="calendar" class="fc fc-unthemed fc-ltr">
						<div class="fc-toolbar">
						<div class="fc-left">
							<div class="fc-button-group">
							<button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left">
							<span class="fc-icon fc-icon-left-single-arrow"></span>
							</button>
							<button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right">
							<span class="fc-icon fc-icon-right-single-arrow"></span>
							</button>
							</div>
						<button type="button" class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled" disabled="">today</button>
						</div>
						<div class="fc-right"><div class="fc-button-group">
						<button type="button" class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">month</button>
						<button type="button" class="fc-agendaWeek-button fc-button fc-state-default">week</button>
						<button type="button" class="fc-agendaDay-button fc-button fc-state-default fc-corner-right">day</button>
						</div>
						</div>
						<div class="fc-center">
						<h2>January 2020</h2>
						</div>
						<div class="fc-clear"></div>
						</div>
						<div class="fc-view-container" style="">
						<div class="fc-view fc-month-view fc-basic-view" style="">
						<table>
						<thead class="fc-head">
						<tr>
						<td class="fc-head-container fc-widget-header">
						<div class="fc-row fc-widget-header" style="border-right-width: 1px; margin-right: -1.19998px;">
						<table>
						<thead>
						<tr>
						<th class="fc-day-header fc-widget-header fc-sun">Sun</th>
						<th class="fc-day-header fc-widget-header fc-mon">Mon</th>
						<th class="fc-day-header fc-widget-header fc-tue">Tue</th>
						<th class="fc-day-header fc-widget-header fc-wed">Wed</th>
						<th class="fc-day-header fc-widget-header fc-thu">Thu</th>
						<th class="fc-day-header fc-widget-header fc-fri">Fri</th>
						<th class="fc-day-header fc-widget-header fc-sat">Sat</th>
						</tr>
						</thead>
						</table>
						</div>
						</td>
						</tr>
						</thead>
						<tbody class="fc-body">
						<tr>
						<td class="fc-widget-content">
						<div class="fc-scroller fc-day-grid-container" style="overflow: hidden scroll; height: 423.8px;">
						<div class="fc-day-grid fc-unselectable">
						<div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 70px;">
						<div class="fc-bg">
						<table>
						<tbody>
						<tr>
						<td class="fc-day fc-widget-content fc-sun fc-other-month fc-past" data-date="2019-12-29"></td>
						<td class="fc-day fc-widget-content fc-mon fc-other-month fc-past" data-date="2019-12-30"></td>
						<td class="fc-day fc-widget-content fc-tue fc-other-month fc-past" data-date="2019-12-31"></td>
						<td class="fc-day fc-widget-content fc-wed fc-past" data-date="2020-01-01"></td>
						<td class="fc-day fc-widget-content fc-thu fc-past" data-date="2020-01-02"></td>
						<td class="fc-day fc-widget-content fc-fri fc-past" data-date="2020-01-03"></td>
						<td class="fc-day fc-widget-content fc-sat fc-past" data-date="2020-01-04"></td>
						</tr>
						</tbody>
						</table>
						</div>
						<div class="fc-content-skeleton">
						<table>
						<thead>
						<tr>
						<td class="fc-day-number fc-sun fc-other-month fc-past" data-date="2019-12-29">29</td>
						<td class="fc-day-number fc-mon fc-other-month fc-past" data-date="2019-12-30">30</td>
						<td class="fc-day-number fc-tue fc-other-month fc-past" data-date="2019-12-31">31</td>
						<td class="fc-day-number fc-wed fc-past" data-date="2020-01-01">1</td>
						<td class="fc-day-number fc-thu fc-past" data-date="2020-01-02">2</td>
						<td class="fc-day-number fc-fri fc-past" data-date="2020-01-03">3</td>
						<td class="fc-day-number fc-sat fc-past" data-date="2020-01-04">4</td>
						</tr>
						</thead>
						<tbody>
						<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						<div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 70px;">
						<div class="fc-bg">
						<table>
						<tbody>
						<tr>
						<td class="fc-day fc-widget-content fc-sun fc-past" data-date="2020-01-05"></td>
						<td class="fc-day fc-widget-content fc-mon fc-past" data-date="2020-01-06"></td>
						<td class="fc-day fc-widget-content fc-tue fc-past" data-date="2020-01-07"></td>
						<td class="fc-day fc-widget-content fc-wed fc-past" data-date="2020-01-08"></td>
						<td class="fc-day fc-widget-content fc-thu fc-past" data-date="2020-01-09"></td>
						<td class="fc-day fc-widget-content fc-fri fc-past" data-date="2020-01-10"></td>
						<td class="fc-day fc-widget-content fc-sat fc-past" data-date="2020-01-11"></td>
						</tr>
						</tbody>
						</table>
						</div>
						<div class="fc-content-skeleton">
						<table>
						<thead>
						<tr>
						<td class="fc-day-number fc-sun fc-past" data-date="2020-01-05">5</td>
						<td class="fc-day-number fc-mon fc-past" data-date="2020-01-06">6</td>
						<td class="fc-day-number fc-tue fc-past" data-date="2020-01-07">7</td>
						<td class="fc-day-number fc-wed fc-past" data-date="2020-01-08">8</td>
						<td class="fc-day-number fc-thu fc-past" data-date="2020-01-09">9</td>
						<td class="fc-day-number fc-fri fc-past" data-date="2020-01-10">10</td>
						<td class="fc-day-number fc-sat fc-past" data-date="2020-01-11">11</td>
						</tr>
						</thead>
						<tbody>
						<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						<div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 70px;">
						<div class="fc-bg">
						<table>
						<tbody>
						<tr>
						<td class="fc-day fc-widget-content fc-sun fc-past" data-date="2020-01-12"></td>
						<td class="fc-day fc-widget-content fc-mon fc-past" data-date="2020-01-13"></td>
						<td class="fc-day fc-widget-content fc-tue fc-past" data-date="2020-01-14"></td>
						<td class="fc-day fc-widget-content fc-wed fc-past" data-date="2020-01-15"></td>
						<td class="fc-day fc-widget-content fc-thu fc-past" data-date="2020-01-16"></td>
						<td class="fc-day fc-widget-content fc-fri fc-past" data-date="2020-01-17"></td>
						<td class="fc-day fc-widget-content fc-sat fc-past" data-date="2020-01-18"></td>
						</tr>
						</tbody>
						</table>
						</div>
						<div class="fc-content-skeleton">
						<table>
						<thead>
						<tr>
						<td class="fc-day-number fc-sun fc-past" data-date="2020-01-12">12</td>
						<td class="fc-day-number fc-mon fc-past" data-date="2020-01-13">13</td>
						<td class="fc-day-number fc-tue fc-past" data-date="2020-01-14">14</td>
						<td class="fc-day-number fc-wed fc-past" data-date="2020-01-15">15</td>
						<td class="fc-day-number fc-thu fc-past" data-date="2020-01-16">16</td>
						<td class="fc-day-number fc-fri fc-past" data-date="2020-01-17">17</td>
						<td class="fc-day-number fc-sat fc-past" data-date="2020-01-18">18</td>
						</tr>
						</thead>
						<tbody>
						<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						<div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 70px;">
						<div class="fc-bg">
						<table>
						<tbody>
						<tr>
						<td class="fc-day fc-widget-content fc-sun fc-past" data-date="2020-01-19"></td>
						<td class="fc-day fc-widget-content fc-mon fc-past" data-date="2020-01-20"></td>
						<td class="fc-day fc-widget-content fc-tue fc-past" data-date="2020-01-21"></td>
						<td class="fc-day fc-widget-content fc-wed fc-past" data-date="2020-01-22"></td>
						<td class="fc-day fc-widget-content fc-thu fc-past" data-date="2020-01-23"></td>
						<td class="fc-day fc-widget-content fc-fri fc-past" data-date="2020-01-24"></td>
						<td class="fc-day fc-widget-content fc-sat fc-past" data-date="2020-01-25"></td>
						</tr>
						</tbody>
						</table>
						</div>
						<div class="fc-content-skeleton">
						<table>
						<thead>
						<tr>
						<td class="fc-day-number fc-sun fc-past" data-date="2020-01-19">19</td>
						<td class="fc-day-number fc-mon fc-past" data-date="2020-01-20">20</td>
						<td class="fc-day-number fc-tue fc-past" data-date="2020-01-21">21</td>
						<td class="fc-day-number fc-wed fc-past" data-date="2020-01-22">22</td>
						<td class="fc-day-number fc-thu fc-past" data-date="2020-01-23">23</td>
						<td class="fc-day-number fc-fri fc-past" data-date="2020-01-24">24</td>
						<td class="fc-day-number fc-sat fc-past" data-date="2020-01-25">25</td>
						</tr>
						</thead>
						<tbody>
						<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						<div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 70px;">
						<div class="fc-bg">
						<table>
						<tbody>
						<tr>
						<td class="fc-day fc-widget-content fc-sun fc-past" data-date="2020-01-26"></td>
						<td class="fc-day fc-widget-content fc-mon fc-past" data-date="2020-01-27"></td>
						<td class="fc-day fc-widget-content fc-tue fc-today fc-state-highlight" data-date="2020-01-28"></td>
						<td class="fc-day fc-widget-content fc-wed fc-future" data-date="2020-01-29"></td>
						<td class="fc-day fc-widget-content fc-thu fc-future" data-date="2020-01-30"></td>
						<td class="fc-day fc-widget-content fc-fri fc-future" data-date="2020-01-31"></td>
						<td class="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2020-02-01"></td>
						</tr>
						</tbody>
						</table>
						</div>
						<div class="fc-content-skeleton">
						<table>
						<thead>
						<tr>
						<td class="fc-day-number fc-sun fc-past" data-date="2020-01-26">26</td>
						<td class="fc-day-number fc-mon fc-past" data-date="2020-01-27">27</td>
						<td class="fc-day-number fc-tue fc-today fc-state-highlight" data-date="2020-01-28">28</td>
						<td class="fc-day-number fc-wed fc-future" data-date="2020-01-29">29</td>
						<td class="fc-day-number fc-thu fc-future" data-date="2020-01-30">30</td>
						<td class="fc-day-number fc-fri fc-future" data-date="2020-01-31">31</td>
						<td class="fc-day-number fc-sat fc-other-month fc-future" data-date="2020-02-01">1</td>
						</tr>
						</thead>
						<tbody>
						<tr>
						<td rowspan="2"></td><td rowspan="2"></td>
						<td class="fc-event-container" rowspan="2">
						<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-success fc-draggable">
						<div class="fc-content">
						<span class="fc-time">12:09p</span> 
						<span class="fc-title">See John Deo</span>
						</div>
						</a>
						</td>
						<td rowspan="2"></td>
						<td class="fc-event-container fc-limited">
						<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-purple fc-draggable">
						<div class="fc-content">
						<span class="fc-time">8:02a</span> 
						<span class="fc-title">Hey!</span>
						</div>
						</a>
						</td>
						<td class="fc-more-cell" rowspan="1">
						<div>
						<a class="fc-more">+2 more</a>
						</div>
						</td>
						<td rowspan="2"></td>
						<td class="fc-event-container" rowspan="2">
						<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-primary fc-draggable">
						<div class="fc-content">
						<span class="fc-time">10:02a</span> 
						<span class="fc-title">Buy a Theme</span>
						</div>
						</a>
						</td>
						</tr>
						<tr class="fc-limited">
						<td class="fc-event-container">
						<a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end bg-info fc-draggable">
						<div class="fc-content">
						<span class="fc-time">10:49a</span> 
						<span class="fc-title">Meet John Deo</span>
						</div>
						</a>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						<div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 73px;"><div class="fc-bg">
						<table>
						<tbody>
						<tr>
						<td class="fc-day fc-widget-content fc-sun fc-other-month fc-future" data-date="2020-02-02"></td>
						<td class="fc-day fc-widget-content fc-mon fc-other-month fc-future" data-date="2020-02-03"></td>
						<td class="fc-day fc-widget-content fc-tue fc-other-month fc-future" data-date="2020-02-04"></td>
						<td class="fc-day fc-widget-content fc-wed fc-other-month fc-future" data-date="2020-02-05"></td>
						<td class="fc-day fc-widget-content fc-thu fc-other-month fc-future" data-date="2020-02-06"></td>
						<td class="fc-day fc-widget-content fc-fri fc-other-month fc-future" data-date="2020-02-07"></td>
						<td class="fc-day fc-widget-content fc-sat fc-other-month fc-future" data-date="2020-02-08"></td>
						</tr>
						</tbody>
						</table>
						</div>
						<div class="fc-content-skeleton">
						<table>
						<thead>
						<tr>
						<td class="fc-day-number fc-sun fc-other-month fc-future" data-date="2020-02-02">2</td>
						<td class="fc-day-number fc-mon fc-other-month fc-future" data-date="2020-02-03">3</td>
						<td class="fc-day-number fc-tue fc-other-month fc-future" data-date="2020-02-04">4</td>
						<td class="fc-day-number fc-wed fc-other-month fc-future" data-date="2020-02-05">5</td>
						<td class="fc-day-number fc-thu fc-other-month fc-future" data-date="2020-02-06">6</td>
						<td class="fc-day-number fc-fri fc-other-month fc-future" data-date="2020-02-07">7</td>
						<td class="fc-day-number fc-sat fc-other-month fc-future" data-date="2020-02-08">8</td>
						</tr>
						</thead>
						<tbody>
						<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						</div>
						</div>
						</td>
						</tr>
						</tbody>
						</table>
						</div>
						</div>
						</div>
					</div>
                    
				</div>	<!-- End container -->
			</div>	<!-- End content -->
     `
	}
}