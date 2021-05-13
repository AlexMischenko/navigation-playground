import React from 'react'
import PropTypes from 'prop-types'
import { ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import theme from '../theme'
import { adjustToWidth } from '../utils/styleHelpers'

const keyboardDefaultBehavior = Platform.OS === 'ios' ? 'padding' : 'height'
const keyboardPositionBehavior = Platform.OS === 'ios' ? 'position' : null

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const Layout = ({
  background,
  backgroundImage,
  edges,
  container,
  children,
  keyboardPosition,
  noKeyboard,
}) => {
  const containerStyle = { paddingHorizontal: adjustToWidth(container ? 20 : 0) }
  const backgroundStyle = {
    backgroundColor: background,
    ...containerStyle,
  }
  const keyboardAvoidProps = {
    behavior: keyboardPosition ? keyboardPositionBehavior : keyboardDefaultBehavior,
    style: [theme.helpers.flex1, { overflow: 'hidden' }],
    contentContainerStyle: theme.helpers.flex1,
  }

  return (
    <ConditionalWrapper
      condition={backgroundImage}
      wrapper={(children) => (
        <ImageBackground
          style={[theme.helpers.flex1, containerStyle]}
          resizeMode="cover"
          source={backgroundImage}
        >
          {children}
        </ImageBackground>
      )}
    >
      <SafeAreaView
        style={[theme.helpers.flex1, !backgroundImage && backgroundStyle]}
        edges={edges}
      >
        <ConditionalWrapper
          condition={!noKeyboard}
          wrapper={(children) => (
            <KeyboardAvoidingView {...keyboardAvoidProps}>{children}</KeyboardAvoidingView>
          )}
        >
          {children}
        </ConditionalWrapper>
      </SafeAreaView>
    </ConditionalWrapper>
  )
}

Layout.propTypes = {
  background: PropTypes.string,
  backgroundImage: PropTypes.any,
  edges: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  noArea: PropTypes.bool,
}

Layout.defaultProps = {
  background: theme.colors.white,
  backgroundImage: undefined,
  edges: theme.safeAreaEdges.both,
}
export default Layout
