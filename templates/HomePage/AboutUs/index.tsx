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
              <h2>How Solisq Works</h2>
              <p>Join Solisq or Hire Your Next Talent in Four Simple Steps </p>
              <ul className="how-solisq-work-list">
                <li>
                  Step 1: <b>Identify Your Need on Solisq:</b> Are you hiring or
                  freelancing?
                </li>
                <li>
                  Step 2: <b>Sign Up With Your Email:</b> No rigorous KYC
                  needed. Just connect your Gmail/email and fill out your buyer
                  or sellers details using the prompts provided
                </li>
                <li>
                  Step 3: <b>Explore AI Services and Freelancers:</b> Browse and
                  choose your preferred AI services and freelancers across
                  multiple categories
                </li>
                <li>
                  Step 4: <b>Collaborate Securely Within the Platform:</b>{" "}
                  Schedule interviews/meetings, hire talents, track project
                  progress, create and send invoice, and pay using BNB/Solisq
                  tokens.
                </li>
              </ul>
            </div>
            <div className={styles.line}>
              <a
                href="https://freelance.solisq.com/"
                className={cn("button", styles.button)}
                style={{ marginRight: 15 }}
                rel="noreferrer"
                target="_blank"
              >
                <span>Get Started Now</span>
              </a>
              {/* <a
                href="https://pancakeswap.finance/swap?outputCurrency=BNB&inputCurrency=0xe063a7d90732Db5B5BDFb92f6E17Fe805c655781"
                className={cn("button", styles.button)}
                rel="noreferrer"
                target="_blank"
              >
                <span>Buy SLQ</span>
              </a> */}
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
              <h2>AI Services to Explore on Solisq</h2>
              <ul className="how-solisq-work-list">
                <li>- Programming & Tech</li>
                <li>- Graphics Design</li>
                <li>- UI/UX Design</li>
                <li>- Digital Marketing</li>
                <li>- Writing & Translation</li>
                <li>- Video & Animation</li>
                <li>- AI Chatbot / Customer Support</li>
                <li>- Music & Audio</li>
                <li>- Business Management</li>
                <li>- Project Management</li>
                <li>- Marketing Automation</li>
              </ul>
            </div>
            <div className={styles.line}>
              <a
                href="https://solisq.gitbook.io/solisq-documentation"
                rel="noreferrer"
                target="_blank"
                className={cn("button", styles.button)}
                style={{ marginRight: 20 }}
              >
                <span>Learn More</span>
              </a>
            </div>
          </div>
          <div className={styles.preview}>
            <img src="/images/about-pic-3.png" />
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={styles.item}>
          <div className={styles.preview}>
            <img src="/images/faq.png" />
          </div>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h2>What Is the Solisq Token?</h2>
              <p>
                Explore and interact on Solisq AI freelance marketplace using
                the Solisq token (SLQ). The BNB-powered token will be your
                gateway to buying or selling freelance AI services on Solisq.
                Designed to cut through payment restrictions and dilemmas in
                countries where remote work payments are a problem.
              </p>
            </div>
            <div className={styles.line}>
              <a
                href="https://solisq.gitbook.io/solisq-documentation"
                rel="noreferrer"
                target="_blank"
                className={cn("button", styles.button)}
                style={{ marginRight: 20 }}
              >
                <span>Learn More</span>
              </a>
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=BNB&inputCurrency=0xe063a7d90732Db5B5BDFb92f6E17Fe805c655781"
                className={cn("button", styles.button)}
                style={{ marginRight: 20 }}
                rel="noreferrer"
                target="_blank"
              >
                <span>Buy $SLQ</span>
              </a>
            </div>
          </div>
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="fadeInDown">
        <div className={`${styles.item} ${styles.f_reverse}`}>
          <div className={styles.preview}>
            <img src="/images/about-pic-4.png" />
          </div>
          <div className={styles.wrap}>
            <div className={`content-n ${styles.content}`}>
              <h2>
                Ready to Transform Your Business with AI and Web3-Powered
                Freelancers?
              </h2>
            </div>
            <div className={styles.line}>
              <a
                href="https://t.me/solisqorg"
                className={cn("button", styles.button)}
                style={{ marginRight: 20 }}
                rel="noreferrer"
                target="_blank"
              >
                <span>Join Solisq Now</span>
              </a>
            </div>
            {/* <div className={styles.social}>
              {socialList.map((item, i) => (
                <a key={i} target="_blank" rel="noreferrer" href={item.slug}>
                  <button>{item.icon}</button>
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  </div>
);

export default AboutUs;
