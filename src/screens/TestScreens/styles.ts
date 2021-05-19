import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgPage1: {
    backgroundColor: 'pink',
  },
  bgPage2: {
    backgroundColor: 'orange',
  },
  bgPage3: {
    backgroundColor: 'coral',
  },
  titleBlock: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonBlock: {
    marginTop: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4A80F0',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },

  // Modal screens
  wrapper: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayBlock: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    opacity: 0.2,
  },
  bgModal1: {
    backgroundColor: '#0f2',
  },
  bgModal2: {
    backgroundColor: '#f00',
  },
  bgModal3: {
    backgroundColor: '#4518DB',
  },
  modalTitleText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  modalButtonBlock: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
  },
})
