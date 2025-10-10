import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { SiGithub, SiLinkedin } from "react-icons/si";

const aboutData = {
  name: "Sumon Kaysar",
  title: "Full-Stack Developer (MERN + Next.js)",
  bio: `I’m a passionate full-stack developer specializing in building scalable web applications and polished user experiences.
  I love working with modern technologies like Next.js, React, TypeScript, and Prisma to craft impactful digital solutions.`,
  contact: {
    email: "sumon.kaysar.dsk@gmail.com",
    phone: "+8801828008748",
    location: "Narsingdi, Bangladesh",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/sumonkaysar", icon: SiGithub },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sumonkaysar",
      icon: SiLinkedin,
    },
    { name: "Portfolio", url: "https://sumonkaysar.vercel.app", icon: CiGlobe },
  ],
  skills: [
    "Next.js",
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "TailwindCSS",
    "Node.js",
    "Express",
    "Prisma",
    "Mongoose",
    "MongoDB",
  ],
};

const MyInfo = () => {
  const { name, title, bio, contact, skills } = aboutData;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="relative w-64 h-64 mx-auto md:mx-0 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/profile.jpg"
            alt={name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          <p className="text-muted-foreground mb-3">{title}</p>
          <p className="text-base leading-relaxed text-foreground/80 mb-5">
            {bio}
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{contact.location}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            {aboutData.socials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
              >
                <social.icon /> {social.name}
              </Link>
            ))}
          </div>

          <Card className="mt-6 border-muted shadow-sm">
            <CardContent className="pt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyInfo;
