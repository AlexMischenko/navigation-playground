import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  loginPageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleBlock: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  formBlock: {
    paddingHorizontal: 30,
  },
  formInputBlock: {
    marginTop: 20,
  },
  formInput: {
    height: 60,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#EDF2F4',
  },
  submitButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 30,
    borderRadius: 10,
    backgroundColor: '#34C759',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 14,
  },

  footerBlock: {
    position: 'absolute',
    bottom: 50, // TODO: Fix on iOS/Android
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerButton: {
    paddingBottom: 20,
  },
  footerText: {
    fontSize: 15,
  },
  pressableText: {
    color: '#4A80F0',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
})
