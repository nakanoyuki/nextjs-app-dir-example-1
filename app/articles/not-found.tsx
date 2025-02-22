import { Heading, Button } from "../components/common";
import NextLink from "next/link";

export default function NotFound() {
  return (
    <>
      <Heading mb={4}>お探しの記事が見つかりませんでした。</Heading>
      <Button as={NextLink} href="/">
        トップへ戻る
      </Button>
    </>
  );
}
