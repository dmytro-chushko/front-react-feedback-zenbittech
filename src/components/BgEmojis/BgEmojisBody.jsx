import { Icon, EmojiContainer } from './BgEmojis.styled';
import sprite from '../../img/emj-sprite.svg';

export const BgEmojisBody = () => {
  return (
    <>
      <EmojiContainer
        top="23"
        left="2"
        width="88.32"
        height="85.84"
        rotate="-10.19"
      >
        <Icon width="88.32" height="85.84">
          <use xlinkHref={`${sprite}#icon-yell-emj-1`}></use>
        </Icon>
      </EmojiContainer>
      <EmojiContainer top="535" left="56" width="314" height="308">
        <Icon width="314" height="308">
          <use xlinkHref={`${sprite}#icon-pink-emj`}></use>
        </Icon>
      </EmojiContainer>
      <EmojiContainer top="516" left="56" width="127" height="127">
        <Icon width="127" height="127">
          <use xlinkHref={`${sprite}#icon-yell-emj-2`}></use>
        </Icon>
      </EmojiContainer>
    </>
  );
};
