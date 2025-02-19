/**
 * Web DatePicker Component
 *
 */

import React, { useCallback, useContext } from 'react'

// date-fns
import addMonths from 'date-fns/addMonths'
import subMonths from 'date-fns/subMonths'

import DatePickerCalendar, {
  CalendarButtonProps,
  CalendarNavigationEvent,
  DatePickerCalendarProps,
} from './DatePickerCalendar'
import DatePickerContext from './DatePickerContext'
import { DatePickerDates } from './hooks/useDates'
import { DatePickerChangeEvent } from './DatePickerProvider'

export type DatePickerRangeViews = number | Record<string, unknown>[]

export type DatePickerRangeProps = Omit<
  React.HTMLProps<HTMLElement>,
  'onChange'
> &
  DatePickerCalendarProps & {
    id?: string
    isRange?: boolean
    isLink?: boolean
    isSync?: boolean
    onlyMonth?: boolean
    hideNav?: boolean
    views?: [{ nextBtn: false; prevBtn: false }]
    onChange?: (
      event: DatePickerChangeEvent<
        | React.MouseEvent<HTMLSpanElement>
        | React.KeyboardEvent<HTMLTableElement>
      >
    ) => void
  }

const monthHandlers: {
  // eslint-disable-next-line no-unused-vars
  [key in CalendarButtonProps['type']]: typeof subMonths
} = {
  prev: subMonths,
  next: addMonths,
}

function DatePickerRange(props: DatePickerRangeProps) {
  // Destructured to prevent useCallback from updating on all prop or context changes
  const { onChange, isRange, isLink } = props
  const { views, setViews, updateDates, callOnChangeHandler } =
    useContext(DatePickerContext)

  const onNav = useCallback(
    ({ nr, type }: CalendarNavigationEvent) => {
      const updatedViews = views.map((view) => {
        if (view.nr === nr || (isLink && view.nr === 1)) {
          const month = monthHandlers[type](view.month, 1)

          return { ...view, month }
        }

        return view
      })
      setViews(updatedViews)
    },
    [views, setViews, isLink]
  )

  const onSelect = useCallback(
    (
      event: DatePickerChangeEvent<
        | React.MouseEvent<HTMLSpanElement>
        | React.KeyboardEvent<HTMLTableElement>
      > &
        DatePickerDates
    ) => {
      callOnChangeHandler(event)

      onChange?.({
        hidePicker: !isRange,
        startDate: event.startDate,
        endDate: event.endDate,
        ...event,
      })
    },
    [isRange, onChange, callOnChangeHandler]
  )

  const onHover = useCallback(
    (hoverDate: DatePickerDates['hoverDate']) => {
      updateDates({ hoverDate })
    },
    [updateDates]
  )

  return (
    <div className="dnb-date-picker__views">
      {views.map((calendar, i) => (
        <DatePickerCalendar
          key={calendar.nr}
          {...calendar}
          {...props}
          id={`${props.id}-${i}-`}
          onSelect={onSelect}
          onHover={onHover}
          onPrev={onNav}
          onNext={onNav}
        />
      ))}
    </div>
  )
}

export default DatePickerRange
