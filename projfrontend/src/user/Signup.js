import React, { useState } from 'react';
import Base from "../core/Base"
import {Link} from "react-router-dom"

const Signup = () => {

    const signUpForm = () => {
        return <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label className="text-light"> Name </label>
                        <input className="form-control" type="text"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-light"> Email </label>
                        <input className="form-control" type="email"></input>
                    </div>
                    <div className="form-group">
                        <label className="text-light"> Password </label>
                        <input className="form-control" type="password"></input>
                    </div>
                    <button className="btn btn-info btn-block">Submit</button>
                </form>
            </div>

        </div>
    }

    return (
        <Base title="Signup page" description="Enter your details ">
           
            {signUpForm()}
        </Base>
    )
}

export default Signup;