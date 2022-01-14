import React from 'react';

import { StyledWrapper } from './atm.infinite-scroll.styles';

type InfiniteScrollProps = {
  onBottomHit: () => void;
  hasMore: boolean;
  isLoading: boolean;
};

function isBottom(ref: React.RefObject<HTMLDivElement>) {
  if (!ref.current) {
    return false;
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

export const InfiniteScroll: React.FC<InfiniteScrollProps> = (props) => {
  const contentRef = React.useRef(null);

  const handleLoadMore = () => {
    if (!props.isLoading && isBottom(contentRef) && props.hasMore) {
      props.onBottomHit();
    }
  };

  // initial load
  React.useEffect(() => {
    handleLoadMore();
  }, [props]);

  // load more on scroll
  React.useEffect(() => {
    document.addEventListener('scroll', handleLoadMore);
    return () => document.removeEventListener('scroll', handleLoadMore);
  }, [props]);

  return <StyledWrapper ref={contentRef}>{props.children}</StyledWrapper>;
};
