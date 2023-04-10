// import React from 'react';
// import { ReactNode } from 'react';

// export const TextType = {
//   pd: 'font-semibold sm:text-4xl text-4xl',
//   h1: 'font-semibold sm:text-h1 text-mh1',
//   h2: 'font-semibold sm:text-h2 text-mh2',
//   sh: 'font-semibold sm:text-sh text-msh',
//   c: 'font-normal text-c md:text-mc lg:text-lc',
//   bl: 'font-normal sm:text-mbl text-bl',
//   bm: 'font-normal sm:text-bm text-mbm',
//   bs: 'font-normal sm:text-mbs text-bs',
//   btl: 'font-semibold sm:text-btl text-mbtl',
//   btm: 'font-semibold sm:text-btm text-mbtm',
//   bts: 'font-semibold sm:text-bts text-mbts',
//   dxl: 'font-semibold sm:text-dxl text-mdxl',
//   dl: 'font-semibold sm:text-dl text-mdl',
//   dm: 'font-semibold sm:text-dm text-mdm',
//   ds: 'font-semibold sm:text-ds text-mds',
// };

// const ColorType = {
//   default: 'text-Text-default',
//   subdued: 'text-Text-Subdued',
//   disabled: 'text-Text-Disabled',
//   critical: 'text-Text-Critical',
//   warning: 'text-Text-Warning',
//   success: 'text-Text-Success',
//   highlight: 'text-Text-Highlight',
//   white: 'text-white',
//   black: 'text-black',
// };

// export const Text = (props) => {
//   const { children, variant = 'body', color = 'default', className, ...other } = props;
//   const localClassName = `font-SFProText w-fit ${TextType[variant]} ${ColorType[color]} ${className}`;

//   return (
//     <p className={localClassName} {...other}>
//       {children}
//     </p>
//   );
// };