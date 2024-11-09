import React from 'react'
import classnames from 'classnames'
import useId from '../../../../shared/helpers/useId'
import Heading from '../../../../components/heading/Heading'
import HelpButtonInline, {
  HelpButtonInlineContent,
  HelpProps,
} from '../../../../components/help-button/HelpButtonInline'
import type { HeadingLevel } from '../../../../components/heading/Heading'
import type { ComponentProps } from '../../types'

export type Props = ComponentProps & {
  level?: HeadingLevel
  help?: HelpProps
  children?: React.ReactNode
} & Omit<React.HTMLProps<HTMLElement>, 'size'>

function MainHeading({ level, ...props }: Props) {
  const { help, className, children, ...rest } = props
  const helpId = useId()
  const hasHelp = help?.title || help?.content

  return (
    <>
      <Heading
        className={classnames('dnb-forms-main-heading', className)}
        level={level || 2}
        skip_correction
        size="large"
        {...rest}
      >
        {children}
        {hasHelp && (
          <HelpButtonInline
            left="x-small"
            contentId={helpId}
            help={help}
          />
        )}
      </Heading>

      {hasHelp && (
        <HelpButtonInlineContent
          top="x-small"
          contentId={helpId}
          help={help}
        />
      )}
    </>
  )
}

MainHeading._supportsSpacingProps = true
MainHeading._isHeadingElement = true

export default MainHeading
