import React from 'react';
import withAuthAdmin from '../../components/withAuthAdmin';

const Home: React.FC = () => {
  return <h1>Painel Administrativo.</h1>;
};

export default withAuthAdmin(Home);
