import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import { TCity } from '../../types';
import { TOffer } from '../../types/offers';
import { Pins } from '../../utils/const';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  city: TCity;
  offers: [] | readonly TOffer[];
  activePointId?: TOffer['id'] | undefined;
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
  const {city, offers, activePointId} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location[0],
          lng: point.location[1],
        });

        marker.setIcon(point.id === activePointId ? currentCustomIcon : defaultCustomIcon).addTo(map);

      });
    }

  }, [map, offers, activePointId]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
