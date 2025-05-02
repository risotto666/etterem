import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";
import Link from "next/link";

export function FooterComponent() {
  return (
    <Footer container>
      <FooterCopyright href="/" by="Bolyhos Étterem™" year={2022} />
      <FooterLinkGroup>
        <div className="grid gap-2 md:flex mt-4">
          <Link href="/about">Rólunk</Link>
          <Link href="/privacy">Adatvédelmi szabályzat</Link>
          <Link href="/permission">Engedélyek</Link>
          <Link href="/contact">Kapcsolat</Link>
        </div>
      </FooterLinkGroup>
    </Footer>
  );
}
