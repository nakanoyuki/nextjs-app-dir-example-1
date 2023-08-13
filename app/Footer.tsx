import { Container, Box, Text } from "./components/common";

export default function Footer() {
  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container maxW="5xl" py={4}>
        <Text as="small">© 2023 yukimarl</Text>
      </Container>
    </Box>
  );
}