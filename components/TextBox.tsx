import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

interface Props {
  children: ReactNode;
}
export default function TextBox({ children }: Props) {
  return <Container>{children}</Container>;
}
