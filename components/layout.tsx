import Navbar from './navbar'
import PageTitle from './pageTitle';

interface layoutProps {
  children: JSX.Element,
  noNavigation?: boolean,
  title?: string,
}

export default function Layout(props: layoutProps) {
  const { children, noNavigation, title } = props;
  
  return (
    <div className={`
    bg-black
    ${noNavigation && "lg:bg-gradient-to-r lg:from-black lg:via-black lg:to-red-900"}
    min-h-screen
    flex justify-center
    text-primary`}>
      <div className="w-full lg:w-3/4 mx-10 lg:mg-0">
        {!noNavigation && (
          <>
            <Navbar />
            {title && <PageTitle title={title} /> }
          </>
        )}
        <main>{children}</main>
      </div>
    </div>
  )
}
