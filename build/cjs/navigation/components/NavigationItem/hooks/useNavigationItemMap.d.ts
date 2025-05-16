export declare const useNavigationItemMap: () => {
    button: import("react").FC<Pick<import("../../..").NavigationItemProps, "className"> & import("../../../..").ButtonProps>;
    social: import("react").FC<import("../../..").NavigationSocialItemOwnProps>;
    dropdown: ({ text, icon, className, iconSize, hidePopup, items, isActive, ...props }: import("../../..").NavigationItemProps & import("../../../..").NavigationDropdownItem) => JSX.Element;
    link: import("react").FC<import("../../..").NavigationItemProps & import("../../../..").NavigationLinkItem>;
    "github-button": ({ text, url, className, label, size, icon, urlTitle, }: import("../../..").NavigationItemProps & import("../../../..").NavigationGithubButton) => JSX.Element;
};
