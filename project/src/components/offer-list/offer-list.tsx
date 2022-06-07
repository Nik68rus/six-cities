import React from 'react';
import { TCardType } from '../../types';
import type { TOffer } from '../../types/offers';
import Card from '../card/card';

interface OfferListProps {
  offers: ReadonlyArray<TOffer>;
  type: TCardType;
}

function OfferList (props: OfferListProps): JSX.Element {
  const {offers, type} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} type={type} />
      ))}
    </>
  );
}

export default React.memo(OfferList);
