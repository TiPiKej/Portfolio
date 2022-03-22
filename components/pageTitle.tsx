interface pageTitleProps {
  title: string,
}

export default function PageTitle(props: pageTitleProps) {
  const { title } = props;

  return (
    <div className="min-h-screen flex items-center text-7xl">
      <p className="tracking-wide font-semibold">
        { title }
      </p>
    </div>
  )
}
