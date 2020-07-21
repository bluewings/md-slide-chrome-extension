import { useEffect, useState } from 'react';
import { Event, Key } from '../../constant';
import { postMessage } from '../../helpers/util';
import { useHandle } from '../../hooks';

let readyOnce = () => {
  postMessage(Event.READY, true);
  readyOnce = () => {};
};

function useChannel({ onKeyDown, revealjs }: any) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (Key.ESC === event.keyCode) {
        postMessage(Event.KEYDOWN, event.keyCode);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDeliveredKeyDown = useHandle(onKeyDown);
  const [data, setData] = useState<any>({});
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const [type, payload] = JSON.parse(event.data);
      if (type === Event.DATA) {
        const prevItems = (data?.sections || []).reduce((acc: any, e: any) => acc.concat(e), []);
        const currItems = (payload?.sections || []).reduce((acc: any, e: any) => acc.concat(e), []);
        const changedSlide = currItems.find((curr: any, i: number) => {
          const prev: any = prevItems[i] || {};
          return (
            !prev || `${prev.hash}_${prev.index_h}_${prev.index_v}` !== `${curr.hash}_${curr.index_h}_${curr.index_v}`
          );
        });
        setData({ ...payload, changedSlide });
      } else if (type === Event.KEYDOWN) {
        handleDeliveredKeyDown(payload);
      } else if (type === Event.METHOD) {
        const [method, ...params] = payload;
        if (revealjs.current && typeof revealjs.current[method] === 'function') {
          revealjs.current[method](...params);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    readyOnce();
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [data, setData]);

  const sendInfo = useHandle((info: any) => postMessage(Event.INFO, info));

  return [data, { sendInfo }];
}

export default useChannel;
