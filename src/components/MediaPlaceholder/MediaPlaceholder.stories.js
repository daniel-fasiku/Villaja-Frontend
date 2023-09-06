import { MediaPlaceholder } from ".";

export default {
  title: "Components/MediaPlaceholder",
  component: MediaPlaceholder,
  argTypes: {
    variant: {
      options: ["diagram", "avatar", "image", "video", "map"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "diagram",
    variantDiagramClassName: {},
    icons1StyleOverrideClassName: {},
  },
};
