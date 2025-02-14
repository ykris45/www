import styled from 'styled-components'

import PageSectionContainer from './PageSectionContainer'
import SectionTextHeader from './SectionTextHeader'
import TextSnippet from './TextSnippet'
import SvgCheckmark from '../images/complete-check.svg'
import SvgStars from '../images/stars.svg'
import { deviceBreakPoints } from '../styles/global-style'
import { motion, Variants } from 'framer-motion'

export type PageSectionTodoListContentType = {
  title: string
  subtitle: string
  lists: {
    title: string
    items: {
      text: string
      label: string
      complete: boolean
    }[]
  }[]
}

interface Props {
  content: PageSectionTodoListContentType
}

interface Alignment {
  $alignRight: boolean
}

const PageSectionTodoList = ({ content: { title, subtitle, lists } }: Props) => (
  <BackdropStars>
    <SectionTextHeader id="next" title={title} subtitle={subtitle} bigSubtitle bigText centered />
    <PageSectionContainer>
      <TodoLists variants={todoItemsContainerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {lists.map(({ title, items }, index) => (
          <TodoList key={title}>
            <TodoTitle title={title} $alignRight={index % 2 == 0} titleHierarchy="h3" />
            <TodoItems $alignRight={index % 2 == 0}>
              {items.map(({ text, label, complete }) => (
                <TodoItem key={text} variants={itemVariants}>
                  {label && <TodoLabel>{label}</TodoLabel>}
                  <TodoContent complete={complete}>{text}</TodoContent>
                  {complete && <TodoStateIcon />}
                </TodoItem>
              ))}
            </TodoItems>
          </TodoList>
        ))}
      </TodoLists>
    </PageSectionContainer>
  </BackdropStars>
)

const todoItemsContainerVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.05
    }
  }
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const BackdropStars = styled.div`
  background-image: url('${SvgStars}');
  background-repeat: no-repeat;
  background-position-x: center;
  margin: var(--spacing-16) 0;
`

const TodoLists = styled(motion.div)`
  display: flex;
  gap: min(10vw, 100px);
  margin-top: 70px;

  @media ${deviceBreakPoints.smallMobile} {
    flex-direction: column;
    align-items: center;
    gap: 70px;
  }
`

const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media ${deviceBreakPoints.mobile} {
    align-items: center;
  }
`

const TodoTitle = styled(TextSnippet)<Alignment>`
  margin-bottom: 45px;
  text-align: ${({ $alignRight }) => ($alignRight ? 'right' : 'left')};
`

const TodoItems = styled(motion.div)<Alignment>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: ${({ $alignRight }) => ($alignRight ? 'right' : 'left')};

  @media ${deviceBreakPoints.mobile} {
  }
`

const TodoLabel = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  padding: 4px 6px;
  border-radius: 30px;
  font-size: 11px;
  opacity: 0.3;
`

const TodoItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: calc(50% - 30px - 20px);
  min-width: 199px;
  padding: 15px;
  padding-bottom: 30px;
  background-color: ${({ theme }) => theme.bgPrimary};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.borderPrimary};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    ${TodoLabel} {
      opacity: 0.8;
    }
  }

  @media ${deviceBreakPoints.mobile} {
    flex: 1;
    width: auto;
  }
`

const TodoStateIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background-image: url(${SvgCheckmark});
  background-repeat: no-repeat;
  background-size: contain;
`

const TodoContent = styled.div<{ complete: boolean }>`
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme, complete }) => (complete ? 'var(--color-grey-300)' : theme.textPrimary)};
`

export default PageSectionTodoList
