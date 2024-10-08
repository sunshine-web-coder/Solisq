import cn from "classnames";
import styles from "./AboutUs.module.scss";
import Image from "@/components/Image";
import { BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";
import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import { AnimationOnScroll } from "react-animation-on-scroll";

import { details } from "@/constants/detailsAbout";
import { socialList } from "@/constants/social";

type AboutUsProps = {};

const AboutUs = ({}: AboutUsProps) => (
  <div className={cn("section", styles.section)}>
    <div className={cn("container", styles.container)}>
      {/* <AnimationOnScroll animateIn="fadeInDown">
        <div className={styles.item}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>Freelance Marketplace <sup>beta.</sup></h2>
              <p>
              Remote Work just got better with Solisq–backed marketplace. 
              </p>
            </div>
            <div className={styles.line}>
              <a
                href="https://vincefreelancer.com/"
                className={cn("button", styles.button)}
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-1.png" />
          </div>
        </div>
      </AnimationOnScroll> */}

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={`${styles.item} ${styles.f_reverse}`}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>Introducing Solisq Coin (SLQ)</h2>
              <p>
              Explore Solisq with its unique coin, $SLQ. Build your dApp, scale your services, and process transactions exclusively on Solisq using $SLQ.
              </p>
            </div>
            <div className={styles.line}>
              <a href="https://vincechain.gitbook.io/vince-chain-documentation/" className={cn("button", styles.button)} style={{marginRight: 15}}>
                <span>Learn more</span>
              </a>
              <a href="https://pancakeswap.finance/swap?outputCurrency=BNB&inputCurrency=0xe063a7d90732Db5B5BDFb92f6E17Fe805c655781" className={cn("button", styles.button)} rel="noreferrer" target="_blank">
                <span>Buy SLQ</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-2.png" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={styles.item}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>Ready to Build a Decentralized Internet?</h2>
              <p>
              Solisq is everything you need and more to build and shape a decentralized future of internet.
              </p>
            </div>
            <div className={styles.line}>
              <a
                href="/build"
                className={cn("button", styles.button)}
                style={{ marginRight: 20 }}
              >
                <span>Get Started</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-3.png" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={`${styles.item} ${styles.f_reverse}`}>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>
                There is a community <br />
                for you.
              </h2>
              <p>
                Connect, learn more, and contribute to the future of Solisq through the community. 
              </p>
            </div>
            <div className={styles.social}>
              {socialList.map((item, i) => (
                <a key={i} target="_blank" rel="noreferrer" href={item.slug}>
                  <button>{item.icon}</button>
                </a>
              ))}
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-4.png" />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  </div>
);

export default AboutUs;
