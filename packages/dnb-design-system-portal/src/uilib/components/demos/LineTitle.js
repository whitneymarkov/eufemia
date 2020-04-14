/**
 * ATTENTION: This file is auto generated by using "makeDemosFactory".
 * Do not change the content!
 *
 * "Component" Demo setup
 * Ready for imporing in page
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import ItemWrapper from '../../../shared/parts/uilib/ItemWrapper'
import DemoComponent, {
  Example as CodeComponent
} from 'dnb-ui-lib/src/components/line-title/Example'
import Description from 'dnb-ui-lib/src/components/line-title/description.md'
import Details from 'dnb-ui-lib/src/components/line-title/details.md'
import ExampleCode from 'raw-loader!../examples/LineTitle.txt'

export default class LineTitleDemo extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    Description: PropTypes.func,
    Details: PropTypes.func,
    DemoComponent: PropTypes.func,
    CodeComponent: PropTypes.func,
    hideTabs: PropTypes.bool
  }
  static defaultProps = {
    title: 'LineTitle',
    id: 'line-title',
    ExampleCode,
    Description,
    Details,
    DemoComponent,
    CodeComponent,
    callback: CodeComponent.AdditionalCallback || null,
    hideTabs: false
  }
  render() {
    return <ItemWrapper {...LineTitleDemo.defaultProps} {...this.props} />
  }
}
