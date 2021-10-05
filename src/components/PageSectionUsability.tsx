import React, { FC } from 'react'
import styled from 'styled-components'
import Img, { FluidObject } from 'gatsby-image'

import { deviceBreakPoints } from '../styles/global-style'

import SectionTextHeader from './SectionTextHeader'
import PageSectionContainer from './PageSectionContainer'
import Button from './Button'
import Columns from './Columns'
import Column from './Column'
import TextSnippet from './TextSnippet'
import { ArrowedLinkProps } from './ArrowedLink'

import BirdsImage from '../images/svgs/birds.svg'
import YellowMountainsImage from '../images/svgs/yellow-mountains.svg'

export interface PageSectionUsabilityContentType {
  title: string
  subtitle: string
  description: string
  button: ArrowedLinkProps
  images: {
    src: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
    altText: string
  }[]
}

interface PageSectionUsabilityProps {
  className?: string
  content: PageSectionUsabilityContentType
}

let PageSectionUsability: FC<PageSectionUsabilityProps> = ({ className, content }) => (
  <section className={className}>
    <SectionTextHeaderStyled title={content.title} subtitle={content.subtitle} centered bigSubtitle />
    <PageSectionContainerStyled>
      <CenteredContent>
        <TextSnippetStyled bigText>{content.description}</TextSnippetStyled>
        <Button url={content.button.url} newTab={content.button.newTab}>
          {content.button.text}
        </Button>
      </CenteredContent>
      <ImagesColumns>
        {content.images.map((image) => (
          <Img key={image.altText} fluid={image.src.childImageSharp.fluid} alt={image.altText} />
        ))}
      </ImagesColumns>
    </PageSectionContainerStyled>
    <YellowMountainsImageStyled />
    <BirdsImageStyled />
  </section>
)

PageSectionUsability = styled(PageSectionUsability)`
  padding-top: var(--spacing-28);
  padding-bottom: var(--spacing-28);
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary};
  position: relative;

  @media ${deviceBreakPoints.mobile} {
    padding-bottom: 0;
  }
`

const PageSectionContainerStyled = styled(PageSectionContainer)`
  z-index: 1;
`

const SectionTextHeaderStyled = styled(SectionTextHeader)`
  margin-bottom: var(--spacing-10);
  z-index: 1;
`

const CenteredContent = styled.div`
  text-align: center;
  max-width: var(--width-476);
  margin: auto;

  .button {
    margin: var(--spacing-8) auto 0;
  }
`

const TextSnippetStyled = styled(TextSnippet)`
  color: ${({ theme }) => theme.textTertiary};
`

const BirdsImageStyled = styled(BirdsImage)`
  position: absolute;
  top: var(--spacing-24);
  height: auto;
`

const ImagesColumns = styled(Columns)`
  margin-top: var(--spacing-20);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--spacing-4);

  > div:first-child {
    grid-column: 1 / span 2;
  }

  @media ${deviceBreakPoints.mobile} {
    grid-template-columns: 1fr;

    > div:first-child {
      grid-column: 1 / span 1;
    }
  }
`

const ImageColumn = styled(Column)`
  display: flex;
  justify-content: center;
`

const YellowMountainsImageStyled = styled(YellowMountainsImage)`
  position: absolute;
  height: auto;
  width: auto;
  bottom: -2px;
  left: 0;
  right: 0px;

  @media ${deviceBreakPoints.mobile} {
    bottom: -152px;
  }

  @media ${deviceBreakPoints.smallMobile} {
    bottom: -80px;
  }
`

export default PageSectionUsability
