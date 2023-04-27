import React, { useState } from 'react';
import styled from 'styled-components';



const VideoPlayer = styled.video`
  width: 100%;
`;

const ScheduleTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
`;

const ScheduleHeader = styled.th`
  text-align: left;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const ScheduleRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;

const ScheduleData = styled.td`
  text-align: left;
  padding: 10px;
`;

const SocialCard = styled.div`
  width: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
  bottom: 0;
  transition: left 0.3s ease-in-out;
  z-index: 999;
  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    transform: none;
  }
`;

const ToggleButton = styled.button`
  display: block;
  background: rgba(51, 51, 51, 0.2);
  color: #457;
  border: none;
  padding: 10px;
  font-size: 16px;
  text-align: left;
  cursor: pointer;
  width: 10%;
`;

function Tv() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <SocialCard isOpen={isOpen}>
        <ToggleButton onClick={toggleMenu}>Melo Tv</ToggleButton>
        <VideoPlayer
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          controls
        />
        <ScheduleTable>
          <thead>
            <tr>
              <ScheduleHeader>Time</ScheduleHeader>
              <ScheduleHeader>Show</ScheduleHeader>
            </tr>
          </thead>
          <tbody>
            <ScheduleRow>
              <ScheduleData>12:00 PM</ScheduleData>
              <ScheduleData>News</ScheduleData>
            </ScheduleRow>
            <ScheduleRow>
              <ScheduleData>01:00 PM</ScheduleData>
              <ScheduleData>Sports</ScheduleData>
            </ScheduleRow>
            <ScheduleRow>
              <ScheduleData>02:00 PM</ScheduleData>
              <ScheduleData>Movie</ScheduleData>
            </ScheduleRow>
          </tbody>
        </ScheduleTable>
      </SocialCard>
      <ToggleButton onClick={toggleMenu} style={{ position: 'fixed', top: '50%', left: '0', zIndex: 999}}>
        {isOpen ? 'Close Menu' : 'Open Menu'}
      </ToggleButton>
    </>
  );
}

export default Tv;
