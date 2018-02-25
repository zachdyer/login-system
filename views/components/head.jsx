import React from 'react';

export default class Head extends React.Component {
    render() {
       return(
        <head>
            <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
            <link href="/css/simple-sidebar.css" rel="stylesheet" />
            <link rel="stylesheet" href={this.props.css} type="text/css" />
            
            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
        </head>
        );
     }
}
