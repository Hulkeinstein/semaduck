'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './MainIntro.module.css';

const MainIntro = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [150, -150]);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={styles.gridContainer}>

                {/* Left Guardian (Image) */}
                <motion.div style={{ y: yLeft }} className={styles.sideImageWrapper}>
                    <Image
                        src="/images/hero/main-hero-2.webp"
                        alt="Nature Left"
                        fill
                        className={styles.sideImage}
                    />
                </motion.div>

                {/* Center Content */}
                <div className={styles.centerContent}>
                    {/* Signature Rotated Label */}
                    <span className={styles.label}>
                        Heritage of Taste
                    </span>

                    {/* Main Title */}
                    <h1 className={styles.title}>
                        Since 1998
                    </h1>

                    {/* Center Image (CEO) */}
                    <div className={styles.divider}>
                        <div className={styles.duckImageWrapper}>
                            <Image
                                src="/assets/images/ceo-s.png"
                                alt="CEO Duck"
                                width={220}
                                height={300}
                                className={styles.duckImage}
                            />
                        </div>
                    </div>

                    {/* Body Text */}
                    <article className={styles.body}>
                        <p className={styles.paragraph}>
                            자연이 내어준 가장 정직한 맛을 담았습니다.<br />
                            세마오리농원은 26년의 시간 동안 변함없는 마음으로<br />
                            불과 고기, 그리고 사람을 잇습니다.
                        </p>
                        <p className={styles.subParagraph}>
                            깊은 산속 맑은 공기와 함께 피어오르는 참숯의 향기.<br />
                            그 안에서 완성되는 진정한 미식의 경험을 선사합니다.
                        </p>
                    </article>
                </div>

                {/* Right Guardian (Image) */}
                <motion.div style={{ y: yRight }} className={styles.sideImageWrapper}>
                    <div className={styles.rightImageInner}>
                        <Image
                            src="/images/hero/main-hero-2.webp"
                            alt="Nature Right"
                            fill
                            className={styles.sideImage}
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default MainIntro;
