/* eslint-disable react/jsx-indent */
import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";

export enum DIALOG_TYPE {
  DEFAULT = "default",
  CENTER = "center",
}

export enum DIALOG_STYLE_TYPE {
  NORMAL = "normal",
  VOTE = "vote",
}

const Mask = styled.div<{ type: DIALOG_TYPE }>`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  ${({ type }) =>
    type === DIALOG_TYPE.CENTER
      ? css`
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        `
      : null}
  .cp_dialog_bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
const Body = styled.div<{ type: DIALOG_TYPE }>`
  position: relative;
  transform-origin: bottom;
  ${({ type }) => css`
    margin: ${type === DIALOG_TYPE.DEFAULT && "200px auto"};
  `}
`;
//
/**
 * 弹窗
 * @author mebtte<hi@mebtte.com>
 */
const Dialog = ({
  open,
  type = DIALOG_TYPE.DEFAULT,
  bodyClassName = "",
  children,
  currentElement,
  ...props
}: {
  /** 是否打开 */
  open: boolean;
  /** 弹框类型 */
  type?: DIALOG_TYPE;
  /** 内容容器类名 */
  bodyClassName?: string;
  children: React.ReactNode;
  currentElement?: Element;
  [key: string]: any;
}) =>
  open
    ? ReactDOM.createPortal(
        <Mask type={type} {...props}>
          <div className="cp_dialog_bar" />
          <Body className={bodyClassName} type={type}>
            {children}
          </Body>
        </Mask>,
        currentElement || document.body
      )
    : null;

export default Dialog;
