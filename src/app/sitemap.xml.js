export async function GET() {
    const pages = ["", "about", "services", "contact"];
    const urls = pages.map(
      (page) => `<url><loc>http://localhost:3000/${page}</loc></url>`
    );
  
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls.join("\n")}
      </urlset>`,
      { headers: { "Content-Type": "application/xml" } }
    );
  }
  