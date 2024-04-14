import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import CardContext from './Context/CardContext'
import LoginRoute from './components/LoginRoute'
import ProtectedRoute from './components/ProtectedRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    activeTab: 'HOME',
    savedVideos: [],
  }

  activeTabItem = item => {
    this.setState({activeTab: item})
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const videoObject = savedVideos.find(each => each.id === video.id)
    if (videoObject) {
      this.setState({
        savedVideos: [...savedVideos],
      })
    } else {
      this.setState({savedVideos: [...savedVideos, video]})
    }
  }

  render() {
    const {isDarkTheme, activeTab, savedVideos} = this.state
    return (
      <CardContext.Provider
        value={{
          isDarkTheme,
          activeTab,
          savedVideos,
          activeTabItem: this.activeTabItem,
          onChangeTheme: this.onChangeTheme,
          addVideo: this.addVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <Route path="/bad-path" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </CardContext.Provider>
    )
  }
}

export default App
