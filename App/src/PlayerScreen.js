import React, {useRef, useState, useEffect} from 'react';
import {View, Image} from 'react-native';
import SwipeRender from 'react-native-swipe-render';
import VideoPlayer from './VideoPlayer';

export default PlayerScreen = () => {
  [index, setIndex] = useState(0);
  return (
    <SwipeRender
      data={[
        {uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
        {uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
        {uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
        {uri: 'https://vjs.zencdn.net/v/oceans.mp4'},
      ]}
      renderItem={({item, index}) => {
        return (
          <View
            key={'SwipeRender-slide#' + index}
            style={{flex: 1, backgroundColor: '#000'}}>
            <VideoPlayer source={{uri: item.uri}} style={{flex: 1}} />
          </View>
        );
      }}
      // OPTIONAL PROP USAGE.
      index={0} // default 0
      loop={false} // default false
      loadMinimal={true} // default false
      loadMinimalSize={2}
      autoplay={false} // default false
      horizontal={true} // default true
      enableAndroidViewPager={false} // default ScrollView
      // TO ENABLE AndroidViewPager:
      // react-native >= 0.60 - install @react-native-community/viewpager separately
      // react-native < 0.60 - ready to go!
    />
  );
};
