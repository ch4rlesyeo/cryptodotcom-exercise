import { useState } from 'react';
import {
  PagerViewOnPageScrollEvent,
  PageScrollStateChangedNativeEvent,
} from 'react-native-pager-view';

import { IUsePagerViewEventsParams } from '@/types/utils/pager-view';

export const usePagerViewEvents = (params: IUsePagerViewEventsParams) => {
  const { currentPageIndex, onPageScroll } = params;

  const [isDragging, setIsDragging] = useState(false);

  const handlePageScrollStateChanged = (
    e: PageScrollStateChangedNativeEvent
  ) => {
    const scrollState = e.nativeEvent.pageScrollState;

    if (scrollState === 'dragging') {
      setIsDragging(true);
    } else if (scrollState === 'idle') {
      setIsDragging(false);
    }
  };

  const handlePageScroll = (e: PagerViewOnPageScrollEvent) => {
    const { position, offset } = e.nativeEvent;

    if (!isDragging) {
      return;
    }

    if (offset > 0.5 && position === currentPageIndex) {
      onPageScroll(position + 1);
    } else if (offset < 0.5 && position < currentPageIndex) {
      onPageScroll(position);
    }
  };

  return {
    handlePageScrollStateChanged,
    handlePageScroll,
  };
};
