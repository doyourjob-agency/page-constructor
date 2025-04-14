import React, { useCallback, useContext } from 'react';
import { ArrowLeft } from '@gravity-ui/icons';
import { Button, Icon } from '@gravity-ui/uikit';
import { LocationContext } from '../../context/locationContext';
import { useAnalytics } from '../../hooks';
import { DefaultEventNames } from '../../models';
export default function BackLink(props) {
    const { history } = useContext(LocationContext);
    const { url, title, theme = 'default', size = 'l', className, shouldHandleBackAction = false, onClick, tabIndex, extraProps, } = props;
    const handleAnalytics = useAnalytics(DefaultEventNames.ShareButton, url);
    const backActionHandler = useCallback(async () => {
        handleAnalytics();
        if (!history) {
            return;
        }
        if (onClick) {
            onClick();
        }
        if (history.length > 1) {
            history.goBack();
        }
        else {
            history.push({ pathname: url });
        }
    }, [handleAnalytics, history, onClick, url]);
    return (React.createElement(Button, { className: className, view: theme === 'special' ? 'flat-contrast' : 'flat-secondary', size: size, href: shouldHandleBackAction ? undefined : url, onClick: shouldHandleBackAction ? backActionHandler : undefined, tabIndex: tabIndex, extraProps: extraProps },
        React.createElement(Icon, { data: ArrowLeft, size: 20 }),
        React.createElement("span", null, title)));
}
