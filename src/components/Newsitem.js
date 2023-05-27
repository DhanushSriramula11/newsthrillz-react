import React, { Component } from 'react'
export default class Newsitem extends Component {
    render() {
        let { title, description, imageurl, newsurl, author, publishedtime } = this.props;
        let null_image = require('../assets/null-display-image.jpg')
        // console.log('null image',null_image)
        return (

            <div className='container my-4'>
                <div className="card bg-dark text-light" style={{ width: "18 rem" }}>
                    <img src={(imageurl === null) ? null_image : imageurl} className="card-img-top" alt="NewsThrillz" height='300rem' />
                    <div className="card-body">
                        <h5 className="card-title">{(title === null) ? '' : title.slice(0, 60) + '.....'}</h5>
                        <p className="card-text">{(description === null) ? title.slice(0, 80) + '....' : description.slice(0, 80) + '.....'}</p>
                        {/* <p>Source: {author}</p> */}
                        <p class='updated-timestamp'>Published at: {publishedtime.slice(0, 10)} </p>
                        <p><a href={newsurl} target="_blank"><span className="badge rounded-pill text-bg-secondary">By {!author ? "Unknown" : author}</span></a></p>
                        <a href={newsurl} target="_blank" className="btn btn-primary ">Read More</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}
