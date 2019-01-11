import React from 'react';
import Map from 'pigeon-maps'
import Marker from 'pigeon-marker'
import Overlay from 'pigeon-overlay'

const PidgeonMap = props => {
    return (
        <Map center={[40.768242, -73.964346]} zoom={12} width={900} height={900}>
            <Marker anchor={[40.768, -73.9643]} payload={1} onClick={({ event, anchor, payload }) => {}} />

            <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
            <img src='pigeon.jpg' width={240} height={158} alt='' />
            </Overlay>
        </Map>
    )
}

export default PidgeonMap;