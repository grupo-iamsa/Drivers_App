import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const MapsSubPage = () => {
  const defaultProps = {
    center: {
      lat: 19.3911155,
      lng: -99.2049794
    },
    zoom: 15
  };

  return (
    // Important! Always set the container height explicitly
    <div className='h-[70dvh] p-4'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="Test"
        />
      </GoogleMapReact>
    </div>
  );
}