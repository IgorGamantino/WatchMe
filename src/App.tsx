import { SideBar } from './components/SideBar';
 import { Content } from './components/Content';
 import {GenereProvider} from './hooks/useGenre'


import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  return (
    <GenereProvider>
     <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
       
        <Content/>
    </div>
  </GenereProvider>
  )
}
 
