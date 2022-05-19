import {useState} from 'react';
import type { TOffer, TOffers } from '../../types/offers';
import Card from '../card/card';

interface OfferListProps {
  offers: TOffers;
}

function OfferList (props: OfferListProps): JSX.Element {
  const {offers} = props;
  const [activeCard, setActiveCard] = useState<null|TOffer>(null);

  console.log(activeCard?.id);

  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onActiveCardChange={setActiveCard} type='cities' />
      ))}
    </>
  );
}

export default OfferList;
