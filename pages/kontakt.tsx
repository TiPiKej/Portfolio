import { ReactElement } from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <div>Kontakt</div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}