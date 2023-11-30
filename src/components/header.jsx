import styled from "styled-components";
import logo from "../images/logo_welbex.png"
import telegram from "../images/social/telegram.png"
import viber from "../images/social/viber.png"
import whatsapp from "../images/social/whatsapp.png"

export const Header = () => {
    return(
    <HeadContainer>
        <Logo>
            <img src={logo} alt="welbex logo" />
            <P1>крупный интегратор CRM в Росcии и ещё 8 странах</P1>
        </Logo>
        <List>
            <ListItem>Услуги</ListItem>
            <ListItem>Виджеты</ListItem>
            <ListItem>Интеграции</ListItem>
            <ListItem>Кейсы</ListItem>
            <ListItem>Сертификаты</ListItem>
        </List>
        <Contacts>
            <P2>+7 555 555-55-55</P2>
            <SocialImg src={telegram} alt="telegram" />
            <SocialImg src={viber} alt="viber" />
            <SocialImg src={whatsapp} alt="whatsapp" />
        </Contacts>
    </HeadContainer>)
}

const HeadContainer = styled.header`
    margin: 46px 150px;
    display: flex;
    flex-direction: row;
`

const List = styled.ul`
    margin: 15px 12px 39px;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style-type: none;
`

const Contacts = styled.div`
    margin: 15px 0em 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: right;
    color: #E4E5EA;
    height: fit-content;
`

const ListItem = styled.li`
    margin: 0 15px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #E4E5EA;
`

const Logo = styled.div`
    margin: 11px 0 4px;
    width: 165px;
`

const P1 = styled.p`
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
`

const P2 = styled.p`
    margin: 0 47px 0 0;
`

const SocialImg = styled.img`
    margin: 0 30px 0 0;

    &:last-child {
        margin: 0;
    }
`