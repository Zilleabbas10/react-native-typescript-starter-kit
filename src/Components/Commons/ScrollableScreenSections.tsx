import * as React from 'react'
import { FlatList } from 'react-native'
import { If } from 'react-if'
import { isEmptyOrNil } from '../../Utils'

type ScreenSectionComponentsList = {
  component: React.ReactNode
}

type ScrollableScreenSections = {
  ScreenSectionComponentsList: Array<ScreenSectionComponentsList>
  onRefreshControl?(setRefreshing): void
  stickyIndices: Array<number>
}

const ScrollableScreenSections = (props: ScrollableScreenSections) => {
  const {
    ScreenSectionComponentsList,
    onRefreshControl,
    stickyIndices
  } = props
  const [refreshing, setRefreshing] = React.useState(false);

  return (
    <If condition={!isEmptyOrNil(ScreenSectionComponentsList)}>
      <FlatList
        renderItem={({ item }) => {
          //@ts-ignore
          return item.component()
        }}
        data={ScreenSectionComponentsList}
        stickyHeaderIndices={stickyIndices}
        showsVerticalScrollIndicator={false}
        {...(!isEmptyOrNil(onRefreshControl) ? { onRefresh: () => onRefreshControl && onRefreshControl(setRefreshing) } : null)}
        {...(!isEmptyOrNil(onRefreshControl) ? { refreshing } : null)}
      />
    </If>
  )
}

export default ScrollableScreenSections;