import { PostPreview } from '@/components/PostPreview';
import { Post } from '@/types/Post';
import fs from 'fs/promises';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

type PostsPageProps = {
  posts: Post[];
};
const PostsPage: NextPage<PostsPageProps> = (props) => {
  return (
    <div className="w-screen p-8">
      <h1 className="mb-4 text-3xl">記事一覧</h1>
      <div className="flex flex-wrap justify-between gap-4">
        {props.posts.map((post) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="duration-200 hover:scale-105"
          >
            <PostPreview post={post} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const postsDirectory = `${process.cwd()}/src/pages/post`;
  const filenames = await fs.readdir(postsDirectory);
  const metaDatas: Post[] = await Promise.all(
    filenames.map(async (filename) => {
      const { metadata } = await import(`./post/${filename}`);
      return metadata;
    }),
  );

  return {
    props: {
      posts: metaDatas,
    },
  };
};

export default PostsPage;
