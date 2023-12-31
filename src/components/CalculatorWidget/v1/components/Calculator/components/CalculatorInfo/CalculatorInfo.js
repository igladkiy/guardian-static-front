import React from 'react';
import cn from 'classnames';

import { Tooltip } from 'components/Tooltip/Tooltip';

import { formatNumber } from '../../utils';

import css from './CalculatorInfo.module.scss';

export const CalculatorInfo = ({ estimatedData, wideCalculator }) => {
  const { estimated_exchange_rate, to_currency, from_currency } = estimatedData;
  const exchangeRate = estimated_exchange_rate && formatNumber(estimated_exchange_rate);

  const estimatedRate = () => (
    <>
      <div className={cn(css.amount, { [css.amountWidget]: wideCalculator })}>
        {exchangeRate ? (
          <p className={css.rate}>
            1 {from_currency} ≈ {exchangeRate} {to_currency}
          </p>
        ) : null}
      </div>
    </>
  );

  return (
    <div className={css.info}>
      <div className={css.infoRow}>
        <div className={css.circle} />
        <div className={css.popoverLink}>
          <Tooltip
            boxClassName={css.popoverBox}
            popoverClassname={css.popover}
            text='All the exchange fees are added into the rate. There are no extra costs.'
          >
            <p>No extra fees</p>
          </Tooltip>
        </div>
      </div>

      <div className={css.infoRow}>
        {!wideCalculator && <div className={css.circle} />}
        <Tooltip
          boxClassName={css.popoverBox}
          tooltipClassName={wideCalculator ? css.wide_popoverTooltip : css.popoverTooltip}
          text='This is expected rate. Guardarian guarantees to pick up the best possible rate on the moment of the exchange'
        >
          <div>
            <span className={css.popoverLink}>Estimated Rate:</span>
          </div>
        </Tooltip>
        {estimatedRate()}
      </div>
    </div>
  );
};
