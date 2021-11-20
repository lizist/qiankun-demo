```jsx
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

const bodyStyle = {
  width: 350,
};
const Content = styled.div`
  height: 1200px;
  background-color: #fff;
`;

const DialogDemo = () => {
  const [open, setOpen] = useState(false);
  const onOpen = useCallback(() => setOpen(true), []);
  const onClose = useCallback(() => setOpen(false), []);
  const [openCenter, setOpenCenter] = useState(false);
  const onOpenCenter = useCallback(() => setOpenCenter(true), []);
  const onCloseCenter = useCallback(() => setOpenCenter(false), []);

  return (
    <>
      <button type="button" onClick={onOpen}>
        open1
      </button>
      <Dialog open={open} bodyStyle={bodyStyle}>
        <Content>
          <p>type: DIALOG_TYPE.DEFAULT</p>
          <button type="button" onClick={onClose}>
            close
          </button>
        </Content>
      </Dialog>
      <button type="button" onClick={onOpen}>
        open2
      </button>
      <Dialog open={openCenter} type="center" bodyStyle={bodyStyle}>
        <Content>
          <p>type: DIALOG_TYPE.CENTER</p>
          <button type="button" onClick={onCloseCenter}>
            close
          </button>
        </Content>
      </Dialog>
    </>
  );
};

<DialogDemo />;
```
