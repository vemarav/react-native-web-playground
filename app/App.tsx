import * as React from 'react'
import {
  Animated,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const {height} = Dimensions.get('window')

const AnimatedView = Animated.createAnimatedComponent(View)

const App: React.FC<any> = (props: any) => {
  const {} = props
  const opacity: Animated.Value = new Animated.Value(1)

  const animate = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0.4,
        duration: 250,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 250,
      }),
    ]).start()
  }

  return (
    <View style={{height: height}}>
      <TouchableWithoutFeedback onPress={animate}>
        <AnimatedView
          style={{
            height,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: opacity,
          }}>
          <Text>Hello, World!!</Text>
        </AnimatedView>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default App
