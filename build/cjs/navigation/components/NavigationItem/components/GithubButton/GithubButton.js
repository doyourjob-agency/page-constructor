"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubButton = void 0;
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const models_1 = require("../../../../../models");
const utils_1 = require("../../../../../utils");
const b = (0, utils_1.block)('github-button');
const DEFAULT_LABEL = 'Stars on GitHub';
/* More information about github-buttons in https://buttons.github.io/ */
const GithubButton = ({ text, url, className, label, size, icon, urlTitle, }) => {
    const containerRef = (0, react_1.useRef)(null);
    const linkRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const paint = () => {
            if (containerRef.current) {
                const githubButton = containerRef.current.appendChild(document.createElement('span'));
                Promise.resolve().then(() => tslib_1.__importStar(require(/* webpackMode: "eager" */ 'github-buttons'))).then(({ render }) => {
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
    return (react_1.default.createElement("div", { className: b(null, className) },
        react_1.default.createElement("span", { ref: containerRef },
            react_1.default.createElement("a", Object.assign({ href: url, ref: linkRef, title: urlTitle, "data-show-count": "true", "aria-label": label || DEFAULT_LABEL }, (icon && { 'data-icon': models_1.NavigationGithubButtonIcon[icon] }), (size && { 'data-size': size })), text))));
};
exports.GithubButton = GithubButton;
