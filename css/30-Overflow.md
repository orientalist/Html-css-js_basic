# Overflow
The CSS `overflow` property controls what happens to content that is too big to fit into an area.

## CSS overflow
The `overflow` property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specific area.
1. Values:
   1. `visible` -Default.The overflow is not clipped.The content renders outside the element's box.
   2. `hidden` -The overflow is clipped ,and the rest of the content will be invisible.
   3. `scroll` -The overflow is clipped, and a scrollbar is added to see the rest of the content.
   4. `auto` -Similar to `scroll` ,but it adds scrollbars only when necessary.

> **Note**:The overflow property only works for **block element** with a specific **height**.
***

## `overflow-x` and `overflow-y`
The `overflow-x` and `overflow-y` properties specifies whether to change the overflow of content just **horizontal** or **vertically**(or both):
