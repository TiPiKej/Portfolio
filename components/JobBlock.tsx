import { Job } from "../models/Job";

interface JobBlockProps {
  job: Job
}

export default function JobBlock(props: JobBlockProps) {
  const { job } = props;

  return (
    <div className="border-b-2 py-10 text-2xl">
      <p className="text-4xl my-3">{ job.name }</p>
      <p>{ job.startDate.toLocaleDateString() } - {job.endDate ? job.endDate.toLocaleDateString() : "obecnie"}</p>
    </div>
  )
}