import {BookOutlined, FireOutlined, HomeOutlined, UserOutlined} from "@ant-design/icons";

const iconStyle = {fontSize: '20px'}

const appRouterData = [
  {
    path: '/home',
    name: '首页',
    icon: <HomeOutlined style={iconStyle}/>,
  },
  {
    path: '/notes',
    name: '笔记',
    icon: <BookOutlined style={iconStyle}/>,
  },
  {
    path: '/project',
    name: '项目',
    icon: <FireOutlined style={iconStyle}/>,
  },
  {
    path: '/about',
    name: '关于',
    icon: <UserOutlined style={iconStyle}/>,
  },
]

export default appRouterData