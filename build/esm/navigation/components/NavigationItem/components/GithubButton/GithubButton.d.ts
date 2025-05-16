import { NavigationGithubButton } from '../../../../../models';
import { NavigationItemProps } from '../../../../models';
import './GithubButton.css';
type NavigationGithubButtonProps = NavigationItemProps & NavigationGithubButton;
export declare const GithubButton: ({ text, url, className, label, size, icon, urlTitle, }: NavigationGithubButtonProps) => JSX.Element;
export {};
