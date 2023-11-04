import React, { useEffect, useState } from 'react';

const Radius = ({ map, coordinates, radius }) => {
  const [circle, setCircle] = useState(null);

  useEffect(() => {
    if (circle) {
      circle.setMap(null);
    }

    if (map && coordinates) {
      const circleOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        map: map,
        center: coordinates,
        radius: radius * 1000, // Convert the radius to meters
      };

      const newCircle = new window.google.maps.Circle(circleOptions);

      setCircle(newCircle);
    }
  }, [map, coordinates, radius, circle]);

  return null;
};

export default Radius;
