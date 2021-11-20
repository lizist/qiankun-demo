/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-param-reassign */
import styled from 'styled-components';

let px2rem = (px) => px;
const pxRe = /-?\d*[.\d]*px/g;
const base64Re = /^data:\w+\/[a-zA-Z+\-.]+;base64,/i;
const setPx2rem = (pxFunc) => {
  px2rem = pxFunc;
};

const convertStringPx2vw = (style) => {
  if (!style) return style;
  if (
    !base64Re.test(style) && // 非base64字符串
    pxRe.test(style) // 包含px单位
  ) {
    return style.replace(pxRe, (value) => px2rem(value.replace('px', '')));
  }

  return style;
};

const isKeyframes = (interpolation) =>
  Object.prototype.toString.call(interpolation) === '[object Object]' &&
  interpolation.constructor.name === 'Keyframes';

const convertKeyframesPx2vw = (keyframes) => {
  keyframes.stringifyArgs = keyframes.stringifyArgs.map(convertStringPx2vw);

  return keyframes;
};

const convertInterpolationPx2vw = (interpolation) => {
  if (typeof interpolation === 'string') {
    return convertStringPx2vw(interpolation);
  }

  if (isKeyframes(interpolation)) {
    return convertKeyframesPx2vw(interpolation);
  }

  if (Array.isArray(interpolation)) {
    return interpolation.map(convertInterpolationPx2vw);
  }

  if (typeof interpolation === 'function') {
    return (props) => convertInterpolationPx2vw(interpolation(props));
  }

  return interpolation;
};

const withCss = (styled) => {
  const interleave = (strings, ...interpolations) => {
    strings = strings.map(convertStringPx2vw);

    interpolations = interpolations.map(convertInterpolationPx2vw);

    return styled(strings, ...interpolations);
  };

  Object.keys(styled).forEach(
    (prop) => (interleave[prop] = withTemplateFunc(styled[prop])),
  );

  return interleave;
};

const withTemplateFunc =
  (styled) =>
  (...props) =>
    withCss(styled(...props));

const styledPx2vw = ((styled) => {
  const obj = withTemplateFunc(styled);
  Object.keys(styled).forEach((key) => {
    obj[key] = withCss(styled[key]);

    Object.keys(styled[key]).forEach(
      (prop) => (obj[key][prop] = withTemplateFunc(styled[key][prop])),
    );
  });

  return obj;
})(styled);
export default styledPx2vw;
export { setPx2rem };
export * from 'styled-components';
