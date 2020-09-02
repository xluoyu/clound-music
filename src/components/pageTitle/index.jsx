import React, { memo } from 'react';

const pageTitle = memo((props) => {
  console.log(props)
  return (
    <div>
      这是标题栏
    </div>
  );
});

export default pageTitle;