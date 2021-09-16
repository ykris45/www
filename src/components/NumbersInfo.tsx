import React, { FC } from 'react'
import styled from 'styled-components'

interface NumbersInfoProps {
  number: string
  description: string
  className?: string
}

let NumbersInfo: FC<NumbersInfoProps> = ({ number, description, className }) => (
  <div className={className}>
    <div className="number">{number}</div>
    <div>{description}</div>
  </div>
)

NumbersInfo = styled(NumbersInfo)`
  font-weight: var(--fontWeight-bold);
  color: var(--color-grey-dark-2);

  .number {
    font-size: var(--fontSize-50);
    margin-bottom: var(--spacing-3);

    & + div {
      font-size: var(--fontSize-22);
    }
  }
`

export default NumbersInfo
