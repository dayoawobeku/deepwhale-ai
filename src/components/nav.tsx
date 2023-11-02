import Image from 'next/image';
import Dropdown from './dropdown';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-5 text-gray-700">
      <div className="flex items-center gap-4">
        <a href="/">
          <Image
            src="https://assets-global.website-files.com/6470ddb02174d86381ea13b9/6471ea0d1e618c702ef2a4c9_Logo%20UpLift.png"
            alt="Logo"
            width={57.5}
            height={28}
          />
        </a>
        <ul className="flex items-center gap-6">
          <li>
            <a href="#">Get Care</a>
          </li>
          <li>
            <Dropdown
              item="For Providers"
              items={[
                'Learn More',
                'Become an Uplift Provider',
                'Provider Resources',
              ]}
            />
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </div>

      <div className="text-sm uppercase flex items-center gap-2 font-semibold">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          Log in
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="outline outline-1 outline-primary text-primary px-4 h-10 flex items-center"
        >
          Become a Provider
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-primary px-4 h-10 flex items-center"
        >
          Find a Therapist
        </a>
      </div>
    </nav>
  );
}
