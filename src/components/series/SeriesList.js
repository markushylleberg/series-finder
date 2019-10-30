import React from 'react';
import { Link } from 'react-router-dom';


const SeriesListItem = ({ series }) => (
    <li className="card">
        <Link to={`/about/${series.show.id}`}>
            {series.show.name}
        </Link>
    </li>
)



const SeriesList = (props) => {
    return (
        <div>
            <ul className="">
                {props.list.map(series => (
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}

export default SeriesList;