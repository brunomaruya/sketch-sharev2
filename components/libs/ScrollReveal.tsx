'use client';
import React, { useEffect, useRef } from 'react';
import scrollReveal from 'scrollreveal';

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 200,
      });
  }, []);

  return (
    <section ref={sectionRef} className=" scroll-section">
      {children}
    </section>
  );
}
