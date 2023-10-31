import { NavLink } from "react-router-dom/cjs/react-router-dom";
import './GalleryNavigation.css'

export const GalleryNavigation = ({galleries}) => {
    const links = galleries.map(gallery => {
        return (<NavLink to={`/galleries/${gallery.id}`}>gallery.name</NavLink>);
    });

    console.log(galleries);
    return (
        <>
            <nav>
                <h1>Galleries</h1>
                <NavLink to="/">Home</NavLink>
                
            </nav>
            {links}
        </>
    )
}