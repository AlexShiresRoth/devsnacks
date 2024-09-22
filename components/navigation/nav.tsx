// import NavItems from './nav-items';
import { NavigationData } from '@/types/nav';
import classNames from 'classnames';
import Link from 'next/link';

type NavProps = NavigationData & { slug?: string };

const Nav = async ({
  actionItemsCollection,
  navItemsCollection,
  slug,
}: NavProps) => {
  return (
    <>
      <nav className="flex justify-center">
        <div className="w-full flex items-center  mt-4 py-2">
          <div className="w-full flex items-center gap-4 justify-between text-black dark:text-white">
            {navItemsCollection.items.map((item) => (
              <div key={item.sys.id}>
                {item.menuItemsCollection.items.map((menuItem) => (
                  <Link
                    href={menuItem.groupLink.slug ?? null}
                    key={menuItem.sys.id}
                    className={classNames(
                      'transition-all hover:border-b-amber-400 hover:text-amber-400',
                      {
                        'border-black border-b ':
                          slug === menuItem.groupLink.slug,
                        'border-transparent border-b ':
                          slug !== menuItem.groupLink.slug,
                      }
                    )}
                  >
                    {menuItem.groupName}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
      {/* <MobileNav navigation={navigation} /> */}
    </>
  );
};

export default Nav;
