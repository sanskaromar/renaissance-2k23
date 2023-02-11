import { useState, useRef, useEffect } from "react";
//const [start, setStart] = useState(false);
function Counter({ last }) {
  const [count, setCount] = useState(null);
  const myref = useRef();
  const num = useRef(0);
  const t = last;
  const timer = 800 / t;
  const updatecount = () => {
    if (num.current < last) {
      const x = num.current + 1;
      num.current = x;
      if (num.current > last) return;
      setCount(x);
      setTimeout(updatecount, timer);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) updatecount();
    });
    observer.observe(myref.current);
    return;
  }, []);
  return <div ref={myref}>{count}+</div>;
}

export default Counter;
