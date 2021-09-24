import '../scss/Content_app.scss';
import {ListContent} from "./ListContent";

export default function Content_app({burger}) {
    return (
        <div className="col-12 col-md-10 content-app h-100 overflow-hidden ps-0 pe-0">
            <div className="row top-bar">
                <div className="col-12 d-flex justify-content-between align-items-center">
                    <div className="burger ms-4 text-light d-md-none" onClick={(event) => burger(event)}>
                        <i className="fas fa-bars"/>
                    </div>
                    <div className="arrows ms-2 d-flex align-items-center justify-content-between">
                        <div className="arrow ms-2 me-2">
                            <i className="fa-solid fa-chevron-left"/>
                        </div>
                        <div className="arrow ms-2 me-2">
                            <i className="fa-solid fa-chevron-right"/>
                        </div>
                    </div>
                    <div className="buttons d-flex align-items-center justify-content-between">
                        <div className="button ms-2 me-2">
                            <div className="text text-light">
                                ISCRIVITI
                            </div>
                        </div>
                        <div className="button ms-2 me-4 pt-2 pe-4 pb-2 ps-4">
                            <div className="text">
                                ACCEDI
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row h-100">
                <div className="col-12 content-music overflow-auto text-light">
                    <ListContent/>
                </div>
            </div>
        </div>
    )
}

