import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';


class App extends React.Component {
  //This is how we handle the app being aware of any auth changes in firebase:
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){//si el usuario esta logueado, cargamos la data en el state, sino seteamos state en null (userAuth=null)
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
        
      }
      else{
        setCurrentUser(userAuth);     
      }
  });
}

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  //*

  render(){
    return <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUp}/>
      </Switch>
    </div>
  }  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
