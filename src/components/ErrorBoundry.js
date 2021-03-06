import React , {Component} from 'react';
import PropTypes from 'prop-types';

class ErrorBoundry extends Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    } componentDidCatch(){
        this.setState({ hasError:true})
    }
    render(){
        if(this.state.hasError){
            return<h1>Ooops. That is not good.</h1>
        }
        return this.props.children
    }
}
ErrorBoundry.propTypes = {
    children: PropTypes.object,
  
  }
export default ErrorBoundry;