import React, { useState } from "react";
import styled from "styled-components";
import Dialog, { DIALOG_TYPE } from "@/components/dialog";
import SubParasiteApp from "@/modules/parasite_loader";
import CloseIcon from "@/components/close_icon";

const InsideBox = styled.div`
  width: 450px;
  height: 600px;
  background: #000;
  position: relative;
`;

const ActPageTwo = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setShowDialog(true);
        }}
      >
        testPage2
      </button>
      <Dialog type={DIALOG_TYPE.CENTER} improveLayer open={showDialog}>
        <InsideBox>
          <SubParasiteApp appName="testPage2" appPath="/test-page2" />
          <CloseIcon
            closeFn={() => {
              setShowDialog(false);
            }}
          ></CloseIcon>
        </InsideBox>
      </Dialog>
    </div>
  );
};

export default ActPageTwo;
