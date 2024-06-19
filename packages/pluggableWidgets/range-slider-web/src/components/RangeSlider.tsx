import { createElement, CSSProperties, forwardRef, RefObject } from "react";
import { Range, RangeProps } from "rc-slider";
import classNames from "classnames";

export interface RangeSliderProps extends RangeProps {
    classNameSlider?: string;
    rootStyle?: CSSProperties;
    sliderRef: RefObject<HTMLDivElement>;
}

export const RangeSlider = forwardRef(
    ({ className, classNameSlider, rootStyle, sliderRef, ...rcRangeProps }: RangeSliderProps): JSX.Element => (
        <div
            ref={sliderRef}
            style={rootStyle}
            className={classNames(
                "widget-range-slider",
                {
                    "widget-range-slider-vertical": rcRangeProps.vertical
                },
                className
            )}
        >
            <Range className={classNameSlider} {...rcRangeProps} />
        </div>
    )
);
