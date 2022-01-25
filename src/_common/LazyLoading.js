import React, { Suspense } from 'react';

export default function LazyLoading(Component) {
  return (props) => (
    <Suspense fallback={<></>}>
      <Component {...props} />
    </Suspense>
  );
}