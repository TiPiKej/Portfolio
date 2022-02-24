import { ReactElement } from "react"
import Layout from "../components/layout"

export default function Work() {
  return (
    <div>Praca</div>
  )
}

Work.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}