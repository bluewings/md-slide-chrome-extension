import React, { useCallback, useMemo, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalId = `portal-${Math.random().toString(36).substr(-6)}`;

function usePortal(selector: string, modifier: (elem: Element) => Element) {
  const [container, setContainer] = useState(document.querySelector(selector));

  useEffect(() => {
    if (!container) {
      const interval = setInterval(() => {
        const found = document.querySelector(selector);
        if (found) {
          setContainer(found);
        }
      }, 100);
      return () => {
        clearInterval(interval);
      };
    }
  }, [container, selector]);

  const portal = useMemo(() => {
    if (container) {
      const oldTarget = document.getElementById(portalId);
      if (oldTarget) {
        oldTarget.parentNode?.removeChild(oldTarget);
      }
      const newTarget = modifier(container);
      newTarget.setAttribute('id', portalId);
      return newTarget;
    }
    return null;
  }, [container]);

  return useCallback<React.FC>(({ children }) => (portal ? ReactDOM.createPortal(children, portal) : null), [portal]);
}

export default usePortal;
