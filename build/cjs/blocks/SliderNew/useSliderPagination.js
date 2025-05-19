"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSliderPagination = void 0;
const utils_1 = require("./utils");
const useSliderPagination = (props) => {
    if (!props.enabled) {
        return undefined;
    }
    const { isA11yControlHidden, controlTabIndex, bulletClass, bulletActiveClass, paginationLabel } = props;
    return {
        pagination: {
            clickable: true,
            bulletClass,
            bulletActiveClass,
        },
        onPaginationUpdate: (slider) => {
            const pagination = slider.pagination.el;
            (0, utils_1.setElementAtrributes)(pagination, {
                role: 'menu',
                'aria-hidden': isA11yControlHidden,
                'aria-label': paginationLabel,
            });
            const bullets = pagination.querySelectorAll(`.${bulletClass}`);
            bullets.forEach((bullet) => {
                const isActive = bullet.classList.contains(bulletActiveClass);
                (0, utils_1.setElementAtrributes)(bullet, {
                    role: 'menuitemradio',
                    'aria-hidden': isA11yControlHidden,
                    'aria-checked': isActive,
                    tabindex: controlTabIndex,
                });
            });
        },
    };
};
exports.useSliderPagination = useSliderPagination;
