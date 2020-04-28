import * as React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import {SectionTitle, IconWithBadge} from '../../Components';
import {If} from 'react-if';
import {ChevronRightSvgIcon} from '../SvgIcons';
import {Colors, Metrics, Fonts} from '../../Themes';

type SectionsHeaderProps = {
  title: string;
  onLinkPress?(): any;
  showLink?: boolean;
};
const SectionHeader = (props: SectionsHeaderProps) => {
  const {title = '', onLinkPress, showLink = false} = props;

  return (
    <View style={{flexDirection: 'row'}}>
      <SectionTitle>{title}</SectionTitle>
      <If condition={showLink}>
        <TouchableOpacity style={{flex: 1}} onPress={onLinkPress}>
          <View style={{flexDirection: 'row'}}>
            <SectionTitle
              fontSize={Fonts.size.small}
              fontWeight={Platform.OS === 'ios' ? '700' : '400'}
              textAlign="right"
              color={Colors.blue}>
              See All
            </SectionTitle>
            <IconWithBadge
              useSvgIcon
              iconStyle={{
                left: Metrics.smallMargin,
                top: Platform.OS === 'android' ? 5 : 3.5,
              }}
              RenderSvgIcon={() => (
                <ChevronRightSvgIcon scale={0.45} fillColor={Colors.blue} />
              )}
            />
          </View>
        </TouchableOpacity>
      </If>
    </View>
  );
};

export default SectionHeader;
