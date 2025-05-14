import { useState } from 'react'
import Projects from './Projects';
import Education from './Education';
import Experience
  from './Experience';
type Content = 'about' | 'projects' | 'education' | 'experience';

const Content = {
  ABOUT: 'about' as Content,
  PROJECTS: 'projects' as Content,
  EDUCATION: 'education' as Content,
  EXPERIENCE: 'experience' as Content,
};

function App() {

  const [content, setContent] = useState(Content.PROJECTS)

  const handleContentChange = (newContent: Content) => {
    setContent(newContent)
  }

  const renderContent = () => {
    switch (content) {
      case Content.ABOUT:
        return <div>About</div>
      case Content.PROJECTS:
        return <Projects />
      case Content.EDUCATION:
        // return <div>Education</div>
        return <Education />
      case Content.EXPERIENCE:
        // return <div>Experience</div>
        return <Experience />
      default:
        return <div>About</div>
    }
  }




  return (
    <>
      <div className="w-1/2 mx-auto mt-12 mb-6 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
        <h1
          className="text-3xl font-bold text-gray-800 mb-2 mt-4">
          Samuel Skinner</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-4">Software Engineer</h2>
        <p className="text-gray-500 text-center mb-4 px-4">An engineer who enjoys building cools things and solving problems.</p>
        <div className="flex space-x-4 mb-4">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />

        </div>
      </div >
      <nav className="flex justify-center mb-4">
        <button onClick={() => handleContentChange(Content.PROJECTS)} className="text-gray-500 hover:underline mx-2">Projects</button>
        <button onClick={() => handleContentChange(Content.EDUCATION)} className="text-gray-500 hover:underline mx-2">Education</button>
        <button onClick={() => handleContentChange(Content.EXPERIENCE)} className="text-gray-500 hover:underline mx-2">Experience</button>
      </nav>

      <div className="w-3/4 mx-auto mb-6">
        <div className="h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>


      {renderContent()}



    </>
  )
}

export default App
