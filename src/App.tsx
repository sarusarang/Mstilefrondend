import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"




// Lazy load pages
const Index = lazy(() => import("./pages/Index"))
const NotFound = lazy(() => import("./components/common/NotFound"))



// Layouts
const MainLayout = lazy(() => import("./components/layout/MainLayout"))





function App() {



  return (


    <Suspense fallback={<div>Loading...</div>}>

      <Routes>


        {/* Main Layout */}
        <Route element={<MainLayout />} >

          <Route index element={<Index />} />

        </Route>


        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />


      </Routes>


    </Suspense>


  )


}



export default App
