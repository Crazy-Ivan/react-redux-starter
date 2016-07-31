import React from 'react';
import ReactDOM from 'react-dom';


const MOUNT_NODE = document.getElementById('root');

if(__DEV__) {
    if(module.hot) {
        module.hot.accept();
    }
}


