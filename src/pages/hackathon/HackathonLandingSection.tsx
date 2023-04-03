import { colord } from 'colord'
import styled from 'styled-components'
import AlephiumLogo from '../../components/AlephiumLogo'
import ParallaxWrapper from '../../components/ParallaxWrapper'
import backgroundImage from '../../images/alephium-hackathon-lake.jpg'

export type HackathonLandingSectionContentType = {
  tagline: string
  title: string
  date: string
}

interface HackathonLandingSectionProps {
  content: HackathonLandingSectionContentType
}

const HackathonLandingSection = ({ content: { tagline, title, date } }: HackathonLandingSectionProps) => (
  <SectionWrapper>
    <ParallaxWrapper speed={5}>
      <Content>
        <FirstContentBox>
          <AlephiumLogoStyled gradientIndex={2} />
          <Date>{date}</Date>
          <Title>{title}</Title>
        </FirstContentBox>
        <SecondContentBox>
          <TagLine>{tagline}</TagLine>
        </SecondContentBox>
      </Content>
    </ParallaxWrapper>
  </SectionWrapper>
)

export default HackathonLandingSection

const SectionWrapper = styled.div`
  position: relative;
  background: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: calc(max(50vh, 300px));
  max-height: 400px;
  display: flex;
  align-items: flex-end;
`

const AlephiumLogoStyled = styled(AlephiumLogo)`
  height: 10vh;
  min-height: 80px;
  width: auto;
`

const Content = styled.div`
  margin-bottom: -12%;
  margin-left: var(--spacing-14);
  margin-right: var(--spacing-14);
`

const FirstContentBox = styled.div`
  padding: 5vh calc(max(3vw, 30px));
  background-color: ${({ theme }) => colord(theme.bgTertiary).alpha(0.7).toHex()};
  backdrop-filter: blur(20px);
  max-height: 300px;
`

const SecondContentBox = styled.div`
  background-color: ${({ theme }) => colord(theme.bgPrimary).alpha(0.3).toHex()};
  backdrop-filter: blur(20px);
  padding: 2vh 3vw;
  max-height: 150px;
`

const TagLine = styled.h2`
  color: ${({ theme }) => theme.textSecondary};
  font-size: var(--fontSize-24);
  max-width: 500px;
`
const Title = styled.h1`
  color: ${({ theme }) => theme.textPrimary};
  font-size: var(--fontSize-50);
  margin-top: 10px;
`
const Date = styled.h1`
  color: ${({ theme }) => theme.textHighlight};
  font-size: var(--fontSize-28);
`
