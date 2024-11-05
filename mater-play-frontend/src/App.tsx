import Footer from "./app/components/Footer"
import Header from "./app/components/Header"
import Section from "./app/components/Section"
import { useEffect, useState } from "react"
import { CategoryService } from "./app/services/category-service"
import { ICategory } from "./app/types"
import HighLightSection from "./app/components/HighLightSection"

function App() {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(()=> {
    CategoryService.getALL()
    .then(result => {
      console.log('=>', result)
      setCategories(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div className="wrapper">
      <Header/>
      <main
        style={{
          marginTop: '8rem'
        }}
      >
        <HighLightSection />
        {
          categories.map(item => (
            <Section key={item.id} category={item}/>
          ))
        }
      </main>
      <Footer/>
    </div>

  )
}

export default App