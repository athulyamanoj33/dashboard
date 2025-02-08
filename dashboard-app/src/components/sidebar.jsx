import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      width={200}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        height: '100vh',
        zIndex: 1,
        overflow: 'auto', // If you want scrolling within the sidebar, keep this
      }}
      theme="dark"
    >
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link to="/">Overview</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/performance">Performance</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/sales">Sales</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
