import { TCardType } from '../../types';
import type { TOffer } from '../../types/offers';
import Card from '../card/card';

interface OfferListProps {
  offers: ReadonlyArray<TOffer>;
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
