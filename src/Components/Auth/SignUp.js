import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { signUp } from '../../Store/Action/AuthAction'



class SignUp extends Component {
    state = {
        fullName: "",
        email: "",
        gender: "",
        age: "",
        country:"",
        city: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state)
        console.log('state ===>', this.state)
    }
    render() {
        const { auth, authError } = this.props;
        if(auth.uid) return <Redirect to='/ ' />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white form">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="fullName" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="country">Country</label>
                        <input type="text" id="country" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                        {/* <p><NavLink to="/restsignup">Restaurant SignUp</NavLink></p> */}
                        <div className="red-text center">
                            { authError ? <p>{ authError }</p> : null }
                        </div>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
