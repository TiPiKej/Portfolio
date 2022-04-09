import { ReactElement } from "react"
import { IconType } from "react-icons";
import Layout from "../components/Layout"
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import SocialBlock from "../components/SocialBlock";

export interface Social {
  name?: string;
  href: string;
  icon: IconType;
  color?: string;
  bgColor?: string;
}

const sociale: Social[] = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/tomek.kumor.5',
    icon: FaFacebook,
  },
  {
    name: 'Email',
    href: 'mailto:romukkemot@gmail.com',
    icon: AiFillMail,
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/tomuskk',
    icon: FaTwitter,
  },
  {
    name: 'Github',
    href: 'https://github.com/TiPiKej',
    icon: FaGithub,
  },
]

export default function Contact() {
  return (
    <div className="flex justify-between flex-wrap items-center" style={{ minHeight: `calc(100vh - 20rem)` }}>
      {sociale.map(social => (
        <SocialBlock social={social} />
      ))}
    </div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      // title="Razem możemy zrobić coś wielkiego :D"
    >
      {page}
    </Layout>
  )
}