import {NavigationActions} from 'react-navigation';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params: any) {
  _navigator.dispatch(NavigationActions.navigate({routeName, params}));
}

function goBack() {
  _navigator.dispatch(NavigationActions.back());
}

function refresh(key: string, params: any) {
  _navigator.dispatch(NavigationActions.setParams({key, params}));
}

function getCurrentRoute() {
  let route = _navigator.state.navigate;
  while (route.routes) {
    route = route.routes[route.index];
  }

  return route;
}

export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  refresh,
  getCurrentRoute,
};
