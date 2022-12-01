import * as React from "react"
import PortfolioBlock from "./PortfolioBlock"

export default function ComponentSelector({ components }) {
    console.log(components)
  return (
    <>
      {components?.map(component => {
        switch (component?.componentId) {
          case "portfolio_block":
            return (
              <PortfolioBlock
                key={component.headline}
                component={component}
              />
            )
          {/* case "video_section":
            return (
              <VideoSection key={component.componentId} component={component} />
            )
          case "text_photo_block":
            return (
              <TextPhotoBlock key={component.heading} component={component} />
            )
          case "form_section":
            return (
              <FormSection key={component.componentId} component={component} />
            )
          case "basic_text":
            return (
              <TextBlock key={component.componentId} component={component} />
            )
          case "blog_grid":
            return (
              <BlogGrid key={component.componentId} component={component} />
            )
          case "page_intro":
            return (
              <PageIntro key={component.componentId} component={component} />
            )
          case "accordion":
            return (
              <Accordion key={component.componentId} component={component} />
            )
          case "curator_widget":
            return (
              <CuratorWidget
                key={component.componentId}
                component={component}
              />
            )
          case "blog_post_photo_block":
            return (
              <BlogPhoto key={component.componentId} component={component} />
            )
          case "parallax_cta":
            return <ParallaxCTA key={component.text} component={component} />
          default: */}
            break
        }
      })}
    </>
  )
}