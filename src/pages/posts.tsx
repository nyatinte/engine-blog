import { PostPreview } from '@/components/PostPreview';
import { Post } from '@/types/Post';
import { GetStaticProps, NextPage } from 'next';

type PostsPageProps = {
  posts: Post[];
};
const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <div className='w-screen p-8'>
      <h1 className='text-3xl mb-4'>記事一覧</h1>
      <div className='flex flex-wrap gap-4 justify-between'>
        {props.posts.map((post) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const samplePosts: Post[] = [
    {
      id: 1,
      emoji: '👋',
      title: 'はじめまして',
      content: 'はじめまして。私は〇〇大学の〇〇です。よろしくお願いします。',
    },
    {
      id: 2,
      emoji: '👍',
      title: 'こんにちは',
      content: 'こんにちは。私は〇〇大学の〇〇です。よろしくお願いします。',
    },
    {
      id: 3,
      emoji: '🐧',
      title: '私の好きな動物',
      content: '私の好きな動物はペンギンです。ペンギンはとても可愛いです。',
    },
  ];

  return {
    props: {
      posts: samplePosts,
    },
  };
};

export default PostsPage;
