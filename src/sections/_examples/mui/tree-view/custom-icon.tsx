import type { SvgIconProps } from '@mui/material/SvgIcon';

import SvgIcon from '@mui/material/SvgIcon';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';

// ----------------------------------------------------------------------

const TreeViewCollapseIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M12,8 C12.5522847,8 13,8.44771525 13,9 L13,9 L13,11 L15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 Z" />
  </SvgIcon>
);

const TreeViewExpandIcon = (props: SvgIconProps) => (
  <SvgIcon {...props}>
    <path d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L15,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L9,11 Z" />
  </SvgIcon>
);

const TreeViewEndIcon = ({ ...props }: SvgIconProps) => (
  <SvgIcon sx={{ opacity: 0.24, ...props.sx }} {...props}>
    <path d="M18,3 C19.6568542,3 21,4.34314575 21,6 L21,6 L21,18 C21,19.6568542 19.6568542,21 18,21 L18,21 L6,21 C4.34314575,21 3,19.6568542 3,18 L3,18 L3,6 C3,4.34314575 4.34314575,3 6,3 L6,3 Z M18,5 L6,5 C5.44771525,5 5,5.44771525 5,6 L5,6 L5,18 C5,18.5522847 5.44771525,19 6,19 L6,19 L18,19 C18.5522847,19 19,18.5522847 19,18 L19,18 L19,6 C19,5.44771525 18.5522847,5 18,5 L18,5 Z M14,8.99420168 C14.2666375,8.99420168 14.5222334,9.10068735 14.71,9.29 C14.8993127,9.4777666 15.0057983,9.73336246 15.0057983,10 C15.0057983,10.2666375 14.8993127,10.5222334 14.71,10.71 L14.71,10.71 L13.41,12 L14.71,13.29 C14.8993127,13.4777666 15.0057983,13.7333625 15.0057983,14 C15.0057983,14.2666375 14.8993127,14.5222334 14.71,14.71 C14.5222334,14.8993127 14.2666375,15.0057983 14,15.0057983 C13.7333625,15.0057983 13.4777666,14.8993127 13.29,14.71 L13.29,14.71 L12,13.41 L10.71,14.71 C10.5222334,14.8993127 10.2666375,15.0057983 10,15.0057983 C9.73336246,15.0057983 9.4777666,14.8993127 9.29,14.71 C9.10068735,14.5222334 8.99420168,14.2666375 8.99420168,14 C8.99420168,13.7333625 9.10068735,13.4777666 9.29,13.29 L9.29,13.29 L10.59,12 L9.29,10.71 C8.89787783,10.3178778 8.89787783,9.68212217 9.29,9.29 C9.68212217,8.89787783 10.3178778,8.89787783 10.71,9.29 L10.71,9.29 L12,10.59 L13.29,9.29 C13.4777666,9.10068735 13.7333625,8.99420168 14,8.99420168 Z" />
  </SvgIcon>
);

// ----------------------------------------------------------------------

export function CustomIcons() {
  return (
    <SimpleTreeView
      aria-label="customized"
      defaultExpandedItems={['1']}
      slots={{
        expandIcon: TreeViewExpandIcon,
        collapseIcon: TreeViewCollapseIcon,
        endIcon: TreeViewEndIcon,
      }}
      sx={{ overflowX: 'hidden', minHeight: 240, width: 1 }}
    >
      <TreeItem itemId="1" label="Main">
        <TreeItem itemId="2" label="Hello" />
        <TreeItem itemId="3" label="Subtree with children">
          <TreeItem itemId="6" label="Hello" />
          <TreeItem itemId="7" label="Sub-subtree with children">
            <TreeItem itemId="9" label="Child 1" />
            <TreeItem itemId="10" label="Child 2" />
            <TreeItem itemId="11" label="Child 3" />
          </TreeItem>
          <TreeItem itemId="8" label="Hello" />
        </TreeItem>
        <TreeItem itemId="4" label="World" />
        <TreeItem itemId="5" label="Something something" />
      </TreeItem>
    </SimpleTreeView>
  );
}
