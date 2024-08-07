import { Container } from "./styles";

export function Tag({title, ...rest}){
  return(
    <Container {...rest}>
      {title}
    </Container>
  );
};

<span>joaozinho</span>