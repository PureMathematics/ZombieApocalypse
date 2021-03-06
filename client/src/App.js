import React from 'react';
import { Page, Toolbar, ToolbarButton, Icon, SplitterContent, Splitter, SplitterSide, List, ListHeader, ListItem } from 'react-onsenui';

import Gear from './components/Gear';
import Geography from './components/Geography';
import Zombies from './components/Zombies';
import Home from './components/Home';
import Combat from './components/Combat';
import Terrain from './components/Terrain';
import Rules from './components/Rules';
import Credits from './components/Credits';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/material-design-iconic-font/css/material-design-iconic-font.min.css';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'menu-open':
      return { ...state, menuOpen: true };
    case 'menu-close':
      return { ...state, menuOpen: false };
    case 'change-current-page':
      return { ...state, currentPage: action.page, menuOpen: false };
    default:
      return state;
  }
};

const initialState = {
  currentPage: 'Home',
  menuOpen: false,
};

function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const _renderToolbar = (pageTitle) => {
    return (
      <Toolbar>
        <div className='left'>
          <ToolbarButton onClick={state.menuOpen ? closeMenu : openMenu}>
            <Icon icon={{default: 'md-menu'}} />
          </ToolbarButton>
        </div>
        <div className='center'>
          {pageTitle}
        </div>
      </Toolbar>
    );
  };

  const closeMenu = () => {
    dispatch({ type: 'menu-close' });
  };

  const openMenu = () => {
    dispatch({ type: 'menu-open' });
  };

  const _renderPage = () => {
    switch (state.currentPage) {
      case 'Combat':
        return <Combat />;
      case 'Gear':
        return <Gear />;
      case 'Zombies':
        return <Zombies />;
      case 'Geography':
        return <Geography />;
      case 'Terrain':
        return <Terrain />;
      case 'Rules':
        return <Rules />;
      case 'Credits':
        return <Credits />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='main'>
      <Page renderToolbar={() => _renderToolbar(state.currentPage)}>
        <Splitter>
          <SplitterSide
            side='left'
            isOpen={state.menuOpen}
            onClose={closeMenu}
            onOpen={openMenu}
            collapse={true}
            width={240}
            swipeable={true}>
            <Page>
              <List
                dataSource={[
                  'Home',
                  'Combat',
                  'Geography',
                  'Gear',
                  'Rules',
                  'Terrain',
                  'Zombies',
                  'Credits',
                ]}
                renderRow={(item) =>
                  <ListItem
                    onClick={() => dispatch({
                      type: 'change-current-page',
                      page: item,
                    })}
                    key={`menu-item-${item}`}
                    modifier='longdivider'
                    tappable>
                    {item}
                  </ListItem>
                }
              />
            </Page>
          </SplitterSide>

          <SplitterContent>
            <div style={{
              height: '100%',
              overflowY: 'auto',
              backgroundColor: 'black',
            }}>
              {_renderPage()}

            </div>
          </SplitterContent>
        </Splitter>
      </Page>
    </div>
  );
}

export default App;
