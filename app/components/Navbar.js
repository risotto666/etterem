"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function NavbarComponent() {
  return (
    <Navbar className="bg-[#08312f] text-white" fluid>
      <Link href="/">
        <img src="/logo2.png" className="mr-3 rounded-xl h-24" alt="Logo" />{" "}
      </Link>

      <NavbarToggle />
      <NavbarCollapse>
        <Link
          href="/menu"
          className="text-white text-2xl hover:text-blue-300 transition duration-300"
        >
          Menü
        </Link>

        <Link
          href="/contact"
          className="text-white text-2xl hover:text-blue-300 transition duration-300"
        >
          Kapcsolat
        </Link>

        <Link
          href="/about"
          className="text-white text-2xl hover:text-blue-300 transition duration-300"
        >
          Rólunk
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
