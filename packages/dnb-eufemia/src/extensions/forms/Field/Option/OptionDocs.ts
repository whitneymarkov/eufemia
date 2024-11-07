import { PropertiesTableProps } from '../../../../shared/types'

export const OptionProperties: PropertiesTableProps = {
  value: {
    doc: 'Value for this option.',
    type: ['string', 'number'],
    status: 'optional',
  },
  title: {
    doc: 'Title for the option. (Overrides `children`)',
    type: ['string', 'React.Node'],
    status: 'optional',
  },
  text: {
    doc: 'Secondary text.',
    type: ['string', 'React.Node'],
    status: 'optional',
  },
  disabled: {
    doc: 'Will disable the option.',
    type: 'boolean',
    status: 'optional',
  },
  children: {
    doc: 'Optional way to provide `title`. (Will be ignored if `title` is used.)',
    type: 'React.Node',
    status: 'optional',
  },
}
