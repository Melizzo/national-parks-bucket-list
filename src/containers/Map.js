import React from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import { MapTag } from '../components/MapTag'
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY


const Map = ({np}) => {
    const centr = { lat: Number(np[0].latitude), lng: Number(np[0].longitude)}
    const markers = np.map(park => {
      return (
        <MapTag
              lat={park.latitude}
              lng={park.longitude}
              id={park.id}
              name={park.name}
            />
      )
    })
      return (
        <div style={{ height: '100vh', width: '100vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            center={centr}
            zoom={7}
          >
            { markers }
            {/* <MapTargetTag
              lat={targetMarker[0].lat}
              lng={targetMarker[0].lng}
              mapUrl={GlobalStore.spotDetails.mapUrl}
            /> */}
          </GoogleMapReact>
        </div>
      )
  }

const mapState = state => ({
    np: state.np
})
  
export default connect(mapState)(Map)