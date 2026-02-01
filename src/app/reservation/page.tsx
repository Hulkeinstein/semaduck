'use client';

import Link from 'next/link';
import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  User,
  Calendar,
  Clock,
  Phone,
  Loader2,
  Home,
} from 'lucide-react';
import styles from './ReservationPage.module.css';
import { submitReservation } from '../actions/reservation';
import TimeWheelPicker from '../../components/ui/TimeWheelPicker';

// --- Mock Data ---

export default function ReservationPage() {
  const [step, setStep] = useState(1);
  const [isPending, startTransition] = useTransition();

  // Form State
  const [date, setDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState<string | null>(null);
  const [guests, setGuests] = useState(2);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Validation State
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  // Regex Patterns
  const NAME_REGEX = /^[가-힣]{2,5}$|^[a-zA-Z\s]{2,20}$/; // Korean 2-5 chars OR English 2-20
  const PHONE_REGEX = /^010-\d{4}-\d{4}$/;

  // Calendar Logic (Simplified for Demo)
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const days = [];
    const daysInMonth = getDaysInMonth(currentMonth);
    const startDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    ).getDay(); // 0 is Sunday

    // Padding for start of month
    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }

    // Days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  };

  const handleDayClick = (day: number) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    // Disable past dates
    if (newDate < new Date(today.setHours(0, 0, 0, 0))) return;
    setDate(newDate);
  };

  const isSelectedDate = (day: number) => {
    return (
      date?.getDate() === day &&
      date?.getMonth() === currentMonth.getMonth() &&
      date?.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return checkDate < new Date(today.setHours(0, 0, 0, 0));
  };

  // Auto-format Phone Number
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3)}`;
    } else if (raw.length > 7) {
      formatted = `${raw.slice(0, 3)}-${raw.slice(3, 7)}-${raw.slice(7, 11)}`;
    }
    setPhone(formatted);
    if (errors.phone) setErrors({ ...errors, phone: undefined }); // Clear error on type
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) setErrors({ ...errors, name: undefined });
  };

  const validateStep2 = () => {
    const newErrors: { name?: string; phone?: string } = {};

    if (!name.trim()) {
      newErrors.name = '이름을 입력해주세요.';
    } else if (!NAME_REGEX.test(name)) {
      newErrors.name = '올바른 이름을 입력해주세요 (한글 2~5자 또는 영문).';
    }

    if (!phone) {
      newErrors.phone = '전화번호를 입력해주세요.';
    } else if (!PHONE_REGEX.test(phone)) {
      newErrors.phone = '올바른 휴대전화 번호를 입력해주세요 (010-0000-0000).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 2) {
      if (!validateStep2()) return; // Stop if validation fails

      // Submit Mock Reservation
      startTransition(async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('date', date ? date.toLocaleDateString() : '');
        formData.append('time', time || '');
        formData.append('guests', guests.toString());

        const result = await submitReservation(formData);

        if (result.success) {
          setStep(3);
        }
      });
    } else {
      if (step < 3) setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  // Step Validation
  const isStep1Valid = date !== null && time !== null;
  const isStep2Valid = name.trim() !== '' && phone.trim() !== '';

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.headerWrapper}>
        <Link href="/" className={styles.homeLink}>
          <Home size={24} />
          <span className="sr-only">홈으로</span>
        </Link>
        <div className={styles.headerContent}>
          {' '}
          {/* Wrapper for centering title */}
          <span className={styles.subTitle}>Book Your Table</span>
          <h1 className={styles.mainTitle}>Reservation</h1>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className={styles.progressContainer}>
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`${styles.progressStep} ${step >= s ? styles.active : ''}`}
          >
            <div className={styles.stepNumber}>{s}</div>
            {/* Optional labels for larger screens could go here */}
          </div>
        ))}
      </div>

      {/* Content Card with AnimatePresence for transitioning steps */}
      <div className={styles.cardContainer}>
        <AnimatePresence mode="wait">
          {/* STEP 1: SCHEDULE */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className={styles.cardTitle}>언제 방문하시나요?</h2>

              <div className={styles.calendarWrapper}>
                <div className={styles.monthNav}>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.setMonth(currentMonth.getMonth() - 1)
                        )
                      )
                    }
                    className={styles.navBtn}
                  >
                    <ChevronLeft />
                  </button>
                  <span>
                    {currentMonth.getFullYear()}. {currentMonth.getMonth() + 1}
                  </span>
                  <button
                    onClick={() =>
                      setCurrentMonth(
                        new Date(
                          currentMonth.setMonth(currentMonth.getMonth() + 1)
                        )
                      )
                    }
                    className={styles.navBtn}
                  >
                    <ChevronRight />
                  </button>
                </div>

                <div className={styles.calendarGrid}>
                  {['일', '월', '화', '수', '목', '금', '토'].map((d) => (
                    <div key={d} className={styles.weekDay}>
                      {d}
                    </div>
                  ))}
                  {generateCalendarDays().map((day, idx) =>
                    day ? (
                      <button
                        key={idx}
                        className={`${styles.dayBtn} ${isSelectedDate(day) ? styles.selected : ''} ${day === today.getDate() && currentMonth.getMonth() === today.getMonth() ? styles.today : ''}`}
                        onClick={() => handleDayClick(day)}
                        disabled={isPastDate(day)}
                      >
                        {day}
                      </button>
                    ) : (
                      <div key={idx} />
                    )
                  )}
                </div>
              </div>

              <div className={styles.timeSection}>
                <span className={styles.sectionLabel}>시간 선택</span>
                <TimeWheelPicker
                  value={time}
                  onChange={(newTime) => setTime(newTime)}
                />
                <p
                  className={styles.helperText}
                  style={{ marginTop: '12px', textAlign: 'center' }}
                >
                  * 11:00 ~ 20:00 (10분 단위)
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 2: DETAILS */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className={styles.cardTitle}>상세 정보를 입력해주세요</h2>

              <div className={styles.guestControl}>
                <button
                  className={styles.countBtn}
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  -
                </button>
                <div className={styles.guestInputWrapper}>
                  <input
                    type="number"
                    className={styles.guestInput}
                    value={guests}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val))
                        setGuests(Math.min(100, Math.max(1, val)));
                    }}
                    min={1}
                    max={100}
                  />
                  <span className={styles.guestUnit}>명</span>
                </div>
                <button
                  className={styles.countBtn}
                  onClick={() => setGuests(Math.min(100, guests + 1))}
                >
                  +
                </button>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>예약자 성함</label>
                <div className={styles.inputWrapper}>
                  <User className={styles.inputIcon} size={20} />
                  <input
                    type="text"
                    className={`${styles.inputField} ${errors.name ? styles.errorInput : ''}`}
                    placeholder="홍길동"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                {errors.name && (
                  <p className={styles.errorMessage}>{errors.name}</p>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.inputLabel}>연락처 (휴대폰)</label>
                <div className={styles.inputWrapper}>
                  <Phone className={styles.inputIcon} size={20} />
                  <input
                    type="tel"
                    className={`${styles.inputField} ${errors.phone ? styles.errorInput : ''}`}
                    placeholder="010-1234-5678"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength={13}
                  />
                </div>
                {errors.phone && (
                  <p className={styles.errorMessage}>{errors.phone}</p>
                )}
              </div>

              <div
                className={styles.noticeBox}
                style={{
                  marginTop: '30px',
                  backgroundColor: '#f5f5f5',
                  color: '#666',
                }}
              >
                <p>
                  💡 예약 접수 후, 사장님이 보내드리는{' '}
                  <strong>문자/카톡에 답장을 주셔야</strong> 예약이 확정됩니다.
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CONFIRMATION */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.confirmIcon}>
                <Check size={32} />
              </div>
              <h2 className={styles.cardTitle}>예약 신청이 접수되었습니다!</h2>

              <div className={styles.ticket}>
                <div className={styles.ticketRow}>
                  <span className={styles.ticketLabel}>
                    <User size={16} /> 예약자
                  </span>
                  <span className={styles.ticketValue}>
                    {name} 님 ({guests}명)
                  </span>
                </div>
                <div className={styles.ticketRow}>
                  <span className={styles.ticketLabel}>
                    <Calendar size={16} /> 날짜
                  </span>
                  <span className={styles.ticketValue}>
                    {date?.toLocaleDateString('ko-KR', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                <div className={styles.ticketRow}>
                  <span className={styles.ticketLabel}>
                    <Clock size={16} /> 시간
                  </span>
                  <span className={styles.ticketValue}>{time}</span>
                </div>
                <div className={styles.ticketRow}>
                  <span className={styles.ticketLabel}>
                    <Phone size={16} /> 연락처
                  </span>
                  <span className={styles.ticketValue}>{phone}</span>
                </div>
              </div>

              <div className={styles.noticeBox}>
                <strong>[예약 확정 안내]</strong>
                <br />
                잠시 후 사장님이 <strong>확인 메시지</strong>를 보내드립니다.
                <br />꼭 <strong>&quot;네(예약확인)&quot;</strong>라고 답장을
                주셔야
                <br />
                최종 예약이 확정됩니다.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className={styles.navButtonContainer}>
          {step < 3 && (
            <button
              className={styles.backBtn}
              onClick={handleBack}
              style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
              disabled={isPending}
            >
              이전
            </button>
          )}

          {step < 3 ? (
            <button
              className={styles.nextBtn}
              onClick={handleNext}
              disabled={step === 1 ? !isStep1Valid : !isStep2Valid || isPending}
            >
              {isPending ? (
                <Loader2 className="animate-spin" />
              ) : step === 2 ? (
                '예약하기'
              ) : (
                '다음'
              )}
            </button>
          ) : (
            <button
              className={styles.nextBtn}
              onClick={() => (window.location.href = '/')}
              style={{ width: '100%' }}
            >
              홈으로 돌아가기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
