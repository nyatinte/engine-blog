import { Post } from '@/types/Post';
import { FC } from 'react';

type PostPreviewProps = {
  post: Post;
};
export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className='flex p-4 gap-4 w-96'>
      <div className='w-40 aspect-square bg-white text-4xl grid place-content-center rounded-lg'>
        {post.emoji}
      </div>
      <div className='grid grid-rows-2'>
        <b className='text-lg'>{post.title}</b>
        <p className='truncate'>{post.content}</p>
      </div>
    </div>
  );
};
