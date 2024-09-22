import { cn } from '@/lib/utils';
interface WindowProps<T> {
  color: T;
  bottomColor: T;
}

interface WindowColumnProps extends WindowProps<string> {
  rows: number;
  columns: number;
}

export const SmallWindow = (props: WindowProps<string>) => (
  <span
    className={cn('h-4 w-4 border-b-4', {
      [props.color]: true,
      [props.bottomColor]: true,
    })}
  ></span>
);

export const WindowGrid = (props: WindowProps<string>) => (
  <>
    <span className="-ml-[7px] block h-3 w-[85px] rounded-sm bg-gray-800"></span>
    <div className="grid w-full grid-cols-3 justify-items-center gap-1">
      <SmallWindow color={props.color} bottomColor={props.bottomColor} />
      <SmallWindow color={props.color} bottomColor={props.bottomColor} />
      <SmallWindow color={props.color} bottomColor={props.bottomColor} />
    </div>
  </>
);

export const WindowColumns = (props: WindowColumnProps) => (
  <div className="flex w-full flex-col items-center gap-2">
    {Array.from({ length: props.rows }).map((_, i) => (
      <div
        key={(i * 9 * 100) / 36}
        className="flex w-full items-center justify-between"
      >
        {Array.from({ length: props.columns }).map((_, j) => (
          <SmallWindow
            color={props.color}
            bottomColor={props.bottomColor}
            key={j * i + j}
          />
        ))}
      </div>
    ))}
  </div>
);

export const DoorWay = (props: WindowProps<string>) => (
  <div className="absolute bottom-0 left-0 flex w-full justify-around gap-1 px-1">
    <span className={cn('h-3 w-3', { [props.color]: true })} />
    <span
      className={cn('h-5 w-2 border-b-4', {
        [props.color]: true,
        [props.bottomColor]: true,
      })}
    />
    <span className={cn('h-3 w-3', { [props.color]: true })} />
  </div>
);

export const DoorWayTwo = (props: WindowProps<string>) => (
  <div className="absolute bottom-0 left-0 flex w-full flex-col gap-1 px-1">
    <div className="w-full">
      <span
        className={cn('block h-3 w-full rounded-t-full', {
          [props.color]: true,
        })}
      />
    </div>
    <div className="flex w-full justify-around gap-1">
      <span
        className={cn('h-3 w-5 border-b-4', {
          [props.color]: true,
          [props.bottomColor]: true,
        })}
      />
      <span
        className={cn('h-5 w-3 border-b-4', {
          [props.color]: true,
          [props.bottomColor]: true,
        })}
      />
      <span
        className={cn('h-3 w-5 border-b-4', {
          [props.color]: true,
          [props.bottomColor]: true,
        })}
      />
    </div>
  </div>
);

export const DoorWayThree = (
  props: WindowProps<string> & { accent: string }
) => (
  <div className="absolute bottom-0 left-0 flex w-full flex-col gap-1">
    <span
      className={cn('mb-2 h-[3px] w-full', {
        [props.accent]: true,
      })}
    />
    <div className="flex w-full justify-center gap-1">
      <span
        className={cn('h-9 w-6 rounded-tl-full border-b-4', {
          [props.color]: true,
          [props.bottomColor]: true,
        })}
      />
      <span
        className={cn('h-9 w-6 rounded-tr-full border-b-4', {
          [props.color]: true,
          [props.bottomColor]: true,
        })}
      />
    </div>
  </div>
);

type BuildingProps = {
  xCoord: string;
  windowColor: string;
  bottomColor: string;
  borderColor?: string;
};

export const BuildingOne = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0', {
      [props.xCoord]: true,
    })}
  >
    <span className="relative ml-4 flex h-64 w-20 flex-col gap-1 bg-black p-1">
      <span className="absolute bottom-[100%] left-0 h-6 w-full rounded-tr-full bg-black" />
      <WindowGrid color={props.windowColor} bottomColor={props.bottomColor} />
      <WindowGrid color={props.windowColor} bottomColor={props.bottomColor} />
      <WindowGrid color={props.windowColor} bottomColor={props.bottomColor} />
      <WindowGrid color={props.windowColor} bottomColor={props.bottomColor} />
      <WindowGrid color={props.windowColor} bottomColor={props.bottomColor} />
      <WindowGrid color={props.windowColor} bottomColor={props.bottomColor} />
      <DoorWay color={props.windowColor} bottomColor={props.bottomColor} />
    </span>
  </div>
);

export const BuildingTwo = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0', {
      [props.xCoord]: true,
    })}
  >
    <span
      className={cn(
        'relative ml-8 flex h-60 w-16 flex-col items-center  border-t-4  bg-black p-2',
        { [props.borderColor as string]: true }
      )}
    >
      <span className="absolute bottom-[100%] left-4 h-4 w-1 border-t-4 border-t-red-700 bg-black" />
      <WindowColumns
        color={props.windowColor}
        bottomColor={props.bottomColor}
        rows={8}
        columns={2}
      />
      <DoorWayTwo color={props.windowColor} bottomColor={props.bottomColor} />
    </span>
  </div>
);

export const BuildingThree = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0', {
      [props.xCoord]: true,
    })}
  >
    <span className="relative flex h-48 w-20 flex-col  gap-2  bg-black p-2">
      <span className="absolute bottom-[100%] left-4 h-4 w-1 border-t-4 border-t-red-700 bg-black" />
      <WindowColumns
        color={props.windowColor}
        bottomColor={props.bottomColor}
        rows={7}
        columns={3}
      />
      <DoorWay color={props.windowColor} bottomColor={props.bottomColor} />
    </span>
  </div>
);

export const BuildingFour = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0 flex items-end', {
      [props.xCoord]: true,
    })}
  >
    <div className="flex w-10 flex-col items-end">
      <span className="flex h-16 w-1/2 flex-col rounded-tl-full bg-black p-2">
        <span
          className={cn('h-full w-4 rounded-tl-lg', {
            [props.windowColor]: true,
          })}
        ></span>
      </span>
      <span className="flex h-20 w-8 flex-col  gap-2 rounded-tl-lg bg-black p-2">
        <span
          className={cn('border-t-lg h-full w-6', {
            [props.windowColor]: true,
          })}
        ></span>
      </span>
    </div>
    <div className="flex min-w-min flex-col items-center">
      <div className="flex w-full flex-col items-center">
        <span
          className={cn('flex h-6 w-14 items-center justify-center rounded', {
            [props.windowColor]: true,
          })}
        >
          <p className="text-sm font-bold uppercase text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-black w-6 h-6"
            >
              <path d="M14.448 16.2394C13.8809 17.0412 13.2933 17.7714 12.7015 18.4146C14.3738 20.0375 15.9291 20.7975 16.792 20.2993C17.6549 19.8011 17.7744 18.0742 17.2051 15.8145C16.3521 16.0054 15.426 16.1492 14.448 16.2394ZM13.138 16.3265C12.7641 16.342 12.3845 16.3499 12.0003 16.3499C11.6161 16.3499 11.2365 16.342 10.8627 16.3265C11.2394 16.8188 11.6208 17.2749 12.0003 17.6905C12.3798 17.2749 12.7612 16.8188 13.138 16.3265ZM18.1787 8.43278C20.8434 9.19718 22.5837 10.4672 22.5837 11.9999C22.5837 13.5325 20.8434 14.8026 18.1787 15.567C18.8491 18.2569 18.6193 20.399 17.292 21.1653C15.9647 21.9316 13.9947 21.0595 12.0003 19.134C10.006 21.0595 8.03596 21.9316 6.70866 21.1653C5.38136 20.399 5.15158 18.2569 5.82195 15.567C3.15724 14.8026 1.41699 13.5325 1.41699 11.9999C1.41699 10.4672 3.15724 9.19718 5.82195 8.43278C5.15158 5.74288 5.38136 3.60075 6.70866 2.83443C8.03596 2.06811 10.006 2.94019 12.0003 4.86569C13.9947 2.94019 15.9647 2.06811 17.292 2.83443C18.6193 3.60075 18.8491 5.74288 18.1787 8.43278ZM17.2051 8.18527C17.7744 5.92558 17.6549 4.19865 16.792 3.70046C15.9291 3.20226 14.3738 3.96221 12.7015 5.58509C13.2933 6.2283 13.8809 6.95849 14.448 7.76031C15.426 7.85054 16.3521 7.99432 17.2051 8.18527ZM6.79554 15.8145C6.22624 18.0742 6.34577 19.8011 7.20866 20.2993C8.07155 20.7975 9.62688 20.0375 11.2992 18.4146C10.7073 17.7714 10.1197 17.0412 9.55262 16.2394C8.57467 16.1492 7.6485 16.0054 6.79554 15.8145ZM10.8627 7.67324C11.2365 7.65776 11.6161 7.64987 12.0003 7.64987C12.3845 7.64987 12.7641 7.65776 13.138 7.67324C12.7612 7.18096 12.3798 6.7248 12.0003 6.30922C11.6208 6.7248 11.2394 7.18096 10.8627 7.67324ZM9.55262 7.76031C10.1197 6.95849 10.7073 6.2283 11.2992 5.58509C9.62688 3.96221 8.07155 3.20226 7.20866 3.70046C6.34577 4.19865 6.22624 5.92558 6.79554 8.18527C7.6485 7.99432 8.57467 7.85054 9.55262 7.76031ZM13.8939 15.2797C14.2395 14.7728 14.5772 14.2366 14.9015 13.6749C15.2258 13.1131 15.5213 12.5526 15.7875 11.9999C15.5213 11.4471 15.2258 10.8866 14.9015 10.3249C14.5772 9.76311 14.2395 9.22694 13.8939 8.72005C13.2821 8.6742 12.649 8.64987 12.0003 8.64987C11.3517 8.64987 10.7185 8.6742 10.1067 8.72005C9.76112 9.22694 9.42347 9.76311 9.09914 10.3249C8.77481 10.8866 8.4793 11.4471 8.21312 11.9999C8.4793 12.5526 8.77481 13.1131 9.09914 13.6749C9.42347 14.2366 9.76112 14.7728 10.1067 15.2797C10.7185 15.3255 11.3517 15.3499 12.0003 15.3499C12.649 15.3499 13.2821 15.3255 13.8939 15.2797ZM15.1785 15.1484C15.7932 15.0683 16.3789 14.9661 16.9286 14.8452C16.7584 14.3087 16.5541 13.7504 16.3161 13.178C16.1426 13.5095 15.9596 13.8421 15.7675 14.1749C15.5754 14.5076 15.3788 14.8324 15.1785 15.1484ZM8.82218 8.85133C8.20747 8.93147 7.62174 9.03367 7.07208 9.15454C7.24223 9.691 7.44659 10.2494 7.68454 10.8218C7.85806 10.4903 8.04101 10.1576 8.23311 9.82487C8.42522 9.49212 8.62185 9.16736 8.82218 8.85133ZM7.07208 14.8452C7.62174 14.9661 8.20747 15.0683 8.82218 15.1484C8.62185 14.8324 8.42522 14.5076 8.23311 14.1749C8.04101 13.8421 7.85806 13.5095 7.68454 13.178C7.44659 13.7504 7.24223 14.3087 7.07208 14.8452ZM6.09439 14.6C6.35551 13.7659 6.69407 12.8919 7.10491 11.9999C6.69407 11.1078 6.35551 10.2339 6.09439 9.39969C3.85279 10.0365 2.41699 11.0035 2.41699 11.9999C2.41699 12.9962 3.85279 13.9632 6.09439 14.6ZM16.9286 9.15454C16.3789 9.03367 15.7932 8.93147 15.1785 8.85133C15.3788 9.16736 15.5754 9.49212 15.7675 9.82487C15.9596 10.1576 16.1426 10.4903 16.3161 10.8218C16.5541 10.2494 16.7584 9.691 16.9286 9.15454ZM17.9063 9.39969C17.6451 10.2339 17.3066 11.1078 16.8957 11.9999C17.3066 12.8919 17.6451 13.7659 17.9063 14.6C20.1479 13.9632 21.5837 12.9962 21.5837 11.9999C21.5837 11.0035 20.1479 10.0365 17.9063 9.39969ZM12.0003 13.879C10.9625 13.879 10.1212 13.0377 10.1212 11.9999C10.1212 10.962 10.9625 10.1207 12.0003 10.1207C13.0382 10.1207 13.8795 10.962 13.8795 11.9999C13.8795 13.0377 13.0382 13.879 12.0003 13.879Z"></path>
            </svg>
          </p>
        </span>
        <span className="flex w-full justify-around">
          <span className="h-3 w-2  bg-black"></span>
          <span className="h-3 w-2  bg-black"></span>
        </span>
      </div>
      <span
        className={cn('h-2 w-full rounded-t-lg', { [props.windowColor]: true })}
      ></span>
      <span className="h-4 w-full bg-black"></span>
      <span className={cn('h-1 w-full ', { [props.windowColor]: true })}></span>
      <span className="h-4 w-full bg-black"></span>
      <span className="relative flex h-56 flex-col items-center  gap-2 bg-black p-2">
        <WindowColumns
          color={props.windowColor}
          bottomColor={props.bottomColor}
          rows={8}
          columns={4}
        />
        <DoorWay color={props.windowColor} bottomColor={props.bottomColor} />
      </span>
    </div>
    <div className="flex w-10 flex-col items-start">
      <span className="flex h-16 w-1/2 flex-col items-center rounded-tr-full bg-black p-2">
        <span
          className={cn('-ml-1.5 h-full w-3 rounded-tr-lg', {
            [props.windowColor]: true,
          })}
        ></span>
      </span>
      <span className="flex h-20 w-8 flex-col  gap-2 rounded-tr-lg bg-black p-2">
        <span
          className={cn('border-t-lg -ml-1.5 h-full w-6 ', {
            [props.windowColor]: true,
          })}
        ></span>
      </span>
    </div>
  </div>
);

export const BuildingFive = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0', {
      [props.xCoord]: true,
    })}
  >
    <div className="flex flex-col items-end">
      <span className="relative mr-6 flex h-10 w-14 flex-col items-end gap-2 rounded-t-lg border-t-8 border-t-slate-400 bg-slate-600 p-2">
        <span className="block h-1 w-3/4 rounded bg-slate-400" />
        <span className="block h-1 w-3/4 rounded bg-slate-400" />
        {/* <span className="block h-1 w-3/4 rounded bg-slate-400" /> */}
      </span>
      <span className="relative flex h-64 w-32 flex-col gap-2 rounded-t-md  border-t-8 border-t-slate-400  bg-black p-2">
        <span className="absolute bottom-[100%] left-4 h-4 w-1 border-t-4 border-t-red-700 bg-black" />
        <span className="absolute bottom-[100%] right-4 h-4 w-1 border-t-4 border-t-red-700 bg-black" />
        <WindowColumns
          color={props.windowColor}
          bottomColor={props.bottomColor}
          rows={8}
          columns={4}
        />
        <DoorWayTwo color={props.windowColor} bottomColor={props.bottomColor} />
      </span>
    </div>
  </div>
);

export const BuildingSix = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0 flex items-end', {
      [props.xCoord]: true,
    })}
  >
    <div className="flex w-28 flex-col items-center">
      <span className="relative flex h-56 w-full flex-col items-center  gap-2 bg-black p-2">
        <WindowColumns
          color="bg-emerald-400"
          bottomColor="border-b-emerald-600"
          rows={7}
          columns={4}
        />
        <DoorWayThree
          accent="bg-emerald-500"
          color="bg-emerald-400"
          bottomColor="border-b-emerald-600"
        />
      </span>
    </div>
  </div>
);

export const Tower = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0 -z-10', {
      [props.xCoord]: true,
    })}
  >
    <span className="relative flex h-[287px] w-20 flex-col  gap-2  border-t-4 border-t-gray-500 bg-black py-2">
      <span
        className={cn(
          'absolute bottom-[100%] left-0 h-16 w-[100%] rounded-tl-full border-b-4 border-t-4  bg-gray-800',
          {
            [props.borderColor as string]: true,
          }
        )}
      />
      <span className="absolute bottom-[100%] right-5 h-20 w-1 border-t-4 border-t-white bg-gray-400" />
      <span className="absolute bottom-[100%] right-7 h-20 w-1 border-t-4 border-t-orange-500 bg-gray-400" />
      <WindowColumns
        color={props.windowColor}
        bottomColor={props.bottomColor}
        rows={11}
        columns={6}
      />
    </span>
  </div>
);

export const TowerTwo = (props: BuildingProps) => (
  <div
    className={cn('absolute bottom-0 -z-10 flex flex-col items-center', {
      [props.xCoord]: true,
    })}
  >
    <span className="border-t-blue h-9 w-1 border-t-2 bg-black/90"></span>
    <span className="h-6 w-1/4  border-t-2 border-t-blue-400 bg-black/90"></span>
    <span className="h-4 w-3/4  bg-black/90"></span>
    <span className="relative flex h-[387px] w-24 flex-col gap-2  border-t-4 border-t-gray-500 bg-black py-2">
      <WindowColumns
        color={props.windowColor}
        bottomColor={props.bottomColor}
        rows={13}
        columns={4}
      />
      <DoorWayThree
        color={props.windowColor}
        bottomColor={props.bottomColor}
        accent={props.borderColor as string}
      />
    </span>
  </div>
);
