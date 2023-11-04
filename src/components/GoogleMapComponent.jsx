import React, { useEffect, useRef } from 'react';

function GoogleMapComponent({ address, coordinates }) {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (coordinates) {
      const { lat, lng } = coordinates;

      // Create a new map instance with the coordinates
      map.current = new window.google.maps.Map(mapContainerRef.current, {
        center: { lat, lng },
        zoom: 15, // You can adjust the zoom level as needed
      });

      // Create a marker for the provided coordinates
      new window.google.maps.Marker({
        position: { lat, lng },
        map: map.current,
        title: address,
      });
    }
  }, [coordinates, address]);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: '100%', height: '400px' }} // Adjust the height and width as needed
    />
  );
}

export default GoogleMapComponent;
