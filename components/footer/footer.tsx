import { fetchGraphQL } from '@/contentful/api';
import { footerQuery } from '@/contentful/gql-queries/components/footer/footer.query';
import { UnknownComponent } from '@/types/component';
import type { Footer } from '@/types/footer';
import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '../containers/section-container';

type Props = {
  data: UnknownComponent;
};

interface FooterResponseData {
  data: {
    footer: Footer;
  };
}

async function getFooter(id: string) {
  try {
    const res = await fetchGraphQL<FooterResponseData>(footerQuery(id));

    return res.data.footer;
  } catch (error) {
    console.error('Error fetching footer data:', error);
    return null;
  }
}

const Footer = async ({ data }: Props) => {
  const footerData = await getFooter(data.sys.id);

  if (!footerData) return null;

  return (
    <footer
      className="w-full flex flex-col items-center justify-center bg-red-500 dark:bg-black dark:border-t dark:border-t-gray-900"
      data-component-type="footer"
    >
      <SectionContainer>
        <div className="w-full mx-4 md:mx-0 flex flex-col gap-8 md:flex-row justify-between py-14">
          <div className="flex flex-col">
            <h3 className="font-bold text-white text-uppercase">
              {footerData.brandName}
            </h3>

            {footerData?.logo?.url && (
              <Image
                src={footerData.logo.url}
                width={100}
                height={100}
                alt="logo"
              />
            )}

            <p className="text-white/80 mt-6 mb-2">Find me on</p>
            <div className="flex gap-2">
              {footerData.facebookLink && (
                <a
                  title="Facebook Link"
                  href={footerData.facebookLink}
                  className=" p-2 bg-amber-400"
                >
                  <Image
                    src="/fb.svg"
                    width={20}
                    height={20}
                    alt="facebook-logo"
                    unoptimized
                  />
                </a>
              )}
              {footerData.instagramLink && (
                <a
                  title="Instagram Link"
                  href={footerData.instagramLink}
                  className=" p-2 bg-amber-400"
                >
                  <Image
                    src="/instagram-line.svg"
                    width={20}
                    height={20}
                    alt="skype-logo"
                    unoptimized
                  />
                </a>
              )}
              {footerData.twitterxLink && (
                <a
                  title="Twitter X Link"
                  href={footerData.twitterxLink}
                  className=" p-2 bg-amber-400"
                >
                  <Image
                    src="/twitter.svg"
                    width={20}
                    height={20}
                    alt="twitter-logo"
                    unoptimized
                  />
                </a>
              )}
              {footerData.threadsLink && (
                <a
                  title="Threads Link"
                  href={footerData.threadsLink}
                  className="p-2 bg-amber-400"
                >
                  <Image
                    src="/threads.svg"
                    width={20}
                    height={20}
                    alt="threads-logo"
                    unoptimized
                  />
                </a>
              )}
            </div>
          </div>
          {!!footerData.footerColumnsCollection.items.length &&
            footerData.footerColumnsCollection.items.map((column) => {
              return (
                <div key={column.sys.id} className="flex flex-col gap-2">
                  <p className="font-semibold text-white text-uppercase mb-2">
                    {column.menuTitle}
                  </p>
                  {!!column.menuItemsCollection.items.length &&
                    column.menuItemsCollection.items.map((menuItem) => {
                      return (
                        <div key={menuItem.sys.id}>
                          <Link
                            href={menuItem.groupLink.slug ?? null}
                            className="text-white/80 text-sm hover:text-amber-400 transition-all"
                          >
                            {menuItem.groupName}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </div>
      </SectionContainer>
      <div className="w-full border-t-2 border-red-600 dark:border-gray-900 py-6 flex items-center justify-center">
        <SectionContainer>
          <div className="w-full mx-4 md:mx-0 flex justify-between gap-4 md:gap-0 md:items-center flex-col md:flex-row">
            <p className="text-white/80 text-xs">
              &copy; {footerData.brandName} All Rights Reserved
            </p>
            <p className="text-white/80 text-xs">
              {footerData.brandName} by me, {` `}
              <a
                href="https://alexshiresroth.com"
                className="font-bold text-amber-400"
              >
                Alex!
              </a>
            </p>
          </div>
        </SectionContainer>
      </div>
    </footer>
  );
};

export default Footer;
