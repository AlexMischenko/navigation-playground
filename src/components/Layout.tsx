import React, { ReactNode } from 'react'
import { ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import type { KeyboardAvoidingViewProps as IKeyboardAvoidingViewProps } from 'react-native'

import { ILayoutProps, IConditionalWrapperProps } from '@types'
import { useTheme } from '@hooks'
import { adjustToWidth } from '@utils/styleHelpers'

const keyboardDefaultBehavior = Platform.OS === 'ios' ? 'padding' : 'height'
const keyboardPositionBehavior = Platform.OS === 'ios' ? 'position' : undefined

const ConditionalWrapper: React.FC<IConditionalWrapperProps> = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children

const Layout: React.FC<ILayoutProps> = ({
  children,
  background,
  backgroundImage,
  edges,
  container,
  keyboardPosition,
  noKeyboard,
}) => {
  const theme = useTheme()

  const containerStyle = { paddingHorizontal: adjustToWidth(container ? 20 : 0) }
  const backgroundStyle = {
    backgroundColor: background || theme.colors.background,
    ...containerStyle,
  }
  const keyboardAvoidProps: IKeyboardAvoidingViewProps = {
    behavior: keyboardPosition ? keyboardPositionBehavior : keyboardDefaultBehavior,
    style: [theme.helpers.flex1, { overflow: 'hidden' }],
    contentContainerStyle: theme.helpers.flex1,
  }

  return (
    <ConditionalWrapper
      condition={!!backgroundImage}
      wrapper={(children: ReactNode) => (
        <ImageBackground
          style={[theme.helpers.flex1, containerStyle]}
          resizeMode="cover"
          source={backgroundImage || { uri: undefined }}
        >
          {children}
        </ImageBackground>
      )}
    >
      <SafeAreaView
        style={[theme.helpers.flex1, !backgroundImage && backgroundStyle]}
        edges={edges || theme.safeAreaEdges.both}
      >
        <ConditionalWrapper
          condition={!noKeyboard}
          wrapper={(children: ReactNode) => (
            <KeyboardAvoidingView {...keyboardAvoidProps}>{children}</KeyboardAvoidingView>
          )}
        >
          {children}
        </ConditionalWrapper>
      </SafeAreaView>
    </ConditionalWrapper>
  )
}

export default Layout
