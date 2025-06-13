import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <AboutMe />
      <Resume/>
      <Projects/>
      <Contact/>
    </div>

  )
}
export default App