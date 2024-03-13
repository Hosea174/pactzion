export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
export function formatExportItems(items, categoryFilter = "all") {
  const filteredItems = items.reduce((acc, item) => {
    const { category } = item.frontmatter;
    if (category === categoryFilter || categoryFilter === "all") {
      acc.push(item);
    }
    return acc;
  }, []);

  return filteredItems.length > 0 ? filteredItems : null;
}
