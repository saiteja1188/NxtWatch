import React from 'react'

const CartContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  activeTab: '',
  activeTabItem: () => {},
  savedVideos: [],
  addVideo: () => {},
})

export default CartContext
