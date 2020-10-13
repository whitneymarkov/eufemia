/**
 * UI lib Component Example
 *
 */

import React from 'react'
import ComponentBox from 'Src/shared/tags/ComponentBox'
import {
  bell_medium as BellMedium,
  bell as Bell
} from 'dnb-ui-lib/src/icons'
import * as PrimaryIconsMedium from 'dnb-ui-lib/src/icons/primary_icons_medium'
import * as SecondaryIconsMedium from 'dnb-ui-lib/src/icons/secondary_icons_medium'

export const IconDefault = () => (
  <ComponentBox data-dnb-test="icon-default" scope={{ Bell, BellMedium }}>
    {
      /* @jsx */ `
<Icon icon={Bell} title="Give Icons a Title, or ..." />
<Icon icon={BellMedium} aria-hidden />
<Bell title="I'm not responsive!" />{/* <- Not responsive! */}
`
    }
  </ComponentBox>
)

export const IconBorder = () => (
  <ComponentBox data-dnb-test="icon-border" scope={{ Bell, BellMedium }}>
    {
      /* @jsx */ `
<P>
  <Icon border="true" icon={Bell} right />
  <Icon border="true" icon={BellMedium} size="medium" right />
  <IconPrimary border="true" icon={"information"} right />
  <IconPrimary border="true" icon={"information"} size="medium" right />
  <Button
    icon={<IconPrimary icon="add" border />}
    text="Button"
  />
</P>
`
    }
  </ComponentBox>
)

export const IconInheritSized = () => (
  <ComponentBox
    data-dnb-test="icon-inherit-sized"
    scope={{ Bell, BellMedium }}
  >
    {
      /* @jsx */ `
<h1 className="dnb-h--xx-large">
  h1 with auto sized{' '}
  <Icon icon={BellMedium} size="auto" aria-hidden />{' '}
  icon
</h1>
`
    }
  </ComponentBox>
)

export const IconMedium = () => {
  if (typeof window === 'undefined' || !window.IS_TEST) {
    return null
  }

  return (
    <ComponentBox
      data-dnb-test="icon-medium"
      scope={{ Bell, BellMedium }}
      title="Explicit defined size: medium"
    >
      {
        /* @jsx */ `
<Icon icon={BellMedium} size="16" title="force default size" />
<Icon icon={BellMedium} title="is medium anyway" />
<Icon icon={Bell} size="medium" title="force medium size" />
<Icon icon={Bell} size="24" title="custom size: size=24" />
<Icon
  icon={Bell}
  width="24"
  height="24"
  title="not responsive"
/>
`
      }
    </ComponentBox>
  )
}

export const IconPrimary = () => {
  if (typeof window === 'undefined' || !window.IS_TEST) {
    return null
  }

  return (
    <ComponentBox
      data-dnb-test="icon-all-primary"
      scope={{ PrimaryIconsMedium }}
      title="All **primary** icons listed as medium sized icons"
      noFragments={false}
    >
      {
        /* @jsx */ `
() => {
  const Icons = () => Object.entries(PrimaryIconsMedium).map(
    ([name, SvgMedium]) => (
      <Icon
        title={name}
        key={name}
        icon={SvgMedium}
        size="medium"
        right="small"
        bottom="small"
      />
    )
  )
  return <Icons />
}
`
      }
    </ComponentBox>
  )
}

export const IconSecondary = () => {
  if (typeof window === 'undefined' || !window.IS_TEST) {
    return null
  }

  return (
    <ComponentBox
      data-dnb-test="icon-all-secondary"
      scope={{ SecondaryIconsMedium }}
      title="All **secondary** icons listed as medium sized icons"
      noFragments={false}
    >
      {
        /* @jsx */ `
() => {
  const Icons = () => Object.entries(SecondaryIconsMedium).map(
    ([name, SvgMedium]) => (
      <Icon
        title={name}
        key={name}
        icon={SvgMedium}
        size="medium"
        right="small"
        bottom="small"
      />
    )
  )
  return <Icons />
}
`
      }
    </ComponentBox>
  )
}

export default function IconTests() {
  return (
    <>
      <IconMedium />
      <IconPrimary />
      <IconSecondary />
    </>
  )
}
