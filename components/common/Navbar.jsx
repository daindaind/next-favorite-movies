import { PAGE_URL } from "@/constants/router";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <ul>
      <li>
        <Link href={PAGE_URL.BASE}>메인 화면</Link>
      </li>
      <li>
        <Link href={PAGE_URL.MOVIES}>나의 영화</Link>
      </li>
      <li>
        <Link href={PAGE_URL.POST}>포스팅</Link>
      </li>
    </ul>
  );
}

export default Navbar;
