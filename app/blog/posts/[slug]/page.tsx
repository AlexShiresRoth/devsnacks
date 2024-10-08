import SuggestedPosts from '@/components/blog/suggested-posts';
import MainContainer from '@/components/containers/main-container';
import RichTextRender from '@/components/rendering/rich-text-render';
import { fetchGraphQL } from '@/contentful/api';
import {
  blogPostQuery,
  blogPostsCollectionQuerySlugOnly,
} from '@/contentful/gql-queries/components/blog/blogPost.query';
import { BlogCollectionResponseData } from '@/types/blog';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const res = await fetchGraphQL<BlogCollectionResponseData>(
    blogPostsCollectionQuerySlugOnly(100, 0),
    120,
    ['blogPost']
  );

  if (!res.data?.blogPostCollection?.items.length) return [];

  return res.data.blogPostCollection.items.map((post) => ({
    slug: post.slug,
  }));
}

async function getBlogPost(slug: string) {
  try {
    const res = await fetchGraphQL<BlogCollectionResponseData>(
      blogPostQuery(slug)
    );
    return res.data.blogPostCollection.items[0];
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const page = await getBlogPost(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: page?.title || 'Missing SEO Title',
    description: page?.seoMetadata?.description || 'Missing SEO Description',
    openGraph: {
      images: [page?.seoMetadata?.image || '', ...previousImages],
      title: page?.seoMetadata?.title,
      description: page?.seoMetadata?.description || '',
    },
  };
}

export default async function BlogPost({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <MainContainer>
      <article className="w-11/12 px-4 py-8 md:px-0 md:w-1/2 container flex flex-col gap-8 mt-32 md:mt-8">
        <div className="flex flex-col items-center gap-4">
          {post.category && (
            <Link
              href={`/blog/posts?q=${post.category}`}
              className="text-amber-400 font-semibold uppercase"
            >
              {post.category}
            </Link>
          )}
          {!!post?.tags.length && (
            <div className="flex items-center gap-2">
              {post.tags.map((tag, index) => (
                <Link
                  href={`/blog/posts?q=${tag}`}
                  key={index}
                  className="text-sm bg-stone-100 dark:bg-transparent rounded-full py-1 px-2 text-stone-500 dark:text-stone-200"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-5xl font-bold text-center">{post.title}</h1>
          {post.briefDescription && (
            <p className="text-sm text-center italic">
              {post.briefDescription}
            </p>
          )}
        </div>
        {post.postImage && (
          <div className="relative w-full h-96">
            <Image
              src={post.postImage.url}
              alt={post.title}
              fill
              className="w-full h-96 object-cover"
            />
          </div>
        )}
        <div className="md:mt-10">
          <RichTextRender content={post.postContent} />
        </div>
      </article>
      <SuggestedPosts
        excludePostSlug={post.slug}
        category={post.category}
        tags={post.tags}
      />
    </MainContainer>
  );
}
