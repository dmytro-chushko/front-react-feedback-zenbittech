import { Form } from './Form';
import { Social } from './Social';

import { Container, Footer, Title } from './App.styled';

export const App = () => {
  return (
    <>
      <main>
        <Container>
          <Title>Reach out to us</Title>
          <Form />
        </Container>
      </main>
      <Footer>
        <Container>
          <Social />
        </Container>
      </Footer>
    </>
  );
};
