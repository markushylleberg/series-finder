import React, { Component } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';

class About extends Component {

    state = {
        show: null
    }

    componentDidMount(){

        const { id } = this.props.match.params;

        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
        .then((response) => response.json())
        .then(json => this.setState({ show: json }))

    }


    render() {

        const { show } = this.state;

        console.log(show);

        return (

            <div>

                <Link to="/" className='btn btn-light'>
                    Back to search
                </Link>

                <h3>About this series</h3>
                <h5>Id: {this.props.match.params.id}</h5>

                { show === null && <Spinner /> }

                { show !== null &&
                
                
                <div className="card">
                    <h1 className="card text-center">{show.name}</h1>
                    <p><b>Premiered:</b> {show.premiered}</p>
                    <img src={show.image.original} className="all-center" style={showStyle} alt="image" />
                    <div className="container">
                        <p>{show.summary}</p>
                    </div>


                </div>
                
            }


            </div>
        )
    }
}

const showStyle = {
    maxHeight: '600px',
    width: 'auto'
}

export default About;
