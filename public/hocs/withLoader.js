import React from 'react';
import LoadingGif from '../loading.gif';

export default Component => {
    const LoaderComponent = ({loaded, ...otherProps}) => {
        if(typeof loaded !== "boolean") {
            throw new Error("A withLoader HOCc expects a loaded boolean prop");
        }
        let toRender = <LoadingGif {...otherProps}/>;
        if (loaded) {
            toRender = <Component {...otherProps} />;
        }
        return toRender;
    };

    return LoaderComponent;
}