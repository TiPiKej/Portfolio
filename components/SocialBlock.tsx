import { Social } from "../pages/kontakt"

interface SocialBlockProps {
  social: Social
}

export default function SocialBlock(props: SocialBlockProps) {
  const { social } = props;
  
  return (
    <a
      href={social.href}
      title={social.name}
      className="my-20 text-9xl transition-all hover:text-secondary basis-full xs:basis-1/2 md:basis-1/4 flex justify-center"
    >
      <social.icon />
    </a>
  )
}