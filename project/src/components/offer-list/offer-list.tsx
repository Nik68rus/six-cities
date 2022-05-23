import { TCardType } from '../../types';
import type { TOffer, TOffers } from '../../types/offers';
import Card from '../card/card';

interface OfferListProps {
  offers: TOffers;
  onOfferHover: (id: TOffer['id'] | undefined)=>void;
  type: TCardType;
}

function OfferList (props: OfferListProps): JSX.Element {
  const {offers, onOfferHover, type} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onActiveCardChange={onOfferHover} type={type} />
      ))}
    </>
  );
}

export default OfferList;
