import React from 'react'

import Header from './header'
import Footer from './footer'

class Layout extends React.Component
{
	constructor(props) {
		super(props);
	}

	render () {
        return (

            <div>
        			<Header />
        			<div>
        				{this.props.children}
        			</div>
        			<Footer />
            </div>
        );
    }
}

export default Layout;
