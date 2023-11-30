import styled from "styled-components";

export const Background = () => {
    return <>
        <PurpleLight/>
        <RedLight/>
        <PurpleBall/>
        <RedBall/>
        <RedSmallBall/>
    </>
}

const PurpleBall = styled.div`
  position: absolute;
  left: 60.27%;
  top: -2px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 3px 6px 27px -10px #B176D940;
  filter: blur(4px);
`

const RedBall = styled.div`
  position: absolute;
  left: 36.04%;
  top: 83px;
  width: 83px;
  height: 83px;
  border-radius: 50%;
  background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 3px 6px 27px -10px #DF7D7D40; 
`

const RedSmallBall = styled.div`
  position: absolute;
  left: 59.51%;
  top: 541px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.48) 0%, rgba(212, 93, 93, 0.248) 59.67%, rgba(167, 49, 49, 0.264) 78.59%, rgba(130, 25, 25, 0.232) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  box-shadow: 3px 6px 27px -10px #DF7D7D40;
  filter: blur(2px)
`

const PurpleLight = styled.div`
  position: absolute;
  left: 41.8%;
  top: -154px;
  width: 259px;
  height: 259px;
  border-radius: 50%;
  background: #833AB4;
  -webkit-box-shadow: 0px 4px 100px 100px rgba(131, 58, 180, 0.2);
  -moz-box-shadow: 0px 4px 100px 100px rgba(131, 58, 180, 0.2);
  box-shadow: 0px 4px 100px 100px rgba(131, 58, 180, 0.2);
  opacity: 50%;
  filter: blur(170px);
`

const RedLight = styled.div`
  position: absolute;
  left: -7.08%;
  top: 251px;
  width: 311px;
  height: 311px;
  border-radius: 50%;
  background: #961A1A;
  -webkit-box-shadow: 0px 4px 100px 100px rgba(150, 26, 26, 0.2);
  -moz-box-shadow: 0px 4px 100px 100px rgba(150, 26, 26, 0.2);
  box-shadow: 0px 4px 100px 100px rgba(150, 26, 26, 0.2);
  opacity: 50%;
  filter: blur(170px);
`