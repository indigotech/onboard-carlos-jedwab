import React from 'react';

type InfiniteScrollProps = {
  onBottomHit: () => void;
  hasMore: boolean;
  isLoading: boolean;
  children: React.ReactNode;
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

  React.useEffect(() => {
    handleLoadMore();
    document.addEventListener('scroll', handleLoadMore);
    return () => document.removeEventListener('scroll', handleLoadMore);
  }, [props]);

  return <div ref={contentRef}>{props.children}</div>;
};
