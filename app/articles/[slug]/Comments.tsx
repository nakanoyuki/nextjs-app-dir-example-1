"use client";
import { Avatar, Flex, VStack, Text } from "@chakra-ui/react";
import { Comment } from "../../types";

export default function Comments({ comments }: { comments: Comment[] }) {
  if (comments.length === 0) {
    return (
      <Text as="p" fontSize="md">
        コメントはありません。
      </Text>
    );
  }
  return (
    <VStack spacing={4} as="ul">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </VStack>
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <Flex as="li" listStyleType="none" align="center">
      <Avatar
        size="sm"
        name={comment.author.name}
        src={comment.author.avatarUrl}
        mr={4}
      />

      <Text fontSize="sm">{comment.body}</Text>
    </Flex>
  );
}
