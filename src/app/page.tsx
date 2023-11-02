import Faqs from '@/components/faqs';
import Nav from '@/components/nav';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to Content
      </a>

      <div className="home w-full px-4">
        <div className="flex flex-col min-h-screen max-w-[1200px] mx-auto">
          <Nav />
          <main
            className="flex items-center text-gray-950 h-40"
            id="main-content"
          >
            <p>Main content here</p>
          </main>
          <Faqs />
          <footer className="mt-auto text-gray-950">
            <p>Footer content here</p>
          </footer>
        </div>
      </div>
    </>
  );
}
