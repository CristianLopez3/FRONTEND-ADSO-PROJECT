
import Sidebar, {SidebarItem} from '../components/layout/Sidebar/Sidebar'
import { LuUserCircle } from "react-icons/lu";

const Test = () => {
  return (
    <main className='App'>
      <Sidebar>
        <SidebarItem path="/dashboard"  icon={<LuUserCircle size={20} />} text='Sser' active={false} alert  />
        <SidebarItem path="/dashboard" icon={<LuUserCircle size={20} />} text='Menus' active={false} alert={false}  />
        <SidebarItem path="/dashboard" icon={<LuUserCircle size={20} />} text='Reservations' active alert={false}  />
        <SidebarItem path="/dashboard" icon={<LuUserCircle size={20} />} text='Events' active={false} alert={false} />
      </Sidebar>

    </main>
  )
}

export default Test