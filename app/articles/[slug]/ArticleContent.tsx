import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Heading,
} from "../../components/common/";
import { Article } from "../../types";

export default function ArticleContent({ article }: { article: Article }) {
  return (
    <Card>
      <CardHeader>
        <Heading as="h1">{article.title}</Heading>
      </CardHeader>
      <CardBody>
        <Text as="p" fontSize="md">
          {article.content}
        </Text>
      </CardBody>
    </Card>
  );
}