import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Produtos.module.css';

interface Props {
  className?: string;
}
/* @figmaId 2:0 */
export const Produtos: FC<Props> = memo(function Produtos(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle2}></div>
      <div className={classes._2639919CartShopping4}></div>
      <div className={classes._2639919CartShopping3}></div>
      <div className={classes._2639919CartShopping2}></div>
      <div className={classes._2639919CartShopping1}></div>
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle1}></div>
      <div className={classes._352020ArrowBack1}></div>
      <div className={classes.produtosMesa1}>Produtos | Mesa 01</div>
      <div className={classes.rectangle6}></div>
      <div className={classes.cocaCola}>Coca-Cola</div>
      <div className={classes.line2}></div>
      <div className={classes.r550}>R$ 5,50</div>
      <div className={classes.rectangle62}></div>
      <div className={classes.xBacon}>X-Bacon</div>
      <div className={classes.line22}></div>
      <div className={classes.r140}>R$ 14,00</div>
      <div className={classes.rectangle63}></div>
      <div className={classes.xCalabresaEBacon}>X-Calabresa e Bacon</div>
      <div className={classes.line23}></div>
      <div className={classes.r1550}>R$ 15,50</div>
      <div className={classes.r350}>R$ 35,00</div>
      <div className={classes._352005AddCircle1}></div>
      <div className={classes.total}>Total</div>
      <div className={classes.rectangle12}></div>
    </div>
  );
});
