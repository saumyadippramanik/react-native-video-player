import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import VideoPlayer from './VideoPlayer';

const URL = ''//Paste your url here

export default class App extends Component {

  state = {
    fullscreen: false,
    videoPlaying: false,
  }

  render() {
    return (
      <View style={styles.container}>
            <VideoPlayer
              disableBack={false}
              disableFullscreen={true}
              fullscreen={this.state.fullscreen}
              toggleFullscreen={() => {}}
              disablePlayPause={true}
              controlTimeout={3600000}
              source={{ uri: URL}}
              ref={ref => {
                this.player = ref;
              }}
              rate={1.0} // 0 is paused, 1 is normal.
              volume={1.0} // 0 is muted, 1 is normal.
              muted={false} // Mutes the audio entirely.
              ignoreSilentSwitch={"ignore"}
              paused={!this.state.videoPlaying}
              repeat={false} // Repeat forever.
              playInBackground={false}
              onLoadStart={() => {}}
              onBuffer={() => {}}
              onProgress={() => {}}
              onEnd={() => {}}
              onError={() => {}}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
