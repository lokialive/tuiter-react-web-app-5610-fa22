import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <div className="list-group">
            <p  className="list-group-item">Tuiter</p>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill me-2"></i>
                <span> Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash me-2"></i>
                <span> Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-asterisk me-2"></i>
                <span> Labs</span>
            </Link>

            <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-bell-fill me-2"></i>
                <span> Notifications</span>
            </div>
            <p className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill me-2"></i>
                <span> Messages</span>
            </p>

            <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill me-2"></i>
                <span>Bookmarks</span>
            </div>
            <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul me-2"></i>
                <span>Lists</span>
            </div>
            <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill me-2"></i>
                <span>Profile</span>
            </Link>
            <div className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots me-2"></i>
                <span>More</span>
            </div>
        </div>


            );

};
export default NavigationSidebar;