// import AppLogoIcon from './app-logo-icon';
// import { Link } from '@inertiajs/react';

// export default function AppLogo() {
//     return (
//         <>
//             <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-md">
//                 <AppLogoIcon className="size-5 fill-current text-white dark:text-black" />
//             </div>
//             <div className="ml-1 grid flex-1 text-left text-sm">
//                 <span className="mb-0.5 truncate leading-none font-semibold">Laravel Starter Kit</span>
//             </div>
//         </>
//     );
// }



import { Link } from '@inertiajs/react';

export default function AppLogo() {
  return (
<Link
  href="/"
  className="flex items-center pl-2 transition-opacity hover:opacity-90"
>
  <div className="flex w-32 h-20 items-center justify-center rounded-md overflow-hidden">
  <Link href="/">
  <span className="block dark:hidden">
    <img src="/logo.png" alt="XH Health Logo" className="h-12" />
  </span>
  <span className="hidden dark:block">
    <img src="/logo-dark.png" alt="XH Health Logo Dark" className="h-12" />
  </span>
</Link>

  </div>
  <div className="ml-3">
  <span className="block font-playfair text-guilo text-xs font-medium leading-none">
    Kronik Blockhain
  </span>
</div>

</Link>

  );
}




