import {Component} from 'react';
import axios from "axios";

export class ListContent extends Component {
    constructor() {
        super();
        this.state = {
            token: '56f3202e03243d30fb849c883e4f80a7',
            baseApi: 'https://ws.audioscrobbler.com/2.0/',
            newReleaseAlbum: {},
            newReleaseArtist: {}
        }
    }

    getApiData = (method, state) => {
        axios.get(this.state.baseApi, {
            params: {
                method: method,
                api_key: this.state.token,
                tag: 'disco',
                format: 'json'
            }
        })
            .then(res => {
                this.setState({[state]: res.data});
            })
    }

    async componentDidMount() {
        await this.getApiData('tag.gettopalbums', 'newReleaseAlbum');
        await this.getApiData('tag.gettopartists', 'newReleaseArtist');
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col-12 overflow-hidden">
                        <div className="title-element d-flex justify-content-between align-items-center">
                            <h3 className='p-3'>TOP ALBUMS</h3>
                            <p className='pe-4'><a href="#TopAlbums">VISUALIZZA TUTTO</a></p>
                        </div>
                        <ul className='ps-0 d-flex flex-nowrap listElement align-items-center '>
                            {
                                this.state.newReleaseAlbum.albums?.album.map((el, index) => {
                                    return <li key={index} onClick={() => window.open(el.artist.url)}
                                               style={{'width': 300, 'height': 300}} className='pt-1 p-3'>
                                        <div
                                            className="card-element d-flex flex-column h-100">
                                            <div className="container-image">
                                                <img src={el.image[3]['#text']} alt=""/>
                                                <div className="overlay">
                                                    <a href={el.artist.url}><i className="fas fa-play-circle"/></a>
                                                </div>
                                            </div>
                                            <div
                                                className="title-overview-element d-flex flex-column justify-content-between text-center pt-3">
                                                <div className="title pb-2">
                                                    {el.name}
                                                </div>
                                                <div className="overview">
                                                    <span>Artista:</span> <a href={el.artist.url}>{el.artist.name}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 overflow-hidden">
                        <div className="title-element d-flex justify-content-between align-items-center">
                            <h3 className='p-3'>TOP ARTISTS</h3>
                            <p className='pe-4'><a href="#TopArtists">VISUALIZZA TUTTO</a></p>
                        </div>
                        <ul className='ps-0 d-flex flex-nowrap listElement align-items-center '>
                            {
                                this.state.newReleaseArtist.topartists?.artist.map((el, index) => {
                                    return <li key={index} style={{'width': 300, 'height': 300}}
                                               onClick={() => window.open(el.url)} className='pt-1 p-3'>
                                        <div
                                            className="card-element d-flex flex-column h-100">
                                            <div className="container-image">
                                                <img src={el.image[3]['#text']} alt=""/>
                                            </div>
                                            <div
                                                className="title-overview-element d-flex flex-column justify-content-between text-center pt-3">
                                                <div className="title pb-2">
                                                    <a href={el.url}>{el.name}</a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}