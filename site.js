const $ = (s) => document.querySelector(s);
const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = (list) => `<ul class="tags">${(list || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;
const imgPath = (p, f) => `images/${p.slug}/${f}`;

const grid = $("#projects");
if (grid) {
  grid.innerHTML = PROJECTS.length ? PROJECTS.map((p) => {
    const cover = p.cover || (p.charts && p.charts[0] && p.charts[0].file);
    return `<a class="project-card" href="project.html?p=${encodeURIComponent(p.slug)}">
      ${cover ? `<img src="${imgPath(p, cover)}" alt="" loading="lazy">` : ""}
      <div class="card-body"><h3>${esc(p.title)}</h3><p>${esc(p.blurb)}</p>${tags(p.tags)}</div></a>`;
  }).join("") : "<p>Projects are on the way.</p>";
  $("#count").textContent = PROJECTS.length;
  $("#latest").textContent = PROJECTS.length ? PROJECTS[0].title : "None yet";
}

const page = $("#project");
if (page) {
  const slug = new URLSearchParams(location.search).get("p");
  const p = PROJECTS.find((x) => x.slug === slug);
  if (!p) {
    page.innerHTML = `<section><div class="wrap"><h1 class="page-title">Project not found</h1><a class="back" href="index.html#projects-section">Back to all projects</a></div></section>`;
  } else {
    document.title = `${p.title} | Eugene Dzramado`;
    const links = (p.links || []).map((l, i) => `<a class="btn ${i ? "btn-outline" : "btn-primary"}" href="${esc(l.url)}">${esc(l.label)}</a>`).join("");
    const stats = p.stats && p.stats.length ? `<div class="boxscore"><h2>Key numbers</h2><table><tbody>${p.stats.map((s) => `<tr><th scope="row">${esc(s[0])}</th><td>${esc(s[1])}</td></tr>`).join("")}</tbody></table></div>` : "";
    const charts = (p.charts || []).map((c) => `<figure class="chart"><a href="${imgPath(p, c.file)}"><img src="${imgPath(p, c.file)}" alt="${esc(c.alt)}"></a><p>${esc(c.caption)}</p></figure>`).join("");
    page.innerHTML = `<section class="band"><div class="wrap">
      <a class="back" href="index.html#projects-section">Back to all projects</a>
      <h1 class="page-title">${esc(p.title)}</h1>
      ${(p.summary || []).map((t) => `<p class="lede">${esc(t)}</p>`).join("")}
      ${tags(p.tags)}<div class="actions">${links}</div></div></section>
      <section><div class="wrap">${stats}<div class="charts">${charts}</div></div></section>`;
  }
}
