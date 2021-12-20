import React from 'react'
import PropTypes from "prop-types";

const Profile = props =>{
    
    return(
        <>
            <h1 style={{ color:'blue',fontSize:'90px',fontWeight:'bold'}}> {props.fullname}</h1>
            <h1 style={{fontSize:'90px',fontWeight: 'bold'}}> {props.profession}</h1>
            <h1 style={{fontSize:'90px',fontWeight: 'bold'}}> {props.bio} </h1>
        </>
    )
    
    
}
Profile.propTypes = {
    fullname: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    bio:PropTypes.string.isRequired,
};


export default Profile ;

