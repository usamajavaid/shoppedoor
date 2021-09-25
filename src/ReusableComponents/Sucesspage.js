import React, { Component } from 'react';
import './sucesspage.css';
import {Link} from 'react-router-dom';
class Sucesspage extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="checkmark__background">
                    <div className="tickbackround__circle">
                        <span class="checkmark">
                            <div class="checkmark_stem"></div>
                            <div class="checkmark_kick"></div>
                        </span>
                    </div>
                    <h1>Success!</h1>
                    <p>
                        We've sent a confirmation to your e-mail
                        for verification.
                    </p>
                    <Link to="/">
                    <button type="button" class="btn btn-outline-success w-50 " style={{borderRadius:"50px"}}>Ok</button>
                    </Link>
                </div>
            </React.Fragment>
        )
    }
}
export default Sucesspage;