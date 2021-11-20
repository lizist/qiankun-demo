import React from 'react';
import styled, { css } from 'styled-components';
import Load from './load';

const Style = styled.div.attrs<{ size: number }>(({ size }) => ({
  style: {
    width: size,
    height: size,
  },
}))<{ size: number }>`
  display: inline-block;
  vertical-align: middle;
  line-height: 0;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Svg = styled.svg.attrs<{ size: number }>(({ size }) => ({
  width: size,
  height: size,
  viewBox: '0 0 100 100',
}))<{ size: number }>`
  user-select: none;
  vertical-align: middle;
  > circle {
    stroke: ${({ color }) => color};
  }
  ${({ theme }) => css`
    color: ${theme.darkTheme ? '#fff' : '#333'};
  `}
`;

/**
 * 圆形加载器
 * @author mebtte<hi@mebtte.com>
 */

const CircularLoader = ({
  size = 24,
  color = '#20BEF3',
  ...props
}: {
  /** 尺寸, 单位px */
  size?: number;
  /** 颜色  */
  color?: string;
  [key: string]: any;
}) => (
  <Style size={size} {...props}>
    <Svg size={size} color={color}>
      <Load />
    </Svg>
    {/* <img src={loadingImg} alt="" width={size} height={size} /> */}
  </Style>
);

export default CircularLoader;
