import React, { useState } from "react";
import styled from "styled-components";
import Dialog, { DIALOG_TYPE } from "@/components/dialog";
import SubParasiteApp from "@/modules/parasite_loader";
import CloseIcon from "@/components/close_icon";

const ActPageOneStyle = styled.div``;
const InsideBox = styled.div`
  width: 450px;
  height: 600px;
  background: #f4d3d9;
  position: relative;
`;

const ActPageOne = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  return (
    <ActPageOneStyle>
      <button
        onClick={() => {
          setShowDialog(true);
        }}
      >
        testPage1
      </button>
      <Dialog type={DIALOG_TYPE.CENTER} improveLayer open={showDialog}>
        <InsideBox>
          <SubParasiteApp appName="testPage1" appPath="/test-page1" />
          <CloseIcon
            closeFn={() => {
              setShowDialog(false);
            }}
          ></CloseIcon>
        </InsideBox>
      </Dialog>
    </ActPageOneStyle>
  );
};

export default ActPageOne;
