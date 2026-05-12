# Portfolio (NL)

Een moderne, minimalistische portfolio met een donker thema (zwart) en blauwe accenten. Parallax heroes, responsive grid, en aandacht voor performance, SEO en toegankelijkheid.

## Snel starten
1. Plaats je logo als `Logo.png` in deze map (36–48 px hoog in de navbar werkt het mooist).
2. Open `index.html` in je browser of gebruik een live server-extensie in VS Code.

## Aanpassen
- Kleuren: pas de variabelen aan in `style.css` onder `:root` (bijv. `--primary-color`).
- Afbeeldingen: vervang de Unsplash-URL’s in `style.css` bij `.hero-parallax` en `.hero-secondary`.
- Teksten: wijzig secties in `index.html` (hero, Over mij, Projecten, Contact).
- Projecten: voeg cards toe in de `#projects`-sectie. Je kunt tag-icoontjes of afbeeldingen toevoegen.
- Navigatie: links in de navbar verwijzen naar anchors per sectie.

## Contactformulier
Standaard opent het formulier je mailprogramma met een ingevulde subject en body (mailto). Wil je een echte backend:
- Gebruik Formspree/Netlify/EmailJS of je eigen endpoint en vervang de submit-handler in `script.js`.

## SEO en Social
- Pas de `<title>`, `meta description`, Open Graph en Twitter-tags in `<head>` aan.
- Vul de JSON-LD (`Person`) in met je echte URL’s en accounts.

## Toegankelijkheid
- Focus-ringen zijn zichtbaar met `:focus-visible`.
- Contrast is afgestemd op zwart; check je gekozen blauw met een contrast checker.
- Animaties worden beperkt bij `prefers-reduced-motion`.

## Performance
- Mobiel: parallax via CSS wordt uitgeschakeld (beter voor iOS en batterij).
- Afbeeldingen: vervang door gecomprimeerde WebP/AVIF waar mogelijk.

## Deploy-tip
- Zet deze map online met GitHub Pages, Netlify of Vercel. Gebruik de canonical/OG-URL in `index.html`.

---
Gemaakt als startpunt. Wil je extra’s (casestudy-sjabloon, thema-schakelaar, of CMS-koppeling)? Laat het weten.
