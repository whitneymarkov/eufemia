/**
 * dnb-ui-lib Component Story
 *
 */

import React from 'react'
import { Wrapper, Box } from '../helpers'
import styled from '@emotion/styled'

import Provider from '../../src/shared/Provider'
import {
  ToggleButton,
  Accordion,
  // Input,
  IconPrimary,
  Heading
} from '../../src/components'

import { P } from '../../src/elements'

export default {
  title: 'Eufemia/Components/Accordion'
}

const TestStyles = styled.div`
  .dnb-accordion-group--single-container {
    background-color: turquoise;
  }
`

export const AccordionSandbox = () => {
  return (
    <Wrapper>
      <Box>
        <Heading size="xx-large">Accordion</Heading>
        <TestStyles>
          <AccordionWithContainer />
        </TestStyles>
      </Box>

      <Box>
        <Accordion
          expanded
          remember_state
          id="single-accordion"
          title="Accordion title"
          icon="bell"
          icon_position="right"
        >
          remember_state Accordion content
        </Accordion>
      </Box>

      <Box>
        <Accordion.Group expanded>
          <Accordion expanded={false}>
            <Accordion.Header>Accordion title 1</Accordion.Header>
            <Accordion.Content top="x-large">
              <P>
                Sociis sapien sociosqu vel sollicitudin accumsan laoreet
                gravida himenaeos nostra mollis volutpat bibendum convallis
                cum condimentum dictumst blandit rutrum vehicula
              </P>
            </Accordion.Content>
          </Accordion>
          <Accordion top>
            <Accordion.Header>Accordion title 2</Accordion.Header>
            <Accordion.Content>
              <P>
                Nec sit mattis natoque interdum sagittis cubilia nibh
                nullam etiam
              </P>
            </Accordion.Content>
          </Accordion>
        </Accordion.Group>
      </Box>

      <Box>
        <Provider accordion={{ expanded: true, disabled: true }}>
          <Accordion expanded={false}>
            <Accordion.Header>Accordion title</Accordion.Header>
            <Accordion.Content>
              <P>
                Sociis sapien sociosqu vel sollicitudin accumsan laoreet
                gravida himenaeos nostra mollis volutpat bibendum convallis
                cum condimentum dictumst blandit rutrum vehicula
              </P>
            </Accordion.Content>
          </Accordion>
          <Accordion top>
            <Accordion.Header>Accordion title</Accordion.Header>
            <Accordion.Content>
              <P>
                Nec sit mattis natoque interdum sagittis cubilia nibh
                nullam etiam
              </P>
            </Accordion.Content>
          </Accordion>
        </Provider>
      </Box>

      <Box>
        <Accordion
          group="unique-id"
          left_component={<IconPrimary icon="bell" />}
        >
          <Accordion.Header>Accordion title</Accordion.Header>
          <Accordion.Content>
            <P>
              Sociis sapien sociosqu vel sollicitudin accumsan laoreet
              gravida himenaeos nostra mollis volutpat bibendum convallis
              cum condimentum dictumst blandit rutrum vehicula
            </P>
          </Accordion.Content>
        </Accordion>
        <Accordion top expanded={true} group="unique-id">
          <Accordion.Header>Accordion title</Accordion.Header>
          <Accordion.Content>
            <P>
              Nec sit mattis natoque interdum sagittis cubilia nibh nullam
              etiam
            </P>
          </Accordion.Content>
        </Accordion>
      </Box>
    </Wrapper>
  )
}

function AccordionWithContainer() {
  const ref1 = React.useRef()
  const ref2 = React.useRef()
  const [changeHeight] = React.useState(() => ({ ref1, ref2 }))
  return (
    <Accordion.Group
      variant="outlined"
      prevent_rerender
      // prevent_rerender_conditional
      single_container
      remember_state
      // prerender
      // allow_close_all
      id="gorup-id"
    >
      <Accordion
        bottom
        id="remembered-state-1"
        title="Title1"
        description="Description1"
        expanded={true}
        // element="h2"
        // heading
        // heading={Heading}
        // heading_level="3"
      >
        <Accordion.Header title="Title2" description="Description2">
          {/* Title 3 string */}
          <Accordion.Header.Title key="title">
            Title 3
          </Accordion.Header.Title>
          <Accordion.Header.Description>
            Description 3
          </Accordion.Header.Description>
          {/* <Accordion.Header.Icon key="icon" /> */}
        </Accordion.Header>
        <Accordion.Content
          left="xx-large"
          top="medium"
          instance={changeHeight.ref1}
        >
          <ChangingContent changeHeight={changeHeight.ref1}>
            <div
              style={{
                height: '10rem',
                background: 'var(--color-sea-green-30)'
              }}
            >
              <P top bottom="xx-large">
                Simulation of content height
              </P>
            </div>
          </ChangingContent>
        </Accordion.Content>
      </Accordion>
      <Accordion
        icon_position="right"
        id="remembered-state-2"
        // top="x-large"
      >
        <Accordion.Header>
          <Accordion.Header.Container>
            <IconPrimary icon="bell" />
          </Accordion.Header.Container>
          <Accordion.Header.Title>Accordion title</Accordion.Header.Title>
        </Accordion.Header>
        <Accordion.Content
          left="xx-large"
          top="medium"
          instance={changeHeight.ref2}
        >
          <ChangingContent changeHeight={changeHeight.ref2}>
            <div
              style={{
                height: '20rem',
                background: 'var(--color-sand-yellow)'
              }}
            >
              <P top bottom="xx-large">
                Simulation of content height
              </P>
            </div>
          </ChangingContent>
        </Accordion.Content>
      </Accordion>
    </Accordion.Group>
  )
}
function ChangingContent({ changeHeight, children }) {
  const [contentSize, changeContentSize] = React.useState(false)
  React.useEffect(() => {
    changeHeight.current.setContainerHeight()
  }, [changeHeight, contentSize])
  return (
    <>
      <ToggleButton
        checked={contentSize}
        on_change={() => {
          changeContentSize((s) => !s)
        }}
        bottom
      >
        Toggle content size
      </ToggleButton>

      {contentSize ? children : null}
    </>
  )
}
