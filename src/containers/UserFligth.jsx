import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Fligth from '../components/Fligth';
import { getAirlineFligthsByUser } from '../actions/index';

const UserFligth = (props) => {
  const { getAirlineFligthsByUser, user, airLineFilgthsUser } = props;

  useEffect(() => {
    getAirlineFligthsByUser(user.id);
  }, []);

  return (
    <>
      {airLineFilgthsUser &&
        airLineFilgthsUser.map((item) => <Fligth {...item} />)}
    </>
  );
};

const mapStateToProps = ({ airLineFilgthsUser, user }) => ({
  airLineFilgthsUser,
  user,
});

const mapDispatchToProps = {
  getAirlineFligthsByUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserFligth);
