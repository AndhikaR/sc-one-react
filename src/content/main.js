import React from 'react';
import './main.css';

export class Main extends React.Component {
	render () {
		return (
			<main>
                <div className="container">
                    <div className="main-content"></div>
                    <div className="content-section about-us">
                        <div className="about-us-title"></div>
                        <div className="about-us-description"></div>
                    </div>
                    <div className="content-section news">
                        <h1 className="text-center">
                            News
                        </h1>
                        <div className="news-container">
                            <div className="news-item">
                                <figure className="news-figure">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="news-img"/>
                                    <figcaption className="news-caption">
                                        <h2 className="news-caption-title">Lorem ipsum dolor sit amet.</h2>
                                        <p className="news-caption-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nesciunt nulla, tenetur voluptas odit. Mollitia tenetur quae, sint, explicabo vero deserunt nemo, voluptate quo sed reprehenderit nulla, illum itaque sequi.</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="news-item">
                                <figure className="news-figure">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="news-img"/>
                                    <figcaption className="news-caption">
                                        <h2 className="news-caption-title">Lorem ipsum dolor sit amet.</h2>
                                        <p className="news-caption-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nesciunt nulla, tenetur voluptas odit. Mollitia tenetur quae, sint, explicabo vero deserunt nemo, voluptate quo sed reprehenderit nulla, illum itaque sequi.</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="news-item">
                                <figure className="news-figure">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="news-img"/>
                                    <figcaption className="news-caption">
                                        <h2 className="news-caption-title">Lorem ipsum dolor sit amet.</h2>
                                        <p className="news-caption-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nesciunt nulla, tenetur voluptas odit. Mollitia tenetur quae, sint, explicabo vero deserunt nemo, voluptate quo sed reprehenderit nulla, illum itaque sequi.</p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="news-item">
                                <figure className="news-figure">
                                    <img src="http://via.placeholder.com/150x150" alt="" className="news-img"/>
                                    <figcaption className="news-caption">
                                        <h2 className="news-caption-title">Lorem ipsum dolor sit amet.</h2>
                                        <p className="news-caption-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae nesciunt nulla, tenetur voluptas odit. Mollitia tenetur quae, sint, explicabo vero deserunt nemo, voluptate quo sed reprehenderit nulla, illum itaque sequi.</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="content-section gallery">

                    </div>
                </div>
            </main>
		)
	}
}