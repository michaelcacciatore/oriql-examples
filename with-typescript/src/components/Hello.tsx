import * as React from "react";
import {PropTypes} from '../../types';

const displayName = 'myComponent';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class MyComponent extends React.Component<PropTypes.Hello, {}> {
  static displayName = displayName;
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.foo.foo}!</h1>;
    }
}