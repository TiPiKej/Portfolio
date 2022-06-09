import { Job } from "../models/Job";

interface JobBlockProps {
  job: Job
}

export default function JobBlock(props: JobBlockProps) {
  const { job } = props;

  return (
    <div>
      { job.name }
    </div>
  )
}