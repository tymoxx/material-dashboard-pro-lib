import React from 'react';
import { render} from 'react-dom';
import Example from "../../src/components/Test/Test";
const App = () => (
    <Example />
);
render(<App />, document.getElementById("root"));