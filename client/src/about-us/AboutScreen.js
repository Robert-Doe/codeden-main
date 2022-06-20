import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom"
import logoHeaderLight from './logo_header.png'
import logoHeaderDark from './logo_header_dark.png'
import './about.css'
import authorImg from './author.jpg'

function AboutScreen(props) {
    return (
        <React.Fragment>
            <nav
                className={"navbar navbar-expand-lg fixed-nav py-3 navbar-dark bg-dark "}
                id="book-navbar">
                <a className="navbar-brand" href="/"><img src={logoHeaderLight}
                                                          alt="Logo" height="70px" width="auto"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="/navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto px-3">
                        <Link className="nav-item nav-link" to="/">Home <span
                            className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/courses">Courses</Link>
                        <Link className="nav-item nav-link" to="/books">Books</Link>
                        <Link className="nav-item nav-link active" to="/about">About us</Link>
                        <Link className="nav-item nav-link theme-color" to="/login">Log in</Link>
                    </div>
                </div>
            </nav>
            <section className="about-author m-5 py-6">
                <h4 className="about-author-h4">
                    About the Author
                </h4>
                <div className="d-flex my-3 align-items-center">
                    <div className={'card'}>
                        <img src={authorImg} alt="" className="img author-img"/>
                    </div>
                    <div className="d-flex flex-column">
                        <h5 className="author-name px-3 py-1">Robert Doe</h5>
                        <p className="study-position-p px-3 py-1">Teaching/Research Assistant</p>
                        <p className="study-department-p px-3 p-1">Computer Science Department</p>
                        <p className="study-school-p px-3 p-1">Kwame Nkrumah University of Science and Technology,
                            Ghana</p>
                    </div>
                </div>
                <p className="author-summary-p">
                    Bob is a MasterCard Foundation Alumni, KNUST Chapter. Robert started his undergraduate degree
                    program in the year 2017 and finally finished in 2021.
                    Robert's journey becoming a computer programmer did not come that easy. The rough experiences he
                    encountered influenced him to become a teaching/research assitant to learn more to better himself
                    and also help the young ones journeying the same path.
                    <br/><br/>
                    With help from like-minded colleagues, this project was birthed. A project to guide the young to
                    learn the art
                    of programming - the easy way. This is a <i>not-for-profit</i> project aimed at training brilliant
                    African students to learn to code.
                </p>
                <br/><br/>
                <p><code>AFRICAN PRODUCTION</code> - <strong>theNextPage</strong></p>
                <p className="author-summary-p">
                    Beginning the journey to coding can be quite a stressful one if not guided. Access to a myriad of
                    materials online can be helpful and equally scary because we often get lost trying to figure out
                    where to start from.
                    Everyone has been there. Let's say the truth now, we're still there. <br/>
                    This is a project to help align beginners to programming on the right track. <br/>
                    Working here with me are a ton of people I call junior coursemates. <br/> <br/>
                    This page would be a portal to contribute knowledge to all who have developed the love for coding
                    and would need firm rungs to climb up the ladder. <br/> <br/>
                    <strong>This project comes with various components(features).</strong>
                    <br/>
                </p>

                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                                <button className="btn btn-block text-left" type="button"
                                        data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
                                        aria-controls="collapseOne">
                                    1. Course Production <code> CURRENT PHASE</code>
                                </button>
                            </h2>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                A plethora of content creaters would be welcomed to the platform to create courses for
                                free for beginners. Courses on this platform would be screened and reviewed before
                                coming live.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingTwo">
                            <h2 className="mb-0">
                                <button className="btn btn-block text-left collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                    2. Intership Offers
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                All students or users of this platform would have the chance to intern with reputable IT
                                companies partnered with the project both virtually and on-site.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree">
                            <h2 className="mb-0">
                                <button className="btn btn-block text-left collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                    3. Job Hunt
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                We don't just guide you to code. Our students would work on projects based on courses
                                they signed up for. <br/>
                                Upon completion of subscribed courseware paths, students would be be greeted with juicy
                                job offers.
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingFour">
                            <h2 className="mb-0">
                                <button className="btn btn-block text-left collapsed" type="button"
                                        data-toggle="collapse" data-target="#collapseFour" aria-expanded="false"
                                        aria-controls="collapseFour">
                                    4. Volunteerism <code>(optional)</code>
                                </button>
                            </h2>
                        </div>
                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour"
                             data-parent="#accordionExample">
                            <div className="card-body">
                                We would be glad to have our students join us to make free contents for other beginning
                                programmers.
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    );
}

export default AboutScreen;