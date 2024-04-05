import React from 'react'
import { Field, Form } from '../../..'
import { Flex } from '../../../../../components'

export default {
  title: 'Eufemia/Extensions/Forms/String',
}

export const String = () => {
  return (
    <Flex.Stack>
      <Field.String label="Label" />
      <Field.String label="Label" multiline />

      <Field.String label="Label" width="small" />
      <Field.String label="Label" multiline width="small" />

      <Field.String label="Label" width="medium" />
      <Field.String label="Label" multiline width="medium" />

      <Field.String label="Label" width="large" />
      <Field.String label="Label" multiline width="large" />
    </Flex.Stack>
  )
}

export const Transform = () => {
  const transformIn = (value) => {
    return value?.toUpperCase()
  }
  const transformOut = (value) => {
    return value?.toLowerCase()
  }
  return (
    <Form.Handler onChange={console.log}>
      <Field.String
        label="Label"
        path="/myField"
        transformIn={transformIn}
        transformOut={transformOut}
      />
    </Form.Handler>
  )
}
