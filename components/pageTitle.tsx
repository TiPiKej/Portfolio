interface pageTitleProps {
  title: string,
}

export default function PageTitle(props: pageTitleProps) {
  const { title } = props;

  return (
    <div
      className="flex items-center text-7xl relative"
      style={{
        minHeight: 'calc(100vh - 12rem)'
      }}
    >
      <p className="tracking-wide font-semibold">
        { title }
      </p>
    </div>
  )
}
