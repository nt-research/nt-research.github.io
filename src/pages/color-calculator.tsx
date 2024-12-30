import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import NostaleColorPickerAndCalculator from "@site/src/components/NostaleColorPickerAndCalculator";
import Heading from "@theme/Heading";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <div className="container">
        <Heading as="h1">Color picker</Heading>
        <main>
          <NostaleColorPickerAndCalculator />
        </main>
      </div>
    </Layout>
  );
}
