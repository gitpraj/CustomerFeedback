

import React from 'react';
import { connect } from 'react-redux';
import Footer from './footer';
import Header from './header';

class Project extends React.Component {
    render() {
        return (
            <div className="project-desc-page">

                <div className="container project-desc">
                  <h1> When Do You Reach </h1>
                  <div className="img-project-desc">
                    <img src="/images/4-aurin-map.jpg "/>
                  </div>
                  <h2> Personal </h2>

                  <div className="project-desc">
                    <p className="">
                        This app will let you know the distance and the time to reach the destination
                        from where you are via car/bicycle/train/walk.
                    </p>
                  </div>



                  <ul className="tech-icon-container">
                    <li className="tech-icon-wrapper">
                      <span >React.js</span>
                      <img className="tech-icon" src="http://formatjs.io/img/react.svg"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span>Bootstrap</span>
                      <img className="tech-icon" src="https://d29fhpw069ctt2.cloudfront.net/icon/image/38839/preview.svg"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Node.js</span>
                      <img className="tech-icon" src="https://cdn2.iconfinder.com/data/icons/nodejs-1/512/nodejs-512.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span >Express</span>
                      <img className="tech-icon" src="http://www.todobackend.com/images/logos/mongodb.png"/>
                    </li>
                    <li className="tech-icon-wrapper">
                      <span>Webpack</span>
                      <img className="tech-icon" src="https://cdn-images-1.medium.com/max/271/0*QWJsNmIu81bhqgds.png"/>
                    </li>
                  </ul>

                  <br/>
                  <ul className="project-links">
                    <a href="https://when-do-you-reach.herokuapp.com/" target="_blank">
                      <li>
                        <span>Demo</span>
                        <i className="fa fa-external-link-square" data-reactid=".0.1.0.0:$0.1.2.1.0.1"></i>
                      </li>
                    </a>
                    <a href="https://github.com/gitpraj/WhenDoYouReach" target="_blank">
                      <li>
                        <span>Github</span>
                        <i className="fa fa-external-link-square" data-reactid=".0.1.0.0:$0.1.2.1.0.1"></i>
                      </li>
                    </a>
                  </ul>

                </div>


            </div>
        );
    }
}

export default Project;
