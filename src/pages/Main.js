import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Text from './components/Text';
import { SLIDE_DATA } from './SlideData';

export default function Main() {
  const [clicked, setClicked] = useState(false);
  const [goNext, setGoNext] = useState(false);
  const [goPrev, setGoPrev] = useState(false);
  const [pageId, setPageId] = useState(0);

  const movePage = id => {
    if (clicked && goNext) {
      return `calc(10% + (-78% * ${id}))`;
    } else if (clicked && goPrev) {
      return `calc(10% + (78% * ${id}))`;
    }
  };

  console.log(`pagdId : ${pageId}`);
  console.log(`clicked : ${clicked}`);
  console.log(`goNext : ${goNext}`);
  console.log(`goPrev : ${goPrev}`);
  return (
    <Container>
      <SlideWrapper pageId={pageId} movePage={movePage} clicked={clicked}>
        {SLIDE_DATA.map(data => (
          <Slide key={data.id} imageUrl={data.imageUrl}>
            <Text data={data} />
          </Slide>
        ))}
      </SlideWrapper>
      <PrevButton
        onClick={() => {
          setClicked(true);
          setGoPrev(true);
          setPageId(prev => (prev === 0 ? 6 : prev - 1));
        }}
      >
        &lt;
      </PrevButton>
      <NextButton
        onClick={() => {
          setClicked(true);
          setGoNext(true);
          setPageId(prev => (prev === 6 ? 0 : prev + 1));
        }}
      >
        &gt;
      </NextButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const SlideWrapper = styled.div`
  display: flex;
  width: 7560px;
  height: 300px;
  margin-left: ${props => props.movePage(props.pageId)};
`;

const Slide = styled.div`
  position: relative;
  margin: 20px 10px 0;
  width: 1060px;
  height: 280px;
  background: ${props => `url(${props.imageUrl}) no-repeat 100% 100%/cover`};
  border-radius: 5px;

  &::after {
    content: '';
    ${({ theme }) => theme.positionchildrenbasic};
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const PrevButton = styled.button`
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.4);
  color: #777;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 2;
`;

const NextButton = styled.button`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 30px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.4);
  color: #777;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  z-index: 2;
`;
