'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './IngredientsSection.module.css';

export default function IngredientsSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <motion.span
                        className={styles.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Fresh & Local
                    </motion.span>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        Nature's Gift
                    </motion.h2>
                    <motion.p
                        className={styles.description}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        세마오리농원의 모든 오리는 매일 아침 농장에서 직송된<br />
                        가장 신선한 '유황생오리'만을 고집합니다.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {/* Item 1: Fresh Base */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/ingredients/04.jpg"
                                alt="Fresh Duck Ingredients"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>매일 아침, 자연의 시간</h3>
                            <p className={styles.cardDesc}>
                                당일 도축된 신선함 그대로.<br />
                                얼리지 않은 생오리만이 가진<br />
                                쫄깃한 육질과 고소함을 약속합니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2: Preparation */}
                    <motion.div
                        className={styles.card}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/ingredients/03.jpg"
                                alt="Preparation Process"
                                fill
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <h3 className={styles.cardTitle}>정직한 손길, 건강한 약속</h3>
                            <p className={styles.cardDesc}>
                                직접 재배한 로컬 채소와<br />
                                26년의 노하우가 담긴 손질로<br />
                                가장 완벽한 한 상을 준비합니다.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
