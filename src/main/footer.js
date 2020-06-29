import React from 'react';
import scriptLoader from 'react-async-script-loader';
import awsCloudPractitioner from './media/certifiedCloudPractitioner.png'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div id="digital-badges">
                <a href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-08-03&ci=AWS00570500">
                    <img className="aws-certs" alt="AWS Certified Cloud Practitioner Badge" src={awsCloudPractitioner} />
                </a>
                </div>
                <a href="!#" src="techLadies"> </a>
                <div id="social-icons">
                    <a href="https://www.linkedin.com/in/theresathoraldson">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* <a href="!#">
                    <i className="fab fa-medium-m"></i>
                    </a> */}
                    <a href="https://www.twitter.com/tthoraldson">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://www.github.com/tthoraldson">
                    <i className="fab fa-github"></i>
                    </a>
                    {/* <a href="https://stackoverflow.com/users/3776950/tthoraldson">
                    <i className="fab fa-stack-overflow"></i>
                    </a> */}
                    <a href="https://angel.co/theresa-thoraldson?public_profile=1">
                    <i className="fab fa-angellist"></i>
                    </a>
                    <a href="https://www.kaggle.com/tthoraldson">
                    <i className="fab fa-kaggle"></i>
                    </a>
                </div>
        </footer>
        );
    }
}

export default scriptLoader(
    ['https://kit.fontawesome.com/992b444137.js']
)(Footer);