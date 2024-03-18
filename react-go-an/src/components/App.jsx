import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {LessonsCompilation} from "./LessonsComponents/Lessons"

export default function App() {

  const componentRoutes = [
      {path:"/Lessons", component: LessonsCompilation},
      ]

  return (
      <Router>
          <Routes>
              {componentRoutes.map((route) => {
                  return (
                      <Route key={route.path} path={`${route.path}`} element={<route.component/>}/>
                  )
              })}
          </Routes>
      </Router>
  )
}

