import Image from 'next/image';
import Dropdown from './dropdown';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between py-5">
      <a href="/">
        <Image
          src="https://lirp.cdn-website.com/c4ea16e4/dms3rep/multi/opt/Color+logo+-+no+background-271w.png"
          alt="Logo"
          width={227}
          height={51}
        />
      </a>
      <ul className="flex items-center gap-6">
        <li className="font-bold text-lg">
          <Dropdown
            item="Platform"
            items={[
              'AWS Savings Products',
              'Sonar Savings Automation',
              'Cost Savings Services',
            ]}
          />
        </li>
        <li className="font-bold text-lg">
          <Dropdown
            item="Company"
            items={['About', 'Partners', 'FAQ', 'Pricing', 'Events']}
          />
        </li>
        <li className="font-bold text-lg">
          <a href="#">Meet Us</a>
        </li>
        <li className="font-bold text-lg">
          <a href="/login" target="_blank" rel="noopener noreferrer">
            Sign Up!
          </a>
        </li>
      </ul>
      <a
        href="http://app.deepwhale.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold bg-[#8e79f1] bg-[linear-gradient(90deg,rgba(249,104,218,0.5)0,rgba(120,164,247,0.5)100%)] p-[10px] rounded-2xl"
      >
        Savings scan
      </a>
    </nav>
  );
}
