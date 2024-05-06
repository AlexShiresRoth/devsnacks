import { fetchGraphQL } from '@/contentful/api';
import { headerQuery } from '@/contentful/gql-queries/components/header/header.query';
import { UnknownComponent } from '@/types/component';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Nav, { NavObject } from '../navigation/nav';
import { z } from 'zod';

type Props = {
  data: UnknownComponent;
  slug?: string;
  children: React.ReactNode;
};

export const HeaderObject = z.object({
  sys: z.object({
    id: z.string(),
  }),
  logo: z.object({
    url: z.string(),
    title: z.string(),
  }),
  title: z.string(),
  ...NavObject.shape,
});

export type HeaderData = z.infer<typeof HeaderObject>;

async function getHeaderData(id: string): Promise<HeaderData | null> {
  try {
    const res = await fetchGraphQL(headerQuery(id));

    if (!res.data) throw new Error('Could not locate header');

    const header = res.data.header;

    return header;
  } catch (error) {
    console.error('Error fetching header data', error);
    return null;
  }
}

const Header = async ({ data, slug }: Props) => {
  const header = await getHeaderData(data.sys.id);

  if (!header) {
    return null;
  }

  return (
    <>
      <header
        className="w-full flex flex-col items-center pb-2 md:py-4 fixed top-0 left-0 z-40  md:relative"
        data-component-type="header"
      >
        <div className="flex flex-row w-3/4 gap-8 items-center">
          <div className="flex flex-col md:flex-row md:flex-wrap items-center py-4">
            <HeaderLogo logo={header?.logo} title={header.title} />
          </div>
          <Nav
            actionItemsCollection={header.actionItemsCollection}
            navItemsCollection={header.navItemsCollection}
            slug={slug}
          />
        </div>
        <div className="w-11/12 mx-4 mt-2 flex gap-4 items-center justify-between md:hidden"></div>
      </header>
    </>
  );
};

const HeaderLogoObject = HeaderObject.pick({ logo: true, title: true });

type HeaderLogoProps = z.infer<typeof HeaderLogoObject>;

const HeaderLogo = ({ logo, title }: HeaderLogoProps) => (
  <Link href={'/'} className="flex items-center">
    {logo && <Image src={logo.url} alt={logo.title} height={60} width={60} />}
    <h2 className="relative z-10 text-2xl md:text-4xl text-black before:h-3  before:rounded-full before:w-[105%] before:block before:content-[' '] before:bg-indigo-500 before:absolute before:skew-y-1 before:-left-[7px] before:bottom-[2px] before:-z-10">
      {title}
    </h2>
  </Link>
);

export default Header;
