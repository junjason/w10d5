import { Route } from "react-router-dom/cjs/react-router-dom";
import { GalleryNavigation } from "./components/GalleryNavigation";
import { GalleryView } from "./components/GalleryView";
import harvardArt from "./data/harvardArt";


function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records}> 
      </GalleryNavigation>
      <Route>
        <GalleryView>
        </GalleryView>
      </Route>
    </>
    
  )
      
}

export default App;
