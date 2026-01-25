'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './MainChef.module.css';

const MainChef = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>

                {/* Text Column (Left on Desktop) */}
                <div className={styles.textColumn}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        The Artisan
                    </motion.span>

                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Master of Fire <br />
                        <span style={{ fontStyle: 'italic', fontWeight: 400 }}>& Charcoal</span>
                    </motion.h2>

                    <motion.div
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p>
                            참숯은 단순한 연료가 아닙니다. <br />
                            오리고기의 잡내를 없애고, 속까지 은은한 향을 입히는 <br />
                            가장 중요한 식재료입니다.
                        </p>
                        <br />
                        <p>
                            26년간 매일 아침 숯을 피우며 하루를 시작합니다. <br />
                            가장 적당한 온도, 가장 완벽한 타이밍에 고기를 올리는 것. <br />
                            그것이 세마오리농원이 지켜온 변하지 않는 약속입니다.
                        </p>
                    </motion.div>

                    {/* Optional Signature or Icon */}
                    {/* <div className={styles.signature}>Se-ma Duck Farm</div> */}
                </div>

                {/* Image Column (Right on Desktop) */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        {/* Placeholder or Reuse existing for now */}
                        <Image
                            src="/images/chef/charcoal.avif"
                            alt="Master of Fire - Charcoal"
                            fill
                            className={styles.chefImage}
                        />
                        {/* TODO: Replace with actual Cooking/Fire image */}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default MainChef;
