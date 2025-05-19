import Link from "next/link";
import Image from "next/image";

import NextLogo from "@/assets/next.svg";
import { Button } from "../ui/button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo_container}>
        <Button asChild variant='link' className='p-0 m-0'>
          <Link href='/'>
            <Image src={NextLogo} priority alt='Crown Logo' width={100} height={100} />
          </Link>
        </Button>
      </div>
      <div className={styles.nav_links_container}>
        <Button asChild variant='outline'>
          <Link href='/shop' className={styles.nav_link}>
            SHOP
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
