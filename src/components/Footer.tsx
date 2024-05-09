import { twMerge } from 'tailwind-merge';
import { ArrowButton } from './ArrowButton';
import { Logo } from './Logo';
import { NavItem } from './NavItem';
import { HashLink } from 'react-router-hash-link';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer
      className={twMerge('w-full border-t border-elements bg-white', className)}
    >
      <nav className="flex items-center justify-center">
        <ul
          className="flex max-w-[theme('screens.lg')] flex-1
          flex-col items-center gap-8 px-4
          py-8 md:flex-row md:justify-between md:p-8"
        >
          <li>
            <Logo />
          </li>

          <div
            className="flex w-fit
            flex-col gap-4 uppercase text-secondary
            md:flex-row md:gap-3.5 lg:gap-28"
          >
            {[
              ['Github', 'https://github.com/Vlad4567/gadgetly'],
              ['Rights', '/rights'],
              ['Contacts', 'https://github.com/Vlad4567'],
            ].map(([text, path]) => (
              <NavItem key={text} path={path}>
                {text}
              </NavItem>
            ))}
          </div>

          <li className="flex items-center justify-center gap-4">
            <small className="text-secondary">Back to top</small>
            <HashLink smooth to="#body">
              <ArrowButton position="top" />
            </HashLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
