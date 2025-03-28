import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import styles2 from "./Footer.module.scss";
import Logo from "@/components/Logo";
import Head from "next/head";
import NavLink from "@/components/NavLink";
import Socials from "@/components/Socials";
import { socialList } from "../../constants/social";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { footerNavigation, documents } from "@/constants/navigation";
import { socials } from "@/constants/socials";
import Script from "next/script";
import { useState } from "react";

type FooterProps = {};

const Footer = ({}: FooterProps) => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={cn("container-wide", styles.container)}>
          <div className={`${styles.row} ${styles2.d_flex}`}>
            <Logo className={`${styles.logo} ${styles2.fLogo}`} />
            <div className={`${styles.menu} ${styles2.menu2}`}>
              {footerNavigation &&
                footerNavigation.map((a, akey) => (
                  <div key={akey} className={styles2.fRLinks}>
                    {a.title && <h4 className="h4">{a.title}</h4>}
                    {a.list && (
                      <ul className="list-unstyled">
                        {a.list.map((b, bkey) => (
                          <li key={bkey}>
                            <a href={b.slug} onClick={() => {}}>
                              {b.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          </div>
          
          <div className={styles.row}>
            <div className={styles.copyright}>
              © 2025 Solisq. All rights reserved. a product of vangold
            </div>
            {/* <div className={styles.documents}>
          {documents.map((document, index) => (
            <Link href={document.url} key={index}>
              <a className={styles.document}>{document.title}</a>
            </Link>
          ))}
        </div> */}
            {/* <Socials className={styles.socials} socials={socials} /> */}
            {/* <div className={styles2.social}>
          {socialList.map((item, i) => (
            <a key={i}
              target="_blank"
              rel="noreferrer"
              href={item.slug}
            >
              <button>{item.icon}</button>
            </a>
          ))}
        </div> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
