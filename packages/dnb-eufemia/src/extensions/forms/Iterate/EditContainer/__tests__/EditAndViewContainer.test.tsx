import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import IterateItemContext from '../../IterateItemContext'
import EditContainer from '../EditContainer'
import ViewContainer from '../../ViewContainer'
import { Field, Form, Iterate } from '../../..'
import userEvent from '@testing-library/user-event'
import nbNO from '../../../constants/locales/nb-NO'

const tr = {
  viewContainer: nbNO['nb-NO'].IterateViewContainer,
  editContainer: nbNO['nb-NO'].IterateEditContainer,
}

describe('EditContainer and ViewContainer', () => {
  it('should switch mode on pressing edit button', async () => {
    render(
      <Iterate.Array value={['foo', 'bar']}>
        <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
        <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
      </Iterate.Array>
    )

    const elements = document.querySelectorAll(
      '.dnb-forms-iterate__element'
    )
    expect(elements).toHaveLength(2)

    const [firstElement, secondElement] = Array.from(elements)

    {
      const [viewBlock, editBlock] = Array.from(
        firstElement.querySelectorAll('.dnb-forms-section-block')
      )
      expect(viewBlock).toHaveClass('dnb-forms-section-view-block')
      expect(editBlock).toHaveClass('dnb-forms-section-edit-block')

      // Switch to edit mode
      fireEvent.click(viewBlock.querySelector('button'))
      expect(firstElement).toHaveTextContent('Edit Content')

      // Switch to view mode
      fireEvent.click(editBlock.querySelector('button'))
      expect(firstElement).toHaveTextContent('View Content')

      // Switch to edit mode
      fireEvent.click(viewBlock.querySelector('button'))
      expect(firstElement).toHaveTextContent('Edit Content')
    }

    {
      const [viewBlock, editBlock] = Array.from(
        secondElement.querySelectorAll('.dnb-forms-section-block')
      )
      expect(viewBlock).toHaveClass('dnb-forms-section-view-block')
      expect(editBlock).toHaveClass('dnb-forms-section-edit-block')

      // Switch to edit mode
      fireEvent.click(viewBlock.querySelector('button'))
      expect(secondElement).toHaveTextContent('Edit Content')

      // Switch to view mode
      fireEvent.click(editBlock.querySelector('button'))
      expect(secondElement).toHaveTextContent('View Content')

      // Switch to edit mode
      fireEvent.click(viewBlock.querySelector('button'))
      expect(secondElement).toHaveTextContent('Edit Content')
    }

    expect(firstElement).toHaveTextContent('Edit Content')
    expect(secondElement).toHaveTextContent('Edit Content')
  })

  it('should switch mode from view to edit when a field errors', async () => {
    let containerMode = null

    const ContextConsumer = () => {
      const context = React.useContext(IterateItemContext)
      containerMode = context.containerMode

      return null
    }

    render(
      <Form.Handler>
        <Iterate.Array value={['0']}>
          <EditContainer>
            <Field.String
              itemPath="/"
              validator={(value) => {
                if (value === '01') {
                  return new Error('error')
                }
              }}
            />
          </EditContainer>
          <ViewContainer>content</ViewContainer>
          <ContextConsumer />
        </Iterate.Array>
      </Form.Handler>
    )

    expect(containerMode).toBe('view')

    const input = document.querySelector('input')
    await userEvent.type(input, '1')

    expect(containerMode).toBe('edit')
  })

  it('should switch mode from view to edit on error during submit', async () => {
    let containerMode = null

    const ContextConsumer = () => {
      const context = React.useContext(IterateItemContext)
      containerMode = context.containerMode

      return null
    }

    render(
      <Form.Handler>
        <Iterate.Array value={['0']}>
          <EditContainer>
            <Field.String
              itemPath="/"
              onBlurValidator={(value) => {
                if (value === '01') {
                  return new Error('error')
                }
              }}
            />
          </EditContainer>
          <ViewContainer>content</ViewContainer>
          <ContextConsumer />
        </Iterate.Array>
        <Form.SubmitButton />
      </Form.Handler>
    )

    expect(containerMode).toBe('view')

    const input = document.querySelector('input')
    await userEvent.type(input, '1')

    expect(containerMode).toBe('view')

    const button = document.querySelector('button')
    await userEvent.click(button)

    expect(containerMode).toBe('edit')
  })

  it('should set focus on __element when containerMode changes', async () => {
    render(
      <Iterate.Array value={['foo', 'bar']}>
        <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
        <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
      </Iterate.Array>
    )

    const elements = document.querySelectorAll(
      '.dnb-forms-iterate__element'
    )
    expect(elements).toHaveLength(2)

    const firstElement = elements[0]
    const [viewBlock, editBlock] = Array.from(
      firstElement.querySelectorAll('.dnb-forms-section-block')
    )
    const [editButton] = Array.from(viewBlock.querySelectorAll('button'))
    const [cancelButton] = Array.from(editBlock.querySelectorAll('button'))

    expect(viewBlock).toHaveClass('dnb-forms-section-view-block')
    expect(editBlock).toHaveClass('dnb-forms-section-edit-block')

    expect(document.body).toHaveFocus()

    // Switch to edit mode
    fireEvent.click(editButton)
    expect(firstElement).toHaveTextContent('Edit Content')

    await waitFor(() => {
      expect(firstElement).toHaveFocus()
    })

    // Reset focus, so we can test focus during close
    ;(document.activeElement as HTMLElement).blur()

    // Switch to view mode
    fireEvent.click(cancelButton)
    expect(firstElement).toHaveTextContent('View Content')

    await waitFor(() => {
      expect(firstElement).toHaveFocus()
    })

    // Reset focus, so we can test focus during close
    ;(document.activeElement as HTMLElement).blur()

    // Switch to edit mode
    fireEvent.click(editButton)
    expect(firstElement).toHaveTextContent('Edit Content')

    await waitFor(() => {
      expect(firstElement).toHaveFocus()
    })
  })

  it('should set focus on other item __element when containerMode gets removed', async () => {
    render(
      <Iterate.Array value={['foo', 'bar']}>
        <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
        <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
      </Iterate.Array>
    )

    const elements = document.querySelectorAll(
      '.dnb-forms-iterate__element'
    )
    expect(elements).toHaveLength(2)

    const firstElement = elements[0]
    const [viewBlock, editBlock] = Array.from(
      firstElement.querySelectorAll('.dnb-forms-section-block')
    )
    const [, removeButton] = Array.from(
      viewBlock.querySelectorAll('button')
    )

    expect(viewBlock).toHaveClass('dnb-forms-section-view-block')
    expect(editBlock).toHaveClass('dnb-forms-section-edit-block')

    expect(document.body).toHaveFocus()

    // Remove the element
    fireEvent.click(removeButton)
    expect(removeButton).toHaveTextContent(tr.editContainer.removeButton)

    await waitFor(() => {
      const elements = document.querySelectorAll(
        '.dnb-forms-iterate__element'
      )
      expect(elements).toHaveLength(1)
      expect(elements[0]).toHaveFocus()
    })
  })

  it('should set variant to "outline" when variant is not set', async () => {
    render(
      <Iterate.Array value={['foo']}>
        <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
        <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
      </Iterate.Array>
    )

    const element = document.querySelector('.dnb-forms-iterate__element')
    const [viewBlock, editBlock] = Array.from(
      element.querySelectorAll('.dnb-forms-section-block')
    )
    expect(viewBlock).toHaveClass(
      'dnb-forms-section-block--variant-outline'
    )
    expect(editBlock).toHaveClass(
      'dnb-forms-section-block--variant-outline'
    )
  })

  it('should set variant to "basic" when variant is set to "basic"', async () => {
    render(
      <Iterate.Array value={['foo', 'bar']}>
        <Iterate.ViewContainer variant="basic">
          View Content
        </Iterate.ViewContainer>
        <Iterate.EditContainer variant="basic">
          Edit Content
        </Iterate.EditContainer>
      </Iterate.Array>
    )

    const element = document.querySelector('.dnb-forms-iterate__element')
    const [viewBlock, editBlock] = Array.from(
      element.querySelectorAll('.dnb-forms-section-block')
    )
    expect(viewBlock).toHaveClass('dnb-forms-section-block--variant-basic')
    expect(editBlock).toHaveClass('dnb-forms-section-block--variant-basic')
  })

  it('should validate on done button click', async () => {
    const onChange = jest.fn()

    render(
      <Form.Handler>
        <Iterate.Array value={['']} onChange={onChange}>
          <EditContainer>
            <Field.String required itemPath="/" />
          </EditContainer>
          <ViewContainer>content</ViewContainer>
        </Iterate.Array>
      </Form.Handler>
    )

    expect(
      document.querySelector('.dnb-form-status')
    ).not.toBeInTheDocument()

    const [doneButton, cancelButton, editButton] = Array.from(
      document.querySelectorAll('button')
    )
    expect(doneButton).toHaveTextContent(tr.editContainer.doneButton)
    expect(cancelButton).toHaveTextContent(tr.editContainer.cancelButton)
    expect(editButton).toHaveTextContent(tr.viewContainer.editButton)
    await userEvent.click(doneButton)

    expect(document.querySelector('.dnb-form-status')).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledTimes(0)

    await userEvent.click(cancelButton)

    expect(document.querySelector('.dnb-form-status')).toBeInTheDocument()

    await userEvent.click(editButton)

    expect(document.querySelector('.dnb-form-status')).toBeInTheDocument()

    await userEvent.click(doneButton)

    expect(document.querySelector('.dnb-form-status')).toBeInTheDocument()

    await userEvent.type(document.querySelector('input'), 'foo')
    await userEvent.click(doneButton)

    await waitFor(() => {
      expect(
        document.querySelector('.dnb-form-status')
      ).not.toBeInTheDocument()
    })
  })

  describe('containerMode', () => {
    it('should set all items to edit mode', async () => {
      let containerMode = null

      const ContextConsumer = () => {
        const context = React.useContext(IterateItemContext)
        containerMode = context.containerMode

        return null
      }

      render(
        <Iterate.Array value={['foo', 'bar']} containerMode="edit">
          <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
          <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
          <ContextConsumer />
        </Iterate.Array>
      )

      expect(containerMode).toBe('edit')

      const elements = document.querySelectorAll(
        '.dnb-forms-iterate__element'
      )
      expect(elements).toHaveLength(2)

      const [firstElement, secondElement] = Array.from(elements)

      {
        const [viewBlock, editBlock] = Array.from(
          firstElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(viewBlock).toHaveClass('dnb-forms-section-view-block')
        expect(viewBlock).toHaveClass('dnb-height-animation--hidden')
        expect(editBlock).toHaveClass('dnb-forms-section-edit-block')
        expect(editBlock).not.toHaveClass('dnb-height-animation--hidden')
      }

      {
        const [viewBlock, editBlock] = Array.from(
          secondElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(viewBlock).toHaveClass('dnb-forms-section-view-block')
        expect(viewBlock).toHaveClass('dnb-height-animation--hidden')
        expect(editBlock).toHaveClass('dnb-forms-section-edit-block')
        expect(editBlock).not.toHaveClass('dnb-height-animation--hidden')
      }

      expect(containerMode).toBe('edit')
    })

    it('should not contain toolbar when "hideContainerToolbarWhen" returns true', async () => {
      render(
        <Iterate.Array
          value={['foo', 'bar', 'baz']}
          hideContainerToolbarWhen={(index) => index === 0}
        >
          <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
          <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
        </Iterate.Array>
      )

      const elements = document.querySelectorAll(
        '.dnb-forms-iterate__element'
      )
      expect(elements).toHaveLength(3)

      const [firstElement, secondElement, thirdElement] =
        Array.from(elements)

      {
        const [viewBlock, editBlock] = Array.from(
          firstElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(editBlock.querySelectorAll('button')).toHaveLength(0)
        expect(viewBlock.querySelectorAll('button')).toHaveLength(0)
      }

      {
        const [viewBlock, editBlock] = Array.from(
          secondElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(editBlock.querySelectorAll('button')).toHaveLength(2)
        expect(viewBlock.querySelectorAll('button')).toHaveLength(2)
      }

      {
        const [viewBlock, editBlock] = Array.from(
          thirdElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(editBlock.querySelectorAll('button')).toHaveLength(2)
        expect(viewBlock.querySelectorAll('button')).toHaveLength(2)
      }
    })

    it('should hide remove button when "minimumContainerItems" is set to 1 and there is only one item', () => {
      const { rerender } = render(
        <Iterate.Array value={['foo']} minimumContainerItems={1}>
          <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
          <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
        </Iterate.Array>
      )

      {
        const elements = document.querySelectorAll(
          '.dnb-forms-iterate__element'
        )
        expect(elements).toHaveLength(1)

        const [firstElement] = Array.from(elements)
        const [viewBlock, editBlock] = Array.from(
          firstElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(editBlock.querySelectorAll('button')).toHaveLength(1)
        expect(viewBlock.querySelectorAll('button')).toHaveLength(1)
        expect(editBlock.querySelectorAll('button')[0]).toHaveTextContent(
          tr.editContainer.doneButton
        )
        expect(viewBlock.querySelectorAll('button')[0]).toHaveTextContent(
          tr.viewContainer.editButton
        )
      }

      rerender(
        <Iterate.Array value={['foo', 'bar']} minimumContainerItems={1}>
          <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
          <Iterate.EditContainer>Edit Content</Iterate.EditContainer>
        </Iterate.Array>
      )

      {
        const elements = document.querySelectorAll(
          '.dnb-forms-iterate__element'
        )
        expect(elements).toHaveLength(2)

        const [firstElement] = Array.from(elements)
        const [viewBlock, editBlock] = Array.from(
          firstElement.querySelectorAll('.dnb-forms-section-block')
        )
        expect(editBlock.querySelectorAll('button')).toHaveLength(2)
        expect(viewBlock.querySelectorAll('button')).toHaveLength(2)
      }
    })

    it('should validate on submit', () => {
      render(
        <Form.Handler>
          <Iterate.Array value={['']}>
            <EditContainer>
              <Field.String required itemPath="/" />
            </EditContainer>
            <ViewContainer>content</ViewContainer>
          </Iterate.Array>
        </Form.Handler>
      )

      expect(
        document.querySelector('.dnb-form-status')
      ).not.toBeInTheDocument()

      const input = document.querySelector('input')
      fireEvent.submit(input)

      expect(
        document.querySelector('.dnb-form-status')
      ).toBeInTheDocument()
    })

    it('should open in "edit" without focusing', async () => {
      const containerMode = {}

      const ContextConsumer = () => {
        const context = React.useContext(IterateItemContext)
        containerMode[context.index] = context.containerMode

        return null
      }

      render(
        <Form.Handler data={['']}>
          <Iterate.Array path="/">
            <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
            <Iterate.EditContainer>
              <Field.String required itemPath="/" />
            </Iterate.EditContainer>
            <ContextConsumer />
          </Iterate.Array>

          <Iterate.PushButton path="/" pushValue={'bar'} />
        </Form.Handler>
      )

      expect(containerMode[0]).toBe('edit')
      expect(document.body).toHaveFocus()
    })

    it('should set first item to "view" mode when a new is pushed to the array', async () => {
      const containerMode = {}

      const ContextConsumer = () => {
        const context = React.useContext(IterateItemContext)
        containerMode[context.index] = context.containerMode

        return null
      }

      render(
        <Form.Handler>
          <Iterate.Array path="/" defaultValue={[null]}>
            <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
            <Iterate.EditContainer>
              <Field.String itemPath="/" required />
            </Iterate.EditContainer>
            <ContextConsumer />
          </Iterate.Array>

          <Iterate.PushButton path="/" pushValue={null} />
        </Form.Handler>
      )

      expect(containerMode[0]).toBe('edit')

      const input = document.querySelector('input')
      await userEvent.type(input, 'foo')

      await userEvent.click(
        document.querySelector('button.dnb-forms-iterate-push-button')
      )

      const blocks = Array.from(
        document.querySelectorAll('.dnb-forms-section-block')
      )
      expect(blocks).toHaveLength(4)
      const [, secondBlock] = blocks

      expect(containerMode[1]).toBe('edit')

      await userEvent.click(secondBlock.querySelector('button'))

      await waitFor(() => {
        expect(containerMode[0]).toBe('view')
        expect(containerMode[1]).toBe('edit')
      })
    })

    it('should keep first item in "edit" mode when there is an error', async () => {
      const containerMode = {}

      const ContextConsumer = () => {
        const context = React.useContext(IterateItemContext)
        containerMode[context.index] = context.containerMode

        return null
      }

      render(
        <Form.Handler data={[null]}>
          <Iterate.Array path="/">
            <Iterate.ViewContainer>View Content</Iterate.ViewContainer>
            <Iterate.EditContainer>
              <Field.String itemPath="/" required />
            </Iterate.EditContainer>
            <ContextConsumer />
          </Iterate.Array>

          <Iterate.PushButton path="/" pushValue={null} />
        </Form.Handler>
      )

      expect(containerMode[0]).toBe('edit')

      await userEvent.click(
        document.querySelector('button.dnb-forms-iterate-push-button')
      )

      const blocks = Array.from(
        document.querySelectorAll('.dnb-forms-section-block')
      )
      expect(blocks).toHaveLength(4)
      const [, secondBlock] = blocks

      expect(containerMode[0]).toBe('edit')
      expect(containerMode[1]).toBe('edit')

      await userEvent.click(secondBlock.querySelector('button'))

      expect(containerMode[0]).toBe('edit')
      expect(containerMode[1]).toBe('edit')
    })
  })
})
