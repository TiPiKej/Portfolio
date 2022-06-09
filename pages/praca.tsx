import { ReactElement } from "react"
import JobBlock from "../components/JobBlock";
import Layout from "../components/Layout"
import { Job } from "../models/Job";

const jobs: Job[] = [
  {
    name: "Protectimo",
    startDate: new Date(2021, 9, 1),
    href: "https://www.protectimo.com/",
  },
]

export default function Work() {
  return (
    <div className="" style={{ minHeight: `calc(100vh - 20rem)` }}>
      {jobs.map(job => (
        <JobBlock job={job} />
      ))}
    </div>
  )
}

Work.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Moje doświadczenie">
      {page}
    </Layout>
  )
}