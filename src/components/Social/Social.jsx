import { SocialList, SocialItem, SocialLink } from './Social.styled';
import { ImLinkedin2, ImTwitter, ImFacebook } from 'react-icons/im';
import { FaPinterestP } from 'react-icons/fa';

export const Social = () => {
  const iconsArr = [
    <ImLinkedin2 />,
    <ImTwitter />,
    <ImFacebook />,
    <FaPinterestP />,
  ];
  return (
    <SocialList>
      {iconsArr.map((icon, i) => (
        <SocialItem key={i}>
          <SocialLink href="#">{icon}</SocialLink>
        </SocialItem>
      ))}
    </SocialList>
  );
};
