import React, { Component } from 'react';
import Menupic1 from '../images/img-01.jpg';
import Menupic2 from '../images/img-02.jpg';
import Menupic3 from '../images/img-03.jpg';
import Menupic4 from '../images/img-04.jpg';
import Menupic5 from '../images/img-05.jpg';
import Menupic6 from '../images/img-06.jpg';
import Menupic7 from '../images/img-07.jpg';
import Menupic8 from '../images/img-08.jpg';
import Menupic9 from '../images/img-09.jpg';
import { AddDataFunction } from '../Action/action';
import {connect} from 'react-redux';
import '../Style/style.css';
class Menu extends Component {
	state={
		productlist:[
			{
				id:1,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:200,
				quantity:1,
				counter:0,
				imageofproduct:Menupic1
			},
			{
				id:2,
				nameofproduct:"Chill Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:320,
				quantity:1,
				counter:0,
				imageofproduct:Menupic2
			},
			{
				id:3,
				nameofproduct:"Soft Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:150,
				quantity:1,
				counter:0,
				imageofproduct:Menupic3
			},
			{
				id:4,
				nameofproduct:"Special wings",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:720,
				quantity:1,
				counter:0,
				imageofproduct:Menupic4
			},
			{
				id:5,
				nameofproduct:"Dinner 1",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:900,
				quantity:1,
				counter:0,
				imageofproduct:Menupic5
			},
			{
				id:6,
				nameofproduct:"Dinner 2",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:350,
				quantity:1,
				counter:0,
				imageofproduct:Menupic6
			},
			{
				id:7,
				nameofproduct:"Dinner 3",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:450,
				quantity:1,
				counter:0,
				imageofproduct:Menupic7
			},
			{
				id:8,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:550,
				quantity:1,
				counter:0,
				imageofproduct:Menupic8
			},
			{
				id:9,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:600,
				quantity:1,
				counter:0,
				imageofproduct:Menupic9
			}
		],
	dinerlist:[
			{
				id:10,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:500,
				quantity:1,
				counter:0,
				imageofproduct:Menupic9
			},
			{
				id:11,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:110,
				quantity:1,
				counter:0,
				imageofproduct:Menupic8
			},
			{
				id:12,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:230,
				quantity:1,
				counter:0,
				imageofproduct:Menupic7
			}
	],
		drinklist:[
			{
				id:13,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:210,
				quantity:1,
				counter:0,
				imageofproduct:Menupic1
			},
			{
				id:14,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:180,
				quantity:1,
				counter:0,
				imageofproduct:Menupic2
			},
			{
				id:15,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:100,
				quantity:1,
				counter:0,
				imageofproduct:Menupic3
			}
		],
		lunchlist:[
			{
				id:16,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:299,
				quantity:1,
				counter:0,
				imageofproduct:Menupic4
			},
			{
				id:17,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:320,
				quantity:1,
				counter:0,
				imageofproduct:Menupic5
			},
			{
				id:18,
				nameofproduct:"Special Drink",
				discriptionproduct:"Unique taste and very famous",
				priceofproduct:300,
				quantity:1,
				counter:0,
				imageofproduct:Menupic6
			}
		],

    }
	AddDatanew = (Array,ID) => {
		// console.log('AddDataAddDataAddDataArrayArray',Array,ID)
		// console.log('this.props.Productlist2',this.props.Productlist2)
		const index=this.props.Productlist2.findIndex(ls=>ls.id === ID)
		console.log('index',index)
    	if(index>=0){
      		alert('You have already added this product')
    	}
		else{
			this.props.AddDataFunction(Array)
		}
		
	}
    render() {
        return (
            <React.Fragment>
                <div class="menu-box">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="heading-title text-center">
						<h2>Special Menu</h2>
						<p>The most highest Ratead Food. Now a days these dishes and drinks are very famous.</p>
					</div>
				</div>
			</div>
			
			<div class="row inner-menu-box">
				<div class="col-3">
					<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
						<a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">All</a>
						<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Drinks</a>
						<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Lunch</a>
						<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Dinner</a>
					</div>
				</div>
				
				<div class="col-9">
					<div class="tab-content" id="v-pills-tabContent">
						<div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
							<div class="row">
								{/* {console.log(this.state.productlist)} */}
								{this.state.productlist.map(ls=>(
								<div class="col-lg-4 col-md-6 special-grid drinks" key={ls.id}>
									<div class="gallery-single fix">
										<img src={ls.imageofproduct} class="img-fluid" alt="food"/>
										<div class="why-text">
											<h4>{ls.nameofproduct}</h4>
											<p>{ls.discriptionproduct}</p>
											<h5>{ls.priceofproduct}</h5>
											<button class="btn btn-warning" style={{marginTop:"-50px",marginLeft:"70px",cursor:"pointer"}}
												 onClick={()=>
													this.AddDatanew(ls,ls.id)
												}
											>Add to Cart</button>
										</div>
									</div>
								</div>
								))
								}
								
							</div>
							
						</div>
						<div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
							<div class="row">
							{this.state.drinklist.map(ls=>(
								<div class="col-lg-4 col-md-6 special-grid drinks" key={ls.id}>
									<div class="gallery-single fix">
										<img src={ls.imageofproduct} class="img-fluid" alt="food"/>
										<div class="why-text">
											<h4>{ls.nameofproduct}</h4>
											<p>{ls.discriptionproduct}</p>
											<h5>{ls.priceofproduct}</h5>
										</div>
									</div>
								</div>
								))
								}
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
							<div class="row">
							{this.state.lunchlist.map(ls=>(
								<div class="col-lg-4 col-md-6 special-grid lunch" key={ls.id}>
									<div class="gallery-single fix">
										<img src={ls.imageofproduct} class="img-fluid" alt="food"/>
										<div class="why-text">
											<h4>{ls.nameofproduct}</h4>
											<p>{ls.discriptionproduct}</p>
											<h5>{ls.priceofproduct}</h5>
										</div>
									</div>
								</div>
								))
								}
							</div>
						</div>
						<div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
							<div class="row">
							{this.state.dinerlist.map(ls=>(
								<div class="col-lg-4 col-md-6 special-grid dinner" key={ls.id}>
									<div class="gallery-single fix">
										<img src={ls.imageofproduct} class="img-fluid" alt="food"/>
										<div class="why-text">
											<h4>{ls.nameofproduct}</h4>
											<p>{ls.discriptionproduct}</p>
											<h5>{ls.priceofproduct}</h5>
										</div>
									</div>
								</div>
								))
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</div>
	</div>
            </React.Fragment>
        )
    }
}


const mapStateToprops =state=>({
    Productlist2: state.Reducer.todoList

})
export default connect(mapStateToprops,{AddDataFunction}) (Menu);