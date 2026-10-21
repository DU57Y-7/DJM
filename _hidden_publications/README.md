# Publications (NOT live)
Folders starting with `_` are not published by GitHub Pages, so nothing here is visible.
To go live once a paper is accepted:
1. Move this folder's `index.html` to `publications/index.html`, `publications.js` and `render-publications.js` to `data/`.
2. In `publications/index.html` change the `<script>` lines to `../data/publications.js` and `../data/render-publications.js` (and remove the noindex meta).
3. Add `["publications","Publications","publications/index.html"]` to the `links` list in `site.js`.
4. Set the paper's `status` to "accepted" or "published" in `publications.js`.
