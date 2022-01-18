import { css } from 'styled-components';

export const theme = {
  mainColor: '#3366ff',
  fontColor: '#333333',
  borderColor: '#d1d11d',
  bgColor: '#ffffff',

  flexcenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  positionbasic: css`
    position: relative;
    top: 0;
    left: 0;
  `,

  positionchildrenbasic: css`
    position: absolute;
    top: 0;
    left: 0;
  `,

  positioncenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};
