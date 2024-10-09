import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome Onboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://codewithsuraj.github.io">
              codewithsuraj.github.io
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const body: CSSProperties = {
  background: "#FFFFFF",
};

const heading: CSSProperties = {
  fontSize: "32px",
};
export default WelcomeTemplate;
