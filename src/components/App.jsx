import { FeedbackForm } from './FeedbackForm';
import { Social } from './Social';
import { BgEmojisBody, BgEmojisFooter } from './BgEmojis';

import {
  Container,
  FeedbackWrapper,
  Footer,
  SocialWrapper,
  Title,
} from './App.styled';

export const App = () => {
  return (
    <>
      <main>
        <Container>
          <FeedbackWrapper>
            <Title>Reach out to us</Title>
            <FeedbackForm />
          </FeedbackWrapper>
        </Container>
      </main>
      <Footer>
        <Container>
          <SocialWrapper>
            <Social />
          </SocialWrapper>
        </Container>
        <BgEmojisFooter />
      </Footer>
      <BgEmojisBody />
    </>
  );
};
