import { myLinks } from '@/constants/portfolioData';
import { Icon } from '@iconify/react';
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="flex space-x-6 justify-center">
      {myLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-primary"
        >
          <Icon icon={link.icon} height={40} width={40} />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
