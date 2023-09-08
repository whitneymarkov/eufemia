import React, { useContext, useCallback } from 'react'
import { Checkbox, ToggleButton, Button, Space } from '../../../components'
import classnames from 'classnames'
import FieldBlock from '../FieldBlock'
import { useField } from './hooks'
import type { ComponentProps } from '../component-types'
import type { FieldProps } from '../field-types'
import { forwardSpaceProps } from '../utils'
import SharedContext from '../../../shared/Context'
import ButtonRow from '../../../components/layout/ButtonRow'

export type Props = ComponentProps &
  FieldProps<unknown> & {
    valueOn: unknown
    valueOff: unknown
    variant?: 'checkbox' | 'checkbox-button' | 'button' | 'buttons'
    textOn?: string
    textOff?: string
  }

function Toggle(props: Props) {
  const sharedContext = useContext(SharedContext)
  const {
    id,
    className,
    valueOn,
    valueOff,
    layout,
    variant,
    disabled,
    label,
    labelDescription,
    labelSecondary,
    textOn,
    textOff,
    value,
    info,
    warning,
    error,
    handleChange,
  } = useField(props)

  const handleCheckboxChange = useCallback(
    ({ checked }) => {
      handleChange?.(checked ? valueOn : valueOff)
    },
    [handleChange, valueOn, valueOff]
  )

  const setOn = useCallback(() => {
    if (value !== valueOn) {
      handleChange?.(valueOn)
    }
  }, [handleChange, value, valueOn])

  const setOff = useCallback(() => {
    if (value !== valueOff) {
      handleChange?.(valueOff)
    }
  }, [handleChange, value, valueOff])

  const cn = classnames('dnb-forms-field-toggle', className)

  const fieldBlockPropsWithoutLabel = {
    forId: id,
    className: cn,
    ...forwardSpaceProps(props),
    info,
    warning,
    error,
  }

  const fieldBlockProps = {
    ...fieldBlockPropsWithoutLabel,
    layout,
    label,
    labelDescription,
    labelSecondary,
  }

  const isOn = value === valueOn

  switch (variant) {
    default:
    case 'checkbox':
      return (
        <FieldBlock {...fieldBlockPropsWithoutLabel}>
          <Checkbox
            id={id}
            className={cn}
            label={label}
            checked={isOn}
            disabled={disabled}
            on_change={handleCheckboxChange}
            {...forwardSpaceProps(props)}
          />
        </FieldBlock>
      )
    case 'button':
      return (
        <FieldBlock {...fieldBlockProps}>
          <ToggleButton
            id={id}
            text={
              isOn
                ? textOn ?? sharedContext?.translation.Forms.booleanYes
                : textOff ?? sharedContext?.translation.Forms.booleanNo
            }
            checked={isOn}
            disabled={disabled}
            value={value ? 'true' : 'false'}
            on_change={handleCheckboxChange}
          />
        </FieldBlock>
      )
    case 'buttons':
      return (
        <FieldBlock {...fieldBlockProps}>
          <ButtonRow>
            <Button
              id={id}
              text={textOn ?? sharedContext?.translation.Forms.booleanYes}
              on_click={setOn}
              variant={isOn ? undefined : 'secondary'}
              status={error ? 'error' : undefined}
              disabled={disabled}
            />
            <Button
              id={id}
              text={textOff ?? sharedContext?.translation.Forms.booleanNo}
              on_click={setOff}
              variant={isOn ? 'secondary' : undefined}
              status={error ? 'error' : undefined}
              disabled={disabled}
            />
          </ButtonRow>
          <Space bottom="x-small" />
        </FieldBlock>
      )
    case 'checkbox-button':
      return (
        <FieldBlock {...fieldBlockProps}>
          <ToggleButton
            id={id}
            variant="checkbox"
            text={
              isOn
                ? textOn ?? sharedContext?.translation.Forms.booleanYes
                : textOff ?? sharedContext?.translation.Forms.booleanNo
            }
            checked={isOn}
            disabled={disabled}
            value={value ? 'true' : 'false'}
            on_change={handleCheckboxChange}
          />
        </FieldBlock>
      )
  }
}

Toggle._supportsEufemiaSpacingProps = true
export default Toggle
