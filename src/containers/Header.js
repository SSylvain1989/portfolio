import { connect } from 'react-redux';
import { handleMenuDisplay } from '../actions/header';
import Header from '../components/Header';

const mapStateToProps = (state) => ({
  showMenuBoolean: state.header.showMenuBoolean,
  test : state.header.test,
});

const mapDispatchToProps = (dispatch) => ({
  handleMenuClick: () => {
    dispatch(handleMenuDisplay());
  },

});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)( Header );


// == Export
export default HeaderContainer;
