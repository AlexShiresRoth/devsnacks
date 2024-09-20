import { fetchGraphQL } from '@/contentful/api';
import { heroQuery } from '@/contentful/gql-queries/components/hero/hero.query';
import { HeroBannerResponseData, UnknownComponent } from '@/types/component';
import Link from 'next/link';
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

  return <HeroWithAnimatedBg />;
};

// TODO pull in contentful data
const HeroWithAnimatedBg = () => {
  return (
    <section className="container-snap overflow-x-hidden relative flex w-full flex-grow flex-col items-center justify-center bg-amber-400 pb-12 pt-16">
      <div className="relative z-20 flex w-full justify-center pb-8 pt-16 md:w-3/4 md:justify-between md:py-16 md:pb-16">
        <div className="relative z-10 w-11/12 md:w-1/2">
          <div className="relative z-10 border-2 border-black bg-amber-400 p-4 md:p-8">
            <div className="flex w-full flex-col items-start gap-4">
              <h1 className="uppercase text-black md:-ml-2 text-left">
                Welcome to my dev blog
              </h1>
              <p className="text-xl text-stone-900">
                My name is Alex and I'm a developer. I'm just writing about dev
                stuff that interests me and help me better understand things.
              </p>
            </div>
            <div className="my-8 flex gap-4">
              <Link
                href="/main-feed"
                className="bg-emerald-500 border-2 border-black px-4 text-black py-2 font-semibold md:px-6 md:py-4 md:text-lg hover:text-black hover:-translate-y-2 transition-transform"
              >
                View Posts
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
