import { useState, useEffect } from "react";

const useActiveSection = (ids: string[], offset = 100): string => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Near the bottom → last section is active
      if (scrollY + windowHeight >= docHeight - 50) {
        setActive(ids[ids.length - 1]);
        return;
      }

      // Last section whose top crossed the offset threshold
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids, offset]);

  return active;
};

export default useActiveSection;
