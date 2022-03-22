import { ReactElement } from "react"
import Layout from "../components/layout"

export default function About() {
  return (
    <div>O mnie</div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Zajmuję się designem oraz budową aplikacji">
      {page}
    </Layout>
  )
}