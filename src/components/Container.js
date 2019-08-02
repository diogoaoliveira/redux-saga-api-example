import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions';
import Dumb from './Dumb';

const Container = ({ data, loading, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  return <Dumb data={data} />;
};

const mapStateToProps = state => ({
  data: state.repos.data,
  loading: state.repos.loading,
  error: state.repos.error,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
