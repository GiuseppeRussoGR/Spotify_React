import '../scss/Footer.scss';

function Footer() {
    return (
        <div className="row bottom-bar pb-2 pt-2">
            <div className="col-12 text-light ">
                <div className="container-fluid d-flex justify-content-between align-items-center h-100">
                    <div className="data-song d-none d-md-flex align-items-center justify-content-around">
                        <div className="image-song">
                            <img src="img/album.jpg" alt="883"/>
                        </div>
                        <div className="overview-song ps-2 text-center">
                            <div>Come Mai</div>
                            <div>Nord sud Ovest est</div>
                        </div>
                        <div className="icon pe-3 ps-3">
                            <i className="fas fa-plus"/>
                        </div>
                    </div>
                    <div className="player flex-grow-1 d-flex flex-column justify-content-around align-items-center">
                        <div className="layer-1 d-flex justify-content-around w-100">
                            <i className="fas fa-random"/>
                            <i className="fas fa-step-backward"/>
                            <i className="fas fa-pause"/>
                            <i className="fas fa-step-forward "/>
                            <i className="fas fa-redo"/>
                        </div>
                        <div className="layer-2 d-flex align-items-center w-100 pt-2">
                            <div className="count ps-5 pe-2">00:20</div>
                            <div className="bar-progress flex-grow-1">
                                <div className="progress">
                                    <div className="progress w-100">
                                        <div className="progress-bar" role="progressbar" style={{"width": "10%"}}
                                             aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                    </div>
                                </div>
                            </div>
                            <div className="count pe-5 ps-2">4:19</div>
                        </div>
                    </div>
                    <div className="options d-none d-md-flex align-items-center">
                        <i className="fas fa-laptop-house ms-2 me-2"/>
                        <div className="volume d-flex justify-content-between align-items-center">
                            <i className="fas fa-volume-up ms-2 me-2"/>
                            <div className="progress">
                                <div className="progress w-100">
                                    <div className="progress-bar" role="progressbar" style={{"width": "30%"}}
                                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;