import { ReactElement } from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <div>
      
    </div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Zróbmy coś razem">
      {page}
    </Layout>
  )
}