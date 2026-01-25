'use client';

import { motion } from 'framer-motion';
import styles from './Story.module.css';

export default function Story() {
    return (
        <section className={styles.story}>
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
                >
                    <p className={styles.label}>OUR STORY</p>
                    <h2 className={styles.heading}>
                        시간이 멈춘 듯한 공간에서, <br />
                        진정한 쉼을 마주합니다.
                    </h2>
                    <div className={styles.description}>
                        <p>
                            세마오리농원은 단순한 식당 그 이상을 지향합니다.
                            자연의 순수함과 가족의 따뜻한 정이 머무는 이곳에서,
                            우리는 매일 아침 가장 신선한 재료로 당신을 위한 정성을 준비합니다.
                        </p>
                    </div>
                    <span className={styles.handwritten}>
                        가장 귀한 분을 모시는 마음으로.
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
