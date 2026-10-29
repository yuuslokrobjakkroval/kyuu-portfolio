# kyuu

kyuu is my minimal portfolio website, showcasing my work and experience as a Software Developer & UI/UX Designer. It is built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com) to deliver a modern, fast, and seamless user experience.

This is a continuously evolving side project where I experiment with new technologies and keep it updated with the latest advancements in web development.

Check out the live site: [kyuu](https://github.com/yuuslokrobjakkroval/kyuu-portfolio)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./public/screenshot-desktop-dark.webp">
  <img src="./public/screenshot-desktop-light.webp" alt="Screenshot">
</picture>

## Core Features & Technologies

- **Elegant & Minimalistic UI**: Clean and modern design
- **Dark Mode**: Supports light and dark themes for a better user experience
- **vCard Integration**: Digital business card with contact details
- **SEO Optimization**: [JSON-LD schema](https://json-ld.org), sitemap, robots
- **Email Protection**: Obfuscation to prevent spam
- Installable PWA
- [Next.js 15](https://nextjs.org/): Latest React framework for optimized performance and scalability
- [Tailwind CSS v4](https://tailwindcss.com): Modern utility-first CSS framework for styling

### Blog Features

- MDX & Markdown support
- Syntax Highlighting for better readability
- RSS Feed for easy content distribution
- Dynamic OG Images for rich previews

## Compatibility

### Browser support

Tailwind CSS v4.0 is designed for and tested on modern browsers, and the core functionality of the framework specifically depends on these browser versions:

- **Chrome 111** (released March 2023)
- **Safari 16.4** (released March 2023)
- **Firefox 128** (released July 2024)

> Reference: [https://tailwindcss.com/docs/compatibility#browser-support](https://tailwindcss.com/docs/compatibility#browser-support)

## Development

Please refer to the [Development Guide](./DEVELOPMENT.md) for more details.

## Cloudflare Workers deployment

Install dependencies with `npm ci`, then run `npm run deploy` to build with
OpenNext and deploy to the `kyuu-portfolio` Worker. For local Workers preview,
run `npm run preview:cloudflare`. Authenticate locally with `npx wrangler login`
before deploying.

For Cloudflare Workers Builds, use `npm run build:cloudflare` as the build command
and `npx opennextjs-cloudflare deploy` as the deploy command. The build command
must generate `.open-next`, rather than only the standard `.next` output.

Keep `name` and the `WORKER_SELF_REFERENCE` service in `wrangler.jsonc` set to
the same Worker name. A mismatch causes Cloudflare API error 10143.

Builds bundle blog content and social-image fonts from `src/generated`, created
automatically by `scripts/build-content.mjs`, so these routes do not depend on
the server filesystem. Prerendered pages use the Workers static assets cache;
content updates require a new deployment.

## License

Licensed under the [MIT license](./LICENSE).

> You're free to use my code! Just make sure to remove all my personal information before publishing your website. It's awesome to see my code being useful to someone!

## Acknowledgments

- [React](https://react.dev)
- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [Motion](https://motion.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Aceternity UI](https://ui.aceternity.com)
- [Lucide](https://lucide.dev)
- And many other open-source libraries used in `package.json`
