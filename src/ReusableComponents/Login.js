import React, { Component } from 'react';
class Login extends Component {
    loginbtn(login) {
        this.props.history.push(login);
      }
    render() {
        return (
            <React.Fragment>
                <div className="loginbackground">
                <div className="outer">
                    <div className="inner">
                    <form>
                        <h3>Log in</h3>

                        <div className="form-group">
                            <label>Number</label>
                            <input type="text" className="form-control" placeholder="Enter Phone Number" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block"  
                                onClick={() => this.loginbtn('/') }>Sign in
                        </button>
                        <p className="craete-account text-right">
                            Create <a href="/ReusableComponents/Signup">account?</a>
                        </p>
                        <div className="forgot-password text-left" style={{marginTop:"-40px"}}>
                            <a href="#" data-target="#pwdModal" data-toggle="modal" >Forgot password</a>
                            </div>
                            <div id="pwdModal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h1 class="text-center">What's My Password?</h1>
                                </div>
                                <div class="modal-body">
                                    <div class="col-md-12">
                                            <div class="panel panel-default">
                                                <div class="panel-body">
                                                    <div class="text-center">
                                                    
                                                    <p>If you have forgotten your password you can reset it here.</p>
                                                        <div class="panel-body">
                                                            <fieldset>
                                                                <div class="form-group">
                                                                    <input  class="form-control input-lg" 
                                                                            placeholder="E-mail Address" 
                                                                            name="email" type="email"/>
                                                                </div>
                                                                <input  class="btn btn-lg btn-primary btn-block" 
                                                                        value="Send My Password" type="submit"/>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                <div class="modal-footer">
                                    <div class="col-md-12">
                                    <button class="btn" data-dismiss="modal" aria-hidden="true">Cancel</button>
                                    </div>	
                                </div>
                            </div>
                            </div>
                            </div>
                    </form>
                    </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default Login;