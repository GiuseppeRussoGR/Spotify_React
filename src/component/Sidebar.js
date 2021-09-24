import React from "react";
import '../scss/Sidebar.scss';
import {SidebarListElement} from "./SidebarListElement";

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectMenu: 0,
        };
        this.activeMenu = this.activeMenu.bind(this);
    }

    activeMenu(index) {
        this.setState({selectMenu: index})
    }

    menuElement = [
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

    optionUser = [
        {
            name: 'Crea playlist',
            icon: <i className="fa-solid fa-square-plus"/>
        },
        {
            name: 'Brani preferiti',
            icon: <i className="fa-solid fa-heart"/>
        },
    ]

    render() {
        return (
            <div className="d-none d-md-flex flex-column justify-content-between col-2 sidebar">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center">
                        <div className="logo pt-3">
                            <img src="img/Spotify_Logo_RGB_White.png" alt="Logo"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pe-0">
                        <div className="menu pt-3">
                            <ul className='ps-2 pe-2 d-flex flex-column justify-content-center'>
                                {<SidebarListElement list={this.menuElement} active={this.activeMenu}
                                                     select={this.state.selectMenu}/>}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pe-0">
                        <div className="optionUser">
                            <ul className='ps-2 pe-2 d-flex flex-column justify-content-center'>
                                {<SidebarListElement list={this.optionUser}/>}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row flex-grow-1">
                    <div className="col-12 pe-0">
                        <div className="anchor ps-2 pe-2 d-flex flex-column justify-content-end h-100">
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#">Politica sui cookie</a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#" className='pb-2'>Privacy</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;