import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import AuthContext from '../../store/auth-context';

const Home = (props) => {
  const authCtx = useContext(AuthContext)
  console.log(props);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={authCtx.onLogout}>Log Out</button>
    </Card>
  );
};

export default Home;
