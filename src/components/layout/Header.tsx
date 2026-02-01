'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import styles from './Header.module.css';
import { Menu, X } from 'lucide-react';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { name: 'HOME', href: '/' },
  { name: '브랜드 스토리', href: '/story' },
  { name: '메뉴 소개', href: '/menu' },
  { name: '공간 안내', href: '/space' },
  { name: '소식 & 후기', href: '/reviews' },
  { name: '오시는 길', href: '/location' },
];

export default function Header() {
  const pathname = usePathname();
  const isMain = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showGreenLogo, setShowGreenLogo] = useState(false);
  const { scrollY } = useScroll();

  // 접근성: refs for focus management
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Glassmorphism effect logic
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Green Logo Logic: "Taste of Nature" and below
    const targetSection = document.getElementById('section-taste-of-nature');
    if (targetSection) {
      // Check if we have scrolled past the start of the section (minus some offset for header)
      const sectionTop = targetSection.offsetTop;
      // Trigger slightly before the section hits the top (e.g., when it enters the viewport substantially)
      // Or strictly when the header overlaps it. Let's say when the section is close to the top.
      // Adjust togglePoint as needed. 100px ensures it switches as the user enters the section context.
      if (latest >= sectionTop - 100) {
        setShowGreenLogo(true);
      } else {
        setShowGreenLogo(false);
      }
    }
  });

  // 접근성: ESC 키로 메뉴 닫기
  const handleEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus(); // 토글 버튼으로 포커스 복귀
      }
    },
    [isMobileMenuOpen]
  );

  // Lock body scroll when mobile menu is open + ESC key handler + focus management
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // 메뉴 열릴 때 첫 번째 링크로 포커스 이동 (약간의 지연 필요)
      setTimeout(() => {
        firstLinkRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    // ESC 키 이벤트 리스너
    window.addEventListener('keydown', handleEscapeKey);
    return () => window.removeEventListener('keydown', handleEscapeKey);
  }, [isMobileMenuOpen, handleEscapeKey]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1] as const,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 },
  };

  // Helper to determine active logo
  const getLogoSrc = () => {
    if (isMobileMenuOpen) return '/logo-up.png'; // Always colored on menu

    // Subpages Logic
    if (!isMain) {
      if (isScrolled) return '/logo-up.png';
      return '/logo-green-up.png';
    }

    // Home Page Logic
    if (showGreenLogo) return '/logo-green-up.png'; // Green from Taste of Nature onwards
    if (isScrolled) return '/logo-up.png'; // Default colored when scrolled (before green section)
    return '/logo-white-up.png'; // Transparent header only on Main top
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src={getLogoSrc()}
              alt="Sema Duck Logo"
              width={240}
              height={80}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/reservation" className={styles.ctaButton}>
            예약하기
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          ref={toggleButtonRef}
          className={styles.mobileToggle}
          onClick={toggleMenu}
          aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X size={28} color="var(--sema-forest-green)" />
          ) : (
            <Menu size={28} color="var(--sema-forest-green)" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="모바일 메뉴"
            className={styles.mobileOverlay}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav aria-label="모바일 내비게이션">
              <ul className={styles.mobileNavList}>
                {navItems.map((item, index) => (
                  <motion.li key={item.name} variants={itemVariants}>
                    <Link
                      ref={index === 0 ? firstLinkRef : null}
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.div variants={itemVariants}>
              <Link
                href="/reservation"
                className={`${styles.ctaButton} ${styles.mobileCta}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                지금 예약하기
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
