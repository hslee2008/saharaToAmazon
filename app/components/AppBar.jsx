import * as React from 'react'
import { DrawerLayoutAndroid, Text } from 'react-native'
import { Appbar, Drawer } from 'react-native-paper'
import { Link } from '@react-navigation/native'

const AppBar = ({ navigation, child }) => {
  const drawer = React.useRef(null)

  const navigationView = () => (
    <Drawer.Section title="Sahara To Amazon Mission">
      <Drawer.Item
        icon="camera"
        label="CFP 입력"
        onPress={() => navigation.navigate('CFP 입력')}
      />
      <Drawer.Item
        icon="earth"
        label="My World"
        onPress={() => navigation.navigate('Output')}
      />
      <Drawer.Item
        icon="format-list-bulleted"
        label="Other People"
        onPress={() => navigation.navigate('Home')}
      />
      <Drawer.Item
        icon="cog"
        label="Setting"
        onPress={() => navigation.navigate('Home')}
      />
    </Drawer.Section>
  )

  return (
    <>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        renderNavigationView={navigationView}
      >
        <Appbar.Header>
          <Appbar.Action
            icon="menu"
            onPress={() => drawer.current.openDrawer()}
          />
          <Appbar.Content title="" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>

        {child()}
      </DrawerLayoutAndroid>
    </>
  )
}

export default AppBar
