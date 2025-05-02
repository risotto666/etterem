"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export function Component() {
  return (
    <Navbar className="bg-[#08312f] text-white" fluid>
      <NavbarBrand href="/">
        <img src="/logo2.png" className=" mr-3rounded-xl h-24" alt="Logo" />{" "}
      </NavbarBrand>

      <NavbarToggle />
      <NavbarCollapse>
        <Link
          className="text-white text-2xl hover:text-blue-300 transition duration-300"
          href="/menu"
        >
          Menü
        </Link>
        <Link
          className="text-white text-2xl hover:text-blue-300 transition duration-300"
          href="/contact"
        >
          Kapcsolat
        </Link>

        <Link
          className="text-white text-2xl hover:text-blue-300 transition duration-300"
          href="/about"
        >
          Rólunk
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
