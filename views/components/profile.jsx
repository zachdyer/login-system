import React from 'react';

import Default from "./layouts/default";

export default class Profile extends React.Component {
    render() {
        var photoURL = (this.props.photoURL) ? this.props.photoURL : "/img/empty-profile-grey.jpg";
       return(
        <Default css="/css/profile.css">
            <div className="row">
        		<div className="col-lg-3 col-sm-6">
        
                    <div className="card hovercard">
                        <div className="cardheader">
        
                        </div>
                        <div className="avatar">
                            <img alt="" src={photoURL} />
                        </div>
                        <div className="info">
                            <div className="title">
                                <a href="/profile/edit">{this.props.displayName}</a>
                            </div>
                            <div className="desc"><a href="/profile/edit">{this.props.email}</a></div>
                            <div className="desc"><a href="/profile/edit">{this.props.phone}</a></div>
                        </div>
                        <div className="bottom">
                            
                        </div>
                    </div>
        
                </div>
        
        	</div>
        </Default>
            
 
        );
     }
}