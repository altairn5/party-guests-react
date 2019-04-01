import React from 'react';
import LoadingGif from '../partials/loadingGif.js';

 const withLoader = (Component) => {

    const LoaderComponent = ({loaded, ...otherProps}) => {
        if(typeof loaded !== "boolean") {
            throw new Error("A withLoader HOCc expects a loaded boolean prop");
        }

        //Once data is loaded. we render component page
        //will pass dispatch as props until react-redus gets implemented
        let toRender = <LoadingGif {...otherProps}/>;
        if (loaded) {
            toRender = <Component {...otherProps} />;
        }

        return toRender;
    };

    return LoaderComponent;
}

export default withLoader;
