import React    from 'react';
import Head     from '../head';
import Header   from '../header';
import Footer   from '../footer';

export default class Default extends React.Component {
    render() {
       return(
            <html>
                <Head css={this.props.css}/>
                <body>
                    <div id="wrapper" className="toggled">
                    <Header />
                        <div id="page-content-wrapper">
                            <div className="container-fluid">
                                {this.props.children}
                            </div>
                        </div>
                    </div>
                  <Footer />
                </body>
            </html>
        )
     }
}