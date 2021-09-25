import React, { Component } from 'react';
import Fruit from '../images/Fruits.jpg';
import Flour from '../images/Flour2.jpg';
import Rice from '../images/Rice.jpg';
import Heart from '../images/heart.png';
import Eye from '../images/eye.png';
import Comment from '../images/comment.png';
class Latestblog extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="latest-blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="title-all text-center">
                        <h1>News and Updates</h1>
                        <p>News and updates related to our Products.Our Products is very pure and fine. </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                        <img src={Rice} alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Buy Rice or Buy raw Rice </h3>
                                <p>It's easily one of the most consumed food worldwide, 
                                    so it's no wonder there are so many different types.
                                    Arborio rice. This your go-to rice for making any risotto dish. ...
                                    Basmati rice. This is a type of long-grain, Indian rice. ...
                                    Black rice. ...
                                    Jasmine rice. ...
                                    Brown rice. ...
                                    Red cargo rice. ...
                                    Parboiled rice. ...
                                    Sticky rice.</p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><img src={Heart} alt="" /></a></li>
                                <li><a href="#"><img src={Eye} alt="" /></a></li>
                                <li><a href="#"><img src={Comment} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                        <img src={Fruit} alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Buy Fresh Fruits</h3>
                                <p>Simple fruits can include fruits like apples, pears, plums, tomatoes Langra Mangoes Remain Green When Ripe. ...
                                    Chaunsa. Chaunsa Mangoes Are Exported All Over the World. ...
                                    Anwar Ratol. Anwar Ratol is Quite Commonly Found in Punjab. ...
                                    Sindhri. Sindhri Mangoes Are Ideal for Commercial Use. ...
                                    Dussehri.</p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><img src={Heart} alt="" /></a></li>
                                <li><a href="#"><img src={Eye} alt="" /></a></li>
                                <li><a href="#"><img src={Comment} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 col-xl-4">
                    <div class="blog-box">
                        <div class="blog-img">
                        <img src={Flour} alt="" />
                        </div>
                        <div class="blog-content">
                            <div class="title-blog">
                                <h3>Buy pure Flour</h3>
                                <p>
                                All-Purpose. The most common is all-purpose flour. ...
                                Whole-Wheat. If you love breads, pizza dough or rolls, odds are you have tried whole-wheat flour. ...
                                White Whole-Wheat. ...
                                Whole Grain. ...
                                Gluten. ...
                                Bread. ...
                                Self-Rising.Flours are versatile baking ingredients and a pantry staple. They come in many different varieties. 
                                </p>
                            </div>
                            <ul class="option-blog">
                                <li><a href="#"><img src={Heart} alt="" /></a></li>
                                <li><a href="#"><img src={Eye} alt="" /></a></li>
                                <li><a href="#"><img src={Comment} alt="" /></a></li>
                            </ul>
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
export default Latestblog;