import React, { useMemo, useState, useRef, useEffect } from 'react';
import useMeasure from 'react-use-measure';
import { useWindowSize } from 'react-use';
import styled from '@emotion/styled';
import { Event, Key, Keys } from '../../constant';
import { useHandle } from '../../hooks';

const Wrap = styled.div`
  background: #fff;
  padding-top: 16px;
  margin-top: -16px;
`;

const Card = styled.div`
  border: 1px solid #e1e4e8;
  background: #f6f8fa;
  box-shadow: 0 1px 1px rgba(27, 31, 35, 0.1) !important;
`;

const Control = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

interface IEmbedWidgetProps {
  config: { [key: string]: any };
  sections: { [key: string]: any }[][];
}

function Slide({ config, sections }: IEmbedWidgetProps) {
  const [screenWidth, screenHeight] = useMemo(() => [window.screen.width, window.screen.height], []);

  const { width: windowWidth } = useWindowSize();

  const [measureRef, { left: containerLeft, width: containerWidth }]: any = useMeasure();

  const { width, height } = useMemo(() => {
    const width = ~~(Math.max(windowWidth - containerLeft - 32, containerWidth) - 2);
    return { width, height: (width * screenHeight) / screenWidth };
  }, [screenWidth, screenHeight, windowWidth, containerLeft, containerWidth]);

  const [fullScreen, setFullScreen] = useState(false);

  const ifrmProps: any = useMemo(
    () =>
      fullScreen
        ? {
            style: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              zIndex: 1000,
            },
          }
        : { width, height },
    [fullScreen, width, height],
  );

  const ifrmId = useMemo(() => Math.random().toString(36).substr(-6), []);
  const ifrmRef = useRef<HTMLIFrameElement>(null);
  const ifrmSrc = useMemo(
    () =>
      // @ts-ignore
      `${chrome.runtime.getURL('content_scripts/slide.html')}?fid=${ifrmId}&origin=${
        (location.href.match(/^.+:\/\/[^‌​/]+/) || [])[0]
      }`,
    [ifrmId],
  );

  const [slideInfo, setSlideInfo] = useState<any>(null);

  const [sendData, sendKey, executeMethod, ready] = useChannel(ifrmRef, (type: string, payload: any) => {
    switch (type) {
      case Event.KEYDOWN: {
        processKey(payload);
        break;
      }
      case Event.INFO: {
        setSlideInfo(payload);
        break;
      }
      default:
        break;
    }
  });

  useEffect(() => {
    sendData({ config, sections });
  }, [config, sections]);

  const handleExpandClick = () => {
    setFullScreen(true);
  };

  const processKey = useHandle((keyCode: number) => {
    switch (keyCode) {
      case Key.ESC: {
        if (fullScreen) {
          setFullScreen(false);
        }
        break;
      }
      default:
        break;
    }
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // @ts-ignore
      if (!event.srcElement.closest('textarea, input') && Keys.includes(event.keyCode)) {
        processKey(event.keyCode);
        sendKey(event.keyCode);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && ref.current.parentNode) {
      // @ts-ignore
      ref.current.parentNode.style.zIndex = fullScreen ? '1000' : '1';
      document.body.style.overflow = fullScreen ? 'hidden' : '';
    }
    if (!fullScreen) {
      executeMethod('toggleOverview', false);
    }
  }, [fullScreen]);

  return (
    <div ref={ref}>
      <Wrap ref={measureRef} style={{ zIndex: fullScreen ? 1000 : 1 }}>
        <Card style={{ width: width + 2 }}>
          <div style={{ width, height }}>
            <iframe id={ifrmId} ref={ifrmRef} src={ifrmSrc} frameBorder={0} {...ifrmProps} />
          </div>
          <Control>
            <button type="button" className="btn btn-sm" onClick={handleExpandClick}>
              Expand
            </button>
            {slideInfo && (
              <Info>
                {slideInfo.slidePastCount + 1} / {slideInfo.totalSlides}
              </Info>
            )}
          </Control>
        </Card>
      </Wrap>
    </div>
  );
}

export default Slide;

function useChannel(ifrmRef: any, userCallback?: Function) {
  const [ready, setReady] = useState(false);

  const messageQueue = useRef<any[]>([]);

  const postMessage = useHandle((type: string, payload: any) => {
    const stringmessage = JSON.stringify([type, payload]);
    const [origin] = ifrmRef.current.src.match(/^[a-zA-Z-]+:\/\/[^/]+/) || [];
    // @ts-ignore
    ifrmRef.current.contentWindow.postMessage(stringmessage, origin);
  });

  const flushUpdateQueue = useHandle(() => {
    if (ready) {
      while (messageQueue.current.length > 0) {
        const { type, payload } = messageQueue.current.shift();
        postMessage(type, payload);
      }
    }
  });

  useEffect(() => {
    if (ifrmRef.current) {
      const ifrmId = ifrmRef.current.getAttribute('id');
      const handleMessage = (event: MessageEvent) => {
        try {
          const [type, payload, fid] = JSON.parse(event.data);
          if (ifrmId === fid) {
            if (type === Event.READY) {
              setReady(true);
              flushUpdateQueue();
            } else {
              callback(type, payload);
            }
          }
        } catch {}
      };
      window.addEventListener('message', handleMessage);
      return () => {
        window.removeEventListener('message', handleMessage);
      };
    }
  }, []);

  const sendData = useHandle((payload: any = {}) => {
    messageQueue.current.push({ type: Event.DATA, payload });
    flushUpdateQueue();
  });

  const sendKey = useHandle((payload: any = {}) => {
    messageQueue.current.push({ type: Event.KEYDOWN, payload });
    flushUpdateQueue();
  });

  const executeMethod = useHandle((...args: any) => {
    messageQueue.current.push({ type: Event.METHOD, payload: args });
    flushUpdateQueue();
  });

  const callback = useHandle((type: string, payload: any) => {
    if (typeof userCallback === 'function') {
      userCallback(type, payload);
    }
  });

  return [sendData, sendKey, executeMethod, ready] as any;
}
