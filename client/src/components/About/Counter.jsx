import { useState, useRef, useEffect } from "react";
//const [start, setStart] = useState(false);
function Counter({ last }) {
  const [count, setCount] = useState(null);
  const myref = useRef();
  let pageload = 0;
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
    const observer = new IntersectionObserver(() => {
      pageload++;
      if (pageload > 1) updatecount();
    });
    observer.observe(myref.current);
    return;
  }, []);
  return <div ref={myref}>{count}+</div>;
}

export default Counter;
