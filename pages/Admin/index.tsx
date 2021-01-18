import React from 'react';
import withAuthAdmin from '../../components/withAuthAdmin';
import AdminComponent from '../../components/shared/AdminComponent';

const Home: React.FC = () => {
  return (
    <AdminComponent>
      <h1>Painel Administrativo.</h1>;
    </AdminComponent>
  );
};

export default withAuthAdmin(Home);
