import { SiteWrapper } from "../components/SiteWrapper";

export function NotFound() {
  return (
    <SiteWrapper>
      <div className="w-full h-full flex items-center justify-center">
        <div className="prose prose-invert prose-xl">
          <h1>404 - Not Found</h1>
          <p>Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </SiteWrapper>
  );
}
