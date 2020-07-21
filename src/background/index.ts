import axios from 'axios';
import setupLiveReload from './live-reload';
import { AXIOS } from '../constants';

// @ts-ignore
chrome.runtime.onMessage.addListener(function (request: any, sender: any, sendResponse: any) {
  const { type, payload } = request;
  if (type === AXIOS && payload?.method && payload?.url) {
    axios(payload).then(sendResponse);
    return true;
  }
});

setupLiveReload();
