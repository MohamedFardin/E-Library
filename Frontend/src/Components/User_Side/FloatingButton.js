import React from 'react';
import { Fab, Zoom } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from '@material-ui/icons/Home';
import './FloatingButton.css';
import { Link } from 'react-router-dom';

function FloatingButton() {
    return (
        <div className="floating">
            <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
                <Link to="/">
                    <Fab className="floating_button">
                        {/* <AddIcon className="floating_item"/> */}
                        <HomeIcon />
                    </Fab>
                </Link>
            </Zoom>
        </div>
    )
}

export default FloatingButton
