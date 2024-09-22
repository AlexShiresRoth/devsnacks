import { fetchGraphQL } from '@/contentful/api';
import { heroQuery } from '@/contentful/gql-queries/components/hero/hero.query';
import {
  ComponentHeroBannerType,
  HeroBannerResponseData,
  UnknownComponent,
} from '@/types/component';
import Link from 'next/link';
import RichTextRender from '../rendering/rich-text-render';
import BackgroundShapes from './background-shapes';

async function getComponent(id: string) {
  try {
    const res = await fetchGraphQL<HeroBannerResponseData>(heroQuery(id), 60, [
      'componentHeroBanner',
    ]);

    return res.data.componentHeroBanner;
  } catch (error) {
    console.error('Error fetching hero data:', error);
    return null;
  }
}

const HeroBanner = async (props: UnknownComponent) => {
  const hero = await getComponent(props.sys.id);

  if (!hero) return null;

  return (
    <HeroWithAnimatedBg
      title={hero.headline}
      content={hero.bodyText}
      ctaText={hero.ctaText}
    />
  );
};

type Props = {
  title: string;
  content: ComponentHeroBannerType['bodyText'];
  ctaText: string;
};

const HeroWithAnimatedBg = ({ title, content, ctaText }: Props) => {
  return (
    <section className="container-snap overflow-x-hidden relative flex w-full flex-grow flex-col items-center justify-center bg-amber-400 py-8">
      <div className="relative z-20 flex w-full justify-center pb-16 pt-32 md:w-3/4 md:justify-between md:py-16 md:pb-16">
        <div className="relative z-10 w-11/12 md:w-1/2">
          <div className="relative z-10 border-2 border-black bg-amber-400 p-4 md:p-8">
            <div className="flex w-full flex-col items-start gap-2 md:gap-4">
              <h1 className="uppercase text-black md:-ml-2 text-left">
                {title}
              </h1>
              <RichTextRender
                content={content}
                contentClassNames="text-black"
              />
            </div>
            <div className="my-2 md:my-8 flex gap-4">
              <Link
                href="/main-feed"
                className="rounded-full bg-emerald-500 border-2 border-black px-4 text-black py-2 font-semibold md:px-6 md:py-2 md:text-lg hover:shadow-none shadow-bottom-black transition-shadow hover:text-black"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BackgroundShapes />
    </section>
  );
};

export default HeroBanner;
