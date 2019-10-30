import React, { Component } from 'react';
import SeriesList from './SeriesList';
import Spinner from '../layout/Spinner';

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        user: 'Markus',
        loading: true
      }
    
      componentDidMount(){
        
        // this.setState({ loading: true });
    
        setTimeout(() => {
    
            // fetch('http://api.tvmaze.com/search/shows?q=Vikings')
            //     .then((response) => response.json())
            //     .then(json => this.setState({ series: json }))
        
            this.setState({ loading: false });
    
        }, 400)
    
      }

      onSeriesInputChange = e => {

        this.setState({ seriesName: e.target.value, loading: true })

            fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then(json => this.setState({ series: json }))
    
        this.setState({ loading: false });


      }


      render() {

        const { series, seriesName } = this.state;

          return (
              <div>
                    <div>
                        Welcome {this.state.user}
                    </div>

                    <div>
                        <div>
                            <input
                            value={seriesName}
                            type="text"
                            onChange={this.onSeriesInputChange}
                            />
                        </div>

        
                        { series.length === 0 && seriesName.trim() === ''
                        &&
                        <p className="text-danger">Please enter series name in the input</p> }

                        { series.length === 0 && seriesName.trim() !== ''
                        &&
                        <p className="text-danger">I could not find a serie named this!</p> }



                        { this.state.loading ? <Spinner /> : 'Total amount of series: '+this.state.series.length}
                        <SeriesList list={this.state.series}/>
                    </div>
              </div>

          )
      }
}


export default Series;
