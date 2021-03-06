import React from 'react'
import styled from 'react-emotion'

const Prop = styled('div')`
  margin: 20px;
`

const Name = styled('div')`
  font-weight: 500;
`

const Type = styled('span')`
  font-size: 13px;
  padding: 1px 5px;
  margin: 0 10px;
  border-radius: 2px;
  background-color: #ccc;
  color: #333;
`

const Tag = styled('span')`
  font-size: 13px;
  padding: 1px 5px;
  border-radius: 2px;
  background-color: #333;
  color: #fff;
`

const Description = styled('div')`
  font-size: 14px;
  margin: 10px;
`

const Param = styled('div')`
  font-size: 14px;
  margin: 10px 0;
`

export default () => (
  <div>
    <Prop>
      <Name>
        children
        <Type>{'function({})'}</Type>
        <Tag>required</Tag>
      </Name>
      <Description>
        Render whatever you want, it's called with an object with the following
        properties:
      </Description>
      <Param>
        <Type>registerContainer(ref)</Type>
        pass to the container's <Tag>ref</Tag> prop
      </Param>
      <Param>
        <Type>registerSticky(ref)</Type>
        pass to the <Tag>ref</Tag> prop of whatever node within the container if
        you want to make it sticky
      </Param>
      <Param>
        <Type>updateState()</Type>
        update the sticky state manually, this useful if your content is resizable
      </Param>
      <Param>
        <Type>getStickyOffsets()</Type>
        return the sticky elements' offsets
      </Param>
      <Param>
        <Type>scrollToIndex(index)</Type>
        scroll to the specific sticky element by index
      </Param>
      <Param>
        <Type>scrollTo(offset)</Type>
        scroll to the specific offset
      </Param>
    </Prop>
    <Prop>
      <Name>
        stickyClassName
        <Type>string</Type>
      </Name>
      <Description>
        The className to be attached to the element when it's sticky
      </Description>
    </Prop>
    <Prop>
      <Name>
        onSticky
        <Type>function(index)</Type>
      </Name>
      <Description>
        It's called when a element becomes sticky, <Tag>-1</Tag> means there is
        no sticky element
      </Description>
    </Prop>
  </div>
)
