import { useState } from 'react';
import './App.css';
import Modal from './components/Modal';
import HeroBanner from './layouts/HeroBanner';
import Projects from './layouts/Projects/Projects';
import MyServices from './layouts/Services/Services';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleOpenModal = (image: string) => {
    setModalImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        imageSrc={modalImage}
      />
      <HeroBanner />
      <Projects handleOpenModal={handleOpenModal} />
      <MyServices />
    </>
  );
}

export default App;
