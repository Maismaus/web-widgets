import { createElement, ReactElement } from "react";
import { create } from "react-test-renderer";

import { Html5, Html5PlayerProps } from "../Html5";

describe("Html5 Player", () => {
    const defaultProps = {
        url: "test",
        autoPlay: false,
        muted: false,
        loop: false,
        showControls: false,
        aspectRatio: false,
        poster: "test",
        preview: false
    };

    const defaulPlayer = (props: Html5PlayerProps): ReactElement => <Html5 {...props} />;

    it("should renders correctly", () => {
        const player = create(defaulPlayer(defaultProps)).toJSON();

        expect(player).toMatchSnapshot();
    });

    it("should renders correctly with autoplay", () => {
        const player = create(defaulPlayer({ ...defaultProps, autoPlay: true })).toJSON();

        expect(player).toMatchSnapshot();
    });

    it("should renders correctly with muted", () => {
        const player = create(defaulPlayer({ ...defaultProps, muted: true })).toJSON();

        expect(player).toMatchSnapshot();
    });

    it("should renders correctly with controls", () => {
        const player = create(defaulPlayer({ ...defaultProps, showControls: true })).toJSON();

        expect(player).toMatchSnapshot();
    });

    it("should renders correctly with loop", () => {
        const player = create(defaulPlayer({ ...defaultProps, loop: true })).toJSON();

        expect(player).toMatchSnapshot();
    });

    it("should renders correctly with poster", () => {
        const player = create(
            defaulPlayer({
                ...defaultProps,
                poster: "https://www.mendix.com/wp-content/themes/mendix/ui/images/homepage/air-status-app@2x.png"
            })
        ).toJSON();

        expect(player).toMatchSnapshot();
    });

    it("should render correctly in preview mode", () => {
        const player = create(defaulPlayer({ ...defaultProps, preview: true })).toJSON();

        expect(player).toMatchSnapshot();
    });
});
