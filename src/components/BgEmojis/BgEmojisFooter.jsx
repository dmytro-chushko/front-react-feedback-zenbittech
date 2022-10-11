import { EmojiContainer, Icon } from './BgEmojis.styled';
import sprite from '../../img/emj-sprite.svg';

export const BgEmojisFooter = () => {
  return (
    <>
      <EmojiContainer
        top="-38"
        left="1"
        width="314"
        height="308"
        rotate="-10.19"
      >
        <Icon width="314" height="308">
          <use xlinkHref={`${sprite}#icon-pink-emj`}></use>
        </Icon>
      </EmojiContainer>
      <EmojiContainer top="0" left="86" width="78.75" height="97">
        <Icon width="78.75" height="97">
          <use xlinkHref={`${sprite}#icon-green-emj`}></use>
        </Icon>
      </EmojiContainer>
      <EmojiContainer
        top="51"
        left="96.5"
        width="88.53"
        height="85.95"
        rotate="-10.19"
      >
        <Icon width="88.53" height="85.95">
          <use xlinkHref={`${sprite}#icon-yell-emj-1`}></use>
        </Icon>
      </EmojiContainer>
    </>
  );
};
