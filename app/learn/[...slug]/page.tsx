import { source } from "@/lib/source";
import type { Metadata } from "next";
import { FaArrowRightLong } from "react-icons/fa6";
import { Steps, Step } from "fumadocs-ui/components/steps";
import { Tabs, Tab } from "fumadocs-ui/components/tabs";
import { ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import Appearance from "@/components/Appearance/appearance";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Separator } from "@/components/ui/separator";
import React from "react";
import "../../global.css";

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params; // Await the promise for params
  const slug = params.slug ? params.slug.join("/") : "";
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const MDX = page.data.body; // Extract MDX content
  const path = `/learn/${page.file.path}`; // Use `/learn/` path for MDX files

  return (
    <>
      <DocsPage
        tableOfContent={{
          enabled: page.file.path !== "api-reference.mdx",
          footer: (
            <>
              <div>
                <Separator />
                <a
                  href={`https://github.com/gitstar-oc/learnai/blob/master${path}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-baseline text-xs text-muted-foreground hover:text-foreground mt-4 group"
                >
                  Edit on Github{" "}
                  <ArrowSquareOut className="ml-1 size-3 transition-transform duration-300 ease-in-out transform group-hover:rotate-45" />
                </a>
                <a
                  href="https://github.com/gitstar-oc/learnai/issues/new?title=Feedback%20for%20%E2%80%9Clearnai%E2%80%9D&labels=feedback"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-baseline text-xs text-muted-foreground hover:text-foreground mt-2 mb-1 group"
                >
                  Question? Give us feedback{" "}
                  <FaArrowRightLong className="ml-1 mb-2 size-3 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1" />
                </a>
                <Appearance className="gap-0 mb-6" />
              </div>
            </>
          ),
        }}
        toc={page.data.toc}
      >
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              Steps,
              Step,
              Tabs,
              Tab,
              Accordions,
              Accordion,
              img: (props) => <ImageZoom {...(props as any)} />,
            }}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  const params = await source.generateParams();
  return params.map((param) => ({ slug: param.slug })); // Return slugs for dynamic routing
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params; // Await params for metadata generation
  const slug = params.slug ? params.slug.join("/") : "index"; // Construct slug for metadata
  const page = source.getPage(params.slug);

  if (!page) notFound();

  const description =
    page.data.description ??
    "Free Site to learn AI, Machine Learning and Deep Learning. Anytime, Anywhere.";

  return {
    title: page.data.title,
    description,
    openGraph: {
      url: `/learn/${slug}`, // Ensure metadata reflects `/learn/` paths
    },
  } as Metadata;
}
