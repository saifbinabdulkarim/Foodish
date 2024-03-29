import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';


const Navbar = (props) => {
    const { auth, profile } = props;
    console.log("navabr auth===> success",auth)
    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <Link to="/" component={Dashboard} className="brand-logo"><span style={{fontFamily: "Segoe UI"}} >Foodish</span></Link>
                {links}
            </div>
        </nav>
    )
};

const mapStateToProps = (state) => {
    console.log("Navbar ===>",state);
    return {
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);