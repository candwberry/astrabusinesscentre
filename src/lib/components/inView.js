

export function inView(
  node,
  { once = true, rootMargin = '0px', threshold = 0 } = {}
) {
  // SSR or very old browsers – reveal instantly
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    // run in micro-task so event listeners are already wired
    queueMicrotask(() => node.dispatchEvent(new CustomEvent('enter')));
    return {};
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.dispatchEvent(new CustomEvent('enter'));
        if (once) observer.unobserve(node);
      }
    },
    { rootMargin, threshold }
  );

  observer.observe(node);

  // 👇 Return a destroy method instead of onDestroy()
  return {
    destroy() {
      observer.disconnect();
    }
  };
}
