import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/projects" },
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Xwitter", href: "https://x.com/m_hasnain_saeed" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammadhasnainsaeed/",
    },
  ];
  return (
    <footer className="flex flex-col items-center gap-14 overflow-hidden pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Let's build something great together.
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Have a project, idea, or challenge in mind? I'd love to hear about it.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">Let's Talk</Link>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 w-full md:mt-14 lg:mt-16 dark:opacity-30 dark:grayscale">
        <svg
          width="1570"
          className="mx-auto"
          height="291"
          viewBox="0 0 1570 291"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.5627 128.636H257.293V1.56873H298.856V287.863H257.293V156.873H41.5627V287.863H0V1.56873H41.5627V128.636ZM521.433 120.792V85.4962H562.007V287.863H521.433V250.997C506.59 276.881 474.923 291 435.34 291C367.058 291 322.526 249.429 322.526 186.679C322.526 123.93 368.047 80.7898 435.34 80.7898C474.923 80.7898 505.6 95.6927 521.433 120.792ZM521.433 185.895C521.433 135.696 493.725 108.243 443.256 108.243C392.787 108.243 364.089 137.264 364.089 186.679C364.089 236.095 392.787 263.547 443.256 263.547C493.725 263.547 521.433 235.31 521.433 185.895ZM564.895 264.332L578.753 240.801C606.457 258.057 633.179 264.332 668.803 264.332C706.408 264.332 727.187 253.35 727.187 233.741C727.187 218.054 714.322 209.426 683.648 203.151L640.105 195.307C597.555 187.464 573.803 167.855 573.803 141.186C573.803 105.89 612.396 80.7898 671.772 80.7898C707.396 80.7898 740.051 90.202 761.822 107.458L747.97 130.989C724.223 115.302 698.489 107.458 671.772 107.458C635.155 107.458 614.377 119.224 614.377 138.833C614.377 155.305 626.253 164.717 653.958 169.423L696.513 178.051C744.013 187.464 766.773 204.72 766.773 232.957C766.773 268.254 728.18 291 666.822 291C623.284 291 589.636 281.588 564.895 264.332ZM1003.2 160.795V287.863H962.631V162.364C962.631 125.499 943.828 108.243 903.254 108.243C856.747 108.243 825.08 133.342 825.08 172.561V287.863H784.506V142.755C784.506 121.577 782.525 102.752 780.549 85.4962H819.142L823.099 122.361C838.932 95.6927 871.587 80.7898 911.173 80.7898C972.526 80.7898 1003.2 107.458 1003.2 160.795ZM1216.88 120.792V85.4962H1257.45V287.863H1216.88V250.997C1202.03 276.881 1170.36 291 1130.78 291C1062.5 291 1017.97 249.429 1017.97 186.679C1017.97 123.93 1063.49 80.7898 1130.78 80.7898C1170.36 80.7898 1201.04 95.6927 1216.88 120.792ZM1216.88 185.895C1216.88 135.696 1189.17 108.243 1138.7 108.243C1088.23 108.243 1059.53 137.264 1059.53 186.679C1059.53 236.095 1088.23 263.547 1138.7 263.547C1189.17 263.547 1216.88 235.31 1216.88 185.895ZM1321.69 36.8653H1272.22V0H1321.69V36.8653ZM1316.75 85.4962V287.863H1276.17V85.4962H1316.75ZM1570 160.795V287.863H1529.43V162.364C1529.43 125.499 1510.62 108.243 1470.05 108.243C1423.54 108.243 1391.88 133.342 1391.88 172.561V287.863H1351.3V142.755C1351.3 121.577 1349.32 102.752 1347.34 85.4962H1385.94L1389.89 122.361C1405.73 95.6927 1438.39 80.7898 1477.97 80.7898C1539.32 80.7898 1570 107.458 1570 160.795Z"
            fill="url(#paint0_linear_192_112)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_192_112"
              x1="785"
              y1="362"
              x2="785"
              y2="21"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.244147" stopColor="#F8F8F8" stopOpacity="0.4" />
              <stop offset="1" stopColor="#21F1A8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}
