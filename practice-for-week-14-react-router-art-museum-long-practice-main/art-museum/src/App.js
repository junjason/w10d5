import { GalleryNavigation } from "./components/GalleryNavigation";
import harvardArt from "./data/harvardArt";


function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records}> 
    </GalleryNavigation>
  );
}

export default App;
