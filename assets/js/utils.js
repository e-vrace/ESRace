function sanitizeURL(url) {
  try {
    const u = new URL(url);
    if (u.protocol === "http:" || u.protocol === "https:") {
      return u.href;
    }
  } catch {}
  return "";
}
