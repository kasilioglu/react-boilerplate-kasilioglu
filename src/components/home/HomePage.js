import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>React Home Page</h1>
                <p>Very simple at the moment, no db no redux.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
