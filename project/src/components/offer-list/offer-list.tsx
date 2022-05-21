import type { TOffer, TOffers } from '../../types/offers';
import Card from '../card/card';

interface OfferListProps {
  offers: TOffers;
  onOfferHover: (id: TOffer['id'] | undefined)=>void;
}

function OfferList (props: OfferListProps): JSX.Element {
  const {offers, onOfferHover} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onActiveCardChange={onOfferHover} type='cities' />
      ))}
    </>
  );
}

export default OfferList;
