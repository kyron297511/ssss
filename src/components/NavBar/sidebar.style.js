import styled from 'styled-components'

export const S = {}

S.SideMenu = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: #2a2c31;
  transform: ${({ open }) => (!open ? 'translateX(-350px)' : 'translateX(0)')};
  margin-bottom: 2000px;
  overflow-y: auto;
  gap: 1em;
  z-index: 5;
  transition: transform 500ms ease;
`

S.CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #4a4b51;
  border-radius: 20px;
  width: 110px;
  padding: 0.8em 0;
  margin: 2em 0 0 1em;
  line-height: 12px;
  color: #fff;
  font-weight: 500;
  gap: 0.3em;
`
S.DonateBtn = styled.button`
  line-height: 36px;
  border-radius: 20px;
  /* width: 100%; */
  margin-inline: 1em;
  font-size: 13px;
  font-weight: 500;
  padding: 0 1rem;
  color: #000;
  background-color: #00ffb7;
`
S.CommunityBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  line-height: 36px;
  border-radius: 20px;
  margin-inline: 1em;
  font-size: 13px;
  font-weight: 500;
  padding: 0 1rem;
  color: #fff;
  background-color: #222327;
`
S.NavList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-bottom: 1em;
`
S.Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  position: relative;
  padding: 1em 1em;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`

S.GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
`
S.GenreItem = styled.p`
  padding: 6px 15px;
  width: 49%;
  margin-right: 1%;
`