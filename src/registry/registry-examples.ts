import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "apple-hello-effect-demo",
    type: "registry:example",
    registryDependencies: ["https://kyuu/r/apple-hello-effect.json"],
    files: [
      {
        path: "examples/apple-hello-effect-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "theme-switcher-demo",
    type: "registry:example",
    registryDependencies: ["https://kyuu/r/theme-switcher.json"],
    files: [
      {
        path: "examples/theme-switcher-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-demo",
    type: "registry:example",
    registryDependencies: ["https://kyuu/r/wheel-picker.json"],
    files: [
      {
        path: "examples/wheel-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "wheel-picker-form-demo",
    type: "registry:example",
    registryDependencies: ["https://kyuu/r/wheel-picker.json", "form"],
    files: [
      {
        path: "examples/wheel-picker-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
