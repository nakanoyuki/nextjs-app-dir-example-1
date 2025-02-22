"use client"; // Error components must be Client components

import { useEffect } from "react";
import { Heading, Button } from "./components/common";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Heading mb={4}>予期せぬエラーが発生しました。</Heading>
      <Button onClick={() => reset()}>Try again</Button>
    </>
  );
}