import React from 'react';

import Default from "./layouts/default";

export default class EditProfile extends React.Component {
    render() {
        var photoURL = (this.props.photoURL) ? this.props.photoURL : "/img/empty-profile-grey.jpg";
       return(
        <Default>
           <h1>Edit Profile</h1>
           <hr />
           <div className="row">
              <div className="col-md-3">
                 <div className="text-center">
                    <img src={photoURL} className="avatar img-circle" alt="avatar" width="100%"/>
                    <h6>Photo URL:</h6>
                    <input className="form-control" type="url" value={photoURL} name="photoURL"/>
                 </div>
              </div>
              <div className="col-md-9 personal-info">

                 <h3>Personal info</h3>
                 <form className="form-horizontal" role="form" method="post" action="/profile/edit">
                    <div className="form-group">
                       <label className="col-lg-3 control-label">Display name:</label>
                       <div className="col-lg-8">
                          <input className="form-control" type="text" value={this.props.displayName} 
                          name="displayName"/>
                       </div>
                    </div>
                    <div className="form-group">
                       <label className="col-lg-3 control-label">Email:</label>
                       <div className="col-lg-8">
                          <input className="form-control" type="email" value={this.props.email} 
                          name="inputEmail"/>
                       </div>
                    </div>
                    <div className="form-group">
                       <label className="col-md-3 control-label"></label>
                       <div className="col-md-8">
                          <input type="submit" className="btn btn-primary" value="Save Changes" />
                          <span></span>
                          <a className="btn btn-default" href="/profile">Cancel</a>
                       </div>
                    </div>
                 </form>
              </div>
           </div>
           <hr />
        </Default>
            
 
        );
     }
}