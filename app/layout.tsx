import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import { fetchGraphQL } from '@/contentful/api';
import { appQuery } from '@/contentful/gql-queries';
import { SEOMetadata } from '@/types/page.type';
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { Suspense } from 'react';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-abeezee',
  weight: ['400', '500', '600', '700'],
});

export interface AppQueryResponse {
  data: {
    appCollection: {
      items: {
        seoMetadata: SEOMetadata;
        sys: {
          id: string;
        };
        header: {
          sys: {
            id: string;
          };
          __typename: string;
        };
        footer: {
          sys: {
            id: string;
          };
          __typename: string;
        };
        homePage: {
          sys: {
            id: string;
          };
        };
      }[];
    };
  };
}

type Props = {
  children: React.ReactNode;
};

async function getAppData(domain: string) {
  try {
    const res = await fetchGraphQL<AppQueryResponse>(appQuery(domain));

    const app = res.data.appCollection.items[0];

    return app;
  } catch (error) {
    console.error('Error fetching app data:', error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const app = await getAppData(process.env.DOMAIN as string);

  if (!app) {
    return {
      title: `Dev Snacks`,
      description:
        'devsnacks.io is a blog about front-end development, design, and other tech related topics.',
    };
  }

  return {
    title: app.seoMetadata.title,
    description: app.seoMetadata.description,
    openGraph: {
      images: [app.seoMetadata.image.url],
      title: app.seoMetadata.title,
      description: app.seoMetadata.description,
    },
  };
}

export default async function RootLayout({ children }: Props) {
  const app = await getAppData(process.env.DOMAIN as string);
  if (!app) return null;
  return (
    <>
      <html lang="en" className={`${montserrat.className}`}>
        <body>
          <>
            <Suspense>
              <Header data={app.header} />
            </Suspense>
            {children}
            <Footer data={app.footer} />
          </>
        </body>
      </html>
    </>
  );
}
