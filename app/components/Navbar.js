"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
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
        <Link href="/menu">
          <NavbarLink className="text-white text-2xl hover:text-blue-300 transition duration-300">
            Menü
          </NavbarLink>
        </Link>
        <Link href="/contact">
          <NavbarLink className="text-white text-2xl hover:text-blue-300 transition duration-300">
            {" "}
            Kapcsolat
          </NavbarLink>
        </Link>

        <Link href="/about">
          <NavbarLink className="text-white text-2xl hover:text-blue-300 transition duration-300">
            Rólunk
          </NavbarLink>
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
