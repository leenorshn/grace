'use client'

///AIzaSyDME7oXm6VbOLId_beeqArNdRQBgmSclQk

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
    accessToken:
        'pk.eyJ1IjoidmljdG9yc2h1a3VydSIsImEiOiJjam1pdXQwMnUwODlmM3BtcWM5dTJwaHk1In0.GkEI9RJnonloRB6Xmrkvhg'
});

const MapPage = () => {

    // laod script for google map


    // static lat and lng
    const center = { lat: 0.1356125, lng: 29.2958569 };

    return (
        <div className='mx-auto '>
            <Map
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                    <Feature coordinates={[0.1356125, 29.2958569]} />
                </Layer>
            </Map>
        </div>
    );
};

export default MapPage;