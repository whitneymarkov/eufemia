import React from 'react'
import { Field, Form, FormError, Tools } from '../../..'
import { Card, Flex } from '../../../../../components'

export default {
  title: 'Eufemia/Extensions/Forms/String',
}

export const String = () => {
  return (
    <Flex.Stack>
      <Field.String label="Ønsket lånebeløp" />
      <Field.String label="Ønsket lånebeløp" multiline />

      <Field.String label="Ønsket lånebeløp" width="small" />
      <Field.String label="Ønsket lånebeløp" multiline width="small" />

      <Field.String label="Ønsket lånebeløp" width="medium" />
      <Field.String label="Ønsket lånebeløp" multiline width="medium" />

      <Field.String label="Ønsket lånebeløp" width="large" />
      <Field.String label="Ønsket lånebeløp" multiline width="large" />
    </Flex.Stack>
  )
}

export const WithInlineHelp = () => {
  return (
    <Flex.Stack>
      <Form.MainHeading
        help={{
          // open: true,
          renderAs: 'dialog',
          title: 'Hva betyr kredittopplysninger?',
          content:
            'Lorem ipsum dolor sit amet consectetur. Interdum elementum sit purus aliquam. Ultrices senectus sit in augue ultrices hendrerit magna eget congue.',
        }}
      >
        Kredittopplysninger
      </Form.MainHeading>
      <Form.SubHeading
        help={{
          title: 'Hva betyr lånebeløp?',
          content: 'Dette er hvor mye du har tenkt å låne totalt.',
        }}
      >
        Subheading
      </Form.SubHeading>

      <Field.String
        id="myId"
        label="Ønsket lånebeløp"
        help={{
          title: 'Hva betyr lånebeløp?',
          content: 'Dette er hvor mye du har tenkt å låne totalt.',
        }}
      />
      <Field.String
        label="Ønsket lånebeløp"
        multiline
        help={{
          title: 'Hva betyr lånebeløp?',
          content: 'Dette er hvor mye du har tenkt å låne totalt.',
        }}
      />

      <Field.String
        label="Ønsket lånebeløp"
        labelDescription="Description Nisi ad ullamco ut anim proident sint eiusmod."
        help={{
          title: 'Hva betyr lånebeløp?',
          content: 'Dette er hvor mye du har tenkt å låne totalt.',
        }}
      />
      <Field.String
        label="Ønsket lånebeløp"
        labelDescription="Description"
        multiline
        help={{
          title: 'Hva betyr lånebeløp?',
          content: 'Dette er hvor mye du har tenkt å låne totalt.',
        }}
      />

      <Form.MainHeading
        help={{
          title: 'Hva betyr kredittopplysninger?',
          content:
            'Lorem ipsum dolor sit amet consectetur. Interdum elementum sit purus aliquam. Ultrices senectus sit in augue ultrices hendrerit magna eget congue.',
        }}
      >
        Kredittopplysninger
      </Form.MainHeading>

      <Card stack>
        <Field.String
          label="Ønsket lånebeløp"
          labelDescription={'\nDescription'}
          help={{
            title: 'Hva betyr lånebeløp?',
            content: 'Dette er hvor mye du har tenkt å låne totalt.',
          }}
        />
        <Field.String
          label="Ønsket lånebeløp"
          labelDescription={'\nDescription'}
          multiline
          help={{
            title: 'Hva betyr lånebeløp?',
            content: 'Dette er hvor mye du har tenkt å låne totalt.',
          }}
        />
      </Card>

      <Form.SubHeading
        help={{
          title: 'Hva betyr lånebeløp?',
          content: 'Dette er hvor mye du har tenkt å låne totalt.',
        }}
      >
        Subheading
      </Form.SubHeading>

      <Card stack>
        <Field.String
          label="Ønsket lånebeløp"
          layout="horizontal"
          help={{
            title: 'Hva betyr lånebeløp?',
            content: 'Dette er hvor mye du har tenkt å låne totalt.',
          }}
          info="Info message"
        />
        <Field.String
          label="Ønsket lånebeløp"
          layout="horizontal"
          layoutOptions={{ width: '10rem' }}
          help={{
            title: 'Hva betyr lånebeløp?',
            content: 'Dette er hvor mye du har tenkt å låne totalt.',
          }}
          info="Info message"
        />
        <Field.String
          label="Ønsket lånebeløp"
          layout="horizontal"
          layoutOptions={{ width: '10rem' }}
          multiline
          help={{
            title: 'Hva betyr lånebeløp?',
            content: 'Dette er hvor mye du har tenkt å låne totalt.',
          }}
          info="Info message"
        />
      </Card>
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
        label="Ønsket lånebeløp"
        path="/myField"
        transformIn={transformIn}
        transformOut={transformOut}
      />
    </Form.Handler>
  )
}

export const TransformInOnFormHandler = () => {
  const transformIn = ({ value }) => {
    if (value === undefined) {
      return ''
    }
    return value
  }
  return (
    <Form.Handler
      transformIn={transformIn}
      defaultData={{
        myPath: '',
      }}
    >
      <Field.String label="Ønsket lånebeløp" path="/myPath" />
      <Tools.Log />
    </Form.Handler>
  )
}

export function TransformObject() {
  const defaultData = {
    myLabel: { value: 'Some value', test: 'test' },
  }

  return (
    <Form.Handler
      defaultData={defaultData}
      onSubmit={(data) => console.log('onSubmit', data)}
      onChange={(data) => console.log('onChange', data)}
    >
      <Field.Name.First
        path="/myLabel"
        transformOut={(value) => {
          return { value, test: 'test' }
        }}
        transformIn={(data: typeof defaultData.myLabel) => {
          return data?.value
        }}
      />

      <Form.SubmitButton top />
    </Form.Handler>
  )
}

export function ErrorMessages() {
  return (
    <Form.Handler locale="en-GB">
      <Flex.Stack>
        <Field.PhoneNumber
          value="abc"
          validateInitially
          validator={() => {
            return new FormError('OrganizationNumber.errorRequired')
          }}
          errorMessages={{
            'OrganizationNumber.errorRequired':
              'Display me, instead of the default message',
          }}
        />
        <Field.String
          validateInitially
          required
          value="abc"
          minLength={4}
          // pattern="[0-9]"
          // validator={() => {
          //   return new FormError('OrganizationNumber.errorRequired')
          // }}
          // errorMessages={{
          //   'OrganizationNumber.errorRequired':
          //     'Display me, instead of the default message',
          // }}
        />
      </Flex.Stack>
    </Form.Handler>
  )
}
