import * as React from "react";
import styled from "styled-components";

const CloseIconStyle = styled.div`
  height: 40px;
  padding: 0 10px;
  text-align: center;
  line-height: 40px;
  background: rgb(29, 155, 240);
  position: absolute;
  left: 50%;
  bottom: -80px;
  transform: translateX(-50%);
  color: #fff;
  border-radius: 20px;
`;

const CloseIcon = ({ closeFn }) => {
  return <CloseIconStyle onClick={closeFn}>close</CloseIconStyle>;
};

export default CloseIcon;
