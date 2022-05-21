import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import { TCity, TPoint } from '../../types';
import { TOffer } from '../../types/offers';
import { Pins } from '../../utils/const';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  city: TCity;
  points: TPoint[];
  activePointId: TOffer['id'] | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: Pins.Default,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

const currentCustomIcon = new Icon({
  iconUrl: Pins.Active,
  iconSize: [27, 39],
  iconAnchor: [14, 39],
});

function Map(props: MapProps): JSX.Element {
  const {city, points, activePointId} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker.setIcon(point.id === activePointId ? currentCustomIcon : defaultCustomIcon).addTo(map);

      });
    }

  }, [map, points, activePointId]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
