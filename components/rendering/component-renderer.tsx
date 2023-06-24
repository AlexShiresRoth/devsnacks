import HeroBanner from "../hero/hero-banner";
import ComponentWrapper from "../wrappers/component-wrapper";
import SignupBox from "../forms/sign-up/sign-up-box";
import DuplexComponent from "../duplex/duplex-component";
import TextBlockComponent from "../text-block/text-block";
import InfoBlockComponent from "../info-block/info-block";
import CtaComponent from "../cta-component/cta-component";
import { UnknownComponent } from "@/types/component";
import BusinessInfoTopic from "../business-info/business-info-topic";
import ProductTable from "../product/product-table";
import ContactForm from "../forms/contact/contact-form";

interface Props {
  itemsToRender: Array<UnknownComponent>;
}

const ComponentRenderer = ({ itemsToRender }: Props) => {
  if (!itemsToRender) return null;
  return (
    <>
      {itemsToRender.map((component) => {
        if (!component?.sys?.id) return null;

        if (component.__typename === "ComponentHeroBanner") {
          return (
            <ComponentWrapper key={component.sys.id}>
              {/* @ts-expect-error Async Server Component */}
              <HeroBanner {...component} />
            </ComponentWrapper>
          );
        }

        if (component.__typename === "SignUpBox") {
          return (
            <ComponentWrapper key={component.sys.id} fullWidth={true}>
              {/* @ts-expect-error Async Server Component */}
              <SignupBox {...component} />
            </ComponentWrapper>
          );
        }

        if (component.__typename === "ComponentDuplex") {
          /* @ts-expect-error Async Server Component */
          return <DuplexComponent key={component.sys.id} {...component} />;
        }
        if (component.__typename === "ComponentTextBlock") {
          return (
            /* @ts-expect-error Async Server Component */
            <TextBlockComponent key={component.sys.id} {...component} />
          );
        }
        if (component.__typename === "ComponentInfoBlock") {
          /* @ts-expect-error Async Server Component */
          return <InfoBlockComponent key={component.sys.id} {...component} />;
        }
        if (component.__typename === "ComponentCta") {
          /* @ts-expect-error Async Server Component */
          return <CtaComponent key={component.sys.id} id={component.sys.id} />;
        }
        if (component.__typename === "TopicBusinessInfo") {
          /* @ts-expect-error Async Server Component */
          return <BusinessInfoTopic key={component.sys.id} {...component} />;
        }
        if (component.__typename === "ComponentProductTable") {
          /* @ts-expect-error Async Server Component */
          return <ProductTable key={component.sys.id} {...component} />;
        }
        if (component.__typename === "Form") {
          /* @ts-expect-error Async Server Component */
          return <ContactForm key={component.sys.id} {...component} />;
        }
        console.log("Component not found", component);
      })}
    </>
  );
};

export default ComponentRenderer;
