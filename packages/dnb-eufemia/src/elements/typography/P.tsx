/**
 * HTML Element
 *
 */

import React from 'react'
import Typography, { TypographySize, TypographyProps } from './Typography'

/** @deprecated use TypographySize instead */
export type PSize = TypographySize

export type PProps = TypographyProps<HTMLParagraphElement>

const P = (props: PProps) => {
  return <Typography element="p" modifierClassName="dnb-p" {...props} />
}

P._supportsSpacingProps = true

export default P
