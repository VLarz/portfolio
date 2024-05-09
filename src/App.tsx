import './App.css';

function App() {
  return (
    <div className={`hero-grid h-[700px] flex justify-center items-center`}>
      <div className={`text-center max-w-3xl space-y-6`}>
        <h1 className={`text-5xl font-bold`}>
          Hi, I’m Vhen Larson Dela Cuesta
        </h1>
        <h2 className={`text-4xl font-bold`}>A Front-End Web Developer</h2>
        <p className={`text-xl text-grey`}>
          I have a passion for designing web applications that are{` `}
          <span className={`text-white`}>user-friendly</span>
          {` `}
          and <span className={`text-white`}>appealing</span> to the eye.
        </p>
        <button
          className={`bg-white px-8 py-4 rounded-lg text-sm font-semibold text-black drop-shadow-[0_4px_0_rgba(255,255,255,0.7)]`}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
}

export default App;
