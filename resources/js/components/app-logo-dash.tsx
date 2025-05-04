import { Link } from '@inertiajs/react';

export default function AppLogoDash() {
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
  {/* <div className="ml-3">
  <span className="block font-playfair text-guilo text-xs font-medium leading-none">
    Kronik
  </span>
</div> */}

</Link>

  );
}




