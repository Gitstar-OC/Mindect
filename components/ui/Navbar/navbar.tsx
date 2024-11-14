"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./navigation-menu";
import Logo from "../Logo";
import {
  Github,
  Sigma,
  Binary,
  Fingerprint,
  Dna,
  PiSquare,
  Infinity,
} from "lucide-react";
import ThemeChanger from "./theme-changer";

const ListItem = ({ title, description, icon: Icon }) => {
  if (!Icon) {
    console.error(`Icon component is undefined for title: ${title}`);
    return null;
  }

  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          href="#"
        >
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-primary/80">
              <Icon className="h-4 w-4" />
            </div>
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 px-16 transition-all ${
        isScrolled
          ? "bg-transparent backdrop-blur-md border-b border-b-slate-300 dark:border-b-slate-700/40"
          : "bg-transparent"
      } p-4 h-14 flex items-center justify-between z-50`}
    >
      <div className="flex items-center space-x-4">
        <Link href="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Machine Learning</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    title="Supervised Learning"
                    description="Learn about algorithms that use labeled data to make predictions."
                    icon={Binary}
                  />
                  <ListItem
                    title="Unsupervised Learning"
                    description="Explore techniques for finding patterns in unlabeled data."
                    icon={Fingerprint}
                  />
                  <ListItem
                    title="Learning Algorithms"
                    description="Dive into various machine learning algorithms and their applications."
                    icon={Dna}
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Mathematics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem
                    title="Linear Algebra"
                    description="Study vector spaces, matrices, and linear transformations."
                    icon={Sigma}
                  />
                  <ListItem
                    title="Calculus"
                    description="Explore limits, derivatives, integrals, and their applications."
                    icon={PiSquare}
                  />
                  <ListItem
                    title="Probability"
                    description="Learn about random events, distributions, and statistical inference."
                    icon={Infinity}
                  />
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex items-center space-x-4">
        <ThemeChanger />
        <a
          href="https://github.com/gitstar-oc/mindect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}