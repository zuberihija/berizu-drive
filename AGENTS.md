<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture
- WooCommerce products are the sole vehicle source of truth; all reads go through `src/lib/woocommerce.functions.ts` so credentials remain server-side and automotive mapping stays centralized.
- Public enquiry links use one `VITE_BERIZU_PHONE` E.164 value for both phone and WhatsApp so contact details cannot drift between components.
