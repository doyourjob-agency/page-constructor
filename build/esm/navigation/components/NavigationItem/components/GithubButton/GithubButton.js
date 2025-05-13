import React, { useEffect, useRef } from 'react';
import { NavigationGithubButtonIcon } from '../../../../../models';
import { block } from '../../../../../utils';
import './GithubButton.css';
const b = block('github-button');
const DEFAULT_LABEL = 'Stars on GitHub';
/* More information about github-buttons in https://buttons.github.io/ */
export const GithubButton = ({ text, url, className, label, size, icon, urlTitle, }) => {
    const containerRef = useRef(null);
    const linkRef = useRef(null);
    useEffect(() => {
        const paint = () => {
            if (containerRef.current) {
                const githubButton = containerRef.current.appendChild(document.createElement('span'));
                import(/* webpackMode: "eager" */ 'github-buttons').then(({ render }) => {
                    if (linkRef.current !== null) {
                        render(githubButton.appendChild(linkRef.current), (el) => {
                            try {
                                if (githubButton.parentNode) {
                                    githubButton.parentNode.replaceChild(el, githubButton);
                                }
                            }
                            catch (_) { }
                        });
                    }
                });
            }
        };
        const reset = () => {
            var _a;
            if (((_a = containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) === null || _a === void 0 ? void 0 : _a.lastChild) && linkRef.current) {
                containerRef.current.replaceChild(linkRef.current, containerRef.current.lastChild);
            }
        };
        paint();
        return () => {
            reset();
        };
    }, []);
    return (React.createElement("div", { className: b(null, className) },
        React.createElement("span", { ref: containerRef },
            React.createElement("a", Object.assign({ href: url, ref: linkRef, title: urlTitle, "data-show-count": "true", "aria-label": label || DEFAULT_LABEL }, (icon && { 'data-icon': NavigationGithubButtonIcon[icon] }), (size && { 'data-size': size })), text))));
};
