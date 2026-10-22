import { renderToString } from "react-dom/server";
import App from "./App";

export function render(pathname: string) {
  return renderToString(<App pathname={pathname} />);
}
export { seoPages, notFoundSeo, structuredData, siteUrl } from "./seo/pages";
