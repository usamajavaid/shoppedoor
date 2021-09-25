import React, { Component } from 'react';

class Signup extends Component {
    signinbtn(login) {
        this.props.history.push(login);
      }
    render() {
        return (
            <React.Fragment>
                <div className="loginbackground">
                <div className="outer">
                    <div className="inner">
                        <form>
                            <h3>Register</h3>

                            <div className="form-group">
                                <label>First name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>

                            <div className="form-group">
                                <label>Last name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Enter password" />
                            </div>

                            <button type="submit" className="btn btn-dark btn-lg btn-block"
                                        onClick={() => this.signinbtn('/ReusableComponents/Login')}>Register</button>
                            <p className="craete-account text-right">
                                Already registered <a href="/ReusableComponents/Login">log in?</a>
                            </p>
                        </form>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Signup;