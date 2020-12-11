/**
 * Web Input Component
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {
  warn,
  isTrue,
  makeUniqueId,
  extendPropsWithContext,
  registerElement,
  validateDOMAttributes,
  processChildren,
  getStatusState,
  convertStatusToStateOnly,
  combineDescribedBy,
  dispatchCustomElementEvent
} from '../../shared/component-helper'
import AlignmentHelper from '../../shared/AlignmentHelper'
import { createSpacingClasses } from '../space/SpacingHelper'
import {
  skeletonDOMAttributes,
  createSkeletonClass
} from '../skeleton/SkeletonHelper'
import Button from '../button/Button'
import FormLabel from '../form-label/FormLabel'
import FormStatus from '../form-status/FormStatus'
import IconPrimary from '../icon-primary/IconPrimary'

import Context from '../../shared/Context'
import Suffix from '../../shared/helpers/Suffix'

export default class Input extends React.PureComponent {
  static tagName = 'dnb-input'
  static contextType = Context

  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['default', 'small', 'medium', 'large']),
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    id: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node
    ]),
    label_direction: PropTypes.oneOf(['horizontal', 'vertical']),
    label_sr_only: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    status: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node
    ]),
    status_state: PropTypes.string,
    status_animation: PropTypes.string,
    input_state: PropTypes.string,
    global_status_id: PropTypes.string,
    autocomplete: PropTypes.string,
    submit_button_title: PropTypes.string,
    placeholder: PropTypes.string,
    keep_placeholder: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool
    ]),
    suffix: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node
    ]),
    align: PropTypes.string,
    selectall: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    stretch: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    skeleton: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    class: PropTypes.string,
    input_class: PropTypes.string,
    input_attributes: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    input_element: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func
    ]),
    icon_position: PropTypes.string,
    inner_ref: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    readOnly: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),

    // Submit button
    submit_element: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
    submit_button_variant: Button.propTypes.variant,
    submit_button_icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func
    ]),
    submit_button_status: PropTypes.string,

    className: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

    custom_element: PropTypes.object,
    custom_method: PropTypes.func,
    on_change: PropTypes.func,
    on_submit: PropTypes.func,
    on_focus: PropTypes.func,
    on_blur: PropTypes.func,
    on_submit_focus: PropTypes.func,
    on_submit_blur: PropTypes.func,
    on_state_update: PropTypes.func
  }

  static defaultProps = {
    type: 'text',
    size: null,
    value: 'initval',
    id: null,
    label: null,
    label_direction: null,
    label_sr_only: null,
    status: null,
    status_state: 'error',
    status_animation: null,
    input_state: null,
    global_status_id: null,
    autocomplete: 'off',
    placeholder: null,
    keep_placeholder: null,
    suffix: null,
    align: null,
    selectall: null,
    stretch: null,
    disabled: null,
    skeleton: null,
    input_class: null,
    class: null,
    input_attributes: null,
    input_element: null,
    inner_ref: null,
    icon: null,
    icon_position: 'left',
    readOnly: false,

    // Submit button
    submit_element: null,
    submit_button_title: null,
    submit_button_variant: 'secondary',
    submit_button_icon: 'cog',
    submit_button_status: null,

    className: null,
    children: null,

    custom_element: null,
    custom_method: null,

    on_change: null,
    on_submit: null,
    on_focus: null,
    on_blur: null,
    on_submit_focus: null,
    on_submit_blur: null,
    on_state_update: null
  }

  static enableWebComponent() {
    registerElement(Input.tagName, Input, Input.defaultProps)
  }

  static getDerivedStateFromProps(props, state) {
    const value = Input.getValue(props)
    if (
      state._listenForPropChanges &&
      value !== 'initval' &&
      value !== state.value
    ) {
      if (
        value !== state.value &&
        value !== state._value &&
        typeof props.on_state_update === 'function'
      ) {
        dispatchCustomElementEvent({ props }, 'on_state_update', { value })
      }
      state.value = value
    }
    if (props.input_state) {
      state.inputState = props.input_state
    }
    state._listenForPropChanges = true
    return state
  }

  static hasValue(value) {
    return (
      ((typeof value === 'string' || typeof value === 'number') &&
        String(value).length > 0) ||
      false
    )
  }

  static getValue(props) {
    const value = processChildren(props)
    if (value === '' || Input.hasValue(value)) {
      return value
    }
    return props.value
  }

  state = { inputState: 'virgin', value: null, _value: null }

  constructor(props, context) {
    super(props)

    this._ref = props.inner_ref || React.createRef()

    this._id =
      props.id ||
      (context.formRow &&
        typeof context.formRow.useId === 'function' &&
        context.formRow.useId()) ||
      makeUniqueId() // cause we need an id anyway

    // make sure we don't trigger getDerivedStateFromProps on startup
    this.state._listenForPropChanges = true
    this.state._value = props.value
  }
  componentWillUnmount() {
    clearTimeout(this._selectallTimeout)
  }
  onFocusHandler = (event) => {
    const { value } = event.target
    this.setState({
      // value,// why should we update the value on blur?
      inputState: 'focus',
      _listenForPropChanges: false
    })

    dispatchCustomElementEvent(this, 'on_focus', { value, event })

    if (isTrue(this.props.selectall) && this._ref.current) {
      clearTimeout(this._selectallTimeout)
      this._selectallTimeout = setTimeout(() => {
        try {
          this._ref.current.select()
        } catch (e) {
          warn(e)
        }
      }, 1) // safari needs a delay
    }
  }
  onBlurHandler = (event) => {
    const { value } = event.target
    this.setState({
      // value,// why should we update the value on blur?
      inputState:
        Input.hasValue(value) && value !== this.state._value
          ? 'dirty'
          : 'initial',
      _listenForPropChanges: false
    })
    dispatchCustomElementEvent(this, 'on_blur', { value, event })
  }
  onChangeHandler = (event) => {
    const { value } = event.target
    this.setState({ value, _listenForPropChanges: false })
    dispatchCustomElementEvent(this, 'on_change', { value, event })
  }
  onKeyDownHandler = (event) => {
    const value = event.target.value
    dispatchCustomElementEvent(this, 'on_key_down', { value, event })
    if (event.key === 'Enter') {
      dispatchCustomElementEvent(this, 'on_submit', { value, event })
    }
  }
  render() {
    // use only the props from context, who are available here anyway
    const props = extendPropsWithContext(
      this.props,
      Input.defaultProps,
      { skeleton: this.context?.skeleton },
      this.context.formRow,
      this.context.getTranslation(this.props).Input
    )

    const {
      type,
      size,
      label,
      label_direction,
      label_sr_only,
      status,
      status_state,
      status_animation,
      global_status_id,
      disabled,
      skeleton,
      placeholder,
      keep_placeholder,
      suffix,
      align,
      input_class,
      submit_button_title,
      submit_button_variant,
      submit_button_icon,
      submit_button_status,
      submit_element,
      autocomplete,
      readOnly,
      stretch,
      input_attributes,
      icon,
      icon_position,
      icon_size,
      class: _className,
      className,

      id: _id, //eslint-disable-line
      children, //eslint-disable-line
      value: _value, //eslint-disable-line
      selectall, //eslint-disable-line
      on_submit, //eslint-disable-line
      input_element: _input_element, //eslint-disable-line

      ...attributes
    } = props

    let { value, focusState, inputState } = this.state

    if (isTrue(disabled) || isTrue(skeleton)) {
      inputState = 'disabled'
    }
    const sizeIsNumber = parseFloat(size) > 0

    const id = this._id
    const showStatus = getStatusState(status)
    const hasSubmitButton =
      submit_element || (submit_element !== false && type === 'search')
    const hasValue = Input.hasValue(value)

    const iconSize =
      size === 'large' && (icon_size === 'default' || !icon_size)
        ? 'medium'
        : icon_size

    const mainParams = {
      className: classnames(
        'dnb-input',
        `dnb-input--${type}`, //type_modifier
        size && !sizeIsNumber && `dnb-input--${size}`,
        hasSubmitButton && 'dnb-input--has-submit-element',
        align && `dnb-input__align--${align}`,
        status && `dnb-input__status--${status_state}`,
        icon && `dnb-input--icon-position-${icon_position}`,
        icon && 'dnb-input--has-icon',
        icon && iconSize && `dnb-input--icon-size-${iconSize}`,
        label_direction && `dnb-input--${label_direction}`,
        isTrue(stretch) && `dnb-input--stretch`,
        isTrue(keep_placeholder) && `dnb-input--keep-placeholder`,
        'dnb-form-component',
        createSpacingClasses(props),
        _className,
        className
      )
    }

    const innerParams = {
      className: 'dnb-input__inner'
    }

    // pass along all props we wish to have as params
    let { input_element: InputElement } = props

    const inputAttributes = input_attributes
      ? typeof input_attributes === 'string'
        ? JSON.parse(input_attributes)
        : input_attributes
      : {}

    const inputParams = {
      className: classnames('dnb-input__input', input_class),
      autoComplete: autocomplete,
      value: hasValue ? value : '',
      type,
      id,
      disabled: isTrue(disabled),
      name: id,
      'aria-placeholder': placeholder, // NVDA just reads out the placeholder twice
      ...attributes,
      ...inputAttributes,
      onChange: this.onChangeHandler,
      onKeyDown: this.onKeyDownHandler,
      onFocus: this.onFocusHandler,
      onBlur: this.onBlurHandler
    }

    if (sizeIsNumber) {
      inputParams.size = size
    }

    // we may consider using: aria-details
    if (showStatus || suffix || hasSubmitButton) {
      inputParams['aria-describedby'] = combineDescribedBy(
        inputParams,
        hasSubmitButton && !submit_element ? id + '-submit-button' : null,
        showStatus ? id + '-status' : null,
        suffix ? id + '-suffix' : null
      )
    }
    if (readOnly) {
      inputParams['aria-readonly'] = inputParams.readOnly = true
    }
    if (!hasValue && placeholder && focusState !== 'focus') {
      inputParams['aria-labelledby'] = id + '-placeholder'
    }

    const shellParams = {
      className: classnames(
        'dnb-input__shell',
        createSkeletonClass('shape', skeleton, this.context)
      ),
      'data-input-state': inputState,
      'data-has-content': hasValue ? 'true' : 'false'
    }

    skeletonDOMAttributes(inputParams, skeleton, this.context)

    // also used for code markup simulation
    validateDOMAttributes(this.props, inputParams)
    validateDOMAttributes(null, shellParams)

    if (InputElement && typeof InputElement === 'function') {
      InputElement = InputElement(inputParams, this._ref)
    } else if (!InputElement && _input_element) {
      InputElement = _input_element
    }

    return (
      <span {...mainParams}>
        {label && (
          <FormLabel
            id={id + '-label'}
            for_id={id}
            text={label}
            label_direction={label_direction}
            sr_only={label_sr_only}
            disabled={disabled}
            skeleton={skeleton}
          />
        )}

        <span {...innerParams}>
          <AlignmentHelper />
          {showStatus && (
            <FormStatus
              id={id + '-form-status'}
              global_status_id={global_status_id}
              label={label}
              text={status}
              status={status_state}
              text_id={id + '-status'} // used for "aria-describedby"
              animation={status_animation}
              skeleton={skeleton}
            />
          )}

          <span className="dnb-input__row">
            <span {...shellParams}>
              {InputElement || <input ref={this._ref} {...inputParams} />}

              {icon && (
                <InputIcon
                  className="dnb-input__icon"
                  icon={icon}
                  size={iconSize}
                />
              )}

              {!hasValue && placeholder && focusState !== 'focus' && (
                <span
                  id={id + '-placeholder'}
                  className={classnames(
                    'dnb-input__placeholder',
                    align ? `dnb-input__align--${align}` : null
                  )}
                  role="presentation"
                  aria-hidden
                >
                  {placeholder}
                </span>
              )}
            </span>

            {hasSubmitButton && (
              <span className="dnb-input__submit-element">
                {submit_element ? (
                  submit_element
                ) : (
                  <SubmitButton
                    {...attributes}
                    id={id + '-submit-button'}
                    value={inputParams.value}
                    icon={submit_button_icon}
                    status={convertStatusToStateOnly(
                      submit_button_status || status,
                      status_state
                    )}
                    status_state={status_state}
                    icon_size={
                      size === 'medium' || size === 'large'
                        ? 'medium'
                        : 'default'
                    }
                    title={submit_button_title}
                    variant={submit_button_variant}
                    disabled={isTrue(disabled)}
                    skeleton={isTrue(skeleton)}
                    size={size}
                    on_submit={on_submit}
                  />
                )}
              </span>
            )}

            {suffix && (
              <span
                className="dnb-input__suffix"
                id={id + '-suffix'} // used for "aria-describedby"
              >
                <Suffix {...props}>{suffix}</Suffix>
              </span>
            )}
          </span>
        </span>
      </span>
    )
  }
}

class InputSubmitButton extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.string,
    variant: Button.propTypes.variant,
    disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    skeleton: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    icon: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.func
    ]),
    icon_size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.node
    ]),
    status_state: PropTypes.string,
    className: PropTypes.string,

    on_submit: PropTypes.func,
    on_submit_focus: PropTypes.func,
    on_submit_blur: PropTypes.func
  }

  static defaultProps = {
    id: null,
    value: null,
    title: null,
    disabled: false,
    skeleton: false,
    variant: 'secondary',
    icon: 'cog',
    icon_size: null,
    status: null,
    status_state: 'error',
    className: null,

    on_submit: null,
    on_submit_focus: null,
    on_submit_blur: null
  }

  state = { focusState: 'virgin' }

  onFocusHandler = (event) => {
    const value = this.props.value
    this.setState({
      focusState: 'focus'
    })
    dispatchCustomElementEvent(this, 'on_submit_focus', { value, event })
  }
  onBlurHandler = (event) => {
    const value = this.props.value
    this.setState({
      focusState: 'dirty'
    })
    dispatchCustomElementEvent(this, 'on_submit_blur', { value, event })
  }
  onSubmitHandler = (event) => {
    const value = this.props.value
    dispatchCustomElementEvent(this, 'on_submit', { value, event })
  }
  render() {
    const {
      id,
      title,
      disabled,
      skeleton,
      variant,
      icon,
      icon_size,
      status,
      status_state,
      className,
      ...rest
    } = this.props

    const params = {
      id,
      type: 'submit',
      'aria-label': title,
      disabled,
      ...rest
    }

    skeletonDOMAttributes(params, skeleton, this.context)

    // also used for code markup simulation
    validateDOMAttributes(this.props, params)

    return (
      <span
        className="dnb-input__submit-button"
        data-input-state={this.state.focusState}
      >
        <Button
          className={classnames(
            'dnb-input__submit-button__button',
            className
          )}
          variant={variant}
          icon={icon}
          icon_size={icon_size}
          status={status}
          status_state={status_state}
          onClick={this.onSubmitHandler}
          onFocus={this.onFocusHandler}
          onBlur={this.onBlurHandler}
          {...params}
        />
      </span>
    )
  }
}

const SubmitButton = React.forwardRef((props, ref) => (
  <InputSubmitButton innerRef={ref} {...props} />
))

export { SubmitButton }

// We momorize by type, in case we send in a ProgressIndicator (Autocomplete)
const InputIcon = React.memo(
  (props) => <IconPrimary {...props} />,
  ({ icon: prev }, { icon: next }) => {
    if (typeof prev === 'string' && typeof next === 'string') {
      return false
    }
    return typeof prev === typeof next
  }
)
InputIcon.propTypes = {
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func
  ]).isRequired
}
