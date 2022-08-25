import React from 'react';
import ScrollReveal from "scrollreveal";

export function useScrollReveal() {
  React.useEffect(() => {
    const reveal = ScrollReveal({
      origin: "top",
      distance: "20px",
      duration: 1000,
      reset: false,
    });

    reveal.reveal(".reveal", { delay: 300, interval: 200 });
  }, []);
}
