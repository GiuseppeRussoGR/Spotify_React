import './scss/App.scss';
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import ContentApp from "./component/Content_app";
import {useState} from "react";
import {SidebarListElement} from "./component/SidebarListElement";

function App() {
    const [visual, setVisual] = useState(false)

    const changeVisual = (event) => {
        if (event) {
            setVisual(!visual);
        }
    }

    const menuElement = [
        {
            name: 'Home',
            icon: <i className="fa-solid fa-house"/>
        }, {
            name: 'Cerca',
            icon: <i className="fa-solid fa-magnifying-glass"/>
        },
        {
            name: 'La tua libreria',
            icon: <i className="fa-solid fa-list-ul"/>
        }
    ];

    const optionUser = [
        {
            name: 'Crea playlist',
            icon: <i className="fa-solid fa-square-plus"/>
        },
        {
            name: 'Brani preferiti',
            icon: <i className="fa-solid fa-heart"/>
        },
    ]
    return (
        <div className="App">
            <div className="container-fuild vh-100 overflow-hidden">
                <div className="row container-app overflow-hidden">
                    <Sidebar/>
                    <ContentApp burger={changeVisual}/>
                </div>
                <Footer/>
            </div>
            <div className="overlay-burger" style={{'display': visual ? 'block' : 'none'}}>
                <div className="row container-fluid overflow-hidden p-3">
                    <div className="col-6">
                        <div className="logo">
                            <img src="img/Spotify_Logo_RGB_White.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="close" onClick={(event) => changeVisual(event)}>
                            <i className="fas fa-times"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pe-0">
                        <div className="menu pt-3">
                            <ul className='ps-2 pe-2 d-flex flex-column justify-content-center'>
                                {<SidebarListElement list={menuElement}/>}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pe-0">
                        <div className="optionUser">
                            <ul className='ps-2 pe-2 d-flex flex-column justify-content-center'>
                                {<SidebarListElement list={optionUser}/>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
