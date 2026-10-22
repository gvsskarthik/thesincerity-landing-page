import ExplorePage from "./components/ExplorePage";
import NotFoundPage from "./components/NotFoundPage";
import { serviceDetails } from "./data/serviceDetails";
import { products } from "./data/products";

export default function App({ pathname = "/" }: { pathname?: string }) {
  const path = pathname.replace(/\/?$/, "/");
  const exists =
    path === "/" ||
    path === "/services/" ||
    products.some((p) => p.path === path) ||
    serviceDetails.some((s) => s.path === path);
  return exists ? <ExplorePage pathname={path} /> : <NotFoundPage />;
}
