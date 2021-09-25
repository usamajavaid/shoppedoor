import React, { Component } from 'react';
import gallerypic1 from '../images/gallery-img-01.jpg';
import gallerypic2 from '../images/gallery-img-02.jpg';
import gallerypic3 from '../images/gallery-img-03.jpg';
import gallerypic4 from '../images/gallery-img-04.jpg';
import gallerypic5 from '../images/gallery-img-05.jpg';
import gallerypic6 from '../images/gallery-img-06.jpg';
import '../Style/style.css';
class Gallery extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="gallery-box">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="heading-title text-center">
						<h2>Gallery</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
			<div class="tz-gallery">
				<div class="row">
					<div class="col-sm-12 col-md-4 col-lg-4">
						<a class="lightbox" href={gallerypic1}>
							<img class="img-fluid" src={gallerypic1} alt="Gallery Images"/>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-lg-4">
						<a class="lightbox" href={gallerypic2}>
                        <img class="img-fluid" src={gallerypic2} alt="Gallery Images"/>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-lg-4">
						<a class="lightbox" href={gallerypic3}>
                        <img class="img-fluid" src={gallerypic3} alt="Gallery Images"/>
						</a>
					</div>
					<div class="col-sm-12 col-md-4 col-lg-4">
						<a class="lightbox"href={gallerypic4}>
                        <img class="img-fluid" src={gallerypic4} alt="Gallery Images"/>
						</a>
					</div>
					<div class="col-sm-6 col-md-4 col-lg-4">
						<a class="lightbox" href={gallerypic5}>
                        <img class="img-fluid" src={gallerypic5} alt="Gallery Images"/>
						</a>
					</div> 
					<div class="col-sm-6 col-md-4 col-lg-4">
						<a class="lightbox" href={gallerypic6}>
                        <img class="img-fluid" src={gallerypic6} alt="Gallery Images"/>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>

    
            </React.Fragment>
        )
    }
}

export default Gallery;
