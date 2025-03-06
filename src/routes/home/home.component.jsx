import { Title } from './home.styles';

import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
  return (
    <div>
      <Title>Crown Clothing</Title>
      <Outlet/>
      <Directory/>
    </div>
  );
}

export default Home;