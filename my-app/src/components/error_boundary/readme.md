```jsx
import { useState } from 'react';

const fallback = (error) => (
  <div>
    <div>渲染发生错误</div>
    <div>错误信息: {error.message}</div>
  </div>
);

const Demo = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('throw error by click button');
  }
  return (
    <button type="button" onClick={() => setThrowError(true)}>
      throw error
    </button>
  );
};

<ErrorBoundary fallback={fallback}>
  <Demo />
</ErrorBoundary>;
```
