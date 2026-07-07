import Image from 'next/image';

export const BrandIcon = () => (
  <Image
    src="/logo.svg"
    alt="Sanctus"
    width={50}
    height={50}
    className="size-[30px] lg:size-[50px]"
  />
);
