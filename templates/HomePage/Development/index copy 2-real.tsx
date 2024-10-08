import { useRef } from "react";
// import SimpleBar from "simplebar-react";
import { useDraggable } from "react-use-draggable-scroll";
import cn from "classnames";
import styles from "./Development.module.sass";
import styles2 from "./Development.module.scss";
import Card from "@/components/Card";
import Image from "@/components/Image";
import Icon from "@/components/Icon";

import { development } from "@/mocks/development";

type DevelopmentProps = {};


const Development = ({}: DevelopmentProps) => {
    
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    return (
        <div className={cn("section", styles.section)}>
            
            <div className={cn("container-wide", styles.container)}>
                {/* <h2 className={cn("h2", styles.title)}>
                The Solisq Ecosystem.
                </h2> */}
            {/* <div className={styles2.inner_vince_ecosystem}>
                <div className={styles2.left}>
                    <h3>Discover DApps in Our Expanding Ecosystem</h3>
                    <p>Find the top dev tools, applications, services, NFTs, & programs powered by Vince Chain.</p>
                    <div className={styles.heroLink}>
                        <a className={cn("button", styles2.tHeroLink)} href="">View Ecosystem</a>
                    </div>
                </div>
                <div className={styles2.right}>
                    
                </div>
            </div> */}
                <div className={styles.list} {...events} ref={ref}>
                    {development.map((item, index) => (
                        <Card
                            className={styles.card}
                            url={item.url}
                            color={item.color}
                            key={index}
                            animateIn="fadeInDown"
                            delay={item.delay}
                        >
                            <div className={styles2.d_Img} style={{marginTop: 20, marginBottom: 30}}>
                                <img
                                    src={item.image}
                                    alt="Figure"
                                />
                            </div>
                            <div className={cn("h3", styles.subtitle)}>
                                {item.title}
                            </div>
                            <div className={styles.content}>{item.content}</div>
                            <div className={styles.foot}>
                                <div
                                    className={styles.more}
                                    style={{ color: "#FFFFFF" }}
                                >
                                    {item.label}
                                </div>
                                <Icon
                                    className={styles.arrow}
                                    name="arrow-right"
                                    size="26"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Development;
