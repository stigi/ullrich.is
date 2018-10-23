import React from "react";

import styled from "styled-components";

const Speak = styled.div`
  transform: rotate(3deg);
`;

const Shadow = styled.div`
  padding: 0px 3px 3px 1px;

  background: rgb(220, 220, 220); /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    rgb(220, 220, 220),
    rgb(20, 20, 20)
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    rgb(220, 220, 220),
    rgb(20, 20, 20)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  clip-path: url(#clip);
  -webkit-clip-path: url(#clip);
  -moz-clip-path: url(#clip);
`;

const Bubble = styled.div`
  padding: 15px 15px 30px 15px; /* Accomodating for the clip path */
  transform: rotate(0.5deg);

  background: #7491b6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom left, #4006ec, #e73758);
  background: linear-gradient(to bottom left, #4006ec, #e73758);

  clip-path: url(#clip);
  -webkit-clip-path: url(#clip);
  -moz-clip-path: url(#clip);
`;

const Paragraph = styled.p`
  transform: rotate(-1deg);
  font-family: "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif;
  font-size: 1.5rem;
  color: white;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export default () => {
  return (
    <div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <polygon points="0.03 0.03, 0.97 0, 1 0.75, 0.50 0.75, 0.20 1, 0.25 0.75, 0 0.75" />
          </clipPath>
        </defs>
      </svg>
      <Speak>
        <Shadow>
          <Bubble>
            <Paragraph>
              <i>Aloha</i>, I'm Ullrich. ✌️
            </Paragraph>
          </Bubble>
        </Shadow>
      </Speak>
    </div>
  );
};
