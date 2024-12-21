import { Github, Twitter, Linkedin, Facebook } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={`${social.name} Profile`}
        >
          <social.icon className="size-5" />
        </a>
      ))}
    </div>
  )
}