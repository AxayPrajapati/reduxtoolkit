import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import HomeStack from './HomeStack';
import LoginStack from './LoginStack';
import {RootState} from '../reduxtoolkit/store/store';

const MainNav = () => {
  const isLogin = useSelector((state: RootState) => state.userData.isLogin);

  useEffect(() => {}, [isLogin]);
  return isLogin ? <HomeStack /> : <LoginStack />;
};

export default MainNav;
