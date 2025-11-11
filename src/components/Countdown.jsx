import { useState, useEffect } from 'react';

export function Countdown({ i18n, targetDate }) {
  const TARGET_DATE = new Date(targetDate);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isUnderway, setIsUnderway] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = TARGET_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        setIsUnderway(true);
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const labels = i18n?.countdownUnits || { day: 'Days', hour: 'Hrs', minute: 'Mins', second: 'Secs' };
  
  if (isUnderway) {
    return <p className="text-center font-bold text-lg text-green-400">{i18n?.underway || 'The ride is underway!'}</p>;
  }

  const { days, hours, minutes, seconds } = timeLeft;
  
  return (
    <div className="flex justify-around items-center text-center">
      <div><div className="font-bold text-2xl">{days}</div><div className="text-xs">{labels.day}</div></div>
      <div>:</div>
      <div><div className="font-bold text-2xl">{hours}</div><div className="text-xs">{labels.hour}</div></div>
      <div>:</div>
      <div><div className="font-bold text-2xl">{minutes}</div><div className="text-xs">{labels.minute}</div></div>
      <div>:</div>
      <div><div className="font-bold text-2xl">{seconds}</div><div className="text-xs">{labels.second}</div></div>
    </div>
  );
}