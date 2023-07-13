import { Post } from '@/types/Post';
import { FC } from 'react';

type PostPreviewProps = {
  post: Post;
};
export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="flex w-96 gap-4 p-4">
      <div className="grid aspect-square w-40 place-content-center rounded-lg bg-white text-4xl">
        {post.emoji}
      </div>
      <div className="grid grid-rows-2">
        <b className="text-lg">{post.title}</b>
        <p className="truncate">{post.content}</p>
      </div>
    </div>
  );
};
