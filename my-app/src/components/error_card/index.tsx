import React from 'react';
import styled from 'styled-components';

import PngError from './network_error.png';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .placeholder {
    height: 80px;
  }
  > .error-message {
    margin-top: 15px;
    text-align: center;
    font-size: 14px;
    color: rgb(153, 153, 153);
  }
`;

/**
 * 错误卡片
 * @author mebtte<hi@mebtte.com>
 */
const ErrorCard = ({
  errorMessage,
  ...props
}: {
  /** 错误信息 */
  errorMessage: string;
  [key: string]: any;
}) => (
  <Style {...props}>
    <img className="placeholder" src={PngError} alt="error" />
    <div className="error-message">{errorMessage}</div>
  </Style>
);

export default ErrorCard;
