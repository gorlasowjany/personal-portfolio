import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800">
      <AboutMe />
      <Resume/>
      <Projects/>
    </div>

  )
}
export default App