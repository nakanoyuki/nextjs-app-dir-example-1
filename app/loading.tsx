import { Box, Spinner } from "./components/common";

export default function Loading() {
  return (
    <Box justifyContent="center" display="flex">
      <Spinner color="orange.400" size="xl" />
    </Box>
  );
}