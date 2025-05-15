import { useState } from 'react'
import Projects from './Projects';
import Education from './Education';
import Experience
  from './Experience';
type ContentEnum = 'about' | 'projects' | 'education' | 'experience';

const ContentEnum = {
  ABOUT: 'about' as ContentEnum,
  PROJECTS: 'projects' as ContentEnum,
  EDUCATION: 'education' as ContentEnum,
  EXPERIENCE: 'experience' as ContentEnum,
};

function App() {

  const [content, setContent] = useState(ContentEnum.PROJECTS)

  const handleContentChange = (newContent: ContentEnum) => {
    setContent(newContent)
  }

  const renderContent = () => {
    switch (content) {
      case ContentEnum.ABOUT:
        return <div>About</div>
      case ContentEnum.PROJECTS:
        return <Projects />
      case ContentEnum.EDUCATION:
        // return <div>Education</div>
        return <Education />
      case ContentEnum.EXPERIENCE:
        // return <div>Experience</div>
        return <Experience />
      default:
        return <div>About</div>
    }
  }




  return (
    <>
      <div className="w-1/2 mx-auto mt-12 mb-6 flex flex-col items-center justify-center bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-4 text-center">Samuel Skinner</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-4 text-center">Software Engineer</h2>
        <p className="text-gray-500 text-center mb-4 px-4">An engineer who enjoys building cools things and solving problems.</p>
        <div className="flex flex-wrap space-y-2 space-x-4 mb-4 justify-center">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-8 h-8" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-8 h-8" />
        </div>
      </div >
      <div className='flex flex-row items-center justify-center flex-wrap space-x-4 space-y-2 mb-4'>
        <a href='https://github.com/SamSkinner01' target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
        </a>
        <a href='https://www.linkedin.com/in/samuel-skinner904/' target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8" />
        </a>
      </div>
      <nav className="flex justify-center mb-4">
        <button
          onClick={() => handleContentChange(ContentEnum.PROJECTS)}
          className={`mx-2 border border-gray-300 px-2 py-2 rounded ${content === ContentEnum.PROJECTS ? 'text-gray-800 font-bold' : 'text-gray-500 hover:underline'}`}
        >
          Projects
        </button>
        <button
          onClick={() => handleContentChange(ContentEnum.EDUCATION)}
          className={`mx-2 border border-gray-300 px-2 py-2 rounded ${content === ContentEnum.EDUCATION ? 'text-gray-800 font-bold' : 'text-gray-500 hover:underline'}`}
        >
          Education
        </button>
        <button
          onClick={() => handleContentChange(ContentEnum.EXPERIENCE)}
          className={`mx-2 border border-gray-300 px-2 py-2 rounded ${content === ContentEnum.EXPERIENCE ? 'text-gray-800 font-bold' : 'text-gray-500 hover:underline'}`}
        >
          Experience
        </button>
      </nav>

      <div className="w-3/4 mx-auto mb-6">
        <div className="h-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>


      {renderContent()}



    </>
  )
}

export default App
