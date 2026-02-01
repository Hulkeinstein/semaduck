'use client';

import { useRef, useEffect, useCallback, useMemo } from 'react';
import styles from './TimeWheelPicker.module.css';

interface TimeWheelPickerProps {
  value: string | null;
  onChange: (time: string) => void;
}

const HOURS = Array.from({ length: 10 }, (_, i) => 11 + i); // 11 ~ 20
const MINUTES = ['00', '10', '20', '30', '40', '50'];
const ITEM_HEIGHT = 40;

// Parse value into hour and minute
function parseTime(value: string | null): { hour: number; minute: string } {
  if (value) {
    const [h, m] = value.split(':');
    return { hour: parseInt(h) || 11, minute: m || '00' };
  }
  return { hour: 11, minute: '00' };
}

export default function TimeWheelPicker({
  value,
  onChange,
}: TimeWheelPickerProps) {
  // Derive state from value prop
  const { hour: selectedHour, minute: selectedMinute } = useMemo(
    () => parseTime(value),
    [value]
  );

  const hourRef = useRef<HTMLDivElement>(null);
  const minuteRef = useRef<HTMLDivElement>(null);

  // Handle hour change
  const handleHourChange = useCallback(
    (h: number) => {
      // Validation: Max time is 20:00
      const minute = h === 20 ? '00' : selectedMinute;
      onChange(`${h.toString().padStart(2, '0')}:${minute}`);
    },
    [selectedMinute, onChange]
  );

  // Handle minute change
  const handleMinuteChange = useCallback(
    (m: string) => {
      // Validation: Max time is 20:00
      if (selectedHour === 20 && m !== '00') return;
      onChange(`${selectedHour.toString().padStart(2, '0')}:${m}`);
    },
    [selectedHour, onChange]
  );

  // Scroll to selected positions whenever they change
  useEffect(() => {
    if (hourRef.current) {
      const index = HOURS.indexOf(selectedHour);
      if (index !== -1) {
        hourRef.current.scrollTo({
          top: index * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedHour]);

  useEffect(() => {
    if (minuteRef.current) {
      const index = MINUTES.indexOf(selectedMinute);
      if (index !== -1) {
        minuteRef.current.scrollTo({
          top: index * ITEM_HEIGHT,
          behavior: 'smooth',
        });
      }
    }
  }, [selectedMinute]);

  return (
    <div className={styles.wheelContainer}>
      <div className={styles.highlightBar} />

      {/* Hours Column */}
      <div className={styles.column} ref={hourRef}>
        <div className={styles.scrollContainer}>
          {/* Paddle padding */}
          <div className={styles.spacer} />
          {HOURS.map((h) => (
            <button
              key={h}
              className={`${styles.item} ${selectedHour === h ? styles.selected : ''}`}
              onClick={() => handleHourChange(h)}
            >
              {h}
            </button>
          ))}
          <div className={styles.spacer} />
        </div>
      </div>

      <div className={styles.colon}>:</div>

      {/* Minutes Column */}
      <div className={styles.column} ref={minuteRef}>
        <div className={styles.scrollContainer}>
          <div className={styles.spacer} />
          {MINUTES.map((m) => (
            <button
              key={m}
              className={`${styles.item} ${selectedMinute === m ? styles.selected : ''}`}
              onClick={() => handleMinuteChange(m)}
              disabled={selectedHour === 20 && m !== '00'}
              style={{ opacity: selectedHour === 20 && m !== '00' ? 0.3 : 1 }}
            >
              {m}
            </button>
          ))}
          <div className={styles.spacer} />
        </div>
      </div>
    </div>
  );
}
