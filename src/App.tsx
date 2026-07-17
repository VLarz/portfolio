import { useState } from 'react';
import Modal from './components/Modal';
import Experience from './layouts/Experience/Experience';
import HeroBanner from './layouts/HeroBanner';
import FeaturedWork from './layouts/Projects/FeaturedWork';
import ProjectArchive from './layouts/Projects/ProjectArchive';
import Services from './layouts/Services/Services';

function App() {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <>
      <Modal
        showModal={modalImage !== null}
        handleClose={() => setModalImage(null)}
        imageSrc={modalImage ?? ''}
      />
      <HeroBanner />
      <FeaturedWork handleOpenModal={setModalImage} />
      <ProjectArchive handleOpenModal={setModalImage} />
      <Experience />
      <Services />
    </>
  );
}

export default App;
