'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function GlobalEffects() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pathname = usePathname();

  // Cursor (mount once)
  useEffect(() => {
    const cur = cursorRef.current;
    const ring = ringRef.current;
    if (!cur || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0, raf;
    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      cur.style.left = mx + 'px';
      cur.style.top = my + 'px';
    };
    const anim = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + 'px';
      ring.style.top = ry + 'px';
      raf = requestAnimationFrame(anim);
    };
    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(anim);
    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Re-attach hover + tilt + reveal on each route change (interior pages have different elements)
  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    const hoverSel = 'a,button,.tpill,.csvc,.pcard,.mcard,.tcard,.bcard,.hub-card,.related-card';
    const enter = () => {
      ring.style.transform = 'translate(-50%,-50%) scale(1.7)';
      ring.style.borderColor = 'rgba(9,168,130,0.75)';
    };
    const leave = () => {
      ring.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.borderColor = 'rgba(9,168,130,0.45)';
    };
    const hoverEls = Array.from(document.querySelectorAll(hoverSel));
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    const tiltEls = Array.from(
      document.querySelectorAll('.hcard, .hstat, .csvc, .pstep, .pcard, .mcard, .tcard, .bcard, .apoint, .hub-card')
    );
    const tiltHandlers = [];
    tiltEls.forEach((el) => {
      const move = (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rX = ((y - cy) / cy) * -10;
        const rY = ((x - cx) / cx) * 10;
        el.style.transition = 'transform 0.1s ease-out';
        el.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;
      };
      const out = () => {
        el.style.transition = 'transform 0.5s var(--ease)';
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };
      el.addEventListener('mousemove', move);
      el.addEventListener('mouseleave', out);
      tiltHandlers.push([el, move, out]);
    });

    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('on');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.rv,.rl,.rr').forEach((el) => revealObs.observe(el));

    return () => {
      hoverEls.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      tiltHandlers.forEach(([el, move, out]) => {
        el.removeEventListener('mousemove', move);
        el.removeEventListener('mouseleave', out);
      });
      revealObs.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div id="cur" ref={cursorRef}></div>
      <div id="ring" ref={ringRef}></div>
    </>
  );
}
