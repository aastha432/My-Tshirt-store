import React from 'react'; 
import Menu from './Menu'

const Base = ({
    title ="MY TITLE",
    description = "My description",
    className =" p-4",
    children
}) => {
    return (
        <div>
            <Menu/>
            <div className="container-fluid">
                <div className="jumbotron text-white text-center">
                    <h2 className="displey-4" >{title}</h2>
                    <p className="lead">{description}</p>
                </div>
                <div className ={className} >{children}</div>
            </div>
            <footer className="footer mt-auto py-3" style={{backgroundColor: "lightblue"}}>
                <div className="container-fluid text-white text-center py-3" style={{color: "red"}}>
                    <h4>If you have any questions feel free to contact us.</h4>
                    <button className="btn btn-warning btn-lg">Contact us</button>
                </div>
                <div className="container">
                    <span className="text-muted"> An amazing MERN Bootcamp</span>
                </div>  
            </footer>
        </div>
    )
}

export default Base;
